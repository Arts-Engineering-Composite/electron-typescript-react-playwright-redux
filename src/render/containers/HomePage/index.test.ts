import { setUp } from "../../../testHelper";

const app = setUp();
jest.setTimeout(30000); // increase to 50000 on low spec laptop
describe("index page tests", () => {
  beforeAll(async () => {
    await app.start().then(() => {
      return app.client.waitUntilWindowLoaded();
    });
  });

  afterAll(async () => {
    if (app && app.isRunning()) {
      await app.stop();
    }
  });

  it("shows an initial window", async () => {
    expect(await app.client.getWindowCount()).toBe(1);
  });
});
