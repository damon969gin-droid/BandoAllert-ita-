export default function MyAlerts() {
  const alerts = [
    { title: 'Nuovo bando disponibile', status: 'Da controllare' },
    { title: 'Scadenza salvata', status: 'Promemoria attivo' },
  ];

  return (
    <section>
      <h2>I miei alert</h2>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.title}>
            <strong>{alert.title}</strong> - {alert.status}
          </li>
        ))}
      </ul>
    </section>
  );
}
