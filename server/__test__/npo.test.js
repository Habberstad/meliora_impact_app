import mongoose from "mongoose";
import { initServer } from "../server.js";
import supertest from "supertest";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();


beforeAll(async () => {
  await mongoose.connect(
    process.env.MONGODB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );
});

afterAll(async () => {
  await mongoose.disconnect();
});

const app = initServer();

describe('get npo route', () => {
  describe('given the npo exists', () => {
    it('should return a 200 and the product', async() => {
      const res = await supertest(app).get(`/api/npo/62986c8b25a7823284b2d236`);
      expect(res.statusCode).toBe(200);
    })
  });

})