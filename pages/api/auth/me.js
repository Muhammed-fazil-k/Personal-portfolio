import axios from "axios";
import cookie from "cookie";

export default async function handler(req, res) {
  let userCookie = req.headers.cookie;
  if (!userCookie) {
    res.status(401).json({ message: "User not loggedIn" });
  } else {
    const { UserJwt: userJwt } = cookie.parse(userCookie);
    if (userJwt) {
      try {
        const meUser = await axios.get("http://localhost:1337/api/users/me", {
          headers: {
            Authorization: `Bearer ${userJwt}`,
          },
        });
        if (meUser.statusText === "OK") {
          console.log("Me user data: ", meUser.data);
          res.status(200).json({ user: meUser.data });
        } else {
          res.status(401).json({ message: "User not validated - 1" });
        }
      } catch (e) {
        console.error("Error in fetching user data", e.response.data.error.message);
        res.status(500).json({ message: "Error fetching user data" });
      }
    } else {
      res.status(401).json({ message: "User not validated - 2" });
    }
  }
}
