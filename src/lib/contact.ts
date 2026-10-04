// Trocar pelos dados reais da clínica
export const phoneDisplay = "(00) 0000-0000";
export const phoneHref = "tel:+550000000000";

const whatsappNumber = "5500000000000";
const whatsappMessage = "Olá! Gostaria de agendar uma consulta.";
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const mapQuery = encodeURIComponent(
  "Igreja Matriz Nossa Senhora da Palma, Baturité - CE"
);
export const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

// Sem "origin", o Google Maps usa a localização atual da pessoa como ponto de partida
export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
