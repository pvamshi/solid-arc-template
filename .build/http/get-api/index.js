"use strict";
require('source-map-support/register');
//# sourceMappingURL=index.js.map
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/http/get-api/index.ts
var get_api_exports = {};
__export(get_api_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(get_api_exports);
async function handler(req) {
  return {
    statusCode: 200,
    cors: true,
    headers: {
      "cache-control": "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
      "content-type": "text/json; charset=utf8"
    },
    body: JSON.stringify({ user: { name: "vamshi" } })
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
