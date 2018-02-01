"use strict";
import { success, failure } from "./helper/response";

export function main(event, context, callback) {
  const body = {
    type: "buttons",
    buttons: ["도움말"]
  };

  const response = success(body);

  callback(null, response);
}
