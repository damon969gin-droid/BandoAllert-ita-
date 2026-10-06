export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/bandi') {
      const { results } = await env.DB.prepare(
        'SELECT * FROM bandi ORDER BY created_at DESC LIMIT 50'
      ).all();

      return Response.json(results);
    }

    return new Response('BandoAlert API online');
  }
};
