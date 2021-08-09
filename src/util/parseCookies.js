// import cookie from "cookie";

// export function parseCookies(req, document) {
//   console.log(`req:`, req);
//   console.log(`document:`, document);
// console.log(`req.headers.cookie`, req.headers.cookie);
//   return cookie.parse(req ? req.headers.cookie || "" : document.cookie);
// }

import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

export default function parseCookies() {
  const token = Cookies.get("token");
  const decodedToken = token ? jwtDecode(token) : null;

  return { token, decodedToken };
}
