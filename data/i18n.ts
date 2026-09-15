import type { Project, Study } from './projects'

export type Lang = 'en' | 'fr' | 'de'

export const languageLabels: Record<Lang, string> = {
  en: 'EN',
  fr: 'FR',
  de: 'DE',
}

export const ui = {
  en: {
    nav: { projects: 'Projects', skills: 'Skills', about: 'About', cv: 'CV' },
    home: {
      eyebrow: 'Mechanical engineering · simulation · R&D',
      role: 'Mechanical Engineer — Numerical Simulation, Fluid Mechanics & Computational Engineering',
      intro: 'Arts et Métiers / KIT double-degree engineer focused on turning physical problems into verified numerical models. CFD, finite elements, thermomechanics, turbomachinery, mechanical design and scientific computing.',
      explore: 'Explore projects',
      featured: 'Featured simulation',
      featuredTitle: 'Coupled axial-compressor rotor–stator stage',
      strip: [
        ['Multiphase CFD', 'MultiMorph · gas morphology'],
        ['Turbomachinery', 'Rotor–stator · U magnitude'],
        ['Mechanical design', '135° V4 · dynamics & balancing'],
        ['External aerodynamics', 'Airfoil · separation & wake'],
      ],
      selectedEyebrow: 'Selected engineering work',
      selectedTitle: 'Engineering reasoning, not software badges.',
      selectedBody: 'Every flagship project is clickable and opens a dedicated technical case-study page. Supporting reports and calculation files are linked directly where available.',
      studiesEyebrow: 'Engineering studies',
      studiesTitle: 'Additional technical work',
      studiesBody: 'Shorter studies stay compact: enough to show the modelling choice and result without pretending every exercise is a research project.',
      profileEyebrow: 'Technical profile',
      profileTitle: 'Physics first. Software second.',
      profileGroups: [
        ['Fluid mechanics & CFD', 'OpenFOAM · RANS · k–ω SST · VOF · Euler–Euler · pressure losses · wall treatment'],
        ['Finite elements', 'ANSYS · Abaqus · Code_Aster · thermomechanics · structural mechanics · topology optimization'],
        ['Mechanical engineering', 'Design · dynamics · dimensioning · turbomachinery · tolerance / GPS fundamentals'],
        ['Scientific computing', 'Python · NumPy · pandas · SciPy · optimization · time-series modelling'],
      ],
      contactEyebrow: 'Contact',
      contactTitle: 'Simulation, R&D, calculation or computational engineering.',
      email: 'Email',
    },
    card: { open: 'Open technical case study ↗', project: 'Project', case: 'Open case study ↗' },
    project: {
      back: '← All projects',
      report: 'Open project report',
      video: 'Watch project video',
      visualConcept: 'Project presentation visual · conceptual ML schematic',
      visualActual: 'Project visualization · actual simulation output where available',
      figuresEyebrow: 'Selected figures',
      figuresTitle: 'Simulation views',
      figuresBody: 'The page uses project outputs rather than decorative renders. Each figure is selected because it supports a specific physical or numerical point.',
      context: 'Context',
      physics: 'Physics',
      results: 'Results',
      limitations: 'Limitations',
      learned: 'What I learned',
      fullPrompt: 'Want the full derivation, setup tables and figures?',
      fullBody: 'The portfolio page summarizes the engineering argument; the attached report or calculation workbook remains the detailed source when one exists.',
    },
    study: {
      back: '← Engineering studies',
      report: 'Open technical report PDF ↗',
      physics: 'Physics',
      representativeEquation: 'Representative equation',
      results: 'Results',
      resultsTitle: 'What the model shows',
      limits: 'Limits',
      limitsTitle: 'What it does not prove',
    },
    footer: 'Mechanical engineering · numerical simulation · computational engineering',
    about: {
      eyebrow: 'About',
      title: 'French-German mechanical engineer focused on modelling physical systems.',
      paragraphs: [
        'Trained at Arts et Métiers and Karlsruhe Institute of Technology through a Franco-German double-degree path.',
        'I am particularly interested in problems where mechanics, fluid dynamics, numerical methods and computation interact.',
        'The common thread across my projects is turning physical assumptions into a predictive model, verifying the numerical implementation, and deciding what the results can — and cannot — support.',
      ],
      languages: 'Languages',
      languageValue: 'French · German C1 · English C1',
      interests: 'Main interests',
      interestsValue: 'CFD · FEM · turbomachinery · thermomechanics · vibration · thermohydraulics · mechanical design · optimization · scientific computing',
      mobility: 'Mobility',
      mobilityValue: 'France · Germany · Switzerland',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Engineering domains, not progress bars.',
      groups: [
        ['Fluid Mechanics & CFD', ['OpenFOAM','RANS','k–ω SST','Multiphase flow','VOF','Euler–Euler','Pressure-drop modelling','Wall treatment','Mesh studies','Thermohydraulics']],
        ['Finite Element Analysis', ['Abaqus','ANSYS','Code_Aster','Structural mechanics','Modal / vibration analysis','Thermomechanics','Contact','Nonlinearities','Fatigue fundamentals','Topology optimization']],
        ['Mechanical Engineering', ['Mechanical design','Dimensioning','Machine dynamics','Turbomachinery','Tolerance / GPS fundamentals','CATIA','SolidWorks','Creo','3DEXPERIENCE']],
        ['Scientific Computing', ['Python','NumPy','pandas','SciPy','MATLAB','Optimization','Numerical methods','Time-series modelling','Machine learning','Git','Linux','C++ fundamentals']],
        ['Verification & Validation', ['Mesh convergence','Time-step sensitivity','Experimental comparison','Critical discrepancy analysis','Post-processing automation','Model limitations']],
      ] as [string, string[]][],
    },
    cv: {
      eyebrow: 'CV / Experience',
      title: 'Mechanical engineer — simulation, modelling & validation',
      intro: 'Arts et Métiers / KIT double-degree profile focused on CFD, finite elements, thermomechanics, vibration, thermohydraulics and scientific computing. Available from September 2026; mobility France, Germany and Switzerland.',
      open: 'Open CV PDF',
      experience: 'Experience',
      education: 'Education',
      experiences: [
        ['2025–2026', 'KIT · Institute of Fluid Mechanics', 'Master thesis — validation of a hybrid VOF / Euler–Euler multiphase CFD model for PEM-electrolyzer gas–liquid flows. OpenFOAM workflow, mesh/time-step sensitivity, comparison with experiments and Python/ParaView post-processing.'],
        ['2024', 'ADEME · Strasbourg', 'Assistant-engineer internship — industrial energy transition. Waste-heat potential, technical/energy/economic comparison of solutions and decision-support documents.'],
        ['2023', 'Punch Powerglide · Strasbourg', 'Production and quality-control internship in an industrial manufacturing environment.'],
      ],
      educationRows: [
        ['2024–2026', 'Karlsruhe Institute of Technology (KIT)', 'M.Sc. Maschinenbau · Franco-German double degree. Fluid mechanics, turbulence, numerical methods and physical modelling.'],
        ['2022–2026', 'Arts et Métiers — ENSAM', 'Diplôme d’Ingénieur Généraliste. Mechanics, materials, design, manufacturing and finite elements.'],
        ['2020–2022', 'CPGE PTSI / PT* · Lycée Couffignal', 'Mathematics, physics and engineering sciences.'],
      ],
    },
  },
  fr: {
    nav: { projects: 'Projets', skills: 'Compétences', about: 'À propos', cv: 'CV' },
    home: {
      eyebrow: 'Ingénierie mécanique · simulation · R&D',
      role: 'Ingénieur mécanique — Simulation numérique, mécanique des fluides & ingénierie computationnelle',
      intro: 'Ingénieur double diplômé Arts et Métiers / KIT, spécialisé dans la transformation de problèmes physiques en modèles numériques vérifiés. CFD, éléments finis, thermomécanique, turbomachines, conception mécanique et calcul scientifique.',
      explore: 'Voir les projets',
      featured: 'Simulation à la une',
      featuredTitle: 'Étage compresseur axial rotor–stator couplé',
      strip: [
        ['CFD multiphasique', 'MultiMorph · morphologie du gaz'],
        ['Turbomachines', 'Rotor–stator · norme de la vitesse'],
        ['Conception mécanique', 'V4 à 135° · dynamique & équilibrage'],
        ['Aérodynamique externe', 'Profil · décollement & sillage'],
      ],
      selectedEyebrow: 'Projets d’ingénierie sélectionnés',
      selectedTitle: 'Du raisonnement d’ingénieur, pas une liste de logiciels.',
      selectedBody: 'Chaque projet principal est cliquable et ouvre une étude de cas technique dédiée. Les rapports et fichiers de calcul sont liés directement lorsqu’ils sont disponibles.',
      studiesEyebrow: 'Études d’ingénierie',
      studiesTitle: 'Travaux techniques complémentaires',
      studiesBody: 'Les études plus courtes restent compactes : assez de contenu pour montrer le choix de modélisation et le résultat, sans présenter chaque exercice comme un projet de recherche.',
      profileEyebrow: 'Profil technique',
      profileTitle: 'La physique d’abord. Le logiciel ensuite.',
      profileGroups: [
        ['Mécanique des fluides & CFD', 'OpenFOAM · RANS · k–ω SST · VOF · Euler–Euler · pertes de charge · traitement pariétal'],
        ['Éléments finis', 'ANSYS · Abaqus · Code_Aster · thermomécanique · mécanique des structures · optimisation topologique'],
        ['Ingénierie mécanique', 'Conception · dynamique · dimensionnement · turbomachines · tolérancement / GPS'],
        ['Calcul scientifique', 'Python · NumPy · pandas · SciPy · optimisation · modélisation de séries temporelles'],
      ],
      contactEyebrow: 'Contact',
      contactTitle: 'Simulation, R&D, calcul ou ingénierie computationnelle.',
      email: 'E-mail',
    },
    card: { open: 'Ouvrir l’étude de cas technique ↗', project: 'Projet', case: 'Ouvrir l’étude ↗' },
    project: {
      back: '← Tous les projets',
      report: 'Ouvrir le rapport du projet',
      video: 'Voir la vidéo du projet',
      visualConcept: 'Visuel de présentation · schéma conceptuel ML',
      visualActual: 'Visualisation du projet · résultat de simulation réel lorsque disponible',
      figuresEyebrow: 'Figures sélectionnées',
      figuresTitle: 'Vues de simulation',
      figuresBody: 'La page utilise les résultats du projet plutôt que des visuels décoratifs. Chaque figure illustre un point physique ou numérique précis.',
      context: 'Contexte',
      physics: 'Physique',
      results: 'Résultats',
      limitations: 'Limites',
      learned: 'Ce que j’en ai appris',
      fullPrompt: 'Vous voulez les dérivations, paramètres et figures complets ?',
      fullBody: 'La page du portfolio résume l’argument d’ingénierie ; le rapport ou le fichier de calcul joint reste la source détaillée lorsqu’il existe.',
    },
    study: {
      back: '← Études d’ingénierie',
      report: 'Ouvrir le rapport technique PDF ↗',
      physics: 'Physique',
      representativeEquation: 'Équation représentative',
      results: 'Résultats',
      resultsTitle: 'Ce que montre le modèle',
      limits: 'Limites',
      limitsTitle: 'Ce que cela ne démontre pas',
    },
    footer: 'Ingénierie mécanique · simulation numérique · ingénierie computationnelle',
    about: {
      eyebrow: 'À propos',
      title: 'Ingénieur mécanique franco-allemand orienté modélisation des systèmes physiques.',
      paragraphs: [
        'Formation à Arts et Métiers et au Karlsruhe Institute of Technology dans le cadre d’un double diplôme franco-allemand.',
        'Je m’intéresse particulièrement aux problèmes où mécanique, mécanique des fluides, méthodes numériques et calcul scientifique interagissent.',
        'Le fil conducteur de mes projets est de transformer des hypothèses physiques en un modèle prédictif, de vérifier l’implémentation numérique, puis de déterminer ce que les résultats permettent — ou non — de conclure.',
      ],
      languages: 'Langues',
      languageValue: 'Français · Allemand C1 · Anglais C1',
      interests: 'Centres d’intérêt techniques',
      interestsValue: 'CFD · FEM · turbomachines · thermomécanique · vibrations · thermohydraulique · conception mécanique · optimisation · calcul scientifique',
      mobility: 'Mobilité',
      mobilityValue: 'France · Allemagne · Suisse',
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Des domaines d’ingénierie, pas des barres de progression.',
      groups: [
        ['Mécanique des fluides & CFD', ['OpenFOAM','RANS','k–ω SST','Écoulements multiphasiques','VOF','Euler–Euler','Modélisation des pertes de charge','Traitement pariétal','Études de maillage','Thermohydraulique']],
        ['Éléments finis', ['Abaqus','ANSYS','Code_Aster','Mécanique des structures','Analyse modale / vibrations','Thermomécanique','Contact','Non-linéarités','Bases de fatigue','Optimisation topologique']],
        ['Ingénierie mécanique', ['Conception mécanique','Dimensionnement','Dynamique des machines','Turbomachines','Tolérancement / GPS','CATIA','SolidWorks','Creo','3DEXPERIENCE']],
        ['Calcul scientifique', ['Python','NumPy','pandas','SciPy','MATLAB','Optimisation','Méthodes numériques','Séries temporelles','Machine learning','Git','Linux','Bases C++']],
        ['Vérification & validation', ['Convergence de maillage','Sensibilité au pas de temps','Comparaison expérimentale','Analyse critique des écarts','Automatisation du post-traitement','Limites du modèle']],
      ] as [string, string[]][],
    },
    cv: {
      eyebrow: 'CV / Expérience',
      title: 'Ingénieur mécanique — simulation, modélisation & validation',
      intro: 'Double diplôme Arts et Métiers / KIT orienté CFD, éléments finis, thermomécanique, vibrations, thermohydraulique et calcul scientifique. Disponible à partir de septembre 2026 ; mobilité France, Allemagne et Suisse.',
      open: 'Ouvrir le CV PDF',
      experience: 'Expérience',
      education: 'Formation',
      experiences: [
        ['2025–2026', 'KIT · Institut de mécanique des fluides', 'Mémoire de master — validation d’un modèle CFD multiphasique hybride VOF / Euler–Euler pour les écoulements gaz–liquide d’un électrolyseur PEM. Workflow OpenFOAM, sensibilités maillage/pas de temps, comparaison expérimentale et post-traitement Python/ParaView.'],
        ['2024', 'ADEME · Strasbourg', 'Stage assistant ingénieur — transition énergétique industrielle. Potentiel de chaleur fatale, comparaison technique/énergétique/économique des solutions et documents d’aide à la décision.'],
        ['2023', 'Punch Powerglide · Strasbourg', 'Stage en production et contrôle qualité dans un environnement industriel de fabrication.'],
      ],
      educationRows: [
        ['2024–2026', 'Karlsruhe Institute of Technology (KIT)', 'M.Sc. Maschinenbau · double diplôme franco-allemand. Mécanique des fluides, turbulence, méthodes numériques et modélisation physique.'],
        ['2022–2026', 'Arts et Métiers — ENSAM', 'Diplôme d’Ingénieur Généraliste. Mécanique, matériaux, conception, fabrication et éléments finis.'],
        ['2020–2022', 'CPGE PTSI / PT* · Lycée Couffignal', 'Mathématiques, physique et sciences de l’ingénieur.'],
      ],
    },
  },
  de: {
    nav: { projects: 'Projekte', skills: 'Kompetenzen', about: 'Über mich', cv: 'Lebenslauf' },
    home: {
      eyebrow: 'Maschinenbau · Simulation · F&E',
      role: 'Maschinenbauingenieur — Numerische Simulation, Strömungsmechanik & Computational Engineering',
      intro: 'Doppelabschluss Arts et Métiers / KIT mit Schwerpunkt auf der Überführung physikalischer Fragestellungen in verifizierte numerische Modelle. CFD, FEM, Thermomechanik, Turbomaschinen, Konstruktion und Scientific Computing.',
      explore: 'Projekte ansehen',
      featured: 'Ausgewählte Simulation',
      featuredTitle: 'Gekoppelte Rotor–Stator-Stufe eines Axialverdichters',
      strip: [
        ['Mehrphasen-CFD', 'MultiMorph · Gasmorphologie'],
        ['Turbomaschinen', 'Rotor–Stator · Geschwindigkeitsbetrag'],
        ['Konstruktion', '135°-V4 · Dynamik & Auswuchtung'],
        ['Externe Aerodynamik', 'Profil · Ablösung & Nachlauf'],
      ],
      selectedEyebrow: 'Ausgewählte Ingenieurprojekte',
      selectedTitle: 'Ingenieurdenken statt Software-Badges.',
      selectedBody: 'Jedes Hauptprojekt ist anklickbar und führt zu einer eigenen technischen Fallstudie. Berichte und Berechnungsdateien sind direkt verlinkt, sofern vorhanden.',
      studiesEyebrow: 'Ingenieurstudien',
      studiesTitle: 'Weitere technische Arbeiten',
      studiesBody: 'Kürzere Studien bleiben kompakt: genug, um Modellierungsentscheidung und Ergebnis zu zeigen, ohne jede Übung als Forschungsprojekt darzustellen.',
      profileEyebrow: 'Technisches Profil',
      profileTitle: 'Zuerst die Physik. Dann die Software.',
      profileGroups: [
        ['Strömungsmechanik & CFD', 'OpenFOAM · RANS · k–ω SST · VOF · Euler–Euler · Druckverluste · Wandbehandlung'],
        ['Finite Elemente', 'ANSYS · Abaqus · Code_Aster · Thermomechanik · Strukturmechanik · Topologieoptimierung'],
        ['Maschinenbau', 'Konstruktion · Dynamik · Auslegung · Turbomaschinen · Toleranzen / GPS'],
        ['Scientific Computing', 'Python · NumPy · pandas · SciPy · Optimierung · Zeitreihenmodellierung'],
      ],
      contactEyebrow: 'Kontakt',
      contactTitle: 'Simulation, F&E, Berechnung oder Computational Engineering.',
      email: 'E-Mail',
    },
    card: { open: 'Technische Fallstudie öffnen ↗', project: 'Projekt', case: 'Fallstudie öffnen ↗' },
    project: {
      back: '← Alle Projekte',
      report: 'Projektbericht öffnen',
      video: 'Projektvideo ansehen',
      visualConcept: 'Projektvisualisierung · konzeptionelles ML-Schema',
      visualActual: 'Projektvisualisierung · tatsächlicher Simulationsergebnis, sofern verfügbar',
      figuresEyebrow: 'Ausgewählte Abbildungen',
      figuresTitle: 'Simulationsansichten',
      figuresBody: 'Die Seite verwendet Projektergebnisse statt dekorativer Renderings. Jede Abbildung unterstützt einen konkreten physikalischen oder numerischen Punkt.',
      context: 'Kontext',
      physics: 'Physik',
      results: 'Ergebnisse',
      limitations: 'Grenzen',
      learned: 'Was ich gelernt habe',
      fullPrompt: 'Interesse an Herleitungen, Randbedingungen und vollständigen Abbildungen?',
      fullBody: 'Die Portfolio-Seite fasst die ingenieurwissenschaftliche Argumentation zusammen; der Bericht bzw. die Berechnungsdatei bleibt, sofern vorhanden, die detaillierte Quelle.',
    },
    study: {
      back: '← Ingenieurstudien',
      report: 'Technischen Bericht als PDF öffnen ↗',
      physics: 'Physik',
      representativeEquation: 'Repräsentative Gleichung',
      results: 'Ergebnisse',
      resultsTitle: 'Was das Modell zeigt',
      limits: 'Grenzen',
      limitsTitle: 'Was daraus nicht folgt',
    },
    footer: 'Maschinenbau · numerische Simulation · Computational Engineering',
    about: {
      eyebrow: 'Über mich',
      title: 'Deutsch-französischer Maschinenbauingenieur mit Fokus auf die Modellierung physikalischer Systeme.',
      paragraphs: [
        'Ausbildung an Arts et Métiers und am Karlsruhe Institute of Technology im Rahmen eines deutsch-französischen Doppelabschlusses.',
        'Besonders interessieren mich Fragestellungen, bei denen Mechanik, Strömungsmechanik, numerische Methoden und wissenschaftliches Rechnen zusammenwirken.',
        'Der rote Faden meiner Projekte ist, physikalische Annahmen in ein prädiktives Modell zu überführen, die numerische Umsetzung zu verifizieren und anschließend sauber zu trennen, welche Aussagen die Ergebnisse tragen — und welche nicht.',
      ],
      languages: 'Sprachen',
      languageValue: 'Französisch · Deutsch C1 · Englisch C1',
      interests: 'Technische Schwerpunkte',
      interestsValue: 'CFD · FEM · Turbomaschinen · Thermomechanik · Schwingungen · Thermohydraulik · Konstruktion · Optimierung · Scientific Computing',
      mobility: 'Mobilität',
      mobilityValue: 'Frankreich · Deutschland · Schweiz',
    },
    skills: {
      eyebrow: 'Kompetenzen',
      title: 'Ingenieurdisziplinen statt Fortschrittsbalken.',
      groups: [
        ['Strömungsmechanik & CFD', ['OpenFOAM','RANS','k–ω SST','Mehrphasenströmungen','VOF','Euler–Euler','Druckverlustmodellierung','Wandbehandlung','Netzstudien','Thermohydraulik']],
        ['Finite-Elemente-Methode', ['Abaqus','ANSYS','Code_Aster','Strukturmechanik','Modal- / Schwingungsanalyse','Thermomechanik','Kontakt','Nichtlinearitäten','Grundlagen Ermüdung','Topologieoptimierung']],
        ['Maschinenbau', ['Konstruktion','Auslegung','Maschinendynamik','Turbomaschinen','Toleranzen / GPS','CATIA','SolidWorks','Creo','3DEXPERIENCE']],
        ['Scientific Computing', ['Python','NumPy','pandas','SciPy','MATLAB','Optimierung','Numerische Methoden','Zeitreihenmodellierung','Machine Learning','Git','Linux','C++ Grundlagen']],
        ['Verifikation & Validierung', ['Netzkonvergenz','Zeitschrittsensitivität','Experimentvergleich','Kritische Abweichungsanalyse','Automatisiertes Post-Processing','Modellgrenzen']],
      ] as [string, string[]][],
    },
    cv: {
      eyebrow: 'Lebenslauf / Erfahrung',
      title: 'Maschinenbauingenieur — Simulation, Modellierung & Validierung',
      intro: 'Doppelabschluss Arts et Métiers / KIT mit Schwerpunkt auf CFD, FEM, Thermomechanik, Schwingungen, Thermohydraulik und Scientific Computing. Verfügbar ab September 2026; mobil in Frankreich, Deutschland und der Schweiz.',
      open: 'Lebenslauf als PDF öffnen',
      experience: 'Berufserfahrung',
      education: 'Ausbildung',
      experiences: [
        ['2025–2026', 'KIT · Institut für Strömungsmechanik', 'Masterarbeit — Validierung eines hybriden VOF-/Euler–Euler-Mehrphasenmodells für Gas-Flüssig-Strömungen in PEM-Elektrolyseuren. OpenFOAM-Workflow, Netz-/Zeitschrittsensitivität, Experimentvergleich und Post-Processing mit Python/ParaView.'],
        ['2024', 'ADEME · Straßburg', 'Praktikum als Assistenzingenieur — industrielle Energiewende. Abwärmepotenziale, technischer/energetischer/wirtschaftlicher Vergleich von Lösungen und Entscheidungsunterlagen.'],
        ['2023', 'Punch Powerglide · Straßburg', 'Praktikum in Produktion und Qualitätskontrolle in einem industriellen Fertigungsumfeld.'],
      ],
      educationRows: [
        ['2024–2026', 'Karlsruhe Institute of Technology (KIT)', 'M.Sc. Maschinenbau · deutsch-französischer Doppelabschluss. Strömungsmechanik, Turbulenz, numerische Methoden und physikalische Modellierung.'],
        ['2022–2026', 'Arts et Métiers — ENSAM', 'Diplôme d’Ingénieur Généraliste. Mechanik, Werkstoffe, Konstruktion, Fertigung und Finite Elemente.'],
        ['2020–2022', 'CPGE PTSI / PT* · Lycée Couffignal', 'Mathematik, Physik und Ingenieurwissenschaften.'],
      ],
    },
  },
} as const

