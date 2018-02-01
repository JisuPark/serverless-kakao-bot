"use strict";
import * as handler from "../api/keyboard";

describe("keyboard", () => {
  test("should return callback", async () => {
    const corsHeader = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    };
    const desiredResponse = {
      type: "buttons",
      buttons: ["도움말"]
    };

    const callback = (error, response) => {
      expect(response.statusCode).toEqual(200);
      expect(response.headers).toMatchObject(corsHeader);
      expect(typeof response.body).toBe("string");
      expect(response.body).toBe(JSON.stringify(desiredResponse));
    };

    await handler.main({}, {}, callback);
  });
});
