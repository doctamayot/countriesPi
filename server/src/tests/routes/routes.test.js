const request = require("supertest");
const app = require("../../server");

const PORT = 3001;

describe("Routes", () => {
  it("Should be a list of activities", async () => {
    const response = await request(app).get("/countries");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body).toBeInstanceOf(Object);
  });

  it("Should retrieve an existing country by ID.", async () => {
    const idPais = "COL";
    const response = await request(app).get(`/countries/${idPais}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body).toBeInstanceOf(Object);
  });

  it("Should create an activity without errors", async () => {
    const actividad = {
      name: "Cantar7",
      season: "123",
      dificulty: 1,
      duration: 2,
      countries: ["KEN", "COL"],
    };
    const response = await request(app).post("/activities").send(actividad);
    expect(response.body).toHaveProperty("name");
  });
});
