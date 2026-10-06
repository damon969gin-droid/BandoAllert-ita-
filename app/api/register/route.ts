import type { D1Database } from "@cloudflare/workers-types";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getCloudflareContext } from "@opennextjs/cloudflare";

export const runtime = "edge";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email e password richieste" },
        { status: 400 }
      );
    }

    const { env } = getCloudflareContext() as {
      env: {
        bandoallert_db: D1Database;
      };
    };

    const existingUser = await env.bandoallert_db
      .prepare("SELECT id FROM users WHERE email = ?")
      .bind(email)
      .first();

    if (existingUser) {
      return NextResponse.json(
        { error: "Email già registrata" },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await env.bandoallert_db
      .prepare(
        "INSERT INTO users (email, password_hash, plan) VALUES (?, ?, ?)"
      )
      .bind(email, passwordHash, "FREE")
      .run();

    return NextResponse.json({
      success: true,
      message: "Account creato",
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
