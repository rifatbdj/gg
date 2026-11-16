import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  return response;
}
