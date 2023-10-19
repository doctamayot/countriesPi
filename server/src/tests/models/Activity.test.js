const { Activity } = require("../../db");
const { conn } = require("../../db");
describe("Activity Model", () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  afterAll(async () => {
    await conn.close();
  });

  it("should create an activity with valid data", async () => {
    const validActivity = {
      name: "Hiking",
      season: "Summer",
      dificulty: 3,
      duration: 120,
      perros: 212,
    };

    const activity = await Activity.create(validActivity);

    expect(activity.name).toBe("Hiking");
    expect(activity.season).toBe("Summer");
    expect(activity.dificulty).toBe(3);
    expect(activity.duration).toBe(120);
  });

  it("should throw a validation error if name is not provided", async () => {
    expect.assertions(1);
    try {
      await Activity.create({
        name: null,
        season: "Verano",
        dificulty: 5,
        duration: 20,
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
