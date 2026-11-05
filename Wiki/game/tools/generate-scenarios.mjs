import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "..");
const outDir = path.join(root, "04 Scenarios");

const taskMeta = {
  victim: { number: 1, label: "Victim", question: "Who was the victim?" },
  method: { number: 2, label: "Method", question: "How were they killed?" },
  scene: { number: 3, label: "Scene", question: "Where and how was the scene staged?" },
  motive: { number: 4, label: "Motive", question: "Why did the cult want them dead?" },
};

const itemLink = (name) => `[[Item Catalog#${name}|${name}]]`;

const cards = [
  {
    id: "S01",
    title: "The Founder's Debt",
    difficulty: "Medium",
    word: "BLACK",
    victim: {
      name: "Arthur Vale",
      role: "Industrialist",
      why: "He funded the 1926 expedition and knew what the cult buried under the lodge.",
      profile: "Sixties, expensive coat, a ledger in every room, a man who bought silence by the acre. He is not a guest; he is a creditor.",
    },
    motive: "Silence",
    weapon: "Ice pick",
    scene: "The Study",
    signature: "A silver coin placed on each eye",
    redHerring: "A forged will leaving the estate to the Hollow Court",
    staging: "The body is seated in the study chair, facing the fire, with the coin on each eye and the ice pick wiped clean on the blotter. The killer leaves the letter opener on the rug as the obvious weapon.",
    tasks: {
      victim: {
        options: ["Arthur Vale", "Julian Rook", "Marguerite Hale"],
        answer: "Arthur Vale",
        free: "A scorched invitation; the visible letters are '...VALE'. The rest is ash.",
        eliminates: "Marguerite Hale",
        item: "The camera flash reveals the full guest list: Arthur Vale, room 3, invited by Elias.",
        itemName: "Camera",
        intent: "The free clue gives a partial name; the camera turns the invitation into a guest list.",
      },
      method: {
        options: ["Ice pick", "Letter opener", "Laudanum"],
        answer: "Ice pick",
        free: "A bloody letter opener lies beside the body; the blood is smeared, not sprayed.",
        eliminates: "Laudanum",
        item: "The magnifying glass shows a narrow triangular wound; the letter opener's blade is flat.",
        itemName: "Magnifying Glass",
        intent: "The obvious weapon is a plant. The wound shape is the tell.",
      },
      scene: {
        options: ["The Study", "The Chapel", "The Ballroom"],
        answer: "The Study",
        free: "The room smells of wax and old paper; a chair is pulled out.",
        eliminates: "The Ballroom",
        item: "The UV torch reveals a thin blood trail leading to the study desk, and a sigil under the rug.",
        itemName: "UV Torch",
        intent: "The trail makes the room a route, not just a location.",
      },
      motive: {
        options: ["Silence", "Money", "Revenge"],
        answer: "Silence",
        free: "A torn ledger page with a circled debt; the ink is fresh.",
        eliminates: "Revenge",
        item: "The cipher wheel decodes a letter: Vale threatened to expose the 1926 expedition unless the cult paid him.",
        itemName: "Cipher Wheel",
        intent: "The debt looks like money; the decoded letter reveals it is blackmail for silence.",
      },
    },
    npc: {
      Finch: "Saw Vale enter the study at 6:40; heard a coin drop at 7:05.",
      Ada: "Found the door open at 7:10; the fire was still lit.",
      Cook: "The cellar door was unlocked; a bottle of 1926 wine is missing.",
      Silas: "The woods path was muddy; a man in a good coat came from the study window.",
      Rook: "Drove Vale from the station; Vale was carrying a black ledger.",
    },
    epilogue: "The ledger was the only honest thing in the house.",
    notes: "Best tutorial card. The free clues are clear; the item clues are one step deeper. Use it as the default for a new killer.",
  },
  {
    id: "S02",
    title: "The Senator's Silence",
    difficulty: "Hard",
    word: "NIGHT",
    victim: {
      name: "Marguerite Hale",
      role: "Senator",
      why: "She chaired the committee that buried the 1936 investigation.",
      profile: "Fifties, red coat, a cigarette holder, a voice used to rooms that agree with her. She came to reopen a file, not to attend a party.",
    },
    motive: "Political exposure",
    weapon: "Bell cord",
    scene: "The Chapel",
    signature: "A bell rope tied in a hangman's knot",
    redHerring: "A letter from a rival senator threatening her",
    staging: "The body is laid across the altar steps, the bell rope around the neck, the chapel bell cracked once. The rival senator's letter is placed in her coat pocket.",
    tasks: {
      victim: {
        options: ["Marguerite Hale", "Arthur Vale", "Dr. Amos Crane"],
        answer: "Marguerite Hale",
        free: "A monogrammed cigarette case: 'M.H.'; the third letter is worn.",
        eliminates: "Arthur Vale",
        item: "The notebook cross-references the guest list; she signed the 1936 closure.",
        itemName: "Notebook",
        intent: "The initials are not enough; the notebook ties her to the cover-up.",
      },
      method: {
        options: ["Bell cord", "Ice pick", "Candlestick"],
        answer: "Bell cord",
        free: "A broken bell rope; the bell itself is cracked.",
        eliminates: "Candlestick",
        item: "The magnifying glass shows rope fibers in the neck wound; the cord matches.",
        itemName: "Magnifying Glass",
        intent: "The cracked bell is a sound clue; the fibers are the proof.",
      },
      scene: {
        options: ["The Chapel", "The Study", "The Ballroom"],
        answer: "The Chapel",
        free: "A hymn book open to the 23rd Psalm; the chapel door is ajar.",
        eliminates: "The Study",
        item: "The UV torch reveals a trail from the side door to the altar; a sigil under the pew.",
        itemName: "UV Torch",
        intent: "The chapel is sealed until midnight; the body was staged before the seal. The crypt stair is the killer's route.",
      },
      motive: {
        options: ["Political exposure", "Money", "Revenge"],
        answer: "Political exposure",
        free: "A torn committee memo; the word 'bury' is circled.",
        eliminates: "Revenge",
        item: "The cipher wheel decodes a note: she was going to reopen the 1936 file.",
        itemName: "Cipher Wheel",
        intent: "The memo looks like money; the decoded note is about the file.",
      },
    },
    npc: {
      Finch: "She arrived late; asked for the chapel key.",
      Ada: "Heard the bell ring once at 11:40; no one was in the bell tower.",
      Cook: "She ate nothing; drank only water.",
      Silas: "Saw a woman in a red coat walk to the chapel.",
      Rook: "She asked him to wait by the car; she never came back.",
    },
    epilogue: "The committee closed the file again. The bell did not.",
    notes: "Hard card: the chapel is sealed until midnight. The killer must stage before the seal and use the crypt stair or the side door.",
  },
  {
    id: "S03",
    title: "The Journalist's Last Column",
    difficulty: "Medium",
    word: "THORN",
    victim: {
      name: "Julian Rook",
      role: "Investigative journalist",
      why: "He found the 1936 guest list and the tenth name.",
      profile: "Thirties, wet coat, a press card in his hat, a brother who drives the family car. He came to print the truth, not to survive it.",
    },
    motive: "Silence",
    weapon: "Typewriter ribbon",
    scene: "The Archive",
    signature: "Page nine circled in red ink",
    redHerring: "A suicide note typed on the victim's machine",
    staging: "The body is slumped over the archive desk, a typewriter ribbon around the neck, page nine of the 1936 file circled in red. The suicide note is still in the roller.",
    tasks: {
      victim: {
        options: ["Julian Rook", "Arthur Vale", "Nora Finch"],
        answer: "Julian Rook",
        free: "A press card with the name 'J. R...'; the rest is water-damaged.",
        eliminates: "Arthur Vale",
        item: "The camera flash reveals the press card and a photograph of the 1936 guests.",
        itemName: "Camera",
        intent: "The press card is the identity; the photograph is the story.",
      },
      method: {
        options: ["Typewriter ribbon", "Letter opener", "Laudanum"],
        answer: "Typewriter ribbon",
        free: "A typewriter with a broken ribbon; the keys are clean.",
        eliminates: "Laudanum",
        item: "The magnifying glass shows ink and ribbon fibers in the ligature mark.",
        itemName: "Magnifying Glass",
        intent: "The broken ribbon is the weapon and the clue.",
      },
      scene: {
        options: ["The Archive", "The Study", "The Attic"],
        answer: "The Archive",
        free: "A trail of paper scraps leads toward the archive; the attic stair is dusty.",
        eliminates: "The Attic",
        item: "The UV torch reveals a blood trail to the archive desk; a sigil inside a file drawer.",
        itemName: "UV Torch",
        intent: "The paper trail is the route; the archive is the room.",
      },
      motive: {
        options: ["Silence", "Money", "Revenge"],
        answer: "Silence",
        free: "A note: 'The tenth name is...' The rest is torn.",
        eliminates: "Money",
        item: "The cipher wheel decodes the victim's last column: he was going to print the tenth name.",
        itemName: "Cipher Wheel",
        intent: "The note is the hook; the column is the proof.",
      },
    },
    npc: {
      Finch: "He asked for the 1936 file; I told him it was sealed.",
      Ada: "He was in the archive all evening; he asked for more paper.",
      Cook: "He skipped dinner; took a bottle of ink to the archive.",
      Silas: "He walked to the woods and came back with a wet envelope.",
      Rook: "He was my brother. I drove him here. I did not see him after 9.",
    },
    epilogue: "The column ran the next morning. The byline was blank.",
    notes: "The chauffeur is emotionally compromised; he may lie to protect his brother, not the cult. His testimony is a red herring with a human cost.",
  },
  {
    id: "S04",
    title: "The Heiress's Inheritance",
    difficulty: "Easy",
    word: "CROWN",
    victim: {
      name: "Celia Blackwood",
      role: "Heiress",
      why: "She was going to sell the lodge and give the land back to the town.",
      profile: "Twenties, silver hairbrush, a deed in her coat, a niece's smile that never reaches her eyes. She is family, and family is the point.",
    },
    motive: "Inheritance",
    weapon: "Laudanum",
    scene: "The Master Suite",
    signature: "An antler hairpin placed on the pillow",
    redHerring: "A forged suicide note about debts",
    staging: "The body is in the master bed, the covers smooth, the antler hairpin on the pillow. The suicide note is on the nightstand, typed, not handwritten.",
    tasks: {
      victim: {
        options: ["Celia Blackwood", "Marguerite Hale", "Lena Voss"],
        answer: "Celia Blackwood",
        free: "A silver hairbrush engraved 'C.B.'; the monogram is clear.",
        eliminates: "Marguerite Hale",
        item: "The notebook matches the monogram to the Blackwood family tree.",
        itemName: "Notebook",
        intent: "The monogram is the surface; the family tree is the claim.",
      },
      method: {
        options: ["Laudanum", "Bell cord", "Ice pick"],
        answer: "Laudanum",
        free: "A glass with a bitter smell; no visible wound.",
        eliminates: "Ice pick",
        item: "The magnifying glass shows a residue in the glass; the label on the bottle is laudanum.",
        itemName: "Magnifying Glass",
        intent: "No wound, no struggle; the glass is the weapon.",
      },
      scene: {
        options: ["The Master Suite", "The Chapel", "The Ballroom"],
        answer: "The Master Suite",
        free: "A locked door; the key is on the inside.",
        eliminates: "The Ballroom",
        item: "The UV torch reveals a faint trail from the bed to the writing desk; a sigil under the pillow.",
        itemName: "UV Torch",
        intent: "The locked room is a stage; the trail shows the killer was inside.",
      },
      motive: {
        options: ["Inheritance", "Political exposure", "Revenge"],
        answer: "Inheritance",
        free: "A property deed with the town's name circled.",
        eliminates: "Revenge",
        item: "The cipher wheel decodes a letter from Elias: 'The land is not yours to give.'",
        itemName: "Cipher Wheel",
        intent: "The deed is the motive; the letter is the family warning.",
      },
    },
    npc: {
      Finch: "She retired early; asked not to be disturbed.",
      Ada: "The master suite door was locked; I heard a glass break.",
      Cook: "She asked for warm milk; I sent a maid.",
      Silas: "She walked the grounds at dusk; she seemed afraid of the woods.",
      Rook: "She asked me to drive her to town at dawn. She did not come out.",
    },
    epilogue: "The deed was never signed. The town never got the land.",
    notes: "Easy card for new killers: the body is in a private room, the clues are domestic, and the red herring is obvious.",
  },
  {
    id: "S05",
    title: "The Doctor's Confession",
    difficulty: "Hard",
    word: "GRAVE",
    victim: {
      name: "Dr. Amos Crane",
      role: "Physician",
      why: "He signed the 1936 death certificates and lied about the cause of death.",
      profile: "Sixties, black bag, clean hands, a bedside manner that has outlived its patients. He knows what nine bodies look like when the cause is a lie.",
    },
    motive: "Silence",
    weapon: "Surgical knife",
    scene: "The Cellar",
    signature: "Nine stitches on the left sleeve",
    redHerring: "A medical bag with a bottle of morphine",
    staging: "The body is propped against the wine rack, the surgical knife in the chest, nine stitches on the left sleeve. The morphine bottle is open on the floor.",
    tasks: {
      victim: {
        options: ["Dr. Amos Crane", "Arthur Vale", "Julian Rook"],
        answer: "Dr. Amos Crane",
        free: "A doctor's bag with the initials 'A.C.'; the lock is broken.",
        eliminates: "Julian Rook",
        item: "The camera flash reveals a prescription pad with the name Dr. Amos Crane.",
        itemName: "Camera",
        intent: "The bag is the role; the pad is the name.",
      },
      method: {
        options: ["Surgical knife", "Candlestick", "Bell cord"],
        answer: "Surgical knife",
        free: "A clean surgical kit; one blade is missing.",
        eliminates: "Candlestick",
        item: "The magnifying glass shows a thin, clean cut; the missing blade matches.",
        itemName: "Magnifying Glass",
        intent: "The missing blade is the weapon; the clean cut is the proof.",
      },
      scene: {
        options: ["The Cellar", "The Study", "The Chapel"],
        answer: "The Cellar",
        free: "A damp smell and a coal chute; the cellar door is open.",
        eliminates: "The Study",
        item: "The UV torch reveals a blood trail to the wine rack; a sigil behind the 1926 bottle.",
        itemName: "UV Torch",
        intent: "The cellar is a maze; the killer can use the coal chute as a second route.",
      },
      motive: {
        options: ["Silence", "Money", "Revenge"],
        answer: "Silence",
        free: "A death certificate with the cause blank.",
        eliminates: "Revenge",
        item: "The cipher wheel decodes a note: 'You signed nine. You will sign the tenth.'",
        itemName: "Cipher Wheel",
        intent: "The blank certificate is the cover-up; the note is the sentence.",
      },
    },
    npc: {
      Finch: "He arrived with a black bag; asked for the cellar key.",
      Ada: "He was in the cellar; he said he was checking the boiler.",
      Cook: "He asked for hot water and a clean towel.",
      Silas: "He asked about the old graves in the woods.",
      Rook: "He asked me to keep the car running; he seemed in a hurry.",
    },
    epilogue: "The certificate was signed in his own hand. The cause of death was 'unknown'.",
    notes: "Hard card: the cellar is a maze; the killer can use the coal chute as a second route. The morphine is a false motive.",
  },
  {
    id: "S06",
    title: "The Pianist's Encore",
    difficulty: "Medium",
    word: "ASHEN",
    victim: {
      name: "Lena Voss",
      role: "Pianist",
      why: "She played at the 1936 rite and saw the guests go down to the chapel.",
      profile: "Thirties, silver gown, a cigarette in the piano keys, a song she will not finish. She came back to play the encore she never gave.",
    },
    motive: "Silence",
    weapon: "Piano wire",
    scene: "The Ballroom",
    signature: "One piano key taped down",
    redHerring: "A smashed record of a love song",
    staging: "The body is behind the piano, the wire around the neck, one key taped down so the piano cannot play the final note. The record is smashed on the floor.",
    tasks: {
      victim: {
        options: ["Lena Voss", "Celia Blackwood", "Marguerite Hale"],
        answer: "Lena Voss",
        free: "A sheet of music with the name 'L. V...' in the corner.",
        eliminates: "Celia Blackwood",
        item: "The notebook matches the sheet music to the 1936 program.",
        itemName: "Notebook",
        intent: "The sheet is the name; the program is the history.",
      },
      method: {
        options: ["Piano wire", "Typewriter ribbon", "Laudanum"],
        answer: "Piano wire",
        free: "A piano with one string missing; the lid is open.",
        eliminates: "Laudanum",
        item: "The magnifying glass shows a thin wire mark on the neck; the missing string matches.",
        itemName: "Magnifying Glass",
        intent: "The missing string is the weapon; the wire mark is the proof.",
      },
      scene: {
        options: ["The Ballroom", "The Archive", "The Master Suite"],
        answer: "The Ballroom",
        free: "A champagne glass on the piano; the ballroom doors are open.",
        eliminates: "The Archive",
        item: "The UV torch reveals a blood trail behind the piano; a sigil inside the bench.",
        itemName: "UV Torch",
        intent: "The ballroom is public; the killer needs a distraction to stage the body.",
      },
      motive: {
        options: ["Silence", "Inheritance", "Revenge"],
        answer: "Silence",
        free: "A program from 1936 with the pianist's name circled.",
        eliminates: "Revenge",
        item: "The cipher wheel decodes a note: 'You played while they died. You will not play again.'",
        itemName: "Cipher Wheel",
        intent: "The program is the past; the note is the threat.",
      },
    },
    npc: {
      Finch: "She asked for the ballroom to be unlocked; she wanted to practice.",
      Ada: "I heard the piano at 8:15; it stopped mid-song.",
      Cook: "She drank champagne, not wine.",
      Silas: "The ballroom windows were open; the rain came in.",
      Rook: "She asked me to drive her to the station after the performance.",
    },
    epilogue: "The piano was in tune. No one had tuned it in ten years.",
    notes: "The ballroom is a public room; the killer needs a distraction. The taped key is the signature and the tell.",
  },
  {
    id: "S07",
    title: "The Priest's Apostasy",
    difficulty: "Hard",
    word: "SHADE",
    victim: {
      name: "Father Anselm",
      role: "Priest",
      why: "He tried to bless the chapel and break the cult's hold on the house.",
      profile: "Seventies, worn cassock, a rosary with a bent cross, a faith that has been in the house longer than the cult. He came to perform a blessing; he did not leave.",
    },
    motive: "Faith",
    weapon: "Candlestick",
    scene: "The Chapel",
    signature: "An inverted candle on the altar",
    redHerring: "A torn page from an exorcism manual",
    staging: "The body is at the altar, the candlestick beside it, the candle inverted and still burning. The exorcism page is torn and placed in the hymnal.",
    tasks: {
      victim: {
        options: ["Father Anselm", "Dr. Amos Crane", "Arthur Vale"],
        answer: "Father Anselm",
        free: "A rosary with the initials 'F.A.'; the cross is bent.",
        eliminates: "Dr. Amos Crane",
        item: "The notebook identifies the rosary as Father Anselm's.",
        itemName: "Notebook",
        intent: "The rosary is the identity; the notebook is the confirmation.",
      },
      method: {
        options: ["Candlestick", "Surgical knife", "Bell cord"],
        answer: "Candlestick",
        free: "A brass candlestick with a dent; wax on the floor.",
        eliminates: "Surgical knife",
        item: "The magnifying glass shows brass residue in the wound.",
        itemName: "Magnifying Glass",
        intent: "The dent is the weapon; the brass residue is the proof.",
      },
      scene: {
        options: ["The Chapel", "The Cellar", "The Study"],
        answer: "The Chapel",
        free: "A hymn book open to the 23rd Psalm; the altar is overturned.",
        eliminates: "The Study",
        item: "The UV torch reveals a blood trail to the altar; a sigil under the inverted candle.",
        itemName: "UV Torch",
        intent: "The chapel is sealed until midnight; the body was staged before the seal. The crypt stair is the route.",
      },
      motive: {
        options: ["Faith", "Silence", "Money"],
        answer: "Faith",
        free: "A letter from the bishop: 'Do not return to that house.'",
        eliminates: "Money",
        item: "The cipher wheel decodes the priest's notes: he believed the Hollow was real and wanted to stop it.",
        itemName: "Cipher Wheel",
        intent: "The bishop's letter is the warning; the notes are the belief.",
      },
    },
    npc: {
      Finch: "He arrived unannounced; asked to see the chapel.",
      Ada: "He was praying in the chapel; he asked for candles.",
      Cook: "He fasted; he would not eat.",
      Silas: "He asked about the old cemetery; I told him it was empty.",
      Rook: "He asked me to wait; he said he might need a ride to the bishop.",
    },
    epilogue: "The chapel was blessed. The blessing did not take.",
    notes: "The chapel is sealed until midnight. The killer must have the chapel key or use the crypt stair. The exorcism page is a false lead.",
  },
  {
    id: "S08",
    title: "The Architect's Blueprint",
    difficulty: "Medium",
    word: "EMBER",
    victim: {
      name: "Henry Mercer",
      role: "Architect",
      why: "He designed the shifting rooms and the hidden passages for the cult.",
      profile: "Fifties, drafting tube, ink on his cuffs, a man who built a house he could not explain. He came back to correct the plans.",
    },
    motive: "Silence",
    weapon: "Drafting compass",
    scene: "The Archive",
    signature: "A blueprint with the number 10 circled",
    redHerring: "A set of keys to the front gate",
    staging: "The body is over the archive table, the drafting compass in the chest, the blueprint marked '10' circled. The gate keys are in his hand.",
    tasks: {
      victim: {
        options: ["Henry Mercer", "Julian Rook", "Dr. Amos Crane"],
        answer: "Henry Mercer",
        free: "A drafting tube with the initials 'H.M.'; the cap is missing.",
        eliminates: "Julian Rook",
        item: "The camera flash reveals the nameplate on the tube: Henry Mercer.",
        itemName: "Camera",
        intent: "The tube is the role; the nameplate is the name.",
      },
      method: {
        options: ["Drafting compass", "Letter opener", "Piano wire"],
        answer: "Drafting compass",
        free: "A drafting set with one compass missing; ink on the desk.",
        eliminates: "Piano wire",
        item: "The magnifying glass shows a puncture wound with graphite traces.",
        itemName: "Magnifying Glass",
        intent: "The missing compass is the weapon; the graphite is the proof.",
      },
      scene: {
        options: ["The Archive", "The Attic", "The Study"],
        answer: "The Archive",
        free: "A roll of blueprints on the archive table; the attic stair is cold.",
        eliminates: "The Attic",
        item: "The UV torch reveals a blood trail to the blueprint table; a sigil inside the map drawer.",
        itemName: "UV Torch",
        intent: "The archive is the clue hub; the blueprint is the route.",
      },
      motive: {
        options: ["Silence", "Money", "Revenge"],
        answer: "Silence",
        free: "A blueprint marked 'Phase 2'; the town's name is circled.",
        eliminates: "Revenge",
        item: "The cipher wheel decodes a note: 'You built the house. You know where the rooms go. You cannot leave.'",
        itemName: "Cipher Wheel",
        intent: "The blueprint is the plan; the note is the sentence.",
      },
    },
    npc: {
      Finch: "He asked for the 1926 plans; I told him they were in the archive.",
      Ada: "He was in the archive; he asked for coffee at 10.",
      Cook: "He ate in the kitchen; he asked about the cellar.",
      Silas: "He walked the grounds with a measuring tape.",
      Rook: "He asked me to drive him to town; he changed his mind.",
    },
    epilogue: "The house was built to hide something. The architect knew where.",
    notes: "The archive is the clue hub; the killer can use the blueprint tube as a false clue for the motive. The gate keys are a false escape.",
  },
  {
    id: "S09",
    title: "The Maid's Testimony",
    difficulty: "Easy",
    word: "SAINT",
    victim: {
      name: "Nora Finch",
      role: "Maid",
      why: "She saw the 1936 rite and kept a list of the nine guests.",
      profile: "Twenties, mended uniform, a maid's cap, a list in her pocket, a sister in the house. She came back to give the dead their names.",
    },
    motive: "Silence",
    weapon: "Coal shovel",
    scene: "The Servant Quarters",
    signature: "Nine buttons arranged in a circle",
    redHerring: "A stolen silver spoon in her pocket",
    staging: "The body is on the narrow servant bed, the coal shovel beside her, nine buttons arranged in a circle on the blanket. The silver spoon is in her pocket.",
    tasks: {
      victim: {
        options: ["Nora Finch", "Celia Blackwood", "Lena Voss"],
        answer: "Nora Finch",
        free: "A maid's cap with the initials 'N.F.'; a photograph of two sisters.",
        eliminates: "Celia Blackwood",
        item: "The notebook identifies the photograph as Ada and Nora Finch.",
        itemName: "Notebook",
        intent: "The cap is the role; the photograph is the family.",
      },
      method: {
        options: ["Coal shovel", "Candlestick", "Laudanum"],
        answer: "Coal shovel",
        free: "Coal dust on the floor; the shovel is missing from the scuttle.",
        eliminates: "Laudanum",
        item: "The magnifying glass shows coal dust in the wound.",
        itemName: "Magnifying Glass",
        intent: "The missing shovel is the weapon; the coal dust is the proof.",
      },
      scene: {
        options: ["The Servant Quarters", "The Cellar", "The Kitchen"],
        answer: "The Servant Quarters",
        free: "A narrow bed, a mended uniform; the cellar door is locked.",
        eliminates: "The Cellar",
        item: "The UV torch reveals a blood trail to the servant stairs; a sigil under the bed.",
        itemName: "UV Torch",
        intent: "The servant quarters are the emotional core; the stairs are the route.",
      },
      motive: {
        options: ["Silence", "Inheritance", "Revenge"],
        answer: "Silence",
        free: "A list of nine names in a child's handwriting.",
        eliminates: "Inheritance",
        item: "The cipher wheel decodes the list: the names of the 1936 guests, with a tenth line blank.",
        itemName: "Cipher Wheel",
        intent: "The list is the cold case; the blank line is the threat.",
      },
    },
    npc: {
      Finch: "Nora was my maid; she was here in 1936. I did not know she came back.",
      Ada: "She was my sister. She wrote to me every year. I did not answer.",
      Cook: "She ate in the kitchen; she asked for bread and salt.",
      Silas: "She walked to the servant quarters; she was crying.",
      Rook: "I drove her from the station. She asked me not to tell anyone.",
    },
    epilogue: "The list was found in her pocket. The tenth name was hers.",
    notes: "Easy card: the emotional core is Ada's testimony. The killer can exploit the sisters' grief. The spoon is a false theft motive.",
  },
  {
    id: "S10",
    title: "The Chauffeur's Last Drive",
    difficulty: "Medium",
    word: "STORM",
    victim: {
      name: "Thomas Rook",
      role: "Former chauffeur",
      why: "He drove the nine guests to the lodge in 1936 and knew where the bodies were buried.",
      profile: "Sixties, uniform pressed, a cap with the initials 'T.R.', a son who took his job. He came back to see the old car; he did not leave.",
    },
    motive: "Silence",
    weapon: "Carbon monoxide",
    scene: "The Carriage House",
    signature: "Headlights left on",
    redHerring: "A bottle of whiskey and a suicide note",
    staging: "The body is in the driver's seat of the old car, the engine running, the carriage house doors closed, the headlights on. The whiskey and note are on the passenger seat.",
    tasks: {
      victim: {
        options: ["Thomas Rook", "Henry Mercer", "Father Anselm"],
        answer: "Thomas Rook",
        free: "A chauffeur's cap with the initials 'T.R.'; a photograph of a young Rook.",
        eliminates: "Henry Mercer",
        item: "The notebook identifies the cap as the previous chauffeur's, Thomas Rook.",
        itemName: "Notebook",
        intent: "The cap is the role; the photograph is the family.",
      },
      method: {
        options: ["Carbon monoxide", "Candlestick", "Surgical knife"],
        answer: "Carbon monoxide",
        free: "The car is running; the garage doors are closed. No visible wound.",
        eliminates: "Surgical knife",
        item: "The magnifying glass shows cherry-red skin and a faint exhaust smell; carbon monoxide.",
        itemName: "Magnifying Glass",
        intent: "No wound, no struggle; the car is the weapon.",
      },
      scene: {
        options: ["The Carriage House", "The Cellar", "The Ballroom"],
        answer: "The Carriage House",
        free: "A trail of tire tracks; the carriage house door is open.",
        eliminates: "The Ballroom",
        item: "The UV torch reveals a handprint on the car door and a sigil under the seat.",
        itemName: "UV Torch",
        intent: "The carriage house is a new room; the headlights are a beacon.",
      },
      motive: {
        options: ["Silence", "Money", "Revenge"],
        answer: "Silence",
        free: "A 1936 ferry ticket; the date is circled.",
        eliminates: "Revenge",
        item: "The cipher wheel decodes a note: 'You drove them here. You know where they are. You will drive no more.'",
        itemName: "Cipher Wheel",
        intent: "The ticket is the past; the note is the threat.",
      },
    },
    npc: {
      Finch: "Thomas was the old chauffeur; his son took over after he retired.",
      Ada: "He came to the kitchen for coffee; he looked ill.",
      Cook: "He asked for a bottle of whiskey; I gave him one.",
      Silas: "He walked to the carriage house; he said he wanted to see the old car.",
      Rook: "He was my father. I did not know he was here.",
    },
    epilogue: "The car was still running at dawn. The tank was full.",
    notes: "The carriage house is a new room; the killer can stage the body in the car and leave the lights on as a beacon. The suicide note is a false lead.",
  },
];

