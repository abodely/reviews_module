import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 100,
  duration: "3m"
};

// ${Math.ceil(Math.random()*1000000)}

export default function() {
  let res = http.get(`http://localhost:3002/abodes/${Math.ceil(Math.random()*3333330)}/reviews`);
  // check(res, {
  //   "status was 200": (r) => r.status == 200,
  //   "transaction time OK": (r) => r.timings.duration < 200
  // });
  // sleep(.01);
};