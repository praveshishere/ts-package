
const url = "https://dyncdn.exampathfinder.net/alertjsons/events/h/2023-163-6.json?v=1";

import { ofetch, } from "ofetch";

async function makeRequest() {
  const controller = new AbortController();

  ofetch.native(url, { signal: controller.signal }).then(async (res) => {
    // console.log("response found", res);
    res.json().then((data: any) => {
      console.log("Data Parsed", data);
    }).catch((err: Error) => {
      console.log("Failed to parse", err);
    })
  }).catch((err: Error) => {
    console.log("request failed", err);
  });

}

export { makeRequest };
