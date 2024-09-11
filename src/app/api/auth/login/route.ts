// src/api/auth/login/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import path from "path";
import fs from "fs";

// 確保你將這個密鑰設置為更安全的值
const JWT_SECRET = process.env.JWT_SECRET as string;
console.log("JWT_SECRET:", JWT_SECRET); // Debug log

// 讀取 auth.json 文件
//const authFilePath = path.resolve("data", "auth.json");
const authFilePath = path.resolve(process.cwd(), "src", "data", "auth.json");

let users: { email: string; password: string }[] = [];
//const users = JSON.parse(fs.readFileSync(authFilePath, "utf-8"));
try {
  const fileContent = fs.readFileSync(authFilePath, "utf-8");
  users = JSON.parse(fileContent);
  
} catch (error) {
  console.error("Error reading auth.json:", error);
}

export async function POST(request: NextRequest) {
  try {
  const { email, password } = await request.json();
  
  //console.log("Received credentials:", { email, password }); // Debug log
  
  // 檢查用戶信息
  const user = users.find(
    (user: { email: string; password: string }) =>
      user.email === email && user.password === password,
  );

  console.log("Found user:", user); // Debug log

  // 在這裡進行用戶認證，這只是示範
  if (user) {
    // 生成 JWT
    const token = jwt.sign(
      { email }, // Payload
      JWT_SECRET, // Secret key
      { expiresIn: "1h" }, // Token 有效期
    );
    return NextResponse.json({ token }, { status: 200 });
  } else {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );
  }
} catch (error) {
  console.error("Error in login route:", error);
  return NextResponse.json(
    { message: "Server error" },
    { status: 500 }
  );
}
}
