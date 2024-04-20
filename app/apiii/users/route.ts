import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  console.log(req);
  //DB나 서드파티로의 요청 후 그에 대한 응답을 담을 수도 있음.
  return Response.json({
    ok: true,
    data: "데이터다",
  });
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(req);
  console.log(data);
  //DB나 서드파티로의 요청 후 그에 대한 응답을 담을 수도 있음.
  return Response.json(data);
}
