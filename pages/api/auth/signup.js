import { hash } from "bcryptjs";
import prisma from "../../../lib/prisma";

async function handler(req, res) {
  // only accept POST requests
  if (req.method !== "POST") {
    res.status(405).json({ message: "Route invalid" });
    return;
  }
  else {
    // get username and password from request body
    const { username, password } = req.body;
    // validation
    if (!username || !password) {
      res.status(422).json({ message: "Missing username or password" });
      return;
    }
    // check if username already exists in database through Prisma
    const user = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (user) {
      res.status(422).json({ message: "Username already exists" });
      return;
    }
    // hash password and create record in the database
    const hashedPassword = await hash(password, 12);
    console.log(hashedPassword.length);
    const newUser = await prisma.user.create({
      data: {
        username: username,
        password: hashedPassword,
      },
    });
    // send response
    res.status(201).json({ message: "User created", user: newUser });
  }
}

export default handler;