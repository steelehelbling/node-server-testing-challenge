const supertest = require("supertest");

const server = require("./server");
const db = require("../config");

it("should user the testing environment", () => {
  expect(process.env.DB_ENV).toBe("testing");
});

describe("server.js", () => {
  beforeEach(async () => {
    await db("tableName").truncate();
  });

  describe("GET /", () => {
    it("should return 200 OK", () => {
      return supertest(server)
        .get("/users")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });

    it("should return api: up", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.body.api).toBe("up");
          expect(res.body).toEqual({ api: "up" });
        });
    });

    it("should return JSON", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.type).toMatch(/json/i);
        });
    });
  });

  describe("POST /users", () => {
    it("should save the user", () => {
      const name = "ron";

      return supertest(server)
        .post("/users")
        .send({ name })
        .then((res) => {
          expect(res.body.name).toBe(name);
        });
    });
  });

  describe("POST /users", () => {
    it("should add multiple users", async () => {
      const users = [{ name: "james" }, { name: "roll" }];
      await supertest(server).post("/users").send(users);
      let allusers = await supertest(server).get("/users");
      expect(allusers.body).toHaveLength(2);
      await supertest(server).post("/users").send({ name: "rock" });
      allusers = await supertest(server).get("/users");
      expect(allusers.body).toHaveLength(3);
    });

describe('DELETE /users/:id', () => {
    it('returns a 200 status code upon deletion', async () => {
        await supertest(server).delete('/users/1').then(res => {
            expect(res.status).toBe(200);
        });
    });
});

  });
});
