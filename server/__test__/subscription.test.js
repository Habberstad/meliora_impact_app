import mongoose from "mongoose";
import { initServer } from "../server.js";
import supertest from "supertest";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import subscriptionModel from "../models/subscriptionModel.js";

dotenv.config();
import subscription from "../models/subscriptionModel.js";
import { ObjectId } from "mongodb";
import Subscription from "../models/subscriptionModel.js";


beforeAll(async () => {
  await mongoose.connect(
    process.env.MONGODB_URL_TEST_DB,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to Test DB");
    }
  );

});

afterAll(async () => {
  await mongoose.disconnect();
});

beforeEach(async () => {
  await Subscription.deleteMany();

});

afterEach(async () => {
  await Subscription.deleteMany();
});

const app = initServer();

// find all
describe("get all subscription route", () => {
  describe("Given the subscriptions exist", () => {
    it("should return a 200 and the subscriptions", async () => {
      const id1 = new ObjectId().toString();
      const npo_id1 = new ObjectId().toString();
      const sub1 = new Subscription({
        _id: id1,
        name: "name1",
        user_id: "1111",
        npo_id: npo_id1,
        payment_amount: 1000,
        payment_frequency: "1"
      });
      await sub1.save();

      const id2 = new ObjectId().toString();
      const npo_id2 = new ObjectId().toString();
      const sub2 = new Subscription({
        _id: id2,
        name: "name2",
        user_id: "3333",
        npo_id: npo_id2,
        payment_amount: 2500,
        payment_frequency: "2"
      });
      await sub2.save();

      const id3 = new ObjectId().toString();
      const npo_id3 = new ObjectId().toString();
      const sub3 = new Subscription({
        _id: id3,
        name: "name3",
        user_id: "5555",
        npo_id: npo_id3,
        payment_amount: 1000,
        payment_frequency: "2"
      });
      await sub3.save();

      const res = await supertest(app).get("/api/subscription");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(3);

      expect(res.body[0]._id).toBe(id1);
      expect(res.body[0].name).toBe("name1");
      expect(res.body[0].user_id).toBe("1111");
      expect(res.body[0].npo_id).toBe(npo_id1);
      expect(res.body[0].payment_amount).toBe(1000);
      expect(res.body[0].payment_frequency).toBe(1);

      expect(res.body[1]._id).toBe(id2);
      expect(res.body[1].name).toBe("name2");
      expect(res.body[1].user_id).toBe("3333");
      expect(res.body[1].npo_id).toBe(npo_id2);
      expect(res.body[1].payment_amount).toBe(2500);
      expect(res.body[1].payment_frequency).toBe(2);

      expect(res.body[2]._id).toBe(id3);
      expect(res.body[2].name).toBe("name3");
      expect(res.body[2].user_id).toBe("5555");
      expect(res.body[2].npo_id).toBe(npo_id3);
      expect(res.body[2].payment_amount).toBe(1000);
      expect(res.body[2].payment_frequency).toBe(2);
    });
  });
});
// find with query param
describe("get all subscription route with query param", () => {
  describe("Given the subscriptions exist", () => {
    it("should return a 200 and an array with matching subscription ", async () => {
      const id1 = new ObjectId().toString();
      const npo_id1 = new ObjectId().toString();
      const sub1 = new Subscription({
        _id: id1,
        name: "name1",
        user_id: "1111",
        npo_id: npo_id1,
        payment_amount: 1000,
        payment_frequency: "1"
      });
      await sub1.save();

      const id2 = new ObjectId().toString();
      const npo_id2 = new ObjectId().toString();
      const sub2 = new Subscription({
        _id: id2,
        name: "name2",
        user_id: "3333",
        npo_id: npo_id2,
        payment_amount: 2500,
        payment_frequency: "2"
      });
      await sub2.save();

      const id3 = new ObjectId().toString();
      const npo_id3 = new ObjectId().toString();
      const sub3 = new Subscription({
        _id: id3,
        name: "name3",
        user_id: "5555",
        npo_id: npo_id3,
        payment_amount: 1000,
        payment_frequency: "2"
      });
      await sub3.save();

      const res = await supertest(app).get("/api/subscription?payment_frequency=2");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(2);
      expect(res.body[0]._id).toBe(id2);
      expect(res.body[0].name).toBe("name2");
      expect(res.body[0].npo_id).toBe(npo_id);
    });
  });
});

// get by id
describe("get by id subscription route", () => {
  describe("Given the subscriptions exist", () => {
    it("should return a 200 and return only matching subscription", async () => {
      const id1 = new ObjectId().toString();
      const npo_id1 = new ObjectId().toString();
      const sub1 = new Subscription({
        _id: id1,
        name: "name1",
        user_id: "1111",
        npo_id: npo_id1,
        payment_amount: 1000,
        payment_frequency: "1"
      });
      await sub1.save();

      const id2 = new ObjectId().toString();
      const npo_id2 = new ObjectId().toString();
      const sub2 = new Subscription({
        _id: id2,
        name: "name2",
        user_id: "3333",
        npo_id: npo_id2,
        payment_amount: 2500,
        payment_frequency: "2"
      });
      await sub2.save();

      const id3 = new ObjectId().toString();
      const npo_id3 = new ObjectId().toString();
      const sub3 = new Subscription({
        _id: id3,
        name: "name3",
        user_id: "5555",
        npo_id: npo_id3,
        payment_amount: 1000,
        payment_frequency: "2"
      });
      await sub3.save();

      const res = await supertest(app).get("/api/subscription/" + id2);
      expect(res.statusCode).toBe(200);
      expect(res.body._id).toBe(id2);
      expect(res.body.name).toBe("name2");
      expect(res.body.npo_id).toBe("4444");
    });
  });
});


// get by id with no match
describe("get by id subscription route", () => {
  describe("When the id do not match an subscription", () => {
    it("should return status 400", async () => {
      const id1 = new ObjectId().toString();
      const npo_id1 = new ObjectId().toString();
      const sub1 = new Subscription({
        _id: id1,
        name: "name1",
        user_id: "1111",
        npo_id: npo_id1,
        payment_amount: 1000,
        payment_frequency: "1"
      });
      await sub1.save();

      const res = await supertest(app).get("/api/subscription/nonMatchingId");
      expect(res.statusCode).toBe(400);
    });
  });
});

describe("post subscription route", () => {
  describe("When creating a new entry to db", () => {
    it("should return status 201, and can be retrieved with get", async () => {
      const id1 = new ObjectId().toString();
      const query = { name: "subscription1", category: "water", _id: id1 };
      const res = await supertest(app).post("/api/subscription").send(query);
      expect(res.statusCode).toBe(201);

      const res2 = await supertest(app).get("/api/subscription/" + id1);
      expect(res2.statusCode).toBe(200);
      expect(res2.body._id).toBe(id1);
      expect(res2.body.name).toBe("subscription1");
      expect(res2.body.category).toBe("water");
    });
  });
});