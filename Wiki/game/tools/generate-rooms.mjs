import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..", "..");
const outDir = path.join(root, "05 World", "Rooms");

const rooms = [
  {
    name: "Foyer",
    aliases: ["The Foyer", "Entrance Hall", "Great Hall"],
    floor: "Ground",
    type: "Anchor",
    summary: "The first room the investigators see and the last room before the gate. The evidence board lives here.",
    surface: "A double staircase, a chandelier, a black-and-white marble floor, and a portrait of a man whose face has been cut out. The front doors are heavy oak; the storm presses against the glass.",
    cult: "The guest book has ten lines, not nine. The portrait's plaque is blank. A brass bell by the door rings once when the chapel opens.",
    deep: "The foyer is the house's mouth. Every route passes through it, and the house knows who leaves.",
    props: ["Guest book with ten lines", "Cut portrait", "Brass bell", "Umbrella stand with a silver-tipped cane", "Evidence board"],
    clue: "Evidence board hub; Task 1 guest list cross-reference; no free clue is placed here.",
    secret: "The portrait hinges open into a shallow cavity with a 1926 room key. The cavity is empty if the killer found it first.",
    killer: "The foyer is the best place to watch who arrives and who leaves. The killer can turn the evidence board once per match.",
    investigator: "The evidence board, the guest book, and the front door make the foyer the safest place to compare notes. It has three exits.",
    sound: "Rain on glass, the chandelier ticking, the front door breathing in the wind.",
    light: "Warm chandelier, cold lightning through the transom, a single candle on the board table.",
    midnight: "The portrait changes: the victim is now in it. The guest book gains a tenth line in the victim's hand.",
    routes: "Front gate (locked), grand staircase to First Floor, service corridor to Kitchen, east corridor to Ballroom, west corridor to Study, cellar door to Cellar.",
  },
  {
    name: "Ballroom",
    aliases: ["The Ballroom", "The Dance Hall"],
    floor: "Ground",
    type: "Anchor",
    summary: "A public stage for the killer and a sound trap for the investigators. The piano is always in tune.",
    surface: "A parquet floor, a grand piano, a chandelier wrapped in dust sheets, and tall windows that look into the storm. The room smells of champagne and cold ash.",
    cult: "The 1936 program is still on the piano: nine performers, one blank line. The mirrored wall reflects ten chairs when there are only nine.",
    deep: "The ballroom was built for an audience. The house still expects one.",
    props: ["Grand piano with one taped key", "1936 program", "Champagne glasses", "Mirrored wall", "Dust sheets"],
    clue: "Task 3 Scene clues; the taped key; the 1936 program supports Task 1 or 4.",
    secret: "The mirror is a false mirror: a service passage behind it leads to the Chapel crypt. It opens only after midnight.",
    killer: "The ballroom is public, loud, and full of shadows. The killer can stage a body here and be seen leaving by a dozen witnesses.",
    investigator: "The piano and the mirror give audio and visual tells. The room has four exits, so it is hard to trap.",
    sound: "The piano sustains one note too long; the chandelier crystals click; the rain sounds like applause.",
    light: "Dusty chandelier, blue lightning, a single spotlight on the piano.",
    midnight: "The mirror passage opens. The piano plays one note by itself. The program's blank line fills with the victim's name.",
    routes: "Foyer east corridor, Kitchen service door, Conservatory French doors, mirrored passage to Chapel crypt (post-midnight).",
  },
  {
    name: "Kitchen",
    aliases: ["The Kitchen", "Servants' Kitchen"],
    floor: "Ground",
    type: "Anchor",
    summary: "The staff's territory and the quickest route to the cellar. The food is still warm.",
    surface: "A long worktable, a coal stove, copper pans, and a pantry that smells of bread and spice. Ten plates are stacked by the sink.",
    cult: "The pantry has a false back with a ledger of the 1936 menus. The tenth plate is chipped in the shape of an antler.",
    deep: "The kitchen is where the house feeds its guests. The cellar door is where it feeds something else.",
    props: ["Ten plates", "Coal stove", "Pantry ledger", "Butcher's block", "Cellar key on a hook"],
    clue: "Task 2 Method clues (knives, cleaver); Task 4 Motive (ledger, menus); the cellar key is a route clue.",
    secret: "The dumbwaiter runs from the pantry to the Cellar and the first-floor Linen Room. It is too small for a player but large enough for a clue.",
    killer: "The kitchen has one main door and a service door; the killer can block one and trap a searcher. The cellar key is a useful lure.",
    investigator: "The staff pass through here. The Cook's testimony is close, and the cellar route is fast.",
    sound: "A kettle that will not whistle, the coal stove ticking, a knife on the block.",
    light: "Warm stove light, a hanging bulb, a cold rectangle of window.",
    midnight: "The stove goes out. The ten plates are stacked in a different order. The cellar door unlocks.",
    routes: "Foyer service corridor, Ballroom service door, Dining Room pass-through, Cellar stairs, dumbwaiter (clue only).",
  },
  {
    name: "Study",
    aliases: ["The Study", "Elias's Study"],
    floor: "Ground",
    type: "Anchor",
    summary: "The victim's room, the killer's stage, and the house's paperwork. The fire is always lit.",
    surface: "A leather chair, a mahogany desk, a wall of law books, and a fireplace with a fire that has burned too long. The room smells of pipe smoke and old paper.",
    cult: "The desk drawer has a false bottom with a 1926 expedition map. The law books are hollow; one holds a ledger of the nine guests.",
    deep: "The study is where the lie was written. The house keeps the original.",
    props: ["Mahogany desk", "False-bottom drawer", "1926 map", "Hollow law book", "Fireplace"],
    clue: "Task 1 Victim (guest list, portrait plaque); Task 2 Method (letter opener, blotter); Task 4 Motive (ledger, letters).",
    secret: "The fireplace has a second flue that leads to the Library. It is a crawl route, not a walk route.",
    killer: "The study has two doors and a window. The killer can enter from the Library flue and leave by the corridor.",
    investigator: "The desk and the fire give light and cover. The room is a natural base for the evidence board.",
    sound: "The fire, a clock that is ten minutes fast, a pen scratching when no one writes.",
    light: "Firelight, a green banker's lamp, lightning through the window.",
    midnight: "The clock stops at 11:40. The false bottom is open. The 1926 map has a new room drawn on it.",
    routes: "Foyer west corridor, Library flue (crawl), window to Conservatory, service corridor to Kitchen.",
  },
  {
    name: "Chapel",
    aliases: ["The Chapel", "The Ritual Site"],
    floor: "Ground",
    type: "Anchor / Ritual Site",
    summary: "The ritual site. Sealed until midnight. The only room in the house with no shadows.",
    surface: "A small stone chapel with ten pews, nine hymnals, a stained-glass window of nine guests and one empty pane, and an altar with five candles. The bell rope hangs by the door.",
    cult: "The altar faces the wrong direction. The fifth candle is black. The crypt stair is behind the altar, sealed by a stone door.",
    deep: "The chapel was built over the Hollow. The house grew around it. The ritual is the house's oldest room.",
    props: ["Altar", "Five candles", "Nine hymnals", "Stained-glass window", "Cracked bell rope"],
    clue: "Ritual site; Task 3 Scene (chapel staging); Task 4 Motive (priest's notes); fifth letter under the altar with UV.",
    secret: "The crypt stair leads to the Cellar. The bell rope is a second route to the Bell Tower. The side door opens only from the inside after midnight.",
    killer: "The chapel is a chokepoint. The killer can mark the channeler or break an anchor. The crypt stair gives a second entrance.",
    investigator: "Two entrances after midnight, a bell rope, and the altar give the team a defensible ritual site.",
    sound: "Rain on stone, a bell that is not there, a hymn hummed by no one.",
    light: "Candles, stained-glass color, no shadows.",
    midnight: "The chapel unseals. The fifth candle lights. The bell rings once. The stained-glass empty pane fills with the killer's silhouette.",
    routes: "Foyer east corridor, side door to Conservatory, crypt stair to Cellar, bell rope to Bell Tower.",
  },
  {
    name: "Dining Room",
    aliases: ["The Dining Room", "The Long Table"],
    floor: "Ground",
    type: "Modular",
    summary: "A social room that hides the guest list in plain sight. Ten chairs, nine place settings.",
    surface: "A long table, a dusty chandelier, silver candlesticks, and a sideboard with a decanter. The chairs are pushed in except one.",
    cult: "The place cards have the nine guests' names, but the tenth is blank. The decanter is filled with water, not wine.",
    deep: "The dining room is a rehearsal for the ritual: ten seats, one empty, a host who never sits.",
    props: ["Place cards", "Silver candlesticks", "Decanter", "Sideboard", "Ten chairs"],
    clue: "Task 1 Victim (place cards, seating chart); Task 4 Motive (toast card, seating politics).",
    secret: "The sideboard has a hidden drawer with a 1936 menu and a seating plan that puts the victim at the head.",
    killer: "The long table blocks sightlines. The killer can stage a body at one end and watch the other.",
    investigator: "The place cards are a quick Task 1 clue. The room has two doors and a pass-through to the Kitchen.",
    sound: "Silverware settling, a chair scraping, a clock ticking.",
    light: "Chandelier, candlelight, a cold window.",
    midnight: "The tenth chair pulls out. The blank place card fills in. The decanter turns red.",
    routes: "Foyer east corridor, Kitchen pass-through, Ballroom service door, Conservatory corridor.",
  },
  {
    name: "Library",
    aliases: ["The Library", "The Reading Room"],
    floor: "Ground",
    type: "Modular",
    summary: "The house's memory. The 1926 expedition is filed under fiction.",
    surface: "Floor-to-ceiling shelves, a rolling ladder, a reading desk, and a globe with the Ashcombe woods marked in red. The air is dry and cold.",
    cult: "The expedition books are shelved under fiction. A hollow atlas holds a map of the chapel's original foundation. The ladder has a hidden latch.",
    deep: "The library is the house's attempt to organize the truth. It failed.",
    props: ["Rolling ladder", "Hollow atlas", "Expedition books", "Reading desk", "Globe"],
    clue: "Task 4 Motive (expedition records); Task 1 Victim (guest list cross-reference); Ghost Blueprint lore.",
    secret: "The ladder latches into a wall panel that opens a crawl route to the Study fireplace. The atlas has a hidden map pocket.",
    killer: "The shelves create blind corners. The killer can hide in the stacks and listen to the team's deductions.",
    investigator: "The library is the best place to find the 1926 story. The crawl route is a quick escape.",
    sound: "Pages turning, the ladder wheels, rain on the skylight.",
    light: "Green reading lamps, a skylight full of lightning.",
    midnight: "The expedition books move from fiction to history. The globe's red mark moves to the lodge.",
    routes: "Foyer west corridor, Study flue (crawl), Conservatory door, Archive stairs.",
  },
  {
    name: "Conservatory",
    aliases: ["The Conservatory", "The Glass House"],
    floor: "Ground",
    type: "Modular",
    summary: "A glass room full of dead plants and living rain. The best place to see the storm and be seen.",
    surface: "A iron-and-glass roof, a tiled floor, potted ferns, a dry fountain, and a door to the garden. The rain is deafening.",
    cult: "The fountain is dry, but the basin is full of black water. A stone antler is buried in the soil of the largest fern.",
    deep: "The conservatory is the house's attempt at life. It is the first room the cult let die.",
    props: ["Dry fountain", "Black water", "Stone antler", "Potted ferns", "Garden door"],
    clue: "Task 3 Scene (wet footprints, glass reflections); Task 4 Motive (antler, garden path).",
    secret: "The fountain has a false bottom with a key to the Carriage House. The garden door leads to the woods path and the front gate.",
    killer: "The glass walls make the room a fishbowl. The killer can see approach from three directions and escape through the garden.",
    investigator: "The garden door is a potential escape route. The fountain is a hiding spot for small items.",
    sound: "Rain on glass, water dripping, a wind chime with no wind.",
    light: "Grey storm light, a single lantern, lightning through the glass.",
    midnight: "The fountain fills with clear water. The plants bloom black. The garden path appears on the map.",
    routes: "Foyer corridor, Study window, Ballroom French doors, Chapel side door, garden to Carriage House and front gate.",
  },
  {
    name: "Carriage House",
    aliases: ["The Carriage House", "The Garage"],
    floor: "Ground / Exterior",
    type: "Exterior",
    summary: "A separate building for the old car, the tools, and the chauffeur's secrets. The headlights can be seen from the lodge.",
    surface: "A stone building with two bays, a 1938 sedan, a workbench, hanging tools, and a smell of oil and wet hay. The doors are heavy and the windows are painted over.",
    cult: "The sedan's trunk has a 1936 picnic blanket and a child's shoe. The workbench drawer has a chauffeur's log with nine names.",
    deep: "The carriage house is where the guests arrived. It is where the house keeps the vehicle of their arrival.",
    props: ["1938 sedan", "Workbench", "Chauffeur's log", "Hanging tools", "Painted windows"],
    clue: "Task 1 Victim (chauffeur's cap, log); Task 2 Method (tools, exhaust); Task 4 Motive (1936 ferry ticket).",
    secret: "The sedan's trunk has a false floor with a spare key to the front gate. The workbench has a tunnel to the Cellar coal chute.",
    killer: "The carriage house is isolated. A body here is found late. The car's headlights can be left on as a lure.",
    investigator: "The tools are useful; the gate key is a potential escape; the tunnel is a quick route to the Cellar.",
    sound: "Rain on tin, an engine ticking, a tool swinging on its hook.",
    light: "A single bulb, headlights, lightning through the painted windows.",
    midnight: "The car engine starts by itself. The headlights turn on. The chauffeur's log gains a tenth line.",
    routes: "Garden path to Conservatory, tunnel to Cellar coal chute, driveway to front gate.",
  },
  {
    name: "The Cellar",
    aliases: ["Cellar", "The Cellar Landing"],
    floor: "Cellar",
    type: "Anchor / Zone",
    summary: "The main cellar chamber: coal, wine, boiler, and the crypt stair. The house's underside.",
    surface: "A low stone room with a coal scuttle, a wine rack, a boiler, and three doors. The ceiling is wet. The floor is newer than the walls.",
    cult: "The floor is newer because something was buried under it. The wine rack hides a sealed door with an antler carved into the stone.",
    deep: "The cellar is the house's foundation and its first secret. The crypt stair goes deeper than the plans allow.",
    props: ["Coal scuttle", "Wine rack", "Boiler", "Sealed stone door", "New floor"],
    clue: "Task 2 Method (coal shovel, surgical kit); Task 3 Scene (blood trail, sigil); Vault access.",
    secret: "The sealed door behind the wine rack opens with the Ghost Blueprint. It leads to the crypt stair and the vault antechamber.",
    killer: "The cellar is a maze of pillars and racks. The killer can lose a chase here. The coal chute is a second exit.",
    investigator: "The cellar connects the kitchen, the vault, and the crypt. The boiler can be used to make noise or light.",
    sound: "Dripping water, the boiler, coal shifting, a distant bell.",
    light: "A single bulb, boiler fire, a flashlight beam.",
    midnight: "The sealed door opens. The boiler goes out. The floor is dry for the first time.",
    routes: "Kitchen stairs, Boiler Room, Wine Cellar, Vault antechamber, crypt stair (post-midnight), coal chute to Carriage House.",
  },
  {
    name: "Wine Cellar",
    aliases: ["The Wine Cellar", "The Rack Room"],
    floor: "Cellar",
    type: "Modular",
    summary: "A long room of wine racks and dust. The 1926 bottle is the oldest thing in the house.",
    surface: "Floor-to-ceiling racks, a tasting table, a broken chair, and a smell of cork and mold. The bottles are dusty except one.",
    cult: "The 1926 bottle is clean. It is not wine; it is a scroll case. The rack behind it is a false wall.",
    deep: "The wine cellar is a decoy: the cult does not drink. The real cellar is behind the rack.",
    props: ["1926 bottle", "Tasting table", "False rack", "Broken chair", "Corkscrew"],
    clue: "Task 4 Motive (1926 bottle, toast); Task 3 Scene (blood trail behind rack).",
    secret: "The false rack opens a narrow passage to the Vault antechamber. It is the killer's favorite route.",
    killer: "The racks create narrow sightlines. The killer can ambush a searcher or hide a body in the dark.",
    investigator: "The 1926 bottle is a strong Task 4 clue. The passage is a shortcut to the Vault.",
    sound: "Bottles settling, a cork popping, water dripping.",
    light: "A caged bulb, candle stubs, total dark in the back.",
    midnight: "The 1926 bottle turns to dust. The false rack opens wider. The tasting table is set for ten.",
    routes: "The Cellar, false rack to Vault antechamber, narrow stairs to Dining Room (service).",
  },
  {
    name: "Boiler Room",
    aliases: ["The Boiler Room", "The Furnace"],
    floor: "Cellar",
    type: "Modular",
    summary: "Heat, noise, and the house's fuse box. The best place to hide a sound or a body.",
    surface: "A cast-iron boiler, a coal pile, pipes wrapped in cloth, and a fuse box with a brass handle. The room is hot and loud.",
    cult: "The boiler burns something that is not coal: bone-white ash and a sweet smell. The fuse box has a second switch labeled 'CHAPEL'.",
    deep: "The boiler is the house's heart. The chapel switch is the house's pulse.",
    props: ["Cast-iron boiler", "Coal pile", "Fuse box", "Pipe wrench", "Bone-white ash"],
    clue: "Task 2 Method (pipe wrench, ash); Task 3 Scene (heat, ash); sabotage target (flicker).",
    secret: "The 'CHAPEL' switch cuts the chapel lights and unlocks the crypt stair for 15 seconds. The boiler has a crawl space to the coal chute.",
    killer: "The boiler is loud enough to cover a struggle. The fuse box can black out a wing.",
    investigator: "The fuse box can restore lights or cut the killer's escape. The heat is a tell for the UV torch.",
    sound: "The boiler roar, pipes knocking, coal shifting.",
    light: "Furnace red, a single bulb, sparks.",
    midnight: "The boiler goes silent. The 'CHAPEL' switch flips itself. The ash forms a word.",
    routes: "The Cellar, coal chute to Carriage House, service stairs to Kitchen.",
  },
  {
    name: "Vault",
    aliases: ["The Vault", "The Cabinet Room"],
    floor: "Cellar",
    type: "Anchor / Vault",
    summary: "The second pistol's cabinet. Three seals, one claim. Sealed until midnight.",
    surface: "A round stone room with a steel cabinet, three brass seals on the wall, and a drain in the floor. The air is cold and dry.",
    cult: "The seals are the three puzzle families: zodiac, binary, knot. The cabinet holds a pistol, four bullets, and a ledger of the cult's debts.",
    deep: "The vault is the cult's treasury. The pistol is the only thing in it that can kill a killer.",
    props: ["Steel cabinet", "Three brass seals", "Drain", "Debt ledger", "Empty pedestal"],
    clue: "Second pistol; three seals; Task 4 Motive (debt ledger).",
    secret: "The drain leads to the crypt stair. The cabinet has a false back with a fifth bullet? No — four bullets only.",
    killer: "The killer can camp the vault or claim the pistol. The single entrance is a death trap if the team corners them.",
    investigator: "The vault is the power spike. The three seals are a team puzzle; the cabinet is first-come.",
    sound: "A low hum, seals clicking, water in the drain.",
    light: "Cold blue, brass reflections, a single shaft from the ceiling.",
    midnight: "The seals glow. The cabinet unlocks. The drain fills with warm air.",
    routes: "The Cellar antechamber, drain to crypt stair, secret passage from Wine Cellar.",
  },
  {
    name: "Crypt Stair",
    aliases: ["The Crypt", "The Crypt Stair", "The Stair Below"],
    floor: "Cellar",
    type: "Connector / Ritual",
    summary: "A spiral stone stair from the cellar to the chapel. Sealed until midnight.",
    surface: "A narrow spiral stair, wet stone, iron rings in the wall, and a door at the top with no handle. The air is colder than the cellar.",
    cult: "The rings are for the guests who did not walk. The door has an antler carved on the chapel side. The stair is older than the house.",
    deep: "The crypt stair is the original entrance to the Hollow. The chapel was built to cover it.",
    props: ["Iron rings", "Stone door", "Candle niches", "Scratches on the wall", "Cold air"],
    clue: "Ritual route; Task 3 Scene (drag marks); Ghost Blueprint lore.",
    secret: "The stair has a side niche with a 1926 coin. The door opens only after midnight or with the Ghost Blueprint.",
    killer: "The stair is a chokepoint. The killer can wait at the bottom or block the top.",
    investigator: "The stair is the fastest ritual route. The niche is a hiding spot for a small item.",
    sound: "Water, footsteps, a bell above, breathing.",
    light: "Candle niches, total dark, a cold glow from the chapel door.",
    midnight: "The door opens. The candles light. The scratches form a word.",
    routes: "Cellar to Chapel, side niche, vault drain.",
  },
  {
    name: "Archive",
    aliases: ["The Archive", "The Records Room"],
    floor: "First",
    type: "Anchor",
    summary: "The cold case in paper form. The best clue hub and the easiest room to get lost in.",
    surface: "Metal shelves, file boxes, a map table, a typewriter, and a smell of dust and ink. The window is painted shut.",
    cult: "The 1936 file is complete except for the autopsy photo. The 1926 map is filed under 1936. The typewriter has a ribbon that matches the victim's wound.",
    deep: "The archive is the house's alibi. Every lie has a folder.",
    props: ["1936 file", "1926 map", "Typewriter", "Map table", "File boxes"],
    clue: "Task 1 Victim (guest list); Task 2 Method (typewriter ribbon); Task 4 Motive (expedition file); Ghost Blueprint.",
    secret: "The map table has a hidden drawer with the Ghost Blueprint. The typewriter's carriage return opens a wall panel to the Library.",
    killer: "The archive has one door and a wall panel. The killer can trap a searcher or listen through the panel.",
    investigator: "The archive is the best place to solve the case. The wall panel is a quick escape to the Library.",
    sound: "A typewriter, paper sliding, rain on the painted window.",
    light: "Green desk lamps, a cold window, a single bulb.",
    midnight: "The typewriter types the victim's name. The 1936 file gains an autopsy photo. The map table turns.",
    routes: "First-floor corridor, Library wall panel, service stairs to Kitchen, attic stairs.",
  },
  {
    name: "Master Suite",
    aliases: ["The Master Suite", "Elias's Bedroom"],
    floor: "First",
    type: "Anchor",
    summary: "The host's private room. A locked door, a writing desk, and a bed that is too neat.",
    surface: "A four-poster bed, a writing desk, a wardrobe, a fireplace, and a balcony door. The room is cold and smells of cedar.",
    cult: "The wardrobe has a hidden compartment with a cult robe and a letter from Vesper. The writing desk has a draft of the 1946 letter.",
    deep: "The master suite is Elias's attempt at a normal life. The robe is the only thing that fits.",
    props: ["Four-poster bed", "Writing desk", "Wardrobe", "Cult robe", "Balcony door"],
    clue: "Task 1 Victim (letter, photograph); Task 4 Motive (Vesper letter, robe); Task 3 Scene (staged bed).",
    secret: "The wardrobe backs onto a servant passage to the Nursery. The balcony has a rope ladder to the Conservatory roof.",
    killer: "The suite is private and locked. A body here is found late. The balcony is a quick escape.",
    investigator: "The Vesper letter is a major story clue. The servant passage is a shortcut.",
    sound: "A clock, wind in the chimney, a rope tapping the balcony.",
    light: "Firelight, a bedside lamp, cold moonlight.",
    midnight: "The bed is turned down. The robe is on the chair. The letter is signed in the victim's hand.",
    routes: "First-floor corridor, servant passage to Nursery, balcony rope to Conservatory roof, service stairs.",
  },
  {
    name: "Guest Room — Rose",
    aliases: ["Rose Room", "The Rose Guest Room"],
    floor: "First",
    type: "Modular",
    summary: "A guest room with a rose wallpaper, a locked suitcase, and a view of the gate.",
    surface: "A brass bed, a rose-patterned wall, a suitcase, a washstand, and a window over the front gate. The room is tidy except for the bed.",
    cult: "The suitcase belongs to the victim. The rose wallpaper hides a water stain shaped like an antler. The mirror has a crack.",
    deep: "The guest rooms are where the visitors slept. The house remembers them in the wallpaper.",
    props: ["Brass bed", "Locked suitcase", "Cracked mirror", "Washstand", "Gate window"],
    clue: "Task 1 Victim (suitcase, monogram); Task 4 Motive (letter in the suitcase).",
    secret: "The suitcase has a false lining with a 1936 ticket. The mirror opens a narrow passage to Guest Room Ivy.",
    killer: "The room is small and has one door. The killer can corner a searcher, but the mirror passage is an escape.",
    investigator: "The gate window is a lookout. The suitcase is a strong Task 1 clue.",
    sound: "A window rattling, a suitcase lock, rain on the glass.",
    light: "A bedside lamp, gate light, lightning.",
    midnight: "The suitcase opens. The bed is made. The rose wallpaper blooms.",
    routes: "First-floor corridor, mirror passage to Guest Room Ivy, window to the gate roof (risky).",
  },
  {
    name: "Guest Room — Ivy",
    aliases: ["Ivy Room", "The Ivy Guest Room"],
    floor: "First",
    type: "Modular",
    summary: "The quietest guest room. A good hiding spot and a bad place to be found.",
    surface: "A narrow bed, ivy-patterned wallpaper, a wardrobe, a writing desk, and a window over the garden. The room smells of dust and perfume.",
    cult: "The wardrobe has a child's coat and a 1936 photograph. The ivy wallpaper hides a message in the pattern: 'TEN'.",
    deep: "The ivy room was the nursery before it was a guest room. The coat is the only thing that never aged.",
    props: ["Narrow bed", "Child's coat", "1936 photograph", "Wardrobe", "Garden window"],
    clue: "Task 1 Victim (photograph); Task 3 Scene (child's coat, hidden message); Task 4 Motive (1936 photo).",
    secret: "The wardrobe backs onto the mirror passage from Rose. The window has a drainpipe route to the Conservatory.",
    killer: "The room is quiet and out of the way. The killer can hide here and listen to the corridor.",
    investigator: "The photograph is a story clue. The drainpipe is an escape route.",
    sound: "Ivy scratching, a floorboard, a music box.",
    light: "A dim lamp, garden light, a candle.",
    midnight: "The music box plays. The child's coat is gone. The ivy spells a name.",
    routes: "First-floor corridor, mirror passage to Rose, drainpipe to Conservatory, servant passage to Master Suite.",
  },
  {
    name: "Balcony",
    aliases: ["The Balcony", "The Front Balcony"],
    floor: "First",
    type: "Connector / Exterior",
    summary: "A narrow balcony over the foyer. The best view of the gate and the worst place to hide.",
    surface: "A stone balcony with a balustrade, two chairs, a dead plant, and a view of the front gate and the storm. The floor is wet.",
    cult: "The balustrade has ten carved roses; one is fresh. The dead plant is a black fern from the conservatory.",
    deep: "The balcony is the house's stage for watching arrivals. The house likes to see who comes.",
    props: ["Stone balustrade", "Two chairs", "Dead fern", "Wet floor", "Gate view"],
    clue: "Task 3 Scene (wet footprints, balcony route); Task 1 Victim (gate arrival).",
    secret: "A rope ladder is tied to the balustrade and hidden under the dead fern. It leads to the Conservatory roof.",
    killer: "The balcony is exposed but has a rope escape. The killer can watch the gate and drop into the conservatory.",
    investigator: "The gate view is a lookout. The rope ladder is a quick route to the Conservatory.",
    sound: "Wind, rain, the gate creaking, a rope tapping.",
    light: "Storm light, a single lantern, lightning.",
    midnight: "The tenth rose blooms. The gate opens. The rope ladder is wet.",
    routes: "First-floor corridor, Master Suite balcony door, rope ladder to Conservatory roof, drainpipe to Guest Room Ivy.",
  },
  {
    name: "Nursery",
    aliases: ["The Nursery", "The Child's Room"],
    floor: "First",
    type: "Modular",
    summary: "A room for a child who was never born. The most haunted room in the house.",
    surface: "A small bed, a rocking horse, a toy chest, a mural of the woods, and a window that will not open. The air is warm.",
    cult: "The mural has ten animals; one is a stag with a human face. The toy chest has a 1926 birth certificate with the name blank.",
    deep: "The nursery is the house's idea of a future. It is the room the cult could not complete.",
    props: ["Rocking horse", "Toy chest", "Woods mural", "Birth certificate", "Locked window"],
    clue: "Task 1 Victim (birth certificate); Task 4 Motive (bloodline); Task 3 Scene (rocking horse).",
    secret: "The toy chest has a false bottom with a key to the Observatory. The mural has a hidden door to the servant passage.",
    killer: "The nursery is small and warm; the killer can hide behind the mural door. The rocking horse is a sound trap.",
    investigator: "The birth certificate is a bloodline clue. The mural door is a shortcut to the Master Suite.",
    sound: "A rocking horse, a music box, a child humming.",
    light: "A nightlight, a warm lamp, no shadows.",
    midnight: "The rocking horse moves. The mural's stag turns to face the room. The window opens.",
    routes: "First-floor corridor, mural door to servant passage, service stairs to Kitchen, Observatory key.",
  },
  {
    name: "Attic",
    aliases: ["The Attic", "The Loft"],
    floor: "Attic",
    type: "Anchor",
    summary: "The house's memory dump: trunks, portraits, and the original 1926 furniture. The highest room.",
    surface: "A low-beamed attic full of trunks, dust sheets, a dressmaker's mannequin, and a round window. The floor creaks.",
    cult: "The trunks hold the nine guests' belongings, each labeled with a name and a date. The mannequin wears a cult robe. The round window has an antler shadow.",
    deep: "The attic is where the house stores what it cannot explain. The 1926 furniture is arranged for a dinner that never ended.",
    props: ["Nine trunks", "Dressmaker's mannequin", "Cult robe", "Round window", "1926 furniture"],
    clue: "Task 1 Victim (trunk labels); Task 4 Motive (guest belongings); Task 3 Scene (mannequin staging).",
    secret: "The mannequin has a key to the Bell Tower in its pocket. The round window opens onto the roof and the Bell Tower ledge.",
    killer: "The attic is a maze of trunks. The killer can hide, and the creaking floor is an early warning.",
    investigator: "The nine trunks are the cold case in physical form. The roof route is an escape.",
    sound: "Creaking, wind in the eaves, a trunk lid.",
    light: "A bare bulb, a round window, dust in the beam.",
    midnight: "The mannequin turns. The trunks open. The 1926 table is set for ten.",
    routes: "Attic stairs, roof ledge to Bell Tower, service stairs to First Floor, chimney to Archive.",
  },
  {
    name: "Servant Quarters",
    aliases: ["The Servant Quarters", "The Servants' Hall"],
    floor: "Attic",
    type: "Modular",
    summary: "Narrow beds, mended uniforms, and the staff's private grief. The emotional heart of the house.",
    surface: "Four narrow beds, a washbasin, a hanging rail of uniforms, a small stove, and a window over the back garden. The room is clean and cold.",
    cult: "The uniforms are labeled with the staff's names, but one bed has no name. The stove has a hidden letter from Nora Finch.",
    deep: "The servants' quarters are where the house's witnesses slept. The empty bed is the one the house keeps for the next maid.",
    props: ["Four narrow beds", "Uniform rail", "Small stove", "Nora's letter", "Empty bed"],
    clue: "Task 1 Victim (Nora's cap, photograph); Task 4 Motive (letter); Task 3 Scene (staged bed).",
    secret: "The empty bed has a loose floorboard with a key to the Archive. The window has a servant stair to the Kitchen.",
    killer: "The room is a dead end with one door and a window. The killer can trap a searcher, but the servant stair is an escape.",
    investigator: "Nora's letter is an emotional clue. The servant stair is a quick route to the Kitchen.",
    sound: "A kettle, a uniform hanger, a bedspring.",
    light: "A small stove, a cold window, a candle.",
    midnight: "The empty bed is made. The uniform rail gains a tenth uniform. The letter is signed.",
    routes: "Attic stairs, servant stair to Kitchen, window to back garden, loose floorboard to Archive key.",
  },
  {
    name: "Bell Tower",
    aliases: ["The Bell Tower", "The Belfry"],
    floor: "Attic",
    type: "Modular / Vertical",
    summary: "The cracked bell, the highest point in the house, and the ritual's warning system.",
    surface: "A stone tower with a cracked bronze bell, a wooden ladder, a rope, and a view of the whole estate. The wind is strong.",
    cult: "The bell was removed in 1936, but it is still here. The crack is in the shape of a five-letter word. The rope is new.",
    deep: "The bell tower is the house's voice. The bell rings when the ritual begins and when the gate is wrong.",
    props: ["Cracked bronze bell", "Wooden ladder", "New rope", "Estate view", "Five-letter crack"],
    clue: "Ritual bell; Task 3 Scene (bell rope); Task 4 Motive (1936 bell removal); map landmark.",
    secret: "The bell can be rung to distract the killer or signal the team. The ladder leads to the roof and the Attic window.",
    killer: "The tower is a vertical chokepoint. The killer can cut the rope or camp the ladder.",
    investigator: "The bell is a team signal and a ritual anchor. The view reveals the map layout.",
    sound: "Wind, the cracked bell, a rope creaking.",
    light: "Storm light, a lantern, the bell's shadow.",
    midnight: "The bell rings once. The crack widens. The rope hangs lower.",
    routes: "Attic ladder, roof ledge, chapel bell rope (post-midnight), Observatory stairs.",
  },
  {
    name: "Observatory",
    aliases: ["The Observatory", "The Star Room"],
    floor: "Attic",
    type: "Modular",
    summary: "A small dome with a telescope, a star chart, and the zodiac puzzle. The best view of the sky.",
    surface: "A brass telescope, a rotating dome, a star chart, a desk, and a case of lenses. The room is cold and smells of brass polish.",
    cult: "The star chart is not the sky; it is the lodge's floor plan. The telescope points at the chapel, not the stars. The lens case has a zodiac cipher.",
    deep: "The observatory is the cult's attempt to read the house as a constellation. The house is the sky.",
    props: ["Brass telescope", "Rotating dome", "Star chart", "Lens case", "Zodiac cipher"],
    clue: "Zodiac puzzle; Task 4 Motive (star chart); Task 3 Scene (telescope view); map reveal.",
    secret: "The telescope's lens projects the current map onto the dome when aligned with the chapel. The desk has a key to the Vault seals.",
    killer: "The dome is a echo chamber; the killer can hear the team below. The single stair is a trap.",
    investigator: "The telescope reveals the map and the zodiac puzzle. The dome is a lookout.",
    sound: "The dome rotating, wind, a lens clicking.",
    light: "Starlight, a brass lamp, the telescope's reflection.",
    midnight: "The dome opens. The star chart changes. The telescope points at the gate.",
    routes: "Attic stairs, roof ledge, Bell Tower stairs, dome hatch (locked).",
  },
  {
    name: "Linen Room",
    aliases: ["The Linen Room", "The Laundry"],
    floor: "Attic",
    type: "Modular",
    summary: "A small room of sheets, towels, and the dumbwaiter. The best place to hide a small clue.",
    surface: "Floor-to-ceiling shelves of linen, a folding table, a laundry chute, and a dumbwaiter door. The room smells of soap and dust.",
    cult: "One sheet is stained with a sigil. The dumbwaiter has a note from the killer's predecessor. The laundry chute goes to the Cellar.",
    deep: "The linen room is the house's clean surface. The stain is the truth underneath.",
    props: ["Linen shelves", "Folding table", "Laundry chute", "Dumbwaiter", "Stained sheet"],
    clue: "Task 3 Scene (stained sheet); Task 2 Method (laundry chute route); hiding spot for small items.",
    secret: "The laundry chute is a one-way drop to the Cellar (safe landing, 1 HP? No damage). The dumbwaiter connects to the Kitchen pantry.",
    killer: "The room is small and quiet. The killer can hide behind the linen shelves. The chute is an escape.",
    investigator: "The chute is a fast route to the Cellar. The dumbwaiter is a clue route.",
    sound: "Sheets shifting, the chute, a dumbwaiter bell.",
    light: "A single bulb, a high window, a candle.",
    midnight: "The stained sheet is folded. The dumbwaiter opens. The chute smells of rain.",
    routes: "Attic stairs, laundry chute to Cellar, dumbwaiter to Kitchen, service stairs.",
  },
];

