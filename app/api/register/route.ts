import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email e password richieste" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Registrazione pronta per D1",
      user: {
        email,
        plan: "FREE"
      }
    });

  } catch {
    return NextResponse.json(
      { error: "Errore server" },
      { status: 500 }
    );
  }
}
