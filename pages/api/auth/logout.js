import axios from "axios";
import { serialize } from "cookie";

export default async function handler(req, res) {
  //invalidate user cookie
  const cookieData = serialize("UserJwt", '', {
    expires: new Date(),
    httpOnly: true,
    path: "/",
    sameSite: "strict",
  });
  res.setHeader("Set-Cookie", cookieData);
  res.status(200).json({ message: 'Logout success' });
}