function validate(card) {
  for (const key of Object.keys(taskMeta)) {
    const task = card.tasks[key];
    if (!task.options.includes(task.answer)) throw new Error(`${card.id} ${key}: answer not in options`);
    if (!task.options.includes(task.eliminates)) throw new Error(`${card.id} ${key}: eliminates not in options`);
    if (task.eliminates === task.answer) throw new Error(`${card.id} ${key}: free clue eliminates correct answer`);
    if (task.options.length !== 3) throw new Error(`${card.id} ${key}: expected 3 options`);
  }
}

function taskSection(card, key) {
  const meta = taskMeta[key];
  const t = card.tasks[key];
  const options = t.options.map((o, i) => `| ${String.fromCharCode(65 + i)} | ${o} |`).join("\n");
  return `## Task ${meta.number} — ${meta.label}

**Question:** ${meta.question}

| Option | Text |
|---|---|
${options}

**Free clue (always available):** ${t.free}

- Eliminates: **${t.eliminates}**
- Leaves: **${t.answer}** and **${t.options.find((o) => o !== t.eliminates && o !== t.answer)}**
- Design intent: ${t.intent}

**Item clue (requires ${itemLink(t.itemName)}):** ${t.item}

- Confirms: **${t.answer}**
- The item is the difference between a 50/50 guess and a conviction.

> [!success] Solution
> **${meta.label}: ${t.answer}.** The free clue eliminates **${t.eliminates}**. The item clue confirms the answer.
`;
}

