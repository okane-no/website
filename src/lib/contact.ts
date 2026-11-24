// Every lead reaches us as an email to this address. The mailto links carry a subject and a few
// prompts in the body, so the reader knows what to write.
export const EMAIL = 'hei@okane.no';

export function mailto(subject: string, prompts: string[] = []) {
  const params = [`subject=${encodeURIComponent(subject)}`];
  if (prompts.length) params.push(`body=${encodeURIComponent(prompts.join('\r\n') + '\r\n')}`);
  return `mailto:${EMAIL}?${params.join('&')}`;
}

// The prompts for each kind of request
export const prompts = {
  project: ['Hva vil dere bygge?', 'Når trenger dere det?', 'Omtrentlig budsjett (valgfritt):'],
  commerce: ['Hva selger dere, og hvor (nett, butikk eller begge)?', 'Hvilken plattform bruker dere i dag?', 'Når passer det med 20 minutter på video?'],
  mailroom: ['Hvor kommer posten fra i dag (Altinn, EHF, e-post)?', 'Hvor mange selskaper tar dere imot post for?', 'Når passer det med en demo?'],
  bragePilot: ['Hvilke skjema sender dere inn i dag?', 'Hvor ligger dokumentene (SharePoint, filområde)?', 'Hvor mange selskaper?'],
  brageQa: ['Hvor ligger dokumentene (SharePoint, filområde)?', 'Hvor skal språkmodellen kjøre (egne servere, egen sky, OpenAI)?', 'Omtrent hvor mange skal bruke Brage?'],
  brageDemo:['Hvilke skjema sender dere inn i dag?', 'Når passer det med en demo?'],
  altinn: ['Hva vil dere hente fra eller sende til Altinn?', 'Hvilke systemer skal det kobles til?', 'Når trenger dere det?'],
};
