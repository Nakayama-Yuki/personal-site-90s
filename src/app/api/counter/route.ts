import { NextRequest, NextResponse } from "next/server";
import { getCount, incrementCount } from "@/lib/db";

const COOKIE_NAME = "visited";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

export async function GET(request: NextRequest) {
  const hasVisited = request.cookies.has(COOKIE_NAME);

  const count = hasVisited ? getCount() : incrementCount();

  const response = NextResponse.json({ count });

  if (!hasVisited) {
    response.cookies.set(COOKIE_NAME, "1", {
      maxAge: COOKIE_MAX_AGE,
      httpOnly: true,
      sameSite: "lax",
    });
  }

  return response;
}
