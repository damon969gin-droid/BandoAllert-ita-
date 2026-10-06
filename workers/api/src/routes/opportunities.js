export async function handleOpportunities(request, env) {
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  const region = url.searchParams.get('region');

  let query = 'SELECT * FROM opportunities WHERE 1=1';
  const params = [];

  if (category) {
    query += ' AND category = ?';
    params.push(category);
  }

  if (region) {
    query += ' AND region = ?';
    params.push(region);
  }

  query += ' ORDER BY deadline ASC';

  const result = await env.DB.prepare(query).bind(...params).all();

  return Response.json({
    opportunities: result.results || []
  });
}

export async function saveOpportunity(request, env) {
  const body = await request.json();

  await env.DB.prepare(
    `INSERT INTO saved_opportunities (user_id, opportunity_id)
     VALUES (?, ?)`
  )
    .bind(body.userId, body.opportunityId)
    .run();

  return Response.json({ success: true });
}
