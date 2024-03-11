import { validateContactFormData } from "@/utils/validation";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function POST(request: Request) {
  const contactFormData = await request.json();
  const errors = validateContactFormData(contactFormData);

  if (Object.keys(errors).length === 0) {
    await connectDB();
    const user = new User(contactFormData);
    await user.save();

    return NextResponse.json({
      message: `User saved successfully`,
    });
  } else {
    return NextResponse.json({ errors }, { status: 400 });
  }
}