function render(card) {
  return `---
title: "${card.id} — ${card.title}"
aliases:
  - "${card.title}"
  - "${card.id}"
tags:
  - scenario
  - scenario/${card.id.toLowerCase()}
  - spoiler/scenario
  - status/proposed
spoiler: true
updated: 2026-11-04
summary: "Full scenario card: ${card.victim.name}, ${card.victim.role}, killed with ${card.weapon} in ${card.scene}. Hollow Word: ${card.word}."
related:
  - "[[Scenarios MOC]]"
  - "[[Scenario Card Overview]]"
  - "[[Scenario Card Anatomy]]"
  - "[[Scenario Difficulty]]"
  - "[[The Victim]]"
  - "[[The Hollow Court]]"
  - "[[Spoiler Policy]]"
---

# ${card.id} — ${card.title}

> [!spoiler] Scenario solution — design only
> This page contains the full solution, including the victim, method, scene, motive, signature, red herring, and Hollow Word. **Never export it to the player wiki.**

## Quick reference

| Field | Value |
|---|---|
| **Scenario ID** | ${card.id} |
| **Difficulty** | ${card.difficulty} |
| **Hollow Word** | \`${card.word}\` |
| **Victim** | ${card.victim.name}, ${card.victim.role} |
| **Method** | ${card.weapon} |
| **Scene** | ${card.scene} |
| **Motive** | ${card.motive} |
| **Signature** | ${card.signature} |
| **Red herring** | ${card.redHerring} |

## The victim

**${card.victim.name}** — ${card.victim.role}.

${card.victim.profile}

**Why the cult wanted them dead:** ${card.victim.why}

## The truth

On the night of the match, ${card.victim.name} was killed in **${card.scene}** with **${card.weapon}**. The killer staged the body with a deliberate signature: **${card.signature}**. The cult's reason was **${card.motive}**. The scene is built to point at the red herring: **${card.redHerring}**.

${card.staging}

## The four tasks

${Object.keys(taskMeta)
  .map((key) => taskSection(card, key))
  .join("\n")}
## The Hollow Word

The four task answers yield four letters. The ritual yields the fifth.

| Letter | Source | Value |
|---|---|---|
| 1 | Task 1 — Victim | \`${card.word[0]}\` |
| 2 | Task 2 — Method | \`${card.word[1]}\` |
| 3 | Task 3 — Scene | \`${card.word[2]}\` |
| 4 | Task 4 — Motive | \`${card.word[3]}\` |
| 5 | Ritual | \`${card.word[4]}\` |

**Word:** \`${card.word}\`

The gate lock accepts the word in any case. A wrong word locks the gate for 30 seconds and rings the chapel bell once; the killer hears it.

## Staging notes

- **Room:** ${card.scene}
- **Body:** ${card.staging}
- **Weapon:** ${card.weapon}
- **Signature:** ${card.signature}
- **Red herring:** ${card.redHerring}
- **Killer route:** use the room's second exit or the nearest secret passage. The body must be reachable before the chapel and vault seal at midnight.
- **Validation:** the room must be valid for the player count, reachable from the foyer, and not the ritual site or the vault.

## NPC variants

| NPC | Testimony |
|---|---|
| **Mr. Finch** | ${card.npc.Finch} |
| **Ada** | ${card.npc.Ada} |
| **The Cook** | ${card.npc.Cook} |
| **Silas** | ${card.npc.Silas} |
| **Rook** | ${card.npc.Rook} |

The killer cannot change NPC lines. The killer can plant the red herring and use the Whisper Mask, but the staff testimony is fixed.

## Difficulty and pacing

- **Target solve time:** ${card.difficulty === "Easy" ? "12–16" : card.difficulty === "Hard" ? "20–26" : "16–20"} minutes.
- **Free clue clarity:** ${card.difficulty === "Easy" ? "high" : card.difficulty === "Hard" ? "low" : "medium"}.
- **Item dependency:** ${card.difficulty === "Easy" ? "forgiving" : card.difficulty === "Hard" ? "strong" : "moderate"}.
- **Killer pressure:** ${card.difficulty === "Easy" ? "low" : card.difficulty === "Hard" ? "high" : "medium"}.
- **Recommended player count:** 6–10.

## Validation checklist

- [ ] The victim is in the guest list and the portrait pool.
- [ ] The method is compatible with the wound model and the blood rules.
- [ ] The scene is a valid staging room for this map size.
- [ ] The signature is readable in blackout and with a text card.
- [ ] The red herring is exposed by at least one item clue.
- [ ] The Hollow Word is five letters and not in the player wiki.
- [ ] The four answers are unique and not guessable from the card title.
- [ ] The NPC lines do not contradict the answers.
- [ ] The card has no gore, sexual content, or real-world hate symbols.
- [ ] The card is tagged \`spoiler/scenario\`.

## Epilogue

> ${card.epilogue}

## Design notes

${card.notes}

## Related

- [[Scenarios MOC]]
- [[Scenario Card Overview]]
- [[Scenario Card Anatomy]]
- [[Scenario Selection]]
- [[Scenario Difficulty]]
- [[Spoiler Policy]]
`;
}

