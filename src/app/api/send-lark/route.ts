import { NextResponse } from "next/server";

export async function POST (request: Request, response: Response) {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    fetch("https://bitexchange.co.id/api-exchange/sendLark", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `first_name=${firstName}&last_name=${lastName}&email=${email}&message=${message}`
    });

    const data = await response.json();

    return NextResponse.json(data);

}
