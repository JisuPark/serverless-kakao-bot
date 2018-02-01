"use strict";
import { success, failure } from "./helper/response";

export function main(event, context, callback) {
  const body = {
    message: {
      text: "답변"
    }
  };

  return callback(null, success(body));
}