type ProjectText = Partial<Pick<Project, 'title'|'subtitle'|'question'|'discipline'|'context'|'equationLabel'|'results'|'limitations'|'learned'|'reportLabel'>> & {
  metrics?: { label: string }[]
  gallery?: { title: string; caption: string }[]
  sections?: { title: string; body: string[] }[]
}

type StudyText = Partial<Pick<Study, 'title'|'domain'|'summary'|'question'|'equationLabel'|'results'|'limitations'>> & {
  metrics?: { label: string }[]
  gallery?: { title: string; caption: string }[]
  sections?: { title: string; body: string[] }[]
}

const frProjects: Record<string, ProjectText> = {
  'hybrid-multiphase-cfd-electrolysis': {
    title: 'CFD multiphasique hybride pour l’électrolyse de l’eau',
    subtitle: 'Validation du modèle MultiMorph pour des écoulements gaz–liquide confinés',
    question: 'Un modèle hybride Euler–Euler / VOF peut-il reproduire la morphologie du gaz et les pertes de charge sans résoudre chaque bulle injectée ?',
    discipline: 'Mémoire de master · CFD multiphasique',
    metrics: [{label:'configurations expérimentales de référence'},{label:'taille caractéristique du microcanal de Cubaud'},{label:'à travers le film estimé sur le maillage stable le plus fin'}],
    gallery: [
      {title:'Morphologie selon les conditions d’écoulement',caption:'Champs de fraction volumique de gaz montrant la transition de structures dispersées vers des morphologies gazeuses allongées à l’échelle du canal.'},
      {title:'Comparaison simulation / expérience',caption:'Comparaison qualitative des structures gazeuses prédites avec les visualisations expérimentales de référence.'},
      {title:'Sensibilité de la perte de charge',caption:'Résultat de perte de charge utilisé pour examiner l’influence de la résolution proche paroi sur la réponse hydraulique.'}
    ],
    context: 'Mémoire de master au KIT, Institut de mécanique des fluides. MultiMorph combine une représentation Euler–Euler non résolue des petites structures gazeuses avec une représentation continue de type VOF pour les grandes interfaces. L’étude évalue la perte de charge, la morphologie, la distribution des phases et le comportement proche paroi face à trois références expérimentales : Cubaud & Ho, Lafmejani et al. et Kim & Jung.',
    equationLabel: 'Décomposition de la perte de charge utilisée pour séparer les mécanismes agissant dans l’écoulement diphasique confiné.',
    results: [
      'MultiMorph reproduit les principales évolutions de morphologie gazeuse et peut transférer du gaz dispersé accumulé vers de grandes structures continues de type Taylor.',
      'La position du transfert de morphologie est sensible au diamètre des bulles dispersées, au seuil de continuité et au temps caractéristique du transfert.',
      'La tendance de perte de charge de Cubaud est reproduite tant que le liquide occupe encore une part importante de la section ; l’accord se dégrade lorsque le liquide est repoussé dans de minces films pariétaux et les coins.',
      'Le raffinement proche paroi modifie systématiquement la perte de charge calculée. Un raffinement supplémentaire devient numériquement instable avant d’obtenir une solution du film indépendante du maillage.',
      'Une condition de paroi mouillée modifie la topologie locale des phases, mais ne restitue pas le transport de quantité de mouvement à l’échelle du film.'
    ],
    limitations: [
      'L’échelle dominante non résolue est le mince film liquide près de la paroi, et non la grande structure gazeuse.',
      'Le maillage stable le plus fin ne représente qu’environ une cellule dans l’épaisseur du film estimé ; le cisaillement pariétal du film ne peut donc pas être considéré comme convergé en maillage.',
      'Le travail valide l’hydrodynamique multiphasique ; l’électrochimie est hors du périmètre du modèle.'
    ],
    learned: ['Modélisation hybride résolue / non résolue','Validation expérimentale','Sensibilité au maillage et aux paramètres','Physique des pertes de charge','Séparer erreur de modèle et erreur de discrétisation'],
    sections: [
      {title:'Problème d’ingénierie',body:['L’électrolyse PEM peut générer des structures gazeuses occupant une grande partie du canal tandis que le liquide restant près des parois est beaucoup plus mince. Résoudre directement chaque bulle injectée et chaque film liquide serait incompatible avec le coût d’une simulation à l’échelle du canal.','L’idée hybride consiste à ne résoudre explicitement une interface que lorsque la morphologie l’exige : les petites bulles restent dans un champ Euler–Euler, tandis que les grandes structures gazeuses connectées sont transférées vers un champ continu.']},
      {title:'Stratégie de validation',body:['Le microcanal de Cubaud & Ho fournit le principal benchmark quantitatif de perte de charge. Lafmejani sert à tester le transfert de morphologie sous injection gazeuse répartie à la paroi. Le canal carré de Kim rapproche le modèle de conditions plus représentatives d’un électrolyseur, avec écoulement annulaire / de type Taylor influencé par la gravité.','L’analyse sépare donc deux questions : le modèle génère-t-il la bonne morphologie gazeuse à grande échelle, et retrouve-t-il également le transport de quantité de mouvement proche paroi qui contrôle la perte de charge ?']},
      {title:'Difficulté d’ingénierie',body:['À faible fraction liquide, la structure gazeuse peut sembler correcte alors que la perte de charge est erronée. La structure gazeuse est résolue sur de nombreuses cellules, tandis que le film liquide contrôlant le cisaillement pariétal peut ne représenter qu’une cellule ou moins.','Cette distinction conduit directement à l’extension proposée : conserver la description hybride du gaz, mais ajouter un modèle de film liquide non résolu plutôt que raffiner la paroi de façon prohibitive partout.']}
    ],
    reportLabel: 'Ouvrir le mémoire de master PDF'
  },
  'axial-compressor-cfd': {
    title: 'CFD d’un compresseur axial rotor–stator',
    subtitle: 'Triangles de vitesses, incidence, déviation rotor et étage couplé frozen-rotor',
    question: 'Quelle quantité de physique des turbomachines peut-on conserver dans un modèle réduit de compresseur tout en restant suffisamment transparent pour être analysé ?',
    discipline: 'Turbomachines · CFD',
    metrics: [{label:'vitesse axiale d’entrée au point de calcul'},{label:'vitesse de pale au rayon moyen'},{label:'cellules du maillage de référence couplé'},{label:'hausse de pression statique de l’étage couplé'}],
    gallery: [
      {title:'Étage rotor–stator couplé',caption:'Visualisation du secteur annulaire périodique rotor–stator colorée par la norme de la vitesse.'},
      {title:'Transport du sillage et mélange',caption:'Les profils circonférentiels de norme de vitesse montrent le sillage rotorique fortement non uniforme à l’entrée du stator, puis son mélange progressif en aval.'},
      {title:'Évolution de l’écoulement rotor–stator',caption:'L’évolution pondérée par le flux massique des angles absolus et relatifs met en évidence la déviation créée par le rotor puis le redressement par le stator.'}
    ],
    context: 'Modèle volontairement réduit d’un étage de compresseur. Le projet démarre avec des cascades rotor et stator transparentes en passage inter-aubes, puis les étend vers un domaine annulaire mince périodique couplé en MRF / frozen rotor stationnaire. L’objectif est de relier directement les équations classiques de turbomachines aux champs CFD plutôt que de cacher la physique dans un grand modèle boîte noire.',
    equationLabel: 'Équation d’Euler des turbomachines. Elle sert ici de relation de cohérence issue du triangle de vitesses, et non de revendication de performance industrielle complète du compresseur.',
    results: [
      'Au point de calcul, V = (60,0,0) m/s et la vitesse de pale vaut 80 m/s, d’où W = (60,-80,0) m/s, |W| = 100 m/s et un angle relatif d’entrée d’environ −53,13°.',
      'Avec un angle métal au bord d’attaque proche de −53°, l’incidence au point de calcul est quasiment nulle. Réduire la vitesse axiale à vitesse de pale constante fait progressivement sortir l’écoulement du point nominal et augmente la tendance au décollement.',
      'L’étage MRF couplé produit environ 36,03 m/s de giration en sortie rotor et un angle moyen absolu post-rotor de 29,21° ; le stator réduit la vitesse tangentielle à environ 17,96 m/s et l’angle moyen à 15,95°.',
      'La solution couplée donne une hausse de pression statique d’environ 3,81 kPa et un déséquilibre de flux massique entrée/sortie intégré aux patches d’environ 3,0×10⁻⁶ %.',
      'Le sillage rotor arrivant au stator reste fortement non uniforme, ce qui constitue le principal gain physique par rapport au workflow séquentiel à couplage unidirectionnel.'
    ],
    limitations: ['RANS incompressible stationnaire avec k–ω SST ; les interactions instationnaires au passage des pales sont absentes.','Le modèle est un secteur annulaire réduit / périodique, pas un compresseur transitoire complet.','La vitesse absolue locale atteint environ Mach 0,35 ; une formulation compressible serait préférable pour des conclusions quantitatives de performance en pression.','La solution SST finale est qualifiée de quasi convergée et le rapport ne revendique explicitement pas la prédiction du décrochage tournant.'],
    learned: ['Transformations de référentiel','Incidence et déviation','Périodicité de cascade','Modélisation MRF','Interaction sillage–stator','Simplifier une turbomachine sans perdre la physique essentielle'],
    sections: [
      {title:'Conception par triangle de vitesses',body:['Au rayon moyen, la relation W = V − U définit directement l’angle relatif d’entrée vu par le rotor. Le point choisi Vx = 60 m/s et U = 80 m/s donne β ≈ −53,13°, volontairement accordé à l’angle métal du bord d’attaque.','Le balayage hors point ne modifie que Vx. La géométrie et la vitesse de pale restent fixes ; la variation d’incidence provient donc directement du triangle de vitesses.']},
      {title:'De la cascade à l’étage couplé',body:['Le modèle de base résout un passage rotor, reconvertit la vitesse relative moyenne de sortie dans le référentiel absolu, puis l’utilise comme entrée du stator. Le second modèle supprime ce couplage unidirectionnel en résolvant rotor et stator simultanément.','Le domaine couplé utilise un secteur périodique annulaire mince avec une zone MRF pour le rotor. Cette représentation garde le coût faible tout en conservant l’influence spatiale du sillage rotor sur le stator.']},
      {title:'Lecture physique',body:['Le rotor doit être lu à travers incidence, déviation, ajout de giration et élévation de pression. Le stator retire ensuite une partie de la vitesse tangentielle et redresse l’écoulement.','L’intérêt du calcul n’est pas un chiffre isolé de performance, mais la cohérence entre triangles de vitesses, champ CFD et bilans de l’étage.']}
    ],
    reportLabel: 'Ouvrir le rapport compresseur PDF'
  },
  '135-v4-engine': {
    title: 'Moteur V4 à 135° — Conception mécanique & analyse dynamique',
    subtitle: 'Cinématique, dimensionnement de bielle, équilibrage et optimisation topologique',
    question: 'Comment développer l’architecture moteur, le dimensionnement structurel et l’équilibrage dynamique comme un système mécanique cohérent ?',
    discipline: 'Conception mécanique · Dynamique',
    metrics: [{label:'angle entre bancs'},{label:'cylindrée totale calculée'},{label:'régime vilebrequin de référence'},{label:'réduction du pic de force Pilon avec le modèle d’arbre d’équilibrage'}],
    context: 'Projet de mécanique système construit autour d’une architecture V4 personnalisée à 135°. Il ne s’agit pas d’un simple exercice de CAO : le calage du vilebrequin fixe la cinématique des pistons ; l’accélération crée les efforts d’inertie alternatifs ; la répartition des masses génère forces et moments de balourd ; le dimensionnement de la bielle doit combiner combustion et inertie ; enfin, l’équilibrage modifie l’architecture par des masselottes / arbres dédiés.',
    equationLabel: 'Position du piston pour un mécanisme bielle–manivelle. Les dérivées temporelles donnent vitesse et accélération, utilisées dans le modèle d’inertie alternative.',
    results: ['Le classeur utilise quatre cylindres, un angle de banc de 135°, un rayon de manivelle de 35 mm et une bielle de 111 mm, soit R/L ≈ 0,315 et une cylindrée totale calculée d’environ 1,078 L.','Le calcul dynamique de référence est effectué à 3000 tr/min (ω ≈ 314,16 rad/s). Le modèle utilise une masse piston d’environ 0,492 kg et une masse bielle d’environ 0,590 kg ; les masses équivalentes tournantes et alternatives sont ensuite séparées pour l’équilibrage des efforts.','Le classeur contient une charge de combustion de dimensionnement d’environ 57,7 kN pour la bielle, combinée conceptuellement aux efforts d’inertie plutôt que de traiter la bielle comme une pièce purement statique.','Dans le balayage simplifié à quatre cylindres, la composante résultante « Tamis » s’annule pratiquement à la précision numérique tandis que « Pilon » atteint environ 1,15 kN avant compensation.','Le modèle d’équilibrage utilise deux masses de 80 g à 17,5 mm de rayon, déphasées de 110° et tournant à deux fois la vitesse du vilebrequin. L’ajout de la force d’équilibrage réduit le pic résiduel Pilon à environ 65 N, soit ~94 % de réduction.','La branche structurelle complète le modèle analytique par une vérification EF de la bielle et une optimisation topologique, suivies d’une reconception plutôt que d’accepter directement la géométrie brute issue de l’optimiseur.'],
    limitations: ['Les efforts et résultats d’équilibrage proviennent du classeur analytique et héritent de ses hypothèses de corps rigides et de masses concentrées.','Le résultat d’équilibrage porte sur les forces ; un moteur de série nécessiterait aussi l’étude détaillée de la torsion du vilebrequin, des charges de paliers, de la dynamique structurelle, de la variabilité de combustion et de l’équilibrage complet des moments.','Les marges finales de fatigue et les contraintes de la bielle optimisée ne doivent être publiées qu’avec les cas de charge EF et les données matériau correspondantes vérifiées.'],
    learned: ['Cinématique bielle–manivelle','Masses tournantes / alternatives équivalentes','Équilibrage des forces et moments','Chemins de charge dans la bielle','Optimisation topologique avec reconception','Lien entre dynamique analytique et EF'],
    sections: [
      {title:'Architecture & cinématique',body:['Le classeur définit une architecture V4 à 135° avec r = 35 mm et l = 111 mm. La géométrie bielle–manivelle impose déplacement, vitesse et accélération des pistons en fonction de l’angle vilebrequin.','Comme l’accélération varie avec ω², le régime de référence de 3000 tr/min rend déjà les efforts d’inertie de premier ordre par rapport aux efforts de combustion.']},
      {title:'Décomposition des masses & charge de bielle',body:['La bielle de 0,590 kg est décomposée en masses équivalentes au pied et à la tête afin de distinguer contributions alternatives et tournantes. Le classeur donne ainsi environ 0,688 kg de masse alternative et 0,396 kg de masse tournante pour le modèle élémentaire.','Cette décomposition est combinée à la branche de force de combustion (environ 57,7 kN dans le classeur courant) avant vérification structurelle de la bielle.']},
      {title:'Stratégie d’équilibrage',body:['Les efforts cylindre sont transformés des axes locaux vers le repère global et sommés dans les quantités du classeur nommées Tamis et Pilon ; les moments associés sont suivis séparément via Galop et Lacet.','Avec le calage symétrique actuel, Tamis est pratiquement annulé tandis que Pilon atteint environ ±1,15 kN. Un système à deux masses (2 × 80 g à 17,5 mm, phase 110°, vitesse 2×) est réglé sur cette composante et laisse environ 65 N de résiduel maximal dans le modèle simplifié.']},
      {title:'Conception structurelle & optimisation',body:['Le modèle analytique ne remplace pas les EF : il fournit les cas de charge que la bielle doit supporter. La pièce est vérifiée en traction / compression et sur les concentrations de contraintes sensibles en fatigue avant optimisation topologique.','La topologie issue du solveur est traitée comme une proposition de conception : rigidité, fabricabilité, congés, flambement et fatigue doivent être réintroduits dans la géométrie finale puis revérifiés.']}
    ],
    reportLabel: 'Ouvrir le classeur de calcul V4'
  },
  'external-aerodynamics': {
    title: 'Aérodynamique externe — Des profils aux véhicules complexes',
    subtitle: 'Études RANS pour construire et tester l’intuition aérodynamique',
    question: 'Comment évoluent le champ de pression, le décollement, les tourbillons et le traitement pariétal lorsqu’on passe d’un profil canonique à un écoulement 3D autour d’un véhicule ?',
    discipline: 'Aérodynamique · CFD',
    metrics: [{label:'cas représentatif NACA 0012'},{label:'vitesse de l’étude Formula 1'},{label:'coefficient d’appui F1 selon la convention de signe'},{label:'cas avion aile delta'}],
    gallery: [
      {title:'Profil NACA — sillage décollé',caption:'Champ de norme de vitesse à incidence, utilisé comme cas canonique pour interpréter couche limite et décollement.'},
      {title:'Formule 1 — structures d’écoulement',caption:'Visualisation par lignes de courant mettant en évidence les interactions entre fond, roues, ailerons et sillage arrière.'},
      {title:'Avion à aile delta — sillage 3D',caption:'Pression et lignes de courant utilisées pour discuter la portance tourbillonnaire et l’écoulement à forte incidence.'},
      {title:'Champ de pression automobile',caption:'Distribution de pression de surface comme exercice RANS complémentaire à l’échelle véhicule.'},
      {title:'Lignes de courant automobile',caption:'Lignes de courant colorées par la vitesse montrant l’accélération autour de la carrosserie et le développement du sillage.'}
    ],
    context: 'Une série d’études RANS allant d’un profil 2D canonique à des géométries de Formule 1 et d’avion à aile delta. L’objectif est de relier les coefficients de force aux champs de pression, au traitement pariétal, au décollement, aux tourbillons et au sillage tout en gardant visibles les limites de fidélité.',
    equationLabel: 'Coefficients aérodynamiques adimensionnels utilisés pour comparer les cas indépendamment de l’échelle des forces.',
    results: ['NACA 0012 : résultat représentatif Cl ≈ 0,991 et Cd ≈ 0,0272 dans la condition simulée.','Étude Formule 1 à environ 200 km/h : Cd ≈ 1,01 et Cl ≈ −1,02 ; le coefficient de portance négatif correspond à de l’appui.','Étude avion à aile delta : U∞ ≈ 60 m/s, AoA ≈ 10°, Cd ≈ 0,193 et Cl ≈ 0,681.','Le passage du profil au véhicule complet montre comment le comportement local de couche limite se couple aux grands sillages 3D et aux interactions entre composants.'],
    limitations: ['Il s’agit d’études RANS d’apprentissage / investigation d’ingénierie, pas de CFD industrielle de certification.','La résolution du maillage, les lois de paroi et y+ conditionnent fortement la crédibilité quantitative.','Le RANS stationnaire peut manquer des structures cohérentes instationnaires, les effets de sol/roues mobiles et certains détails du décollement selon le cas.'],
    learned: ['Lien pression–forces','Couches limites et décollement','Portance tourbillonnaire','Compromis appui / traînée','Discipline y+ et lois de paroi'],
    sections: [
      {title:'NACA 0012',body:['Le profil constitue le cas de référence contrôlé. Il permet d’interpréter angle d’attaque, chargement en pression, portance, traînée, développement de couche limite et décollement avant d’introduire une géométrie 3D complexe.','Le visuel montre la zone accélérée et la structure du sillage séparé plutôt qu’un simple coefficient de portance.']},
      {title:'Formule 1',body:['Le cas Formule 1 ajoute de fortes interactions entre dispositifs aérodynamiques. Aileron avant, roues, fond, diffuseur et structures arrière modifient mutuellement leur écoulement incident ; le bilan des forces doit donc être lu conjointement avec le sillage.','Le compromis d’ingénierie principal n’est pas l’appui maximal seul, mais l’appui utile relativement à la traînée et à la robustesse de l’écoulement.']},
      {title:'Avion à aile delta',body:['Le cas avion sert à étudier une portance tridimensionnelle dominée par les tourbillons à angle d’attaque modéré à élevé. La visualisation par lignes de courant est utile précisément parce qu’elle révèle des structures qu’on ne peut pas comprendre avec Cl et Cd seuls.']}
    ]
  },
  'market-time-series-ml': {
    title: 'Machine learning walk-forward anti-fuite pour Bitcoin',
    subtitle: 'Prévision à trois classes, validation temporelle stricte et backtest réaliste',
    question: 'Les données Bitcoin et multi-actifs contiennent-elles une information réellement exploitable hors échantillon lorsque fuite de données, surapprentissage, délai d’exécution et coûts de transaction sont contrôlés ?',
    discipline: 'Recherche quantitative · Machine learning',
    metrics: [{label:'observations journalières exploitables dans l’étude auditée'},{label:'variables construites à partir de BTC et d’actifs externes'},{label:'AUC one-vs-rest de la classe neutre / régime'},{label:'exposition au marché sur la période de test de la stratégie finale long/cash'}],
    context: 'Le projet a commencé comme une tentative exploratoire de prédire Bitcoin avec des indicateurs techniques et un réseau de neurones, puis a évolué vers une étude de recherche quantitative beaucoup plus stricte centrée sur la méthodologie. L’expérience finale auditée utilise les données journalières de BTC avec ETH, SPY, QQQ, GLD, VIX, l’indice du dollar américain et le taux US 10 ans. À partir de 3 145 observations exploitables, elle construit 101 variables uniquement rétrospectives et pose une question volontairement étroite : après contrôle des fuites temporelles et d’une exécution réaliste, reste-t-il une information prédictive hors échantillon ?',
    equationLabel: 'Le portefeuille est évalué sur le rendement réellement disponible après le signal, avec des frictions facturées lorsque la position long/cash change. La qualité de prédiction et l’utilité économique sont donc évaluées séparément.',
    results: ['L’ensemble final combine une régression logistique multinomiale régularisée et un gradient boosting histogramme peu profond. Les modèles sont réentraînés dans un test walk-forward à fenêtre croissante toutes les 30 observations.','La balanced accuracy stricte du test vaut 0,3772 et la log-loss 1,0955, à peine meilleures que les références naïves à trois classes. Le projet ne revendique donc pas un edge directionnel robuste.','La stratégie long/cash réalise −3,75 % sur l’échantillon de test, contre −19,24 % pour le buy-and-hold BTC et −7,97 % pour un filtre de tendance simple, mais elle n’est investie que 1,59 % des jours. La moindre perte est principalement de l’évitement du risque, pas une preuve d’alpha.','Le signal le plus fort concerne le régime plutôt que la direction : l’AUC de la classe neutre vaut 0,601, contre 0,527 pour la hausse et 0,523 pour la baisse. L’AUC directionnelle conditionnelle sur les mouvements significatifs n’est que de 0,484.','La probabilité prédite de classe neutre est négativement associée à la valeur absolue du rendement BTC suivant, ce qui soutient l’interprétation que le modèle sépare mieux les régimes calmes des grands mouvements qu’il ne choisit leur signe.'],
    limitations: ['L’ajustement initial train→validation contient une fuite de maturité de deux lignes, car les derniers labels d’entraînement utilisent des ouvertures futures situées à la frontière de validation. Le test walk-forward final applique correctement la purge de deux lignes.','Tous les candidats de la grille de seuils de validation échouent aux contraintes minimales d’exposition / activité ; les seuils finaux 0,55 de confiance et 0,10 d’écart de probabilité sont donc des valeurs de repli et non des paramètres véritablement optimaux sur validation.','La stratégie n’est active que 10 jours sur 629 jours de test ; les conclusions économiques restent donc statistiquement fragiles malgré la rigueur du backtest.','L’expérience comporte 101 variables corrélées pour seulement quelques milliers d’observations et aucun second holdout final indépendant après cette itération de recherche.','Les données journalières Yahoo, les frictions fixes simplifiées et l’alignement temporel entre marchés restent des limites pratiques du modèle.'],
    learned: ['Contrôle des fuites temporelles','Validation walk-forward','Conception d’un backtest','Discipline anti-surapprentissage','Détection de régimes','Interpréter honnêtement un résultat négatif'],
    sections: [
      {title:'Question de recherche & données',body:['La cible n’est pas « prédire le prix du Bitcoin ». Chaque ligne journalière de variables est associée à l’une de trois classes — baisse, neutre ou hausse — à partir du rendement BTC tradable entre deux ouvertures futures et d’une bande neutre dépendante de la volatilité.','L’information combine prix, momentum, volatilité, tendance, drawdown et volume du BTC avec des variables multi-actifs retardées issues d’ETH, des actions, de l’or, de la volatilité implicite, du dollar et des taux américains. Les variables de marchés traditionnels sont décalées d’un jour après alignement afin de réduire l’ambiguïté de timing de la même séance.']},
      {title:'Évaluation anti-fuite',body:['Les 3 145 observations exploitables sont séparées chronologiquement en 60 % entraînement, 20 % validation et 20 % test final. Le prétraitement est ajusté à l’intérieur de chaque pipeline de modèle, jamais une fois sur l’ensemble des données.','Le test final est produit par une procédure walk-forward à fenêtre croissante. Les modèles sont réentraînés toutes les 30 observations et les deux lignes de fit les plus récentes sont purgées afin de ne pas utiliser des labels dépendant d’ouvertures futures avant qu’ils ne soient observables.']},
      {title:'Modèles — et pourquoi pas un réseau plus gros',body:['L’ensemble final moyenne les probabilités d’une régression logistique multinomiale régularisée et d’un classifieur histogram-gradient-boosting peu profond. Cette capacité volontairement limitée est adaptée à quelques milliers d’observations journalières et de nombreuses variables corrélées.','Le schéma de réseau de neurones reste le visuel de présentation parce que le projet est né d’une expérience ANN. Le modèle final audité n’est toutefois pas ce réseau : le projet a évolué vers des modèles plus simples et davantage régularisés, car la maîtrise du surapprentissage est devenue plus importante que la complexité du modèle.']},
      {title:'De la prédiction au backtest',body:['Une position longue n’est ouverte que si la probabilité de hausse dépasse un seuil de confiance gelé et excède la probabilité de baisse d’un écart minimal. Les signaux calculés à la clôture t sont exécutés de l’ouverture suivante à l’ouverture d’après.','Le backtest inclut 7,5 points de base de frais et 2,5 points de base de slippage par unité de turnover, et compare la stratégie au buy-and-hold BTC ainsi qu’à un filtre de tendance simple.']},
      {title:'Ce que l’expérience montre réellement',body:['Le modèle n’est que faiblement meilleur que la classification naïve à trois classes. Sa moindre perte de portefeuille face au buy-and-hold ne peut pas être interprétée comme de l’alpha puisqu’il reste presque tout le temps en cash.','Le résultat le plus défendable est structurel : le modèle distingue mieux les périodes neutres / calmes qu’il ne prédit la direction. L’architecture suivante devrait donc être hiérarchique : d’abord estimer le régime de mouvement, puis la direction conditionnellement, enfin dimensionner le risque selon confiance et volatilité.']}
    ],
    reportLabel: 'Ouvrir le rapport Bitcoin ML PDF'
  },
  'robotic-sheet-forming-timeseries': {
    title: 'Modélisation data-driven du formage incrémental robotisé',
    subtitle: 'Prévision des efforts à partir de séries temporelles expérimentales — Bachelor thesis',
    question: 'Comment prédire l’évolution des efforts de formage lorsque le signal mesuré est structuré, non stationnaire et répété sur plusieurs essais ?',
    discipline: 'Fabrication · Modélisation de données',
    metrics: [{label:'points de mesure dans la base du projet'},{label:'RMSE de validation de la méthode finale par moyenne pondérée'},{label:'R² de validation de la méthode finale par moyenne pondérée'}],
    context: 'Bachelor thesis à Arts et Métiers Metz sur la prédiction de séries temporelles d’efforts en formage incrémental robotisé. Le travail soumis étudie ARIMA, l’échantillonnage et une stratégie de moyenne pondérée ; des travaux ultérieurs ont prolongé l’approche multi-séries par optimisation numérique sous contraintes.',
    equationLabel: 'Combinaison pondérée de séries / prédictions de référence. Dans le prolongement du projet, les poids peuvent être obtenus sous contraintes plutôt que choisis de manière ad hoc.',
    results: ['L’étude d’échantillonnage compare des points équidistants à une moyenne par segments ; cette dernière réduit la métrique de distance reportée d’environ 505,2 à 393,7.','ARIMA est testé en premier mais finalement abandonné pour les signaux d’effort visés car il ne peut pas anticiper la décroissance tardive de la série non stationnaire à partir de ses seuls échantillons passés.','La méthode finale par moyenne pondérée reportée dans le mémoire atteint MAE ≈ 30,39, RMSE ≈ 34,98 et R² ≈ 0,784 en validation.','Le prolongement du travail a étendu l’approche multi-séries vers SARIMAX / optimisation des poids sous contraintes ; cette extension reste séparée des résultats du mémoire de Bachelor.'],
    limitations: ['La méthode finale soumise nécessite la connaissance de tmax car la prédiction utilise un temps normalisé.','Les métriques de moyenne pondérée sont spécifiques à la base expérimentale disponible et ne constituent pas une précision universelle du procédé.','Les travaux ultérieurs SARIMAX / SLSQP sont une extension et ne sont pas présentés rétroactivement comme partie du mémoire soumis.'],
    learned: ['Structure des séries temporelles','Sélection de modèle','Échantillonnage','Optimisation','Analyse data-driven d’un procédé de fabrication'],
    sections: [
      {title:'Contexte procédé',body:['Le formage incrémental robotisé déforme localement une tôle à l’aide d’un outil suivant une trajectoire programmée. Les efforts sont mesurés dans le temps et contiennent des informations à la fois sur la trajectoire procédé et la réponse du matériau.','Le problème de prédiction n’est donc pas un simple exercice abstrait de série temporelle : le signal est lié à un procédé de fabrication répété et peut exploiter l’information issue d’essais similaires.']},
      {title:'Pourquoi le modèle a changé',body:['La première approche ARIMA a été utile pour explorer la prévision autorégressive et le choix des hyperparamètres, mais la série cible contient une décroissance tardive qui ne peut pas être inférée de manière fiable à partir de ses seules valeurs passées.','Le projet a donc évolué vers une combinaison pondérée de séries de référence issue de la base de données. C’est moins à la mode qu’un réseau de neurones, mais davantage aligné avec la structure de l’information disponible.']},
      {title:'Validation',body:['Une portion séparée du signal sert à calculer MAE, MSE, RMSE et R². La méthode finale par moyenne pondérée atteint R² ≈ 0,784 sur le cas de validation reporté.','La leçon d’ingénierie tient surtout au choix du modèle : sélectionner la méthode cohérente avec l’information réellement disponible dans le procédé plutôt que s’accrocher à l’algorithme initialement choisi.']}
    ],
    reportLabel: 'Ouvrir le Bachelor thesis PDF'
  }
}

