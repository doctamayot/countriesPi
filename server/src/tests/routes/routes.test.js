const request = require("supertest");
const app = require("../../server");

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
});