function render(room) {
  return `---
title: "${room.name}"
aliases:
${room.aliases.map((a) => `  - "${a}"`).join("\n")}
tags:
  - world
  - room
  - floor/${room.floor.toLowerCase().replace(/[^a-z]/g, "-")}
  - status/proposed
spoiler: true
updated: 2026-11-04
summary: "${room.summary.replace(/"/g, '\\"')}"
related:
  - "[[World MOC]]"
  - "[[Room Catalog]]"
  - "[[Map System Overview]]"
  - "[[Floor Plans]]"
---

# ${room.name}

> [!info] Room role
> **Floor:** ${room.floor} · **Type:** ${room.type}

${room.summary}

## At a glance

| Field | Detail |
|---|---|
| **Floor** | ${room.floor} |
| **Type** | ${room.type} |
| **Clue role** | ${room.clue} |
| **Secret** | ${room.secret} |
| **Killer advantage** | ${room.killer} |
| **Investigator advantage** | ${room.investigator} |

## The room

### Surface story

${room.surface}

### Cult story

${room.cult}

### Deep story

${room.deep}

## What you see

${room.props.map((p) => `- ${p}`).join("\n")}

## Clue role

${room.clue}

## The secret

${room.secret}

## Killer advantage

${room.killer}

## Investigator advantage

${room.investigator}

## Sound and light

**Sound:** ${room.sound}

**Light:** ${room.light}

## Midnight shift

${room.midnight}

## Routes

${room.routes}

## Design notes

- **Readability:** the room must be legible in blackout. Every critical clue has a text card and a lit fallback.
- **No soft-locks:** the room must have at least two routes or a key that is not behind its own lock.
- **No gore:** blood is a stain, a ribbon, or a smear.
- **Voice optional:** every interaction has a text prompt and a ping.
- **Performance:** keep unique props under 40; reuse modular props across rooms.
- **Accessibility:** no clue may depend on color alone; audio clues have subtitles.

## Related

- [[World MOC]]
- [[Room Catalog]]
- [[Floor Plans]]
- [[Map System Overview]]
- [[Secret Passages]]
- [[Lighting and Weather]]
- [[Art Direction]]
`;
}