const deProjects: Record<string, ProjectText> = {
  'hybrid-multiphase-cfd-electrolysis': {
    title: 'Hybride Mehrphasen-CFD für die Wasserelektrolyse',
    subtitle: 'Validierung des MultiMorph-Modells für eingeschlossene Gas-Flüssig-Strömungen',
    question: 'Kann ein hybrides Euler–Euler-/VOF-Modell Gasmorphologie und Druckverluste wiedergeben, ohne jede erzeugte Blase explizit aufzulösen?',
    discipline: 'Masterarbeit · Mehrphasen-CFD',
    metrics: [{label:'experimentelle Referenzkonfigurationen'},{label:'charakteristische Größe des Cubaud-Mikrokanals'},{label:'über die geschätzte Filmdicke im feinsten stabilen Netz'}],
    gallery: [
      {title:'Morphologie über verschiedene Strömungszustände',caption:'Gasvolumenanteilsfelder vom dispergierten Zustand bis zu langgezogenen Gasstrukturen auf Kanalskala.'},
      {title:'Simulation / Experiment',caption:'Qualitativer Vergleich der vorhergesagten Gasstrukturen mit experimentellen Referenzvisualisierungen.'},
      {title:'Druckverlustsensitivität',caption:'Druckverlustergebnis zur Untersuchung des Einflusses der wandnahen Auflösung auf die hydraulische Antwort.'}
    ],
    context: 'Masterarbeit am KIT, Institut für Strömungsmechanik. MultiMorph kombiniert eine unaufgelöste Euler–Euler-Beschreibung kleiner Gasstrukturen mit einer kontinuierlichen VOF-ähnlichen Beschreibung größerer Grenzflächen. Untersucht werden Druckverlust, Morphologie, Phasenverteilung und wandnahes Strömungsverhalten anhand von drei experimentellen Referenzen: Cubaud & Ho, Lafmejani et al. sowie Kim & Jung.',
    equationLabel: 'Druckverlustzerlegung zur Trennung der in der eingeschlossenen Zweiphasenströmung wirkenden Mechanismen.',
    results: ['MultiMorph bildet die wesentlichen Änderungen der Gasmorphologie ab und kann angesammeltes dispergiertes Gas in große kontinuierliche Taylor-ähnliche Strukturen überführen.','Die Position des Morphologietransfers reagiert empfindlich auf dispergierten Blasendurchmesser, Kontinuitätsschwelle und Transferzeitmaß.','Der Druckverlusttrend nach Cubaud wird erfasst, solange die Flüssigkeit einen nennenswerten Teil des Querschnitts einnimmt; bei gasreichen Zuständen verschlechtert sich die Übereinstimmung, wenn die Flüssigkeit in dünne Wandfilme und Ecken verdrängt wird.','Wandnahes Netzrefinement verändert den vorhergesagten Druckverlust systematisch. Weiteres Refinement wird numerisch instabil, bevor eine formal netzunabhängige Flüssigfilmlösung erreicht wird.','Eine wall-wet-Randbedingung verändert die wandnahe Phasentopologie, stellt aber den fehlenden Impulstransport auf Filmskala nicht wieder her.'],
    limitations: ['Die dominante unaufgelöste Skala ist der dünne Flüssigkeitsfilm an der Wand und nicht die große Gasstruktur selbst.','Das feinste stabile Netz erreicht nur ungefähr eine Zelle über der geschätzten Filmdicke; die Wandschubspannung auf Filmskala kann daher nicht als netzkonvergent gelten.','Die Arbeit validiert Mehrphasenhydrodynamik; Elektrochemie liegt außerhalb des Modellumfangs.'],
    learned: ['Hybride aufgelöste / unaufgelöste Modellierung','Experimentelle Validierung','Netz- und Parametersensitivität','Physik des Druckverlusts','Modellierungs- von Diskretisierungsfehlern trennen'],
    sections: [
      {title:'Ingenieurproblem',body:['Bei der PEM-Elektrolyse können Gasstrukturen einen großen Teil des Strömungskanals einnehmen, während die verbleibende Flüssigkeit an der Wand deutlich dünner ist. Jede eingespritzte Blase und jeden Flüssigkeitsfilm direkt aufzulösen wäre mit den Rechenkosten einer Kanalsimulation nicht vereinbar.','Die hybride Idee löst nur jene Morphologie als Grenzfläche auf, bei der dies nötig ist: kleine Blasen verbleiben in einem Euler–Euler-Feld, große zusammenhängende Gasstrukturen werden in ein kontinuierliches Feld übertragen.']},
      {title:'Validierungsstrategie',body:['Der Mikrokanal von Cubaud & Ho liefert den wichtigsten quantitativen Druckverlust-Benchmark. Lafmejani prüft den Morphologietransfer bei verteilter Wandinjektion von Gas. Der quadratische Kanal nach Kim bringt das Modell näher an elektrolyseurrelevante, schwerkraftbeeinflusste Ring-/Taylorströmungen.','Die Analyse trennt daher zwei Fragen: Erzeugt das Modell die richtige großskalige Gasmorphologie und erfasst es zugleich den wandnahen Impulstransport, der den Druckverlust bestimmt?']},
      {title:'Ingenieurwissenschaftliche Herausforderung',body:['Bei kleiner Flüssigkeitsfraktion kann die qualitative Gasstruktur korrekt aussehen, obwohl der Druckverlust falsch ist. Die Gasstruktur erstreckt sich über viele Zellen, während der Flüssigkeitsfilm, der die Wandschubspannung bestimmt, nur etwa eine Zelle oder weniger dick sein kann.','Daraus folgt die vorgeschlagene Erweiterung: die hybride Gasbeschreibung beibehalten, aber ein unaufgelöstes Flüssigfilmmodell ergänzen, statt überall ein prohibitiv feines Wandnetz zu verwenden.']}
    ],
    reportLabel: 'Masterarbeit als PDF öffnen'
  },
  'axial-compressor-cfd': {
    title: 'CFD einer Axialverdichter-Rotor–Stator-Stufe',
    subtitle: 'Geschwindigkeitsdreiecke, Inzidenz, Rotorumlenkung und gekoppelte Frozen-Rotor-Stufe',
    question: 'Wie viel Turbomaschinenphysik lässt sich in einem reduzierten Verdichtermodell erhalten, das gleichzeitig transparent genug für eine physikalische Analyse bleibt?',
    discipline: 'Turbomaschinen · CFD',
    metrics: [{label:'axiale Eintrittsgeschwindigkeit am Auslegungspunkt'},{label:'Schaufelgeschwindigkeit am mittleren Radius'},{label:'Zellen im gekoppelten Referenznetz'},{label:'statischer Druckanstieg der gekoppelten Stufe'}],
    gallery: [
      {title:'Gekoppelte Rotor–Stator-Stufe',caption:'Periodische Dünnring-Rotor–Stator-Visualisierung, eingefärbt mit dem Geschwindigkeitsbetrag.'},
      {title:'Nachlauftransport und Durchmischung',caption:'Umfangsprofile des Geschwindigkeitsbetrags zeigen den stark inhomogenen Rotornachlauf am Statoreintritt und seine fortschreitende Durchmischung stromab.'},
      {title:'Entwicklung der Rotor–Stator-Strömung',caption:'Die massenstromgewichtete Entwicklung der absoluten und relativen Strömungswinkel zeigt die Rotorumlenkung und die anschließende Geradstellung durch den Stator.'}
    ],
    context: 'Bewusst reduziertes Modell einer Verdichterstufe. Das Projekt beginnt mit transparenten Rotor- und Stator-Schaufelgittern im Blade-to-Blade-Modell und erweitert diese anschließend auf eine gekoppelte periodische Dünnringdomäne mit stationärem MRF / Frozen Rotor. Ziel ist, klassische Turbomaschinengleichungen direkt mit dem CFD-Feld zu verknüpfen, statt die Physik in einem großen Black-Box-Modell zu verstecken.',
    equationLabel: 'Eulersche Turbomaschinengleichung. Sie wird hier als Konsistenzbeziehung aus dem Geschwindigkeitsdreieck verwendet, nicht als Aussage über eine vollständig industrielle Verdichterperformance.',
    results: ['Am Auslegungspunkt gilt V = (60,0,0) m/s bei 80 m/s Schaufelgeschwindigkeit. Daraus folgen W = (60,-80,0) m/s, |W| = 100 m/s und ein relativer Eintrittswinkel von etwa −53,13°.','Bei einem Metallwinkel an der Eintrittskante von ungefähr −53° ist die Inzidenz am Auslegungspunkt praktisch null. Eine Verringerung der Axialgeschwindigkeit bei konstanter Schaufelgeschwindigkeit verschiebt die Inzidenz schrittweise vom Auslegungspunkt und erhöht die Ablösungsneigung.','Die gekoppelte MRF-Stufe erzeugt etwa 36,03 m/s Drall am Rotoraustritt und einen mittleren absoluten Strömungswinkel von 29,21°; der Stator reduziert die Tangentialgeschwindigkeit auf rund 17,96 m/s und den Winkel auf 15,95°.','Die gekoppelte Lösung ergibt einen statischen Druckanstieg von etwa 3,81 kPa und eine integrierte Massenstromdifferenz zwischen Ein- und Auslass von etwa 3,0×10⁻⁶ %.','Der Rotornachlauf bleibt am Stator stark inhomogen; genau diese räumliche Wechselwirkung ist der wichtigste physikalische Mehrwert gegenüber dem früheren sequentiellen Einweg-Workflow.'],
    limitations: ['Stationäres inkompressibles RANS mit k–ω SST; Schaufelpassage-Instationaritäten fehlen.','Das Modell ist ein reduzierter periodischer Ringsektor und kein vollständiger transienter Verdichter.','Die lokale absolute Geschwindigkeit erreicht ungefähr Mach 0,35; für quantitative Druck-/Performanceaussagen wäre eine kompressible Formulierung vorzuziehen.','Die finale SST-Lösung wird als quasi-konvergent beschrieben; der Bericht beansprucht ausdrücklich keine Vorhersage von Rotating Stall.'],
    learned: ['Bezugsrahmentransformationen','Inzidenz und Umlenkung','Gitterperiodizität','MRF-Modellierung','Nachlauf–Stator-Interaktion','Eine Turbomaschine vereinfachen, ohne die Kernphysik zu verlieren'],
    sections: [
      {title:'Auslegung mit Geschwindigkeitsdreiecken',body:['Am mittleren Radius definiert W = V − U direkt den relativen Eintrittswinkel, den der Rotor sieht. Mit Vx = 60 m/s und U = 80 m/s ergibt sich β ≈ −53,13°, gezielt passend zum Metallwinkel der Eintrittskante.','Beim Off-Design-Sweep wird ausschließlich Vx verändert. Geometrie und Schaufelgeschwindigkeit bleiben konstant, sodass die Inzidenzänderung direkt aus dem Geschwindigkeitsdreieck resultiert.']},
      {title:'Vom Schaufelgitter zur gekoppelten Stufe',body:['Das Basismodell löst einen Rotorpassage, transformiert die mittlere relative Rotoraustrittsgeschwindigkeit zurück in das absolute System und verwendet sie anschließend als Statoreinlass. Das zweite Modell entfernt diese Einwegkopplung und löst Rotor und Stator gleichzeitig.','Die gekoppelte Domäne nutzt einen periodischen Dünnringsektor mit MRF-Zone im Rotor. Dadurch bleiben die Rechenkosten gering, während der räumliche Einfluss des Rotornachlaufs auf den Stator erhalten bleibt.']},
      {title:'Physikalische Interpretation',body:['Der Rotor wird über Inzidenz, Umlenkung, Drallaufbau und Druckanstieg interpretiert. Der Stator reduziert anschließend einen Teil der Tangentialgeschwindigkeit und richtet die Strömung wieder stärker axial aus.','Der Wert des Modells liegt nicht in einer einzelnen Performancezahl, sondern in der Konsistenz zwischen Geschwindigkeitsdreiecken, CFD-Feld und Stufenbilanzen.']}
    ],
    reportLabel: 'Verdichterbericht als PDF öffnen'
  },
  '135-v4-engine': {
    title: '135°-V4-Motor — Konstruktion & Dynamikanalyse',
    subtitle: 'Mechanismenauslegung, Pleueldimensionierung, Auswuchtung und Topologieoptimierung',
    question: 'Wie lassen sich Motorarchitektur, strukturelle Auslegung und dynamische Auswuchtung als ein zusammenhängendes mechanisches System entwickeln?',
    discipline: 'Konstruktion · Dynamik',
    metrics: [{label:'Bankwinkel'},{label:'berechneter Gesamthubraum'},{label:'Referenzdrehzahl der Kurbelwelle'},{label:'Reduktion der maximalen Pilon-Kraft durch das Ausgleichswellenmodell'}],
    context: 'Systemorientiertes Maschinenbauprojekt um eine eigene 135°-V4-Architektur. Das Projekt wird nicht als reine CAD-Aufgabe behandelt: die Kurbelwellenphasung bestimmt die Kolbenkinematik; Kolbenbeschleunigung erzeugt oszillierende Trägheitskräfte; die Massenverteilung führt zu Schüttelkräften und -momenten; das Pleuel muss Verbrennungs- und Trägheitslasten gemeinsam tragen; die Auswuchtung wiederum beeinflusst die Architektur über Gegengewichte bzw. Ausgleichswellenmassen.',
    equationLabel: 'Kolbenposition im Kurbeltrieb. Die zeitlichen Ableitungen liefern Kolbengeschwindigkeit und -beschleunigung und speisen damit das Modell der oszillierenden Trägheitskräfte.',
    results: ['Das Rechenblatt verwendet vier Zylinder, 135° Bankwinkel, 35 mm Kurbelradius und 111 mm Pleuellänge. Daraus folgen R/L ≈ 0,315 und etwa 1,078 L Gesamthubraum.','Die Referenzrechnung erfolgt bei 3000 min⁻¹ (ω ≈ 314,16 rad/s). Verwendet werden rund 0,492 kg Kolbenmasse und 0,590 kg Pleuelmasse; äquivalente rotierende und oszillierende Massen werden anschließend getrennt.','Das Rechenblatt enthält eine Verbrennungs-Auslegungslast von etwa 57,7 kN für den Pleuelzweig, die konzeptionell mit den Trägheitslasten kombiniert wird.','Im vereinfachten Vier-Zylinder-Kraftverlauf hebt sich die resultierende Komponente „Tamis“ nahezu numerisch auf, während „Pilon“ vor Kompensation einen Spitzenwert von etwa 1,15 kN erreicht.','Das Ausgleichswellenmodell nutzt zwei 80-g-Massen bei 17,5 mm Radius, 110° Phasenversatz und doppelter Kurbelwellendrehzahl. Damit sinkt die maximale residuale Pilon-Kraft im vereinfachten Modell auf etwa 65 N, also um ungefähr 94 %.','Der strukturelle Zweig ergänzt das analytische Modell durch FEM-Verifikation des Pleuels und Topologieoptimierung mit anschließender konstruktiver Überarbeitung.'],
    limitations: ['Kräfte und Auswuchtungsergebnisse stammen aus dem analytischen Rechenblatt und übernehmen dessen Starrkörper- und Lumped-Mass-Annahmen.','Das Ergebnis ist eine Kraftbilanz; ein Serienmotor erfordert zusätzlich Kurbelwellentorsion, Lagerlasten, Strukturdynamik, Verbrennungsstreuung und vollständige Momentenauswuchtung.','Endgültige Ermüdungssicherheiten und Spannungen der topologieoptimierten Pleuelgeometrie sollten nur zusammen mit verifizierten FEM-Lastfällen und Werkstoffdaten veröffentlicht werden.'],
    learned: ['Kurbeltriebkinematik','Äquivalente rotierende / oszillierende Massen','Auswuchtung von Kräften und Momenten','Lastpfade im Pleuel','Topologieoptimierung mit Re-Design','Verknüpfung analytischer Dynamik mit FEM'],
    sections: [
      {title:'Architektur & Kinematik',body:['Das Rechenblatt definiert einen 135°-V4 mit r = 35 mm und l = 111 mm. Die Kurbeltriebgeometrie legt Kolbenweg, -geschwindigkeit und -beschleunigung als Funktion des Kurbelwinkels fest.','Da die Beschleunigung mit ω² skaliert, sind Trägheitskräfte bereits bei der Referenzdrehzahl 3000 min⁻¹ eine Last erster Ordnung und keine kleine Korrektur zur Verbrennungskraft.']},
      {title:'Massenzerlegung & Pleuelbelastung',body:['Das 0,590-kg-Pleuel wird in äquivalente Massen am kleinen und großen Pleuelauge zerlegt, sodass oszillierende und rotierende Beiträge getrennt werden können. Im Rechenblatt ergeben sich ungefähr 0,688 kg oszillierende und 0,396 kg rotierende Masse für das elementare Kraftmodell.','Diese Zerlegung wird mit dem Verbrennungskraftzweig (ca. 57,7 kN im aktuellen Workbook) kombiniert, bevor das Pleuel strukturell verifiziert wird.']},
      {title:'Auswuchtstrategie',body:['Die Zylinderkräfte werden aus lokalen in globale Koordinaten transformiert und zu den im Rechenblatt als Tamis und Pilon bezeichneten Größen aufsummiert; die Momente werden getrennt als Galop und Lacet verfolgt.','Bei der aktuellen symmetrischen Phasung ist Tamis praktisch kompensiert, während Pilon etwa ±1,15 kN erreicht. Zwei Ausgleichsmassen (2 × 80 g bei 17,5 mm, 110° Phase, 2× Drehzahl) werden auf diese Komponente abgestimmt und reduzieren die Restkraft auf etwa 65 N.']},
      {title:'Strukturauslegung & Optimierung',body:['Das analytische Modell ersetzt keine FEM, sondern liefert die Lastfälle. Das Pleuel wird auf Zug/Druck sowie ermüdungsrelevante Spannungskonzentrationen untersucht, bevor eine Topologieoptimierung Material in gering beanspruchten Bereichen entfernt.','Die Topologie wird als Konstruktionsvorschlag verstanden: Steifigkeit, Fertigbarkeit, Radien, Knicken und Ermüdung müssen in die finale Geometrie zurückgeführt und erneut verifiziert werden.']}
    ],
    reportLabel: 'V4-Berechnungsworkbook öffnen'
  },
  'external-aerodynamics': {
    title: 'Externe Aerodynamik — Vom Profil zum komplexen Fahrzeug',
    subtitle: 'RANS-Studien zum Aufbau und Test aerodynamischer Intuition',
    question: 'Wie verändern sich Druckfeld, Ablösung, Wirbel und Wandbehandlung beim Übergang vom kanonischen Profil zu dreidimensionalen Fahrzeugströmungen?',
    discipline: 'Aerodynamik · CFD',
    metrics: [{label:'repräsentativer NACA-0012-Fall'},{label:'Geschwindigkeit der Formel-1-Studie'},{label:'Abtriebsbeiwert der F1 gemäß Vorzeichenkonvention'},{label:'Deltaflügel-Fall'}],
    gallery: [
      {title:'NACA-Profil — abgelöster Nachlauf',caption:'Geschwindigkeitsbetragsfeld bei Anstellwinkel als kanonischer Fall für Grenzschicht- und Ablösungsinterpretation.'},
      {title:'Formel 1 — Strömungsstrukturen',caption:'Stromlinien auf Fahrzeugebene zur Darstellung der Wechselwirkungen zwischen Unterboden, Rädern, Flügeln und Hecknachlauf.'},
      {title:'Deltaflügel-Flugzeug — 3D-Nachlauf',caption:'Druck- und Stromlinienvisualisierung zur Diskussion von Wirbelauftrieb und Strömung bei hohem Anstellwinkel.'},
      {title:'Automobiles Druckfeld',caption:'Oberflächendruckverteilung als zusätzliche RANS-Studie auf Fahrzeugebene.'},
      {title:'Automobile Stromlinien',caption:'Geschwindigkeitsgefärbte Stromlinien mit Beschleunigung um die Karosserie und Entwicklung des Nachlaufs.'}
    ],
    context: 'Eine Reihe von RANS-Studien vom kanonischen 2D-Profil bis zu Formel-1- und Deltaflügel-Geometrien. Ziel ist, Kraftbeiwerte mit Druckfeldern, Wandbehandlung, Ablösung, Wirbeln und Nachlauf zu verknüpfen und gleichzeitig die Grenzen der Modelltreue sichtbar zu halten.',
    equationLabel: 'Dimensionslose aerodynamische Beiwerte zum Vergleich unterschiedlicher Fälle unabhängig von der absoluten Kraftskala.',
    results: ['NACA 0012: repräsentatives Ergebnis Cl ≈ 0,991 und Cd ≈ 0,0272 im simulierten Betriebspunkt.','Formel-1-Studie bei etwa 200 km/h: Cd ≈ 1,01 und Cl ≈ −1,02; der negative Auftriebsbeiwert entspricht Abtrieb.','Deltaflügel-Studie: U∞ ≈ 60 m/s, AoA ≈ 10°, Cd ≈ 0,193 und Cl ≈ 0,681.','Der Übergang vom Profil zum Gesamtfahrzeug zeigt, wie lokales Grenzschichtverhalten mit großen dreidimensionalen Nachläufen und Bauteilinteraktionen gekoppelt wird.'],
    limitations: ['Es handelt sich um RANS-Ingenieurstudien zu Lern- und Untersuchungszwecken, nicht um zertifizierungsreife Industrie-CFD.','Netzauflösung, Wandfunktionen und y+ bestimmen die quantitative Glaubwürdigkeit stark.','Stationäres RANS kann instationäre kohärente Strukturen, bewegten Boden / Räder und detaillierte Ablösungsdynamik je nach Fall nur unzureichend erfassen.'],
    learned: ['Druck–Kraft-Zusammenhang','Grenzschichten und Ablösung','Wirbelauftrieb','Abtrieb-/Widerstands-Kompromiss','y+ und Wandfunktionsdisziplin'],
    sections: [
      {title:'NACA 0012',body:['Das Profil ist der kontrollierte Referenzfall. Anstellwinkel, Druckbelastung, Auftrieb, Widerstand, Grenzschichtentwicklung und Ablösung lassen sich hier interpretieren, bevor komplexe 3D-Geometrie hinzukommt.','Die Abbildung zeigt beschleunigte Bereiche und den abgelösten Nachlauf statt nur eines skalaren Auftriebsbeiwerts.']},
      {title:'Formel 1',body:['Der Formel-1-Fall fügt starke Wechselwirkungen zwischen aerodynamischen Komponenten hinzu. Frontflügel, Räder, Unterboden, Diffusor und Heckstrukturen beeinflussen gegenseitig ihre Anströmung, sodass die Kraftbilanz gemeinsam mit dem Nachlauf interpretiert werden muss.','Die wesentliche Ingenieurabwägung ist nicht maximaler Abtrieb allein, sondern nutzbarer Abtrieb relativ zu Widerstand und Strömungsrobustheit.']},
      {title:'Deltaflügel-Flugzeug',body:['Der Flugzeugfall dient zur Untersuchung dreidimensionalen, wirbeldominierten Auftriebs bei mittleren bis hohen Anstellwinkeln. Die Stromlinienansicht ist gerade deshalb wertvoll, weil sie Strukturen zeigt, die aus Cl und Cd allein nicht erkennbar sind.']}
    ]
  },
  'market-time-series-ml': {
    title: 'Leakage-aware Walk-Forward Machine Learning für Bitcoin',
    subtitle: 'Drei-Klassen-Prognose, strikte zeitliche Validierung und realistisches Backtesting',
    question: 'Enthalten Bitcoin- und Cross-Asset-Marktdaten nutzbare Out-of-Sample-Information, wenn Leakage, Overfitting, Ausführungsverzug und Handelskosten kontrolliert werden?',
    discipline: 'Quantitative Research · Machine Learning',
    metrics: [{label:'nutzbare Tagesbeobachtungen im auditierten Lauf'},{label:'konstruierte BTC- und Cross-Asset-Features'},{label:'One-vs-Rest-AUC der Neutral-/Regimeklasse'},{label:'Marktexposition der finalen Long/Cash-Strategie im Testzeitraum'}],
    context: 'Das Projekt begann als explorativer Versuch, Bitcoin mit technischen Indikatoren und einem neuronalen Netz vorherzusagen, und entwickelte sich zu einer deutlich strengeren quantitativen Studie mit methodischem Fokus. Das finale auditierte Experiment nutzt tägliche BTC-Daten zusammen mit ETH, SPY, QQQ, GLD, VIX, US-Dollar-Index und US-10J-Rendite. Aus 3.145 nutzbaren Beobachtungen werden 101 ausschließlich rückwärts gerichtete Features erzeugt. Die bewusst enge Frage lautet: Bleibt nach Kontrolle von zeitlichem Leakage und realistischer Ausführung überhaupt Out-of-Sample-Information übrig?',
    equationLabel: 'Das Portfolio wird auf dem nach dem Signal tatsächlich verfügbaren Return bewertet; Handelsfriktion wird bei Änderungen der Long/Cash-Position belastet. Prognosequalität und wirtschaftlicher Nutzen werden somit getrennt bewertet.',
    results: ['Das finale Ensemble kombiniert regularisierte multinomiale logistische Regression mit flachem Histogram Gradient Boosting. Im expandierenden Walk-Forward-Test werden die Modelle alle 30 Beobachtungen neu trainiert.','Die strikte Test-Balanced-Accuracy beträgt 0,3772 und der Log-Loss 1,0955 — nur geringfügig besser als naive Drei-Klassen-Referenzen. Das Projekt beansprucht daher keinen robusten Richtungsvorteil.','Die Long/Cash-Strategie erzielt im Test −3,75 %, gegenüber −19,24 % für BTC Buy-and-Hold und −7,97 % für einen einfachen Trendfilter, ist aber nur an 1,59 % der Testtage investiert. Die geringere Verlusthöhe ist primär Risikovermeidung, kein Alpha-Nachweis.','Das stärkste Signal ist regimebezogen statt directional: Neutral-AUC 0,601 gegenüber 0,527 für Up und 0,523 für Down. Die bedingte Richtungs-AUC bei signifikanten Bewegungen liegt nur bei 0,484.','Die vorhergesagte Neutralwahrscheinlichkeit ist negativ mit dem Betrag des nächsten BTC-Returns verbunden. Das spricht dafür, dass das Modell ruhige von großen Bewegungsregimen besser trennt, als deren Richtung vorherzusagen.'],
    limitations: ['Der initiale Train→Validation-Fit enthält ein Zwei-Zeilen-Label-Maturity-Leak, weil die letzten Trainingslabels zukünftige Opens an der Validierungsgrenze benötigen. Der finale Walk-Forward-Test purged diese zwei Zeilen korrekt.','Alle Kandidaten im Validierungs-Threshold-Grid verletzen die Mindestanforderungen an Exposition/Aktivität; die finalen Schwellen 0,55 Vertrauen und 0,10 Probability Edge sind daher Fallback-Werte und nicht echte validation-optimale Parameter.','Die Strategie ist nur an 10 von 629 Testtagen aktiv; wirtschaftliche Schlussfolgerungen sind trotz striktem Backtest statistisch fragil.','Das Experiment verwendet 101 korrelierte Features bei nur wenigen Tausend Beobachtungen und besitzt nach dieser Forschungsiteration keinen zweiten unabhängigen finalen Holdout.','Tägliche Yahoo-Daten, vereinfachte fixe Transaktionsfriktionen und zeitliche Synchronisierung zwischen Märkten bleiben praktische Modellgrenzen.'],
    learned: ['Zeitreihen-Leakage kontrollieren','Walk-Forward-Validierung','Backtest-Design','Overfitting-Disziplin','Regimeerkennung','Negative Ergebnisse ehrlich interpretieren'],
    sections: [
      {title:'Forschungsfrage & Daten',body:['Das Ziel ist nicht „den Bitcoin-Preis vorherzusagen“. Jede tägliche Feature-Zeile wird über den nächsten handelbaren Open-to-Open-Return und ein volatilitätsabhängiges Neutralband einer von drei Klassen zugeordnet: down, neutral oder up.','Der Informationssatz kombiniert BTC-Preis, Momentum, Volatilität, Trend, Drawdown und Volumen mit verzögerten Cross-Asset-Informationen aus ETH, Aktien, Gold, impliziter Volatilität, Dollar und US-Zinsen. Features traditioneller Märkte werden nach der Ausrichtung um einen Tag verschoben, um Same-Session-Timing-Ambiguitäten zu reduzieren.']},
      {title:'Leakage-aware Evaluation',body:['Die 3.145 nutzbaren Beobachtungen werden chronologisch in 60 % Training, 20 % Validierung und 20 % finalen Test geteilt. Preprocessing wird innerhalb jeder Modellpipeline fitten, nicht einmal auf dem gesamten Datensatz.','Der finale Test entsteht über ein expandierendes Walk-Forward-Verfahren. Die Modelle werden alle 30 Beobachtungen neu trainiert; die zwei jüngsten Fit-Zeilen werden gepurged, damit Labels mit zukünftigen Opens nicht vor ihrer Verfügbarkeit genutzt werden.']},
      {title:'Modelle — und warum kein größeres neuronales Netz',body:['Das finale Ensemble mittelt die Wahrscheinlichkeiten einer regularisierten multinomialen logistischen Regression und eines flachen Histogram-Gradient-Boosting-Klassifikators. Diese bewusst begrenzte Kapazität passt zu nur wenigen Tausend Tagesbeobachtungen und vielen korrelierten Prädiktoren.','Das neuronale Netz bleibt als Präsentationsgrafik erhalten, weil das Projekt ursprünglich als ANN-Experiment begann. Das auditierte Endmodell ist jedoch nicht dieses Netz: die Arbeit entwickelte sich zu einfacheren, stärker regularisierten Modellen, weil Overfitting-Kontrolle wichtiger wurde als Modellkomplexität.']},
      {title:'Von der Prognose zum Backtest',body:['Eine Long-Position wird nur eröffnet, wenn die vorhergesagte Up-Wahrscheinlichkeit eine eingefrorene Confidence-Schwelle überschreitet und die Down-Wahrscheinlichkeit um einen Mindestabstand übertrifft. Signale auf Basis von Close t werden vom nächsten Open bis zum darauf folgenden Open umgesetzt.','Der Backtest berücksichtigt 7,5 Basispunkte Gebühren und 2,5 Basispunkte Slippage pro Turnover-Einheit und vergleicht die Strategie mit BTC Buy-and-Hold sowie einem einfachen Trendfilter.']},
      {title:'Was das Experiment tatsächlich zeigt',body:['Das Modell ist nur schwach besser als naive Drei-Klassen-Klassifikation. Die geringere Portfoliobelastung gegenüber Buy-and-Hold ist nicht als Alpha zu interpretieren, weil die Strategie nahezu die gesamte Testzeit in Cash bleibt.','Das robustere Ergebnis ist strukturell: Das Modell trennt neutrale / ruhige Perioden besser, als es Richtung prognostiziert. Der nächste sinnvolle Ansatz ist daher hierarchisch: zunächst Bewegungsregime schätzen, anschließend Richtung nur bedingt, danach Risiko nach Vertrauen und Volatilität skalieren.']}
    ],
    reportLabel: 'Bitcoin-ML-Bericht als PDF öffnen'
  },
  'robotic-sheet-forming-timeseries': {
    title: 'Datengetriebene Modellierung des robotischen inkrementellen Blechumformens',
    subtitle: 'Kraftprognose aus experimentellen Zeitreihen — Bachelorarbeit',
    question: 'Wie lässt sich der Verlauf der Umformkraft vorhersagen, wenn das Messsignal strukturiert, nichtstationär und über mehrere Versuche wiederholt ist?',
    discipline: 'Fertigung · Datenmodellierung',
    metrics: [{label:'Messpunkte im Projektdatensatz'},{label:'Validierungs-RMSE der eingereichten gewichteten Mittelwertmethode'},{label:'Validierungs-R² der eingereichten gewichteten Mittelwertmethode'}],
    context: 'Bachelorarbeit bei Arts et Métiers Metz zur Vorhersage von Kraftzeitreihen beim robotischen inkrementellen Blechumformen. Die eingereichte Arbeit untersucht ARIMA, Sampling und eine gewichtete Mittelwertstrategie; spätere Arbeiten erweiterten die Multi-Serien-Idee um constrained numerische Optimierung.',
    equationLabel: 'Gewichtete Kombination von Referenzserien / Prognosen. In der Weiterführung können die Gewichte unter Nebenbedingungen optimiert statt ad hoc gewählt werden.',
    results: ['Die Sampling-Studie vergleicht äquidistante Punkte mit Segmentmittelung; Segmentmittelung reduziert die berichtete Distanzmetrik von etwa 505,2 auf 393,7.','ARIMA wird zunächst getestet, für die Zielkraftsignale aber schließlich verworfen, weil der spätere Abfall der nichtstationären Serie nicht zuverlässig allein aus den vergangenen Werten vorhergesagt werden kann.','Die finale eingereichte gewichtete Mittelwertmethode erreicht im Validierungsfall MAE ≈ 30,39, RMSE ≈ 34,98 und R² ≈ 0,784.','Eine spätere Fortsetzung erweitert den Multi-Serien-Ansatz in Richtung SARIMAX / constrained Weight-Optimierung; diese Erweiterung bleibt klar von den Aussagen der eingereichten Bachelorarbeit getrennt.'],
    limitations: ['Die eingereichte Endmethode benötigt tmax, weil die Prognose eine normierte Zeit verwendet.','Die berichteten Metriken sind spezifisch für die vorhandene experimentelle Datenbank und keine universelle Prozessgenauigkeit.','Spätere SARIMAX-/SLSQP-Arbeiten sind eine Weiterentwicklung und werden nicht rückwirkend als Teil der eingereichten Arbeit dargestellt.'],
    learned: ['Zeitreihenstruktur','Modellauswahl','Sampling','Optimierung','Datengetriebene Fertigungsanalyse'],
    sections: [
      {title:'Prozesskontext',body:['Beim robotischen inkrementellen Blechumformen wird ein Blech lokal durch ein Werkzeug entlang einer programmierten Bahn deformiert. Die zeitlich gemessenen Umformkräfte enthalten Informationen über Prozesspfad und Materialantwort.','Die Prognose ist daher kein generisches Zeitreihenspielzeug: Das Signal gehört zu einem wiederholbaren Fertigungsprozess und kann Information aus verwandten Versuchen nutzen.']},
      {title:'Warum das Modell gewechselt wurde',body:['Der ARIMA-Ansatz war nützlich, um autoregressive Prognose und Hyperparameterauswahl zu untersuchen. Die Zielserie enthält jedoch einen späteren Kraftabfall, der aus den eigenen vergangenen Werten allein nicht zuverlässig vorhersehbar ist.','Das Projekt wechselte daher zu einer datenbankbasierten gewichteten Kombination von Referenzserien. Das ist weniger modisch als ein neuronales Netz, passt aber besser zur Struktur der verfügbaren Experimente.']},
      {title:'Validierung',body:['Ein separater Validierungsabschnitt des Signals wird für MAE, MSE, RMSE und R² genutzt. Die finale gewichtete Mittelwertmethode erreicht im berichteten Fall R² ≈ 0,784.','Die Ingenieurlektion liegt in der Modellauswahl: die Methode wählen, die zur tatsächlich verfügbaren Prozessinformation passt, statt am ursprünglich ausgewählten Algorithmus festzuhalten.']}
    ],
    reportLabel: 'Bachelorarbeit als PDF öffnen'
  }
}

