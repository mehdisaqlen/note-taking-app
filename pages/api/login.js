/**
 * @param {import('next').NextApiResponse} req
 * @param {import('next').NextApiRequest} res
 */

import jwt from "jsonwebtoken";
import DatabaseConnect from "@/lib/DatabaseConnect";
import User from "/models/User";

export default async function login(req, res) {
  await DatabaseConnect();
  if (req.method === "POST") {
    const { email, password } = req.body;
    let existingUser = await User.findOne({ email, password });

    if (existingUser) {
      const token = jwt.sign(
        {
          email: existingUser.email,
          name: existingUser.name,
        },
        process.env.JWT_SECRET
      );
      res.json({ success: true, msg: "Logged in!", token });
    } else if (!existingUser) {
      res.json({ success: false, msg: "User not found!" });
    }
  } else {
    res.status(400).json({ msg: `${req.method} is not allowed` });
  }
}
