import { NextResponse } from "next/server";

export async function POST (request: Request, response: Response) {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    console.log(firstName, lastName, email, message);

    const ret = await fetch("https://bitexchange.co.id/api-exchange/sendLark", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `first_name=${firstName}&last_name=${lastName}&email=${email}&message=${message}`
    });

    console.log('ret', ret);

    return Response.json(ret)


}
