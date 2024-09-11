// src/api/auth/logout/route.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  // 如果需要，這裡可以進行一些伺服器端的登出處理，例如通知服務器登出用戶（如果有用戶管理系統）
  // 在這個簡單的示例中，登出只需在前端清除 JWT

  return NextResponse.json({ message: "Logged out successfully" });
}
