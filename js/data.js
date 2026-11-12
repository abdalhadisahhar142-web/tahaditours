/* =========================================================
   AL TAHADI – SITE DATA
   Everything editable lives here: contact info, images,
   hero slides, destinations, tours, services.
   ========================================================= */

/* ---------- Contact ---------- */
const CONTACT = {
  phone: "+963-11-3338769",
  phoneHref: "tel:+963113338769",
  email: "info@tahaditours.com",
  location: "Damascus – Syria",
  whatsapp: "", // e.g. "963933000000" (no + or spaces) – leave empty to hide
  facebook: "https://www.facebook.com/Al-Tahadi-Travel-Tours-Syria-105078584399416/",
  pinterest: "https://www.pinterest.com/9b3ceaeca45763e433e6f7170e362b/",
  instagram: "", // add when available
};

/* ---------- Images ----------
   Replace any URL with your own file, e.g. "images/dubai.jpg".
   If an image fails to load, its colour gradient shows instead. */
const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1800&q=75`;
const IMG = {
  dubai:      [U("1512453979798-5ea266f8880c"), "#b98552,#2a1d14"],
  abudhabi:   [U("1512632578888-169bbbc64f33"), "#d9c3a0,#3b2f22"],
  desert:     [U("1451337516015-6b6e9a44a8a3"), "#c9915a,#3a2414"],
  jordan:     [U("1579606032821-4e6161c81bd3"), "#b46a48,#2c1a14"],
  egypt:      [U("1539650116574-8efeb43e2750"), "#d8b07a,#4a3620"],
  pyramids:   [U("1503177119275-0aa32b3a9368"), "#caa274,#3b2a18"],
  santorini:  [U("1570077188670-e3a8d69ac5ff"), "#6f9cc8,#1c2d44"],
  coast:      [U("1533105079780-92b9be482077"), "#5f8fb0,#1e2a33"],
  beach:      [U("1507525428034-b723cf961d3e"), "#5fa6b8,#15303a"],
  bali:       [U("1537996194471-e657df975ab4"), "#5f8f5a,#1a2a18"],
  istanbul:   [U("1524231757912-21f4fe3a7200"), "#a3707a,#2a1a22"],
  bangkok:    [U("1508009603885-50cf7c579365"), "#c48a5a,#2c1d16"],
  singapore:  [U("1525625293386-3f8f99389edd"), "#4f6f9a,#141e2e"],
  kualalumpur:[U("1596422846543-75c6fc197f07"), "#5a6f8f,#161c28"],
  madrid:     [U("1539037116277-4db20889f2d4"), "#c79a6b,#2e2218"],
  moscow:     [U("1513326738677-b964603b136d"), "#a35a5a,#2a1616"],
  mountains:  [U("1464822759023-fed622ff2c3b"), "#6b8295,#1a232b"],
  lake:       [U("1501785888041-af3ef285b470"), "#7d8f8a,#1c2422"],
  sky:        [U("1500530855697-b586d89ba3ee"), "#c08a5a,#1b1a22"],
  plane:      [U("1436491865332-7a61a109cc05"), "#6d8db3,#18212e"],
  car:        [U("1494976388531-d1058494cdd8"), "#6a6a6a,#161616"],
  bus:        [U("1544620347-c4fd4a3d5957"), "#6f7f8a,#161c20"],
  hotel:      [U("1566073771259-6a8506099945"), "#8a7a62,#1e1a14"],
  team:       [U("1522071820081-009f0129c71c"), "#7a7066,#1c1a18"],
};
const bgOf = (key) => {
  const [url, tint] = IMG[key] || IMG.sky;
  return `url('${url}'), linear-gradient(135deg,${tint})`;
};

/* ---------- Hero slides ---------- */
const SLIDES = [
  { place: "Dubai - UAE",        title: ["Deluxe", "Dubai"],        img: "dubai",     tour: "deluxe-dubai",
    desc: "A full day through Dubai's icons — the Burj Khalifa, the Marina and the old souks — with an evening in the desert." },
  { place: "Amman - Jordan",     title: ["Best of", "Jordan"],      img: "jordan",    tour: "best-of-jordan",
    desc: "4 days across Amman, the Desert Castles, Madaba, Mount Nebo and the Dead Sea, with private transfers." },
  { place: "Cairo - Egypt",      title: ["Cairo &", "Nile Cruise"], img: "egypt",     tour: "cairo-nile-cruise",
    desc: "8 days from the Pyramids of Giza to the temples of Upper Egypt, sailing the Nile in comfort." },
  { place: "Santorini - Greece", title: ["Caldera", "Panorama"],    img: "santorini", tour: "santorini-caldera",
    desc: "White villages, blue domes and the most famous sunset in the Aegean, seen from the caldera rim." },
  { place: "Bali - Indonesia",   title: ["Bali", "Honeymoon"],      img: "bali",      tour: "bali-honeymoon",
    desc: "Six days of rice terraces, temples and beach villas — our honeymoon offer for two." },
  { place: "Istanbul - Turkey",  title: ["Anatolia", "Istanbul"],   img: "istanbul",  tour: "istanbul-afternoon",
    desc: "An afternoon between two continents: mosques, bazaars and the Bosphorus at golden hour." },
];

/* ---------- Destinations ---------- */
const DESTINATIONS = [
  { name: "Dubai",        country: "UAE",       img: "dubai",       line: "Skylines, desert and luxury" },
  { name: "Abu Dhabi",    country: "UAE",       img: "abudhabi",    line: "Grand mosques and golden dunes" },
  { name: "Jordan",       country: "Jordan",    img: "jordan",      line: "Ancient cities and the Dead Sea" },
  { name: "Egypt",        country: "Egypt",     img: "egypt",       line: "Pyramids, the Nile and the Red Sea" },
  { name: "Istanbul",     country: "Turkey",    img: "istanbul",    line: "Where two continents meet" },
  { name: "Santorini",    country: "Greece",    img: "santorini",   line: "Caldera views and sunsets" },
  { name: "Mykonos",      country: "Greece",    img: "coast",       line: "Islands, beaches and nightlife" },
  { name: "Crete",        country: "Greece",    img: "beach",       line: "Lagoons and island traditions" },
  { name: "Bali",         country: "Indonesia", img: "bali",        line: "Temples, terraces and villas" },
  { name: "Bangkok",      country: "Thailand",  img: "bangkok",     line: "Temples, markets and street food" },
  { name: "Singapore",    country: "Singapore", img: "singapore",   line: "Garden city of the future" },
  { name: "Kuala Lumpur", country: "Malaysia",  img: "kualalumpur", line: "Towers and tropical culture" },
  { name: "Langkawi",     country: "Malaysia",  img: "beach",       line: "Mangroves, caves and beaches" },
  { name: "Madrid",       country: "Spain",     img: "madrid",      line: "Royal squares and football" },
  { name: "Malaga",       country: "Spain",     img: "coast",       line: "Andalusian coast and Alhambra" },
  { name: "Tenerife",     country: "Spain",     img: "mountains",   line: "Volcanoes and ocean views" },
  { name: "Malta",        country: "Malta",     img: "coast",       line: "Islands, forts and blue water" },
  { name: "Brussels",     country: "Belgium",   img: "lake",        line: "Ghent, Bruges and chocolate" },
  { name: "Moscow",       country: "Russia",    img: "moscow",      line: "Red Square and grand avenues" },
  { name: "Marsa Alam",   country: "Egypt",     img: "beach",       line: "Reefs, turtles and Red Sea calm" },
  { name: "Tunis",        country: "Tunisia",   img: "desert",      line: "Medinas and Mediterranean shores" },
];

/* ---------- Tours ----------
   type: "package" | "day" | "transport"
   Optional: itinerary [{day, title, text}], includes [], pickup */
const TOURS = [
  /* Holiday packages */
  { id: "best-of-jordan", type: "package", title: "The Best of Jordan Tour in 4 Days", dest: "Jordan", img: "jordan",
    duration: "4 days / 3 nights", tags: ["Culture", "History", "Dead Sea"], pickup: "Amman Airport",
    overview: "A 4-day package covering Amman, the Desert Castles, Madaba, Mount Nebo and the Dead Sea.",
    itinerary: [
      { day: "Day 1", title: "Arrival", text: "Meet and assist at Queen Alia Airport, then a private transfer to your hotel in Amman." },
      { day: "Day 2", title: "Amman & Desert Castles (≈5 h)", text: "The Roman Theatre, the Citadel with the Temple of Hercules, the Umayyad Palace and the Byzantine church, then the Desert Castles with a local guide — famous for mosaics, frescoes and stucco from the 5th–8th centuries." },
      { day: "Day 3", title: "Madaba, Nebo & Dead Sea (≈6 h)", text: "The mosaic pavements of Madaba's Greek Orthodox Church, including the 6th-century mosaic map, then Mount Nebo and an afternoon at the Dead Sea." },
      { day: "Day 4", title: "Departure", text: "Check-out by 12:00 and a private transfer to the airport, up to 3 hours before your flight." },
    ],
    includes: ["3 nights at Grand Palace Hotel Amman or similar 4★", "English-speaking guide and driver during tours", "Daily buffet breakfast", "Airport transfers by private car"] },
  { id: "cairo-nile-cruise", type: "package", title: "Cairo and Nile Cruise in 8 Days", dest: "Egypt", img: "egypt",
    duration: "8 days", tags: ["History", "Cruise", "Culture"],
    overview: "Cairo's pyramids and museums, then a cruise along the Nile through the temples of Upper Egypt." },
  { id: "cairo-classic", type: "package", title: "Cairo Classic Tour in 4 Days", dest: "Egypt", img: "pyramids",
    duration: "4 days", tags: ["History", "City"],
    overview: "The essentials of Cairo in four days: Giza, the old city and the bazaars." },
  { id: "dubai-classic", type: "package", title: "Dubai Classic Tour", dest: "Dubai", img: "dubai",
    duration: "6 days", tags: ["City", "Desert", "Shopping"],
    overview: "Six days of Dubai: city sights, desert safari and free time for shopping and beaches." },
  { id: "bali-honeymoon", type: "package", title: "Bali – Indonesia Honeymoons Offer", dest: "Bali", img: "bali",
    duration: "6 days", tags: ["Honeymoon", "Nature", "Beach"],
    overview: "A romantic six-day escape to Bali: temples, rice terraces and beach villas." },
  { id: "singapore-summer", type: "package", title: "Singapore Saving Summer Tour", dest: "Singapore", img: "singapore",
    duration: "6 days", tags: ["City", "Family"],
    overview: "Six summer days in Singapore at a saving price, ideal for families." },
  { id: "best-of-tenerife", type: "package", title: "The Best of Tenerife Tour in 6 Days", dest: "Tenerife", img: "mountains",
    duration: "6 days", tags: ["Nature", "Beach", "Volcano"],
    overview: "Six days on Tenerife: volcanic landscapes, coastal towns and Atlantic beaches." },
  { id: "moscow-adventure", type: "package", title: "Discover a New Adventure in Moscow City for 5 Nights", dest: "Moscow", img: "moscow",
    duration: "6 days / 5 nights", tags: ["City", "Culture"],
    overview: "Five nights in Moscow between Red Square, grand metro stations and historic avenues." },

  /* Day tours */
  { id: "deluxe-dubai", type: "day", title: "Deluxe Dubai Full Day Tour", dest: "Dubai", img: "dubai", duration: "9 hours", tags: ["City", "Luxury"],
    overview: "A full day visiting Dubai's most famous landmarks in comfort." },
  { id: "desert-safari", type: "day", title: "Arabian Desert Dunes Safari Tour", dest: "Dubai", img: "desert", duration: "Evening", tags: ["Desert", "Adventure"],
    overview: "An evening in the dunes outside Dubai with a desert safari experience." },
  { id: "abudhabi-luxury", type: "day", title: "Luxury Abu Dhabi City Tour and Desert Safari", dest: "Abu Dhabi", img: "abudhabi", duration: "10 hours", tags: ["City", "Desert"],
    overview: "Abu Dhabi's landmarks by day, followed by a desert safari." },
  { id: "st-catherine-dahab", type: "day", title: "St. Catherine Monastery and Dahab City", dest: "Egypt", img: "desert", duration: "10 hours", tags: ["History", "Sinai"],
    overview: "A day in South Sinai: the historic St. Catherine Monastery and the seaside town of Dahab." },
  { id: "abu-dabab", type: "day", title: "Half Day Abu Dabab Beach – Marsa Alam", dest: "Marsa Alam", img: "beach", duration: "9 hours", tags: ["Beach", "Snorkeling"],
    overview: "A relaxed day at Abu Dabab Bay on the Red Sea coast." },
  { id: "amman-private", type: "day", title: "Private Tour in Amman City", dest: "Jordan", img: "jordan", duration: "3 hours", tags: ["City", "Private"],
    overview: "A private three-hour introduction to Amman with a local guide." },
  { id: "amman-jerash", type: "day", title: "Amman and Jerash Private City Tour", dest: "Jordan", img: "jordan", duration: "8 hours", tags: ["History", "Private"],
    overview: "Amman's highlights and the Roman city of Jerash in one private day tour." },
  { id: "kuala-lumpur", type: "day", title: "Discover Kuala Lumpur City in Amazing Tour", dest: "Kuala Lumpur", img: "kualalumpur", duration: "4 hours", tags: ["City"],
    overview: "A half-day discovery of Kuala Lumpur's landmarks." },
  { id: "langkawi-mangrove", type: "day", title: "Evergreen Mangrove & Cave Tour, Langkawi", dest: "Langkawi", img: "beach", duration: "Full day", tags: ["Nature", "Boat"],
    overview: "A full day through Langkawi's mangrove forests and caves." },
  { id: "istanbul-afternoon", type: "day", title: "Anatolia Istanbul Afternoon Tour", dest: "Istanbul", img: "istanbul", duration: "4 hours", tags: ["City", "Culture"],
    overview: "An afternoon exploring Istanbul's historic heart." },
  { id: "crete-cretan", type: "day", title: "Spend Amazing Time Being a Cretan for One Day", dest: "Crete", img: "beach", duration: "6 hours", tags: ["Culture", "Food"],
    overview: "Live a day like a local: Cretan traditions, villages and food." },
  { id: "crete-spinalonga", type: "day", title: "Excursion to Spinalonga Island with BBQ", dest: "Crete", img: "coast", duration: "7 hours", tags: ["Boat", "Island"],
    overview: "A boat trip to Spinalonga Island with a barbecue on board." },
  { id: "crete-elafonisi", type: "day", title: "Day Trip to Elafonisi Island", dest: "Crete", img: "beach", duration: "7 hours", tags: ["Beach", "Nature"],
    overview: "A day at Elafonisi, known for its shallow lagoon and pink-tinted sand." },
  { id: "mykonos-jeep", type: "day", title: "Hidden Corners of Mykonos by Jeep Safari", dest: "Mykonos", img: "coast", duration: "8 hours", tags: ["Adventure", "Island"],
    overview: "Off the beaten path around Mykonos by jeep." },
  { id: "mykonos-island", type: "day", title: "Mykonos City & Island Nature Tour", dest: "Mykonos", img: "coast", duration: "4 hours", tags: ["Nature", "City"],
    overview: "Mykonos town and the island's natural side in one half-day tour." },
  { id: "santorini-caldera", type: "day", title: "Caldera Panorama – Santorini", dest: "Santorini", img: "santorini", duration: "5 hours", tags: ["Views", "Relax"],
    overview: "Take in the caldera from Santorini's best viewpoints." },
  { id: "santorini-landrover", type: "day", title: "LandRover Safari in Santorini", dest: "Santorini", img: "santorini", duration: "6 hours", tags: ["Adventure"],
    overview: "An off-road LandRover safari across Santorini." },
  { id: "santorini-dinner", type: "day", title: "Dinner Cruise: Volcanic Island & Hot Springs", dest: "Santorini", img: "santorini", duration: "8 hours", tags: ["Cruise", "Sunset"],
    overview: "Sail to the volcano and the hot springs, with dinner on board at sunset." },
  { id: "malta-stars", type: "day", title: "Malta Under the Stars", dest: "Malta", img: "coast", duration: "4 hours", tags: ["Evening", "Relax"],
    overview: "An evening tour of Malta under the night sky." },
  { id: "malta-cruise", type: "day", title: "Full Day Cruise around the Malta Islands", dest: "Malta", img: "coast", duration: "7 hours", tags: ["Cruise", "Island"],
    overview: "A full-day cruise around the Maltese islands." },
  { id: "valletta", type: "day", title: "Highlights of Valletta, Malta's Capital", dest: "Malta", img: "coast", duration: "4 hours", tags: ["City", "History"],
    overview: "Walk through Valletta's fortified streets and landmarks." },
  { id: "madrid-avila", type: "day", title: "Avila and Segovia from Madrid", dest: "Madrid", img: "madrid", duration: "9 hours", tags: ["History", "Day trip"],
    overview: "Two UNESCO-listed historic cities in a day trip from Madrid." },
  { id: "madrid-lamancha", type: "day", title: "Don Quixote's La Mancha Guided Tour", dest: "Madrid", img: "madrid", duration: "11 hours", tags: ["Culture", "Day trip"],
    overview: "A full-day guided trip through the land of Don Quixote." },
  { id: "madrid-bernabeu", type: "day", title: "Madrid Sightseeing with Bernabeu Stadium Visit", dest: "Madrid", img: "madrid", duration: "Half day", tags: ["City", "Football"],
    overview: "Madrid's main sights plus a visit to the Santiago Bernabéu stadium." },
  { id: "malaga-nerja", type: "day", title: "Excursion to Nerja", dest: "Malaga", img: "coast", duration: "5 hours", tags: ["Coast"],
    overview: "A half-day excursion to the coastal town of Nerja." },
  { id: "malaga-gibraltar", type: "day", title: "Gibraltar Day Trip from Malaga", dest: "Malaga", img: "coast", duration: "8 hours", tags: ["Day trip"],
    overview: "A day trip from Malaga to the Rock of Gibraltar." },
  { id: "malaga-granada", type: "day", title: "Granada and Alhambra Full Day from Malaga", dest: "Malaga", img: "madrid", duration: "8 hours", tags: ["History", "Culture"],
    overview: "A full day in Granada and the Alhambra palace." },
  { id: "ghent-bruges", type: "day", title: "Ghent and Bruges City Tour from Brussels", dest: "Brussels", img: "lake", duration: "Full day", tags: ["City", "Day trip"],
    overview: "Two medieval Belgian cities in a full day from Brussels." },

  /* Transportation */
  { id: "car-rental", type: "transport", title: "Car Rental Worldwide", dest: "Worldwide", img: "car", duration: "Flexible", tags: ["Self-drive"],
    overview: "Rent a car at your destination, booked ahead through our network of partners." },
  { id: "chauffeur", type: "transport", title: "Chauffeur Drive Service", dest: "Worldwide", img: "car", duration: "Flexible", tags: ["Private", "Luxury"],
    overview: "A private car with a professional driver, by the hour or by the day." },
  { id: "bus-van", type: "transport", title: "Bus and Van Rental Service", dest: "Worldwide", img: "bus", duration: "Flexible", tags: ["Groups"],
    overview: "Best prices and first-class service for groups of any size." },
  { id: "private-transfers", type: "transport", title: "Private Transfers (Airport / Hotel)", dest: "Worldwide", img: "plane", duration: "Flexible", tags: ["Airport", "Private"],
    overview: "Private and luxury car transfers between airports and hotels." },
];

/* ---------- Services ---------- */
const SERVICES = [
  { icon: "plane",  title: "Flight Reservations",       text: "Airline tickets to any destination at the best available fares." },
  { icon: "hotel",  title: "Hotels & Apartments",       text: "Hand-picked hotels and apartments for every budget." },
  { icon: "car",    title: "Car Hire & Chauffeur",      text: "Self-drive rentals or a private car with driver." },
  { icon: "pin",    title: "Airport Transfers",         text: "Private and luxury cars from arrival to departure." },
  { icon: "ticket", title: "Tickets & Vouchers",        text: "Attraction, museum and show tickets delivered to you." },
  { icon: "users",  title: "Group & Incentive Programs",text: "Tailored programs for groups, companies and events." },
  { icon: "star",   title: "Airline Loyalty",           text: "Air miles and airline loyalty programme support." },
  { icon: "sun",    title: "Holiday Packages",          text: "Ready-made and custom leisure packages." },
  { icon: "shield", title: "Travel Insurance",          text: "Travel with peace of mind, wherever you go." },
];