const frStudies: Record<string, StudyText> = {
  'neural-driving-neuroevolution': {
    title:'Neural Driving — Neuroévolution', domain:'IA · Contrôle · Optimisation',
    summary:'Expérience complète de conduite autonome 2D développée depuis zéro : dynamique véhicule, neuf capteurs de distance, MLP explicite et optimisation génétique de tous les paramètres du réseau.',
    question:'Un contrôleur neuronal explicite peut-il apprendre une politique de pilotage robuste lorsque le simulateur et l’optimiseur sont entièrement codés depuis zéro ?',
    metrics:[{label:'architecture du MLP'},{label:'paramètres scalaires optimisés'},{label:'finisseurs de deux tours / 50 sur 10 générations'},{label:'champion sur deux tours rejoué indépendamment'}],
    sections:[
      {title:'Contrôleur & perception',body:['Neuf capteurs de distance et la vitesse normalisée forment les dix entrées du réseau. Le MLP fournit direction, accélérateur et frein. Aucune trajectoire idéale globale, position absolue ou direction cible cachée n’est fournie.','Le réseau par défaut contient 263 poids et biais scalaires. L’entraînement n’utilise ni TensorFlow, ni PyTorch, ni différentiation automatique, ni backpropagation.']},
      {title:'Optimisation évolutionnaire',body:['Une population de contrôleurs est évaluée dans le simulateur, classée par fitness puis évoluée par sélection en tournoi, élitisme, crossover uniforme, mutation gaussienne et immigrants aléatoires.','La fonction de fitness empêche explicitement les exploits simples : les checkpoints ordonnés doivent être franchis physiquement, la marche arrière est pénalisée et une course terminée est classée au-dessus d’une trajectoire incomplète.']},
      {title:'Vérification',body:['Le projet comprend des tests de régression sur la dynamique véhicule, la géométrie, les capteurs, les collisions, les checkpoints, la sérialisation, la préservation des élites et l’interface utilisateur. Le log final indique 37 tests réussis.','Le champion sauvegardé est rejoué en mode headless afin de vérifier que les paramètres sérialisés reproduisent le résultat stocké et pas seulement l’état en mémoire lors de l’entraînement.']}
    ],
    results:['Dans l’expérience principale à 50 voitures et 10 générations, le nombre de voitures terminant deux tours passe de 2 à 33 tandis que les collisions passent de 48 à 17.','Le meilleur temps sur deux tours passe d’environ 15,49 s à 14,45 s ; un raffinement ultérieur de la fitness lié au déficit de vitesse réduit le temps réel à environ 14,41 s.','Le résultat le plus fort est la robustesse à l’échelle de la population : le taux de fin passe de 4 % à 66 %.'],
    limitations:['L’entraînement se fait principalement sur un seul circuit et un seul point de départ ; il n’existe pas de benchmark de généralisation sur un autre circuit tenu à l’écart.','La physique véhicule est simplifiée et n’intègre pas un modèle physique des pneus, la suspension ou les transferts de charge.','La politique est sans mémoire et n’observe pas directement la vitesse de lacet ou l’angle de dérive.','L’optimisation génétique est peu efficiente en nombre d’évaluations comparée aux méthodes à gradient lorsqu’un gradient est disponible.'],
    equationLabel:'La neuroévolution traite le simulateur complet comme une boîte noire reliant les paramètres du réseau à une fitness scalaire.'
  },
  'brake-disc-thermomechanics': {
    title:'Thermomécanique d’un disque de frein', domain:'Thermique transitoire + EF structurels',
    summary:'L’énergie d’un freinage d’urgence est convertie en flux thermique transitoire, puis analysée par étude de sensibilité au maillage et couplage thermoélastique à la fin du freinage.',
    question:'Comment un freinage court à forte puissance génère-t-il des gradients thermiques et une déformation thermoélastique axiale dans un disque de frein ?',
    metrics:[{label:'freinage en 4 s'},{label:'énergie attribuée à un disque avant'},{label:'flux thermique initial appliqué'},{label:'éléments du maillage calculé le plus fin'}],
    gallery:[
      {title:'Champ de température transitoire',caption:'Champ thermique pendant / après le freinage, utilisé pour suivre la diffusion depuis les pistes de friction vers le bol.'},
      {title:'Déformation thermoélastique',caption:'Champ thermique à 4 s transféré vers le modèle structurel, montrant une déformation axiale de type coning.'}
    ],
    sections:[
      {title:'Chargement thermique',body:['Un véhicule de 1500 kg freiné de 100 km/h à l’arrêt en 4 s conduit à environ 191 kJ reçus par un disque avant après prise en compte de la part avant, de la répartition entre deux disques, du facteur de masses tournantes et de la fraction d’énergie absorbée par le disque.','Le flux thermique est imposé sur les deux pistes de friction et décroît linéairement d’environ 1,18 MW/m² à zéro pendant les 4 s de freinage.']},
      {title:'Sensibilité au maillage',body:['Cinq maillages sont testés, de 616 à 72 512 éléments. À 60 s, les dernières variations sont inférieures à 0,4 %, mais la température maximale à 4 s varie encore de 3,39 % entre M4 et M5.','Le résultat est donc présenté comme partiellement convergé : satisfaisant pour le champ thermique à long terme, mais encore sensible au maillage au pic de freinage.']},
      {title:'Couplage thermomécanique',body:['Le champ thermique à 4 s est transféré vers une analyse structurelle. Le modèle prédit une déformation axiale de type coning, avec un déplacement total maximal d’environ 3,03×10⁻⁵ m et un déplacement axial minimal d’environ −1,15×10⁻⁵ m.','Un encastrement complet au moyeu est explicitement identifié comme une hypothèse forte pouvant surestimer les contraintes thermiques et modifier la forme de déformation.']}
    ],
    results:['La température atteint son pic vers la fin du freinage, puis la chaleur se redistribue vers le bol du disque tandis que la convection refroidit les surfaces exposées.','Le champ transitoire reporté atteint environ 115 °C à 4 s et 86 °C à 60 s dans le tableau final.','La convergence thermique à long terme est satisfaisante, alors que le pic à 4 s reste partiellement dépendant du maillage.','La solution structurelle issue du champ thermique montre une déformation axiale de type coning de l’ordre de quelques dizaines de micromètres.'],
    limitations:['Le coefficient de convection est imposé comme une valeur moyenne uniforme plutôt que obtenu par une CFD dédiée de l’écoulement d’air.','Le pic thermique à 4 s n’est pas totalement convergé en maillage à cause de la limite de taille du problème ANSYS Student.','La contrainte structurelle est rigide et peut surcontraindre la dilatation thermique.'],
    equationLabel:'Équation de la chaleur transitoire gouvernant le champ de température avant le transfert thermoélastique.'
  },
  'heated-pipe-thermomechanics': {
    title:'Thermomécanique d’une conduite chauffée', domain:'Analyse thermique stationnaire',
    summary:'Un fluide interne chaud impose une conduction radiale dans une paroi cylindrique, offrant une étude compacte des conditions de convection et de la dilatation thermique contrainte.',
    question:'Comment un fluide interne chaud crée-t-il un champ de température radial et, lorsque la dilatation est contrainte, des contraintes thermiques ?',
    metrics:[{label:'plage de température dans le résultat thermique fourni'}],
    sections:[
      {title:'Modèle thermique',body:['La paroi interne est pilotée par la condition du fluide chaud tandis que la chaleur se conduit radialement à travers l’épaisseur et est évacuée sur la surface externe.','Le champ de température résulte donc de la compétition entre résistances convectives aux interfaces fluide/paroi et résistance conductrice du solide.']},
      {title:'Interprétation mécanique',body:['Pour une conduite libre, une élévation de température presque uniforme produit surtout de la dilatation. Lorsque la dilatation axiale ou radiale est empêchée, la déformation thermique α(T−T0) se transforme en contrainte mécanique.','L’étude est utile car elle isole la logique des conditions thermiques avant d’introduire une géométrie plus complexe ou des matériaux non linéaires.']}
    ],
    results:['Le résultat thermique stationnaire fourni s’étend d’environ 66,9 °C à 84,8 °C à travers la paroi.','La zone interne plus chaude et la zone externe plus froide créent le gradient radial qui produirait une déformation thermique différentielle dans un modèle structurel couplé.'],
    limitations:['Le cas présenté est une étude ANSYS compacte plutôt qu’un modèle validé expérimentalement.','Les contraintes ne doivent être publiées qu’avec les conditions mécaniques et propriétés matériau exactes du calcul.'],
    equationLabel:'La déformation thermique ne devient contrainte que dans la mesure où la dilatation libre est empêchée.'
  },
  'sheet-metal-interlock': {
    title:'Assemblage de tôles par interverrouillage', domain:'EF non linéaires · Abaqus',
    summary:'Simulation de contact avec grandes déformations d’un assemblage mécanique, avec maillage déformé, contrainte de von Mises et interprétation de la qualité de l’interlock.',
    question:'Comment le contact, l’écoulement plastique et la géométrie locale déterminent-ils la formation d’un interverrouillage mécanique utile entre tôles ?',
    sections:[
      {title:'Modèle procédé',body:['L’opération d’assemblage est fortement non linéaire : les tôles subissent de grandes déformations plastiques tandis que les zones de contact évoluent pendant la course de formage.','L’épaisseur du col, l’épaisseur des tôles et la géométrie de l’interlock sont utilisées comme indicateurs de qualité mécanique plutôt que de se limiter à la forme finale.']},
      {title:'Interprétation EF',body:['Le maillage déformé montre où la matière est forcée autour de la géométrie poinçon/matrice, tandis que la contrainte de von Mises met en évidence les zones portant les plus fortes contraintes équivalentes pendant l’assemblage.','Des comparaisons paramétriques peuvent ensuite relier les changements de géométrie ou de matériau à la formation de l’interlock, aux déplacements et aux concentrations de contraintes.']}
    ],
    results:['Le modèle EF 2D reproduit la forme caractéristique de l’interverrouillage et le champ de déformation fortement localisé associé.','Le projet démontre la modélisation de contact non linéaire et l’interprétation d’un procédé de fabrication plutôt qu’un simple calcul statique de contraintes.'],
    limitations:['Le portfolio contient le visuel du projet mais pas de rapport PDF autonome complet.','Les conclusions quantitatives sur la qualité de l’assemblage doivent être liées à la loi matériau, au modèle de frottement et aux conditions de formage exacts.']
  }
}

