import { NextResponse } from "next/server";
import connect from "@/utils/db";
import User from "@/../models/user";

export async function POST(request: Request) {
  await connect();

  try {
    const { name, email, telephone } = await request.json();
    const user = new User({ name, email, telephone });
    await user.save();
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating user", error },
      { status: 500 },
    );
  }
}
