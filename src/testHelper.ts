import electron from "electron";
import path from "path";
import { Application } from "spectron";

export const setUp = () => {
  // start application
  return new Application({
    // path to electron app
    args: [path.join(__dirname, "..", ".webpack", "main", "index.js")],
    // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
    path: "" + electron,
    startTimeout: 30000,
    waitTimeout: 30000,
  });
};