const deStudies: Record<string, StudyText> = {
  'neural-driving-neuroevolution': {
    title:'Neural Driving — Neuroevolution', domain:'KI · Regelung · Optimierung',
    summary:'Vollständiges 2D-Autonomous-Driving-Experiment von Grund auf: Fahrzeugdynamik, neun Abstandssensoren, explizites MLP und genetische Optimierung sämtlicher Netzwerkparameter.',
    question:'Kann ein expliziter neuronaler Regler eine robuste Rennstrategie lernen, wenn sowohl Simulator als auch Optimierer vollständig selbst implementiert werden?',
    metrics:[{label:'MLP-Architektur'},{label:'optimierte skalare Parameter'},{label:'Zwei-Runden-Finisher / 50 über 10 Generationen'},{label:'unabhängig wiedergegebener Zwei-Runden-Champion'}],
    sections:[
      {title:'Regler & Sensorik',body:['Neun Abstandssensoren plus normierte Geschwindigkeit bilden die zehn Eingänge des Netzes. Das MLP gibt Lenken, Gas und Bremse aus. Es erhält weder globale Ideallinie noch absolute Position oder versteckte Zielrichtung.','Das Standardnetz enthält 263 skalare Gewichte und Biases. Das Training nutzt weder TensorFlow noch PyTorch, automatische Differentiation oder Backpropagation.']},
      {title:'Evolutionäre Optimierung',body:['Eine Population von Reglern wird im Simulator bewertet, nach Fitness sortiert und mit Turnierselektion, Elitismus, uniformem Crossover, Gauß-Mutation und zufälligen Immigranten weiterentwickelt.','Das Fitnessdesign verhindert einfache Exploits: geordnete Checkpoints müssen physisch überquert werden, Rückwärtsfahrt wird bestraft und beendete Rennen rangieren über unvollständigen Trajektorien.']},
      {title:'Verifikation',body:['Das Projekt enthält Regressionstests für Fahrzeugdynamik, Geometrie, Sensorik, Kollision, Checkpointlogik, Serialisierung, Elitenerhalt und Benutzeroberfläche. Der finale Validierungslog meldet 37 bestandene Tests.','Der gespeicherte Champion wird headless erneut abgespielt, um zu prüfen, dass die serialisierten Parameter das gespeicherte Rennergebnis reproduzieren und nicht nur der In-Memory-Zustand während des Trainings.']}
    ],
    results:['Im Hauptversuch mit 50 Fahrzeugen und 10 Generationen steigt die Zahl der Zwei-Runden-Finisher von 2 auf 33, während Kollisionen von 48 auf 17 fallen.','Die beste Zwei-Runden-Zeit verbessert sich von etwa 15,49 s auf 14,45 s; eine spätere Fitnessverfeinerung reduziert die reale Zeit auf ungefähr 14,41 s.','Das stärkste Ergebnis ist Robustheit auf Populationsebene: die Finisher-Rate steigt von 4 % auf 66 %.'],
    limitations:['Das Training erfolgt überwiegend auf einer festen Strecke und einem Startpunkt; ein unabhängiger Cross-Track-Generalisationstest fehlt.','Die Fahrzeugphysik ist vereinfacht und enthält kein physikalisches Reifenmodell, keine Federung und keinen Lasttransfer.','Die Policy ist speicherlos und beobachtet weder Gierrate noch Schräglaufwinkel direkt.','Genetische Optimierung ist im Vergleich zu gradientenbasierten Verfahren sample-ineffizient, sofern Gradienten verfügbar sind.'],
    equationLabel:'Neuroevolution behandelt den gesamten Simulator als Black-Box-Abbildung von Netzwerkparametern auf einen skalaren Fitnesswert.'
  },
  'brake-disc-thermomechanics': {
    title:'Thermomechanik einer Bremsscheibe', domain:'Transiente Thermik + Struktur-FEM',
    summary:'Die Energie einer Notbremsung wird in einen transienten Wärmestrom überführt, gefolgt von Netzsensitivitätsanalyse und thermoelastischer Verformung am Ende der Bremsung.',
    question:'Wie erzeugt ein kurzer Hochleistungs-Bremsvorgang thermische Gradienten und axiale thermoelastische Verformung in einer Bremsscheibe?',
    metrics:[{label:'Bremsung in 4 s'},{label:'einer vorderen Bremsscheibe zugeordnete Energie'},{label:'anfänglich aufgebrachter Wärmestrom'},{label:'Elemente im feinsten berechneten Netz'}],
    gallery:[
      {title:'Transientes Temperaturfeld',caption:'Temperaturfeld während / nach der Bremsung zur Verfolgung der Wärmediffusion von den Reibflächen in den Topf.'},
      {title:'Thermoelastische Verformung',caption:'Bei 4 s übertragenes Temperaturfeld im Strukturmodell mit konusartiger axialer Verformung.'}
    ],
    sections:[
      {title:'Thermische Belastung',body:['Ein 1500-kg-Fahrzeug wird in 4 s von 100 km/h zum Stillstand gebremst. Nach Vorderachsanteil, Aufteilung auf zwei Scheiben, Rotationsmassenfaktor und Energieanteil der Scheibe erhält eine vordere Scheibe etwa 191 kJ.','Der Wärmestrom wird auf beide Reibflächen aufgeprägt und fällt während der 4 s linear von rund 1,18 MW/m² auf null ab.']},
      {title:'Netzsensitivität',body:['Fünf Netze von 616 bis 72.512 Elementen werden geprüft. Bei 60 s liegen die letzten Änderungen unter 0,4 %, während die Spitzentemperatur bei 4 s zwischen M4 und M5 noch um 3,39 % variiert.','Das Ergebnis wird daher als teilweise konvergiert dargestellt: ausreichend für das langfristige Temperaturfeld, aber am Bremspeak noch netzsensitiv.']},
      {title:'Thermomechanische Kopplung',body:['Das Temperaturfeld bei 4 s wird in eine Strukturanalyse übertragen. Das Modell sagt eine konusartige axiale Verformung mit maximalem Gesamtweg von etwa 3,03×10⁻⁵ m und minimalem Axialweg von etwa −1,15×10⁻⁵ m voraus.','Eine vollständig fixierte Nabenrandbedingung wird bewusst als starke Annahme ausgewiesen, die thermische Spannungen überschätzen und die Verformungsform beeinflussen kann.']}
    ],
    results:['Die Temperatur erreicht ihr Maximum ungefähr am Ende der Bremsung; anschließend verteilt sich Wärme in Richtung Topf, während Konvektion die freien Oberflächen kühlt.','Das berichtete transiente Feld erreicht in der Endtabelle ungefähr 115 °C bei 4 s und 86 °C bei 60 s.','Die langfristige thermische Konvergenz ist zufriedenstellend, der 4-s-Peak bleibt teilweise netzabhängig.','Die gekoppelte Strukturlösung zeigt eine konusartige axiale Verformung im Bereich einiger zehn Mikrometer.'],
    limitations:['Der Konvektionskoeffizient wird als einheitlicher Mittelwert vorgegeben und nicht aus einer separaten Luftströmungs-CFD bestimmt.','Der thermische 4-s-Peak ist wegen der ANSYS-Student-Modellgrößenbegrenzung nicht vollständig netzkonvergent.','Die Struktur-Randbedingung ist steif und kann freie thermische Ausdehnung übermäßig einschränken.'],
    equationLabel:'Transiente Wärmeleitungsgleichung für das Temperaturfeld vor der thermoelastischen Übertragung.'
  },
  'heated-pipe-thermomechanics': {
    title:'Thermomechanik eines beheizten Rohres', domain:'Stationäre Thermikanalyse',
    summary:'Ein heißes inneres Fluid treibt radiale Wärmeleitung durch eine zylindrische Wand und liefert eine kompakte Studie zu Konvektionsrandbedingungen und behinderter thermischer Ausdehnung.',
    question:'Wie erzeugt ein heißes inneres Fluid ein radiales Temperaturfeld und — bei behinderter Ausdehnung — thermisch induzierte Spannungen?',
    metrics:[{label:'Temperaturbereich im bereitgestellten Thermikergebnis'}],
    sections:[
      {title:'Thermisches Modell',body:['Die Innenwand wird durch die Randbedingung des heißen Fluids belastet; Wärme leitet radial durch die Wand und wird an der Außenseite abgeführt.','Das Temperaturfeld wird damit durch das Zusammenspiel von Konvektionswiderständen an Fluid/Wand-Grenzen und Wärmeleitwiderstand des Festkörpers bestimmt.']},
      {title:'Mechanische Interpretation',body:['Bei einem freien Rohr führt ein nahezu homogener Temperaturanstieg hauptsächlich zu Ausdehnung. Wird axiale oder radiale Ausdehnung behindert, wird die thermische Dehnung α(T−T0) in mechanische Spannung überführt.','Die Studie isoliert bewusst die Logik der thermischen Randbedingungen, bevor komplexere Geometrie oder nichtlineares Materialverhalten hinzukommen.']}
    ],
    results:['Das bereitgestellte stationäre Thermikergebnis reicht über die Rohrwand von ungefähr 66,9 °C bis 84,8 °C.','Der heißere Innenbereich und der kühlere Außenbereich erzeugen den radialen Temperaturgradienten, der in einem gekoppelten Strukturmodell differentielle thermische Dehnung treiben würde.'],
    limitations:['Das Portfolio zeigt eine kompakte ANSYS-Studie und kein experimentell validiertes Modell.','Spannungswerte sollten nur zusammen mit den tatsächlich verwendeten mechanischen Randbedingungen und Werkstoffkennwerten veröffentlicht werden.'],
    equationLabel:'Thermische Dehnung wird nur insoweit zu Spannung, wie freie Ausdehnung behindert wird.'
  },
  'sheet-metal-interlock': {
    title:'Blech-Fügeverbindung mit mechanischem Interlock', domain:'Nichtlineare FEM · Abaqus',
    summary:'Kontaktberechnung mit großen Verformungen eines mechanischen Fügevorgangs, inklusive deformiertem Netz, von-Mises-Spannung und Bewertung der Interlock-Qualität.',
    question:'Wie bestimmen Kontakt, plastisches Fließen und lokale Geometrie, ob eine Blechverbindung einen tragfähigen mechanischen Interlock ausbildet?',
    sections:[
      {title:'Prozessmodell',body:['Der Fügevorgang ist stark nichtlinear: die Bleche erfahren große plastische Verformungen, während sich die Kontaktzonen über den Umformhub verändern.','Halsdicke, Blechdicke und Interlock-Geometrie dienen als mechanische Qualitätskennwerte statt nur die Endform zu betrachten.']},
      {title:'FEM-Interpretation',body:['Das deformierte Netz zeigt, wo Material um Stempel-/Matrizengeometrie herum verdrängt wird, während die von-Mises-Spannung die Zonen mit den höchsten Vergleichsspannungen während des Fügens sichtbar macht.','Parametrische Vergleiche können anschließend Geometrie- oder Materialänderungen mit Interlockbildung, Verschiebung und lokalen Spannungskonzentrationen verknüpfen.']}
    ],
    results:['Das 2D-FEM-Modell bildet die charakteristische mechanische Interlock-Geometrie und das stark lokalisierte Verformungsfeld ab.','Das Projekt demonstriert nichtlineare Kontaktmodellierung und Prozessinterpretation statt einer einfachen statischen Spannungsrechnung.'],
    limitations:['Das aktuelle Portfolio-Paket enthält die Projektvisualisierung, aber keinen eigenständigen vollständigen PDF-Bericht.','Quantitative Aussagen zur Fügequalität müssen an die konkrete Materialkurve, das Reibmodell und die Umformrandbedingungen gekoppelt werden.']
  }
}

