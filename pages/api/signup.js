/** 
 * @param {import('next').NextApiResponse} req
 * @param {import('next').NextApiRequest} res
 
 */
import DatabaseConnect from "@/lib/DatabaseConnect";
import User from "/models/User";

export default async function signup(req, res) {
  await DatabaseConnect();
  if (req.method == "POST") {
    const { name, email, password } = req.body;
    let existingUser = await User.findOne({ email });

    if (!existingUser) {
      if (name === "" || email === "" || password === "") {
        res.json({ success: false, msg: "All fields are required!" });
      } else {
        let user = await new User({
          name,
          email,
          password,
        });

        await user.save();
        res.status(200).json({ success: true, msg: "Account created!" });
      }
    } else if (existingUser) {
      res.json({ success: false, msg: "Email is already taken" });
    }
  } else {
    res.status(400).json({ msg: `${req.method} is not allowed` });
  }
}
