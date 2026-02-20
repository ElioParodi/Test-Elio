import { ChecklistItem } from './types';
import { 
  Key, BarChart, AlignLeft, GitMerge, 
  Target, ArrowUpCircle, Link as LinkIcon, 
  BookOpen, Sparkles, Hammer, Layout, ShieldCheck, 
  Image as ImageIcon, Calendar, RefreshCw, Feather, Ruler, 
  CheckCheck, Zap, Fingerprint, Type, 
  Tags, ListOrdered, Heading1, FileSearch, 
  Link2, UserCheck, Eye, Images, HardDriveDownload,
  FileText, TextCursor, Globe
} from 'lucide-react';

export const SEO_CHECKLIST_ITEMS: ChecklistItem[] = [
  // Keywords & Difficulty
  { 
    id: '1', text: 'Parola chiave principale selezionata', category: 'keyword', value: 150, icon: Key,
    whatIsIt: "È il termine o la frase esatta che le persone scrivono su Google per trovare il tuo articolo.",
    purpose: "Senza una parola chiave, Google non sa per quale ricerca mostrare il tuo contenuto.",
    howToCheck: "Chiediti: 'Cosa scriverei io su Google per trovare questo pezzo?' Quella è la tua parola chiave."
  },
  { 
    id: '2', text: 'Difficoltà parola chiave non troppo elevata', category: 'keyword', value: 150, icon: BarChart,
    whatIsIt: "Indica quanto sono forti i siti che sono già in prima pagina per quella parola.",
    purpose: "Se provi a battere giganti come Wikipedia o Amazon senza avere un sito enorme, non verrai mai visto.",
    howToCheck: "Cerca la parola su Google. Se i primi 10 risultati sono tutti siti famosissimi, la difficoltà è troppo alta."
  },
  { 
    id: '4', text: 'Keyword nelle prime 100 parole', category: 'keyword', value: 150, icon: AlignLeft,
    whatIsIt: "Significa inserire la parola principale proprio all'inizio del testo.",
    purpose: "Google dà molta importanza all'inizio dell'articolo per capire subito di cosa si parla.",
    howToCheck: "Rileggi l'introduzione. La parola chiave appare nel primo o secondo paragrafo?"
  },
  { 
    id: '5', text: 'Assenza di cannibalizzazione', category: 'keyword', value: 200, icon: GitMerge,
    whatIsIt: "Accade quando hai due o più pagine del tuo sito che parlano della stessa identica cosa.",
    purpose: "Confondi Google perché non sa quale delle tue pagine scegliere, e finisce per non sceglierne nessuna.",
    howToCheck: "Cerca su Google 'site:tuosito.it parola chiave'. Se esce più di una pagina simile, c'è un problema."
  },
  
  // Entities
  { 
    id: '6', text: "Entità principale selezionata", category: 'content', value: 200, icon: Target,
    whatIsIt: "L'entità è l'argomento centrale (es. 'Pasta alla Carbonara' non è solo una parola, è un concetto).",
    purpose: "Google non legge solo parole, ma capisce i concetti per darti risultati più precisi.",
    howToCheck: "Il tuo articolo parla chiaramente di un concetto specifico o è un mix confuso di tanti temi?"
  },
  { 
    id: '8', text: 'Entità principale nel primo paragrafo', category: 'content', value: 200, icon: ArrowUpCircle,
    whatIsIt: "Mettere il concetto chiave subito all'inizio.",
    purpose: "Conferma immediatamente al lettore e a Google di essere nel posto giusto.",
    howToCheck: "Leggi la prima riga. Si capisce subito di cosa parla l'articolo?"
  },
  { 
    id: '10', text: "Link a pagine collegate all'entità", category: 'structure', value: 150, icon: LinkIcon,
    whatIsIt: "Mettere dei collegamenti (link) verso altre tue pagine che approfondiscono l'argomento.",
    purpose: "Crea una ragnatela di contenuti che rende il tuo sito un'autorità su quel tema.",
    howToCheck: "Controlla se ci sono scritte cliccabili che portano ad altri tuoi articoli correlati."
  },
  
  // Content Quality
  { 
    id: '13', text: 'Struttura tipo Wikipedia?', category: 'structure', value: 50, icon: BookOpen,
    whatIsIt: "Un testo diviso in paragrafi chiari con un indice all'inizio.",
    purpose: "Rende la lettura facile e veloce. A Google piace l'ordine.",
    howToCheck: "L'articolo ha un indice cliccabile? È diviso in capitoli con titoli chiari?"
  },
  { 
    id: '14', text: 'Contenuto con informazioni uniche', category: 'content', value: 150, icon: Sparkles,
    whatIsIt: "Dire qualcosa che gli altri non dicono, basato sulla tua esperienza.",
    purpose: "Google non vuole 10 copie dello stesso articolo. Premia chi aggiunge valore.",
    howToCheck: "C'è un consiglio, un dato o una storia nel testo che hai vissuto solo tu?"
  },
  { 
    id: '17', text: 'Contenuto che ha richiesto impegno', category: 'content', value: 100, icon: Hammer,
    whatIsIt: "Si vede se un testo è stato generato in 2 secondi dall'AI o se è stato studiato.",
    purpose: "I testi troppo pigri o banali vengono ignorati da Google.",
    howToCheck: "Il testo è ricco di dettagli, esempi e spiegazioni approfondite?"
  },
  { 
    id: '18', text: 'In linea con il tema del sito', category: 'content', value: 100, icon: Layout,
    whatIsIt: "L'argomento deve essere coerente con quello che vendi o tratti di solito.",
    purpose: "Se un blog di cucina parla improvvisamente di pneumatici, Google perde fiducia.",
    howToCheck: "Questo articolo 'c'entra' con il resto del tuo sito?"
  },
  { 
    id: '20', text: 'Fonti affidabili citate', category: 'content', value: 80, icon: ShieldCheck,
    whatIsIt: "Link che portano a siti ufficiali o molto famosi (es. giornali, università).",
    purpose: "Dà credibilità a quello che scrivi: non lo stai inventando, lo dicono anche gli esperti.",
    howToCheck: "Hai messo dei link verso siti esterni che confermano i tuoi dati?"
  },
  
  // Engagement & Technical
  { 
    id: '21', text: 'Elementi oltre al testo (Img, Video)', category: 'content', value: 80, icon: ImageIcon,
    whatIsIt: "Inserire immagini, grafici, video o podcast dentro l'articolo.",
    purpose: "Rende la pagina meno noiosa e trattiene gli utenti più a lungo.",
    howToCheck: "Scorri la pagina. Vedi solo testo o ci sono anche figure e video?"
  },
  { 
    id: '22', text: "Data dell'articolo recente", category: 'meta', value: 80, icon: Calendar,
    whatIsIt: "La data di pubblicazione o di ultimo aggiornamento.",
    purpose: "A nessuno piace leggere notizie vecchie. Google preferisce la freschezza.",
    howToCheck: "La data è visibile? È di quest'anno o almeno dell'anno scorso?"
  },
  { 
    id: '23', text: "Date aggiornate nel testo", category: 'meta', value: 80, icon: RefreshCw,
    whatIsIt: "Controllare che non ci siano riferimenti a anni passati (es. 'Migliori corsi 2021').",
    purpose: "Evita di sembrare un sito abbandonato a chi legge.",
    howToCheck: "Usa la funzione 'Trova' (Ctrl+F) e cerca anni passati (2022, 2023)."
  },
  { 
    id: '24', text: 'Frasi semplici e chiare', category: 'content', value: 30, icon: Feather,
    whatIsIt: "Evitare periodi lunghissimi e parole troppo complicate.",
    purpose: "Più è facile da leggere, più è probabile che l'utente arrivi alla fine.",
    howToCheck: "Leggi una frase ad alta voce. Se ti manca il fiato prima della fine, è troppo lunga."
  },
  { 
    id: '25', text: 'Lunghezza comparabile alla concorrenza', category: 'content', value: 80, icon: Ruler,
    whatIsIt: "Il numero totale di parole dell'articolo.",
    purpose: "Se tutti i siti in prima pagina scrivono 2000 parole e tu ne scrivi 200, non puoi competere.",
    howToCheck: "Guarda a occhio i primi 3 risultati di Google. Il tuo articolo sembra lungo uguale?"
  },
  { 
    id: '26', text: 'Assenza di errori di ortografia', category: 'content', value: 20, icon: CheckCheck,
    whatIsIt: "Nessun errore di battitura o di grammatica.",
    purpose: "Gli errori fanno sembrare il sito poco serio e inaffidabile.",
    howToCheck: "Usa un correttore automatico (come quello di Word o del browser)."
  },
  { 
    id: '27', text: "Informazioni utili all'inizio", category: 'structure', value: 150, icon: Zap,
    whatIsIt: "Dare la risposta alla domanda dell'utente subito, senza girarci intorno.",
    purpose: "Evita che l'utente scappi via perché non trova subito quello che cerca.",
    howToCheck: "La risposta principale si trova entro i primi due paragrafi?"
  },
  { 
    id: '28', text: 'Informazioni uniche extra', category: 'content', value: 150, icon: Fingerprint,
    whatIsIt: "Aggiungere dettagli che nessun altro concorrente ha messo.",
    purpose: "Ti rende il miglior risultato possibile su Google per quella ricerca.",
    howToCheck: "Apri i primi 3 siti su Google. Il tuo pezzo ha qualcosa in più rispetto a loro?"
  },
  
  // Titles & Headings
  { 
    id: '30', text: 'Titolo SEO friendly', category: 'meta', value: 80, icon: Type,
    whatIsIt: "Il titolo che appare su Google (diverso spesso da quello dell'articolo).",
    purpose: "Deve convincere la gente a cliccare sul tuo sito invece che su un altro.",
    howToCheck: "Il titolo contiene la parola chiave? È invitante o è noioso?"
  },
  { 
    id: '31', text: 'Parole chiave correlate nel testo', category: 'keyword', value: 100, icon: Tags,
    whatIsIt: "Sinonimi e varianti della parola principale.",
    purpose: "Dimostra che il testo è naturale e non una ripetizione meccanica della stessa parola.",
    howToCheck: "Hai usato sinonimi della tua parola chiave durante l'articolo?"
  },
  { 
    id: '32', text: 'Intestazioni gerarchiche', category: 'structure', value: 100, icon: ListOrdered,
    whatIsIt: "L'uso corretto di H1, H2, H3 (come i titoli dei capitoli di un libro).",
    purpose: "Aiuta Google e l'utente a capire la struttura logica del testo.",
    howToCheck: "C'è un solo H1? Gli H2 dividono i capitoli? Gli H3 sono sotto-capitoli?"
  },
  { 
    id: '33', text: 'H1 scritto con entità secondarie', category: 'structure', value: 100, icon: Heading1,
    whatIsIt: "Il titolo principale (H1) che contiene anche concetti correlati.",
    purpose: "Rende il titolo più ricco e comprensibile per Google.",
    howToCheck: "Il tuo titolo principale è completo o è troppo corto?"
  },
  
  // Meta & Url
  { 
    id: '35', text: 'Meta descrizione ottimizzata', category: 'meta', value: 30, icon: FileSearch,
    whatIsIt: "Il testo grigio che vedi sotto il titolo nei risultati di ricerca.",
    purpose: "Serve a promettere all'utente che troverà quello che cerca cliccando.",
    howToCheck: "È lunga circa due righe? Contiene una 'chiamata all'azione' come 'Scoprilo ora'?"
  },
  { 
    id: '36', text: "Slug URL breve e leggibile", category: 'meta', value: 30, icon: Link2,
    whatIsIt: "L'ultima parte dell'indirizzo web (es. /guida-seo-carbonara).",
    purpose: "Gli URL puliti sono più facili da condividere e piacciono di più a Google.",
    howToCheck: "L'indirizzo è corto e senza numeri strani o date?"
  },
  { 
    id: '37', text: 'Autore conosciuto nel settore', category: 'meta', value: 250, icon: UserCheck,
    whatIsIt: "Chi ha scritto l'articolo deve avere un nome e una reputazione.",
    purpose: "Google si fida di più se l'articolo è scritto da un esperto reale.",
    howToCheck: "C'è un box autore con foto e una breve biografia alla fine?"
  },

  // Links & Scannability
  { id: '38', text: "C'è almeno un link ad altri blog/siti web o risorse esterne", category: 'structure', value: 30, icon: Globe,
    whatIsIt: "Collegamenti verso siti web diversi dal tuo.",
    purpose: "Aiuta Google a capire in quale 'quartiere' del web si trova il tuo sito.",
    howToCheck: "Hai citato almeno un sito autorevole esterno?"
  },
  { id: '39', text: "Ci sono link ad almeno uno dei post del blog e/o a una landing page", category: 'structure', value: 100, icon: Link2,
    whatIsIt: "Collegamenti che portano ad altre pagine del tuo stesso sito.",
    purpose: "Aiuta a vendere i tuoi servizi o a far leggere altri tuoi articoli.",
    howToCheck: "Hai messo dei link verso i tuoi prodotti o servizi?"
  },
  { id: '41', text: "Immagini sono pertinenti al contenuto", category: 'content', value: 20, icon: ImageIcon,
    whatIsIt: "Foto che mostrano davvero quello di cui stai parlando.",
    purpose: "Google analizza le immagini. Se parli di cani e metti foto di gatti, si confonde.",
    howToCheck: "Le immagini aiutano a capire meglio il testo?"
  },
  { id: '42', text: "Scannability (colpo d'occhio)", category: 'structure', value: 30, icon: Eye,
    whatIsIt: "La capacità di capire il senso dell'articolo scorrendolo in 5 secondi.",
    purpose: "Oggi nessuno legge tutto subito. Tutti 'scansionano' con gli occhi.",
    howToCheck: "Riesci a capire di cosa parla il post guardando solo titoli e immagini?"
  },
  { id: '43', text: "Utilizziamo le immagini in modo appropriato con la giusta frequenza", category: 'content', value: 30, icon: Images,
    whatIsIt: "Non troppe, non troppo poche. Circa una ogni 300-400 parole.",
    purpose: "Mantiene il ritmo della lettura costante.",
    howToCheck: "C'è un muro di testo troppo lungo senza interruzioni visive?"
  },
  
  // Image Technical (Simple)
  { id: '44', text: "Le immagini sono < 100 kb", category: 'technical', value: 20, icon: HardDriveDownload,
    whatIsIt: "Il peso del file dell'immagine.",
    purpose: "Immagini pesanti rallentano il sito. Un sito lento fa perdere posizioni.",
    howToCheck: "Controlla le proprietà del file immagine. Se è sopra i 500kb o 1MB, è troppo pesante."
  },
  { id: '45', text: "Il nome delle immagini è descrittivo e contiene parole chiave", category: 'technical', value: 10, icon: FileText,
    whatIsIt: "Chiamare l'immagine 'ricetta-carbonara.jpg' invece di 'IMG_1234.jpg'.",
    purpose: "Aiuta Google Immagini a capire cosa c'è nella foto.",
    howToCheck: "Come hai salvato il file sul computer prima di caricarlo?"
  },
  { id: '46', text: "L'attributo alt dell'immagine è descrittivo e contiene parole chiave", category: 'technical', value: 20, icon: TextCursor,
    whatIsIt: "Una breve descrizione testuale inserita nelle impostazioni dell'immagine.",
    purpose: "Fondamentale per i non vedenti e per Google quando non può 'vedere' la foto.",
    howToCheck: "Nelle impostazioni dell'immagine sul tuo sito, hai compilato il campo 'Testo Alternativo'?"
  },
];

export const CATEGORY_COLORS = {
  keyword: 'bg-blue-50 text-blue-700 border-blue-200',
  content: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  structure: 'bg-purple-50 text-purple-700 border-purple-200',
  meta: 'bg-amber-50 text-amber-700 border-amber-200',
  technical: 'bg-slate-50 text-slate-700 border-slate-200',
};

export const CATEGORY_LABELS = {
  keyword: 'Parole Chiave',
  content: 'Qualità Contenuto',
  structure: 'Struttura',
  meta: 'Meta & Autore',
  technical: 'Tecnica',
};