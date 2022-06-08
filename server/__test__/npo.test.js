import mongoose from "mongoose";
import { initServer } from "../server.js";
import supertest from "supertest";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import NpoModel from "../models/npoModel.js";

dotenv.config();
import Npo from "../models/npoModel.js";
import { ObjectId } from "mongodb";


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
  await Npo.deleteMany();
});

afterEach(async () => {
  await Npo.deleteMany();
});

const app = initServer();

// find all
describe("get all npo route", () => {
  describe("Given the NPOs exist", () => {
    it("should return a 200 and the NPOs", async () => {
      const id1 = new ObjectId().toString();
      const npo1 = new Npo({ name: "npo1", category: "water", _id: id1 });
      await npo1.save();

      const id2 = new ObjectId().toString();
      const npo2 = new Npo({ name: "npo2", category: "knowledge", _id: id2 });
      await npo2.save();

      const id3 = new ObjectId().toString();
      const npo3 = new Npo({ name: "npo3", category: "water", _id: id3 });
      await npo3.save();

      const res = await supertest(app).get("/api/npo");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(3);

      expect(res.body[0]._id).toBe(id1);
      expect(res.body[0].name).toBe("npo1");
      expect(res.body[0].category).toBe("water");

      expect(res.body[1]._id).toBe(id2);
      expect(res.body[1].name).toBe("npo2");
      expect(res.body[1].category).toBe("knowledge");

      expect(res.body[2]._id).toBe(id3);
      expect(res.body[2].name).toBe("npo3");
      expect(res.body[2].category).toBe("water");


    });
  });
});
// find with query param
describe("get all npo route with query param", () => {
  describe("Given the NPOs exist", () => {
    it("should return a 200 and an array with matching NPO ", async () => {
      const id1 = new ObjectId().toString();
      const npo1 = new Npo({ name: "npo1", category: "water", _id: id1 });
      await npo1.save();

      const id2 = new ObjectId().toString();
      const npo2 = new Npo({ name: "npo2", category: "knowledge", _id: id2 });
      await npo2.save();

      const id3 = new ObjectId().toString();
      const npo3 = new Npo({ name: "npo3", category: "water", _id: id3 });
      await npo3.save();

      const res = await supertest(app).get("/api/npo?category=knowledge");
      expect(res.statusCode).toBe(200);
      expect(res.body.length).toBe(1);
      expect(res.body[0]._id).toBe(id2);
      expect(res.body[0].name).toBe("npo2");
      expect(res.body[0].category).toBe("knowledge");
    });
  });
});

// get by id
describe("get by id npo route", () => {
  describe("Given the NPOs exist", () => {
    it("should return a 200 and return only matching NPO", async () => {
      const id1 = new ObjectId().toString();
      const npo1 = new Npo({ name: "npo1", category: "water", _id: id1 });
      await npo1.save();

      const id2 = await new ObjectId().toString();
      const npo2 = new Npo({ name: "npo2", category: "knowledge", _id: id2 });
      await npo2.save();

      const id3 = new ObjectId().toString();
      const npo3 = new Npo({ name: "npo3", category: "water", _id: id3 });
      await npo3.save();

      const res = await supertest(app).get("/api/npo/" + id2);
      expect(res.statusCode).toBe(200);
      expect(res.body._id).toBe(id2);
      expect(res.body.name).toBe("npo2");
      expect(res.body.category).toBe("knowledge");
    });
  });
});


// get by id with no match
describe("get by id npo route", () => {
  describe("When the id do not match an NPO", () => {
    it("should return status 400", async () => {
      const id1 = new ObjectId().toString();
      const npo1 = new Npo({ name: "npo1", category: "water", _id: id1 });
      await npo1.save();

      const id2 = await new ObjectId().toString();
      const npo2 = new Npo({ name: "npo2", category: "knowledge", _id: id2 });
      await npo2.save();

      const id3 = new ObjectId().toString();
      const npo3 = new Npo({ name: "npo3", category: "water", _id: id3 });
      await npo3.save();

      const res = await supertest(app).get("/api/npo/nonMatchingId");
      expect(res.statusCode).toBe(400);
    });
  });
});

describe("post npo route", () => {
  describe("When creating a new entry to db", () => {
    it("should return status 201, and can be retrieved with get", async () => {
      const id1 = new ObjectId().toString();
      const query = { name: "npo1", category: "water", _id: id1 };
      const res = await supertest(app).post("/api/npo").send(query);
      expect(res.statusCode).toBe(201);

      const res2 = await supertest(app).get("/api/npo/" + id1);
      expect(res2.statusCode).toBe(200);
      expect(res2.body._id).toBe(id1);
      expect(res2.body.name).toBe("npo1");
      expect(res2.body.category).toBe("water");
    });
  });
});