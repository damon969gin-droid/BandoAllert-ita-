export function checkPremium(user) {
  if (!user) {
    return {
      allowed: false,
      message: "Accesso richiesto"
    };
  }

  if (user.plan === "premium") {
    return {
      allowed: true,
      features: [
        "IA spiegazione bandi",
        "Alert automatici",
        "Calendario scadenze",
        "Opportunità illimitate"
      ]
    };
  }

  return {
    allowed: false,
    message: "Attiva Premium per sbloccare questa funzione"
  };
}
