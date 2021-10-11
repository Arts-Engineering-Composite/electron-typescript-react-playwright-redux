import { ElectronApplication } from "playwright";
import { setUp } from "../../../testHelper";

let app: ElectronApplication;
jest.setTimeout(30000); // increase to 50000 on low spec laptop
describe("index page tests", () => {
  beforeAll(async () => {
    app = await setUp();
  });

  afterAll(async () => {
    await app.close();
  });

  it("shows an initial window", async () => {
    const window = await app.firstWindow();

    const element = await window.$("#root", { strict: true });
    expect(element).toBeTruthy();
  });
});