function renderMoc() {
  const rows = cards
    .map(
      (c) =>
        `| [[${c.id} ${c.title}\\|${c.id}]] | ${c.title} | ${c.difficulty} | \`${c.word}\` | ${c.victim.name} | ${c.weapon} | ${c.scene} | ${c.motive} |`,
    )
    .join("\n");
  return `---
title: "Scenarios MOC"
aliases:
  - "Scenario Index"
  - "Case Cards"
tags:
  - moc
  - scenarios
  - spoiler/scenario
  - status/active
spoiler: true
updated: 2026-11-04
summary: "Index of the ten launch scenario cards, with difficulty, Hollow Word, victim, method, scene, and motive."
related:
  - "[[Scenario Card Overview]]"
  - "[[Scenario Card Anatomy]]"
  - "[[Scenario Selection]]"
  - "[[Scenario Difficulty]]"
---

# Scenarios MOC

> [!spoiler] Design spoiler
> This folder is the scenario deck. Every card is a full solution. Do not export it to the player wiki.

## The deck

| ID | Title | Difficulty | Word | Victim | Method | Scene | Motive |
|---|---|---|---|---|---|---|---|
${rows}

## How the deck is used

1. The killer draws **three cards** during the solo shop.
2. The killer picks **one** and discards the other two.
3. The killer customizes the victim identity, staging room, and red herring.
4. The game validates the staging room against the generated map.
5. The card's answers are fixed; only the surface details change.

## Reading order

- [[Scenario Card Overview]] — the draw, pick, and customization flow.
- [[Scenario Card Anatomy]] — every field and validation rule.
- [[Scenario Selection]] — how the deck is shuffled and protected.
- [[Scenario Difficulty]] — the easy/medium/hard contract.
- The ten cards above.
- [[Spoiler Policy]] — why this folder is S3.

## Card status

All ten cards are **proposed**. They are playable drafts, not final canon. A card moves to \`locked\` only after:

- The story round approves the victim and motive.
- The map validates every staging room.
- The clue text passes a readability test.
- The card is played in at least three internal tests.

## Related

- [[Scenario Card Overview]]
- [[Scenario Card Anatomy]]
- [[Scenario Selection]]
- [[Scenario Difficulty]]
- [[Spoiler Policy]]
`;
}