function mergeProject(base: Project, t?: ProjectText): Project {
  if (!t) return base
  return {
    ...base,
    ...t,
    metrics: base.metrics?.map((m, i) => ({ ...m, ...(t.metrics?.[i] ?? {}) })),
    gallery: base.gallery?.map((g, i) => ({ ...g, ...(t.gallery?.[i] ?? {}) })),
    sections: t.sections ?? base.sections,
  }
}

function mergeStudy(base: Study, t?: StudyText): Study {
  if (!t) return base
  return {
    ...base,
    ...t,
    metrics: base.metrics?.map((m, i) => ({ ...m, ...(t.metrics?.[i] ?? {}) })),
    gallery: base.gallery?.map((g, i) => ({ ...g, ...(t.gallery?.[i] ?? {}) })),
    sections: t.sections ?? base.sections,
  }
}

export function localizeProject(project: Project, lang: Lang): Project {
  if (lang === 'fr') return mergeProject(project, frProjects[project.slug])
  if (lang === 'de') return mergeProject(project, deProjects[project.slug])
  return project
}

export function localizeStudy(study: Study, lang: Lang): Study {
  if (lang === 'fr') return mergeStudy(study, frStudies[study.slug])
  if (lang === 'de') return mergeStudy(study, deStudies[study.slug])
  return study
}
