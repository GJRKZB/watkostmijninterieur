import { NextResponse } from "next/server";
import connect from "../../../../utils/db";
import Question from "../../../../models/question";

export const GET = async (request: string) => {
  try {
    await connect();
  } catch (error) {
    return new NextResponse("Error connecting to database" + error, {
      status: 500,
    });
  }
};
