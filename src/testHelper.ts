import path from "path";
import { _electron as electron } from "playwright";

export const setUp = async () => {
  return await electron.launch({
    args: [path.join(__dirname, "..", ".webpack", "main", "index.js")],
  });
};
