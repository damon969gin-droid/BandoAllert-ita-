export async function registerUser(request, env) {
  const body = await request.json();

  const { email, nome, regione } = body;

  await env.DB.prepare(
    "INSERT INTO users (email, nome, regione, piano) VALUES (?, ?, ?, ?)"
  )
  .bind(email, nome, regione, "free")
  .run();

  return Response.json({
    success: true,
    message: "Utente registrato con piano gratuito"
  });
}