function renderCatalog() {
  const rows = rooms
    .map((r) => `| [[${r.name}\\|${r.name}]] | ${r.floor} | ${r.type} | ${r.summary} |`)
    .join("\n");
  return `---
title: "Room Catalog"
aliases:
  - "Rooms"
  - "Room Index"
tags:
  - world
  - rooms
  - index
  - spoiler/design
  - status/proposed
spoiler: true
updated: 2026-11-04
summary: "Every room in the launch map, with floor, type, and gameplay role."
related:
  - "[[World MOC]]"
  - "[[Floor Plans]]"
  - "[[Map System Overview]]"
---

# Room Catalog

> [!info] How to use this page
> The launch map draws **24–28 rooms** from this catalog. Anchors are always present; modular rooms are placed by the seed. A room page describes the fixed fiction and the gameplay role, not a fixed position.

## All rooms

| Room | Floor | Type | Role |
|---|---|---|---|
${rows}

## Anchors

The eight anchors are always present:

- [[Foyer]]
- [[Ballroom]]
- [[Kitchen]]
- [[Study]]
- [[Chapel]]
- [[Archive]]
- [[Vault]]
- [[Attic]]

## Modular rooms

The generator places 12–16 of these per match:

- [[Dining Room]]
- [[Library]]
- [[Conservatory]]
- [[Carriage House]]
- [[The Cellar]]
- [[Wine Cellar]]
- [[Boiler Room]]
- [[Crypt Stair]]
- [[Master Suite]]
- [[Guest Room — Rose]]
- [[Guest Room — Ivy]]
- [[Balcony]]
- [[Nursery]]
- [[Servant Quarters]]
- [[Bell Tower]]
- [[Observatory]]
- [[Linen Room]]

## Player-count scaling

| Players | Rooms | Notes |
|---|---|---|
| 6–7 | 20–22 | Tighter map, fewer hiding spots, faster traversal. |
| 8–10 | 26–30 | More modular rooms, more routes, more secret passages. |

## Related

- [[World MOC]]
- [[Floor Plans]]
- [[Map System Overview]]
- [[Procedural Generation]]
`;
}

fs.mkdirSync(outDir, { recursive: true });
for (const room of rooms) {
  const file = path.join(outDir, `${room.name}.md`);
  fs.writeFileSync(file, render(room), "utf8");
  console.log("wrote", file);
}
fs.writeFileSync(path.join(root, "05 World", "Room Catalog.md"), renderCatalog(), "utf8");
console.log("wrote catalog");
