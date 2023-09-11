import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
export async function validateJWT(request: NextRequest) {
  try {
    const token = request.cookies.get("token")?.value;
    if (!token) {
      throw new Error("no token found");
    }
    const decodedData: any = jwt.verify(token, process.env.JWT_SECRET_KEY!);
    return decodedData.userId;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
