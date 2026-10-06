// BandoAlert Italia - Opportunities API

export async function getOpportunities(env) {
  const result = await env.DB.prepare(
    'SELECT * FROM opportunities ORDER BY created_at DESC LIMIT 50'
  ).all();

  return result.results || [];
}

export async function saveOpportunity(env, opportunity) {
  await env.DB.prepare(
    `INSERT INTO opportunities (title, category, description, deadline)
     VALUES (?, ?, ?, ?)`
  )
    .bind(
      opportunity.title,
      opportunity.category,
      opportunity.description,
      opportunity.deadline
    )
    .run();

  return { success: true };
}
