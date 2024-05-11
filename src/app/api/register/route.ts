import { User } from "@/app/models/User";
import mongoose from "mongoose";

export async function POST(req: Request) {
  const body = await req.json();
  await mongoose.connect(process.env.MONGO_URL as string);
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
