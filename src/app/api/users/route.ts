import { User } from "@/app/models/User";
import mongoose from "mongoose";

export async function GET(req: Request) {
  mongoose.connect(process.env.MONGO_URL as string);
  const users = await User.find();
  return Response.json(users);
}
