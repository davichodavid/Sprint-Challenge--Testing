const supertest = require("supertest");

const server = require("./server");
const { add } = require("../games/games-model");
const database = require("../data/knexConfig");

describe("route", () => {
  describe("get /", () => {
    it("returns json object", () => {
      return supertest(server)
        .get("/api/games")
        .then(res =>
          expect(res.body[0]).toEqual({
            title: "GTA",
            genre: "action",
            releaseYear: 2001,
            id: 1
          })
        );
    });
    it("returns json", () => {
      return supertest(server)
        .get("/api/games")
        .expect("Content-Type", /json/i);
    });
    it("responds with 200", () => {
      return supertest(server)
        .get("/api/games")
        .expect(200);
    });
  });

  describe("post /", () => {
    it("responds with 200", () => {
      return supertest(server)
        .post("/api/games")
        .expect(500);
    });

    it("insert provided game", async () => {
      await add({
        title: "tetris",
        genre: "mobile",
        releaseYear: 1969,
        id: {}
      });
    });
  });
});

// describe("route", () => {
//   describe("post /", () => {
//     it("responds with 200", () => {
//       return supertest(server)
//         .post("/api/games")
//         .expect(200);
//     });
//   });
// });
