export async function getOpportunities(filters = {}) {
  const params = new URLSearchParams(filters as Record<string, string>);

  const response = await fetch(`/api/opportunities?${params.toString()}`);

  if (!response.ok) {
    throw new Error('Errore caricamento bandi');
  }

  return response.json();
}

export async function saveOpportunity(id: string) {
  const response = await fetch('/api/opportunities/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ opportunityId: id }),
  });

  if (!response.ok) {
    throw new Error('Errore salvataggio bando');
  }

  return response.json();
}
