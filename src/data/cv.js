// Alle Inhalte aus dem Lebenslauf – zentral, damit Komponenten rein darstellend bleiben.

export const profile = {
  name: 'Jessica Frieden',
  title: 'Digital Solutions & ICT Specialist',
  subtitle: 'Application Management & User Experience',
  email: 'frieden.jessica@gmail.com',
  phone: '+41 78 693 19 30',
  phoneHref: '+41786931930',
  location: '5405 Dättwil AG',
  cvUrl: '/Jessica_Frieden_CV.pdf',
  about:
    'Digital- und ICT-Spezialistin mit über sechs Jahren Erfahrung in Enterprise IT, Healthcare IT und der Betreuung digitaler Anwendungen. Berufliche Entwicklung vom kunden- und gesundheitsnahen Umfeld über branchenspezifische Softwarelösungen bis zur Betreuung einer komplexen Enterprise-IT-Landschaft bei Swissgrid. Breite Praxiserfahrung von Identity & Access Management über Cybersecurity bis hin zu QA-Testing. Ich verbinde technische Analyse mit verständlicher Kommunikation und ausgeprägter Nutzerorientierung.',
  facts: [
    { value: '6+', label: 'Jahre Erfahrung' },
    { value: '3', label: 'Branchen & Rollen' },
    { value: '24/7', label: 'Notfalldienst' },
  ],
  competencies: [
    'Digital Solutions & Applications',
    'IT Service Management',
    'Technical User Enablement',
    'Cybersecurity & Information Security',
    'Process & Service Improvement',
    'Healthcare IT & Customer Experience',
    'Project & Rollout Coordination',
  ],
};

export const experience = [
  {
    period: '10.2024 – heute',
    company: 'Swissgrid AG',
    place: 'Aarau AG',
    role: 'ICT-Supporterin',
    current: true,
    summary:
      'Betreuung der Enterprise-IT: Cybersecurity, IAM, Endpoint-/Mobile-Device-Lifecycle (SCCM, Intune), technisches Onboarding, Migrationen & Rollouts.',
    highlights: [
      'Analyse und Lösung von Störungen und Service Requests im Workplace- und Applikationsumfeld',
      'Cybersecurity & Informationssicherheit: Security Awareness und interne Koordination',
      'Administration von Identitäten und Berechtigungen (IAM)',
      'Technisches Onboarding interner und externer Mitarbeitender',
    ],
    tags: ['Intune', 'SCCM', 'Entra ID', 'IAM', 'Cybersecurity'],
  },
  {
    period: '08.2020 – 09.2024',
    company: 'ProPharma Systems AG',
    place: 'Wettingen AG',
    role: 'Informatik-Supporterin',
    summary:
      'Healthcare-IT-Support für Apotheken und Drogerien, Projektmitarbeit bei neuen IT-Systemen, QA-Testing vor Rollouts, Schulung von Kunden und Mitarbeitenden, 24/7-Notfalldienst.',
    highlights: [
      'Leitung und Mitarbeit bei der Einführung neuer IT-Systeme und digitaler Tools',
      'Funktionstests zur Qualitätssicherung vor Rollouts',
      'Schulungen sowie Benutzer-, Prozess- und Supportdokumentation',
      'Einarbeitung neuer Mitarbeitender',
    ],
    tags: ['Healthcare IT', 'QA-Testing', 'Schulung', 'Rollouts'],
  },
  {
    period: '09.2019 – 07.2020',
    company: 'TopPharm Apotheke und Drogerie',
    place: 'Buchs AG',
    role: 'Drogistin EFZ',
    summary: 'Beratung, Produktmanagement und Tages-Teamführung im Apotheken- und Gesundheitsumfeld.',
    highlights: [
      'Beratung und Betreuung von Kundinnen und Kunden',
      'Sortimentspflege, Beschaffung und Produktpräsentation',
      'Operative Verantwortung als Tages-Teamführerin',
    ],
    tags: ['Beratung', 'Produktmanagement', 'Teamführung'],
  },
];

export const skillGroups = [
  {
    id: 'security',
    title: 'Security & Identity',
    icon: 'shield',
    note: 'Identitäten, Zugriffe und Informationssicherheit im Enterprise-Umfeld.',
    skills: ['GRC', 'Active Directory', 'Microsoft Entra ID', 'DirX', 'Nexis', 'Information Security Risk Management'],
  },
  {
    id: 'workplace',
    title: 'Workplace & Endpoint',
    icon: 'laptop',
    note: 'Moderner Arbeitsplatz: Geräte, Software und Kollaboration.',
    skills: ['Microsoft 365', 'Intune', 'SCCM', 'Exchange', 'Teams', 'Citrix'],
  },
  {
    id: 'platforms',
    title: 'Service Platforms',
    icon: 'layers',
    note: 'Geschäfts- und Service-Plattformen für Anwendende und Kunden.',
    skills: ['SAP', 'Salesforce', 'Serviceware', 'SP-Manager', 'Helpline'],
  },
  {
    id: 'itsm',
    title: 'ITSM',
    icon: 'workflow',
    note: 'Strukturierte, ITIL-basierte Servicequalität.',
    skills: ['ITIL', 'Incident Management', 'Problem Management', 'Change Management'],
  },
];

export const education = [
  {
    period: '2015 – 2019',
    school: 'Allgemeine Berufsschule Zürich',
    degree: 'Drogistin EFZ',
    text: 'Berufliche Grundausbildung mit fundiertem Wissen im Gesundheits-, Arzneimittel-, Beratungs- und Kundenumfeld.',
  },
];

export const training = [
  { period: '2025 – 2026', title: 'Cybersecurity & Information Security', detail: 'Cyber Security Basic Training · Information Security Risk Management · Schwachstellenmanagement' },
  { period: '2024 – 2025', title: 'ITIL & IT Service Management', detail: 'Incident-, Problem-, Change- und Access Management · Serviceware Processes' },
  { period: '2024', title: 'Microsoft 365 & Digital Workplace', detail: 'M365@Swissgrid' },
];

export const languages = [
  { name: 'Deutsch', level: 'Muttersprache' },
  { name: 'Englisch', level: 'Fliessend' },
];

export const sections = [
  { id: 'start', label: 'Start', icon: 'home' },
  { id: 'profil', label: 'Profil', icon: 'user' },
  { id: 'werdegang', label: 'Werdegang', icon: 'briefcase' },
  { id: 'skills', label: 'Skills', icon: 'sparkles' },
  { id: 'ausbildung', label: 'Ausbildung', icon: 'graduation' },
];