function renderTemplate() {
  return `---
title: "Scenario Card Template"
aliases:
  - "New Scenario"
tags:
  - scenario
  - template
  - spoiler/scenario
  - status/template
spoiler: true
updated: 2026-11-04
summary: "Blank scenario card template with every required field and validation check."
related:
  - "[[Scenario Card Anatomy]]"
  - "[[Scenarios MOC]]"
---

# Scenario Card Template

> [!spoiler] Design spoiler
> Fill this in for a new scenario. Keep the page in \`04 Scenarios\` and tag it \`spoiler/scenario\`.

## Quick reference

| Field | Value |
|---|---|
| **Scenario ID** | S__ |
| **Difficulty** | Easy / Medium / Hard |
| **Hollow Word** | \`_____\` |
| **Victim** | Name, role |
| **Method** | Weapon |
| **Scene** | Room |
| **Motive** | Motive |
| **Signature** | Tell |
| **Red herring** | False lead |

## The victim

**Name** — role.

Profile.

**Why the cult wanted them dead:**

## The truth

On the night of the match, ...

## The four tasks

### Task 1 — Victim

**Question:** Who was the victim?

| Option | Text |
|---|---|
| A | |
| B | |
| C | |

**Free clue:** ...

- Eliminates:
- Leaves:
- Design intent:

**Item clue (requires [[Item Catalog#Item|Item]]):** ...

- Confirms:

> [!success] Solution
> **Victim:**

### Task 2 — Method

**Question:** How were they killed?

| Option | Text |
|---|---|
| A | |
| B | |
| C | |

**Free clue:** ...

- Eliminates:
- Leaves:
- Design intent:

**Item clue (requires [[Item Catalog#Item|Item]]):** ...

- Confirms:

> [!success] Solution
> **Method:**

### Task 3 — Scene

**Question:** Where and how was the scene staged?

| Option | Text |
|---|---|
| A | |
| B | |
| C | |

**Free clue:** ...

- Eliminates:
- Leaves:
- Design intent:

**Item clue (requires [[Item Catalog#Item|Item]]):** ...

- Confirms:

> [!success] Solution
> **Scene:**

### Task 4 — Motive

**Question:** Why did the cult want them dead?

| Option | Text |
|---|---|
| A | |
| B | |
| C | |

**Free clue:** ...

- Eliminates:
- Leaves:
- Design intent:

**Item clue (requires [[Item Catalog#Item|Item]]):** ...

- Confirms:

> [!success] Solution
> **Motive:**

## The Hollow Word

| Letter | Source | Value |
|---|---|---|
| 1 | Task 1 | |
| 2 | Task 2 | |
| 3 | Task 3 | |
| 4 | Task 4 | |
| 5 | Ritual | |

**Word:**

## Staging notes

- **Room:**
- **Body:**
- **Weapon:**
- **Signature:**
- **Red herring:**
- **Killer route:**
- **Validation:**

## NPC variants

| NPC | Testimony |
|---|---|
| **Mr. Finch** | |
| **Ada** | |
| **The Cook** | |
| **Silas** | |
| **Rook** | |

## Difficulty and pacing

- **Target solve time:**
- **Free clue clarity:**
- **Item dependency:**
- **Killer pressure:**
- **Recommended player count:**

## Validation checklist

- [ ] The victim is in the guest list and portrait pool.
- [ ] The method is compatible with the wound model.
- [ ] The scene is a valid staging room.
- [ ] The signature is readable in blackout.
- [ ] The red herring is exposed by an item clue.
- [ ] The Hollow Word is five letters.
- [ ] The answers are unique.
- [ ] The NPC lines do not contradict the answers.
- [ ] No gore, sexual content, or real-world hate symbols.
- [ ] The card is tagged \`spoiler/scenario\`.

## Epilogue

> 

## Design notes

## Related

- [[Scenarios MOC]]
- [[Scenario Card Anatomy]]
- [[Spoiler Policy]]
`;
}

fs.mkdirSync(outDir, { recursive: true });
for (const card of cards) {
  validate(card);
  const file = path.join(outDir, `${card.id} ${card.title}.md`);
  fs.writeFileSync(file, render(card), "utf8");
  console.log("wrote", file);
}
fs.writeFileSync(path.join(outDir, "Scenarios MOC.md"), renderMoc(), "utf8");
fs.writeFileSync(path.join(outDir, "Scenario Card Template.md"), renderTemplate(), "utf8");
console.log("wrote MOC and template");
