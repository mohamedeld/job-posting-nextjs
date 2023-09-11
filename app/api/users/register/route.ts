import connectToDB from "@/config/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/userModel";
import jwt from "jsonwebtoken";

connectToDB();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const user = await User.findOne({ email: reqBody.email });
    if (user) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(reqBody.password, 12);
    reqBody.password = hashedPassword;
    const newUser = await User.create(reqBody);
    const token = jwt.sign(
      { id: newUser._id, email: newUser.email }, // Payload data
      process.env.JWT_SECRET_KEY!, // Secret key
      { expiresIn: process.env.JWT_ENTIRES_AT } // Options: expiration date
    );
    const response = NextResponse.json({
      status: "success",
      message: "sign up successfully",
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 60 * 1000,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      { status: 500 }
    );
  }
}
