const { Country } = require("../../db");
const { conn } = require("../../db");

describe("Country Model", () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  afterAll(async () => {
    await conn.close();
  });
  it("should create a country with valid data", async () => {
    const country = await Country.create({
      id: "COL",
      name: "Colombia",
      img: "https://www.image.com",
      continents: ["America"],
      capital: ["Bogota"],
      subregion: "Sur",
      area: 1234546,
      poblacion: 50000000,
    });

    expect(country.id).toBeDefined();
    expect(country.name).toBe("Colombia");
    expect(country.capital).toEqual(["Bogota"]);
    expect(country.poblacion).toBe(50000000);
  });

  it("should not create a country with invalid data", async () => {
    expect.assertions(1);

    // Intentar crear una actividad con datos inválidos
    try {
      await Country.create({
        id: "KEN",
        name: null,
        img: "https://www.image.com",
        continents: ["America"],
        capital: ["Bogota"],
        subregion: "Sur",
        area: 12,
        poblacion: 50000000,
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
