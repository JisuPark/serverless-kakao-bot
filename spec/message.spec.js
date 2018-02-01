"use strict";
import * as handler from "../api/message";

describe("message", () => {
  test("should return callback", async () => {
    const corsHeader = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true
    };

    const desiredResponse = {
      message: {
        text: "답변"
      }
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
