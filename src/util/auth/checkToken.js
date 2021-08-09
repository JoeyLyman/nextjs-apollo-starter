import jwtDecode from "jwt-decode";

export default function checkToken(token) {
  if (!token) {
    return false;
  } else {
    const decodedToken = jwtDecode(token);
    if (Date.now() <= decodedToken.exp * 1000) {
      return true;
    } else {
      return false;
    }
  }
}
