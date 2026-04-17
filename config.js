// ================================================================
//  CLIENT CONFIG — EDIT THIS FILE FOR EACH NEW CLIENT
//  Then deploy the booking/ folder to Railway
// ================================================================
module.exports = {

  // --- Business info ---
  businessName:     "Prestige Barbershop",
  bookingPageUrl:   "https://template-booking.onrender.com",
  googleReviewLink: "https://g.page/prestige-barbershop-calgary",

  // --- Operating hours ---
  // startHour / endHour are 24h format integers (9 = 9am, 17 = 5pm)
  // closedDays: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  hours: {
    default:     { startHour: 9,  endHour: 19 },  // Mon–Fri
    friday:      { startHour: 9,  endHour: 19 },  // Friday
    weekend:     { startHour: 9,  endHour: 18 },  // Sat, Sun 11–4
    closedDays:  [],
  },

  // --- Services shown on booking page ---
  services: [
    {
      id:          "haircut",
      name:        "Haircut",
      description: "Classic or modern cut with hot towel finish and style.",
      duration:    30,
      price:       35,
      category:   "cut",
    },
    {
      id:          "skin-fade",
      name:        "Skin Fade",
      description: "Zero to skin, blended clean. Our most popular cut.",
      duration:    40,
      price:       40,
      category:   "cut",
    },
    {
      id:          "beard-trim",
      name:        "Beard Trim & Shape",
      description: "Crisp lines and defined edges shaped to your face.",
      duration:    20,
      price:       25,
      category:   "beard",
    },
    {
      id:          "hot-towel-shave",
      name:        "Hot Towel Shave",
      description: "Full straight razor shave with hot towel prep.",
      duration:    40,
      price:       40,
      category:   "shave",
    },
    {
      id:          "kids-cut",
      name:        "Kids Cut",
      description: "Patient and friendly. For boys 12 and under.",
      duration:    25,
      price:       25,
      category:   "cut",
    },
    {
      id:          "combo",
      name:        "Cut + Beard Combo",
      description: "Full haircut and beard service — best value in the shop.",
      duration:    55,
      price:       55,
      category:   "combo",
    },
  ],

  // --- Timezone ---
  // IANA timezone string for appointment time calculations (review SMS fires 24h after appt)
  // Examples: "America/Edmonton", "America/Vancouver", "America/Toronto", "America/New_York"
  timezone: "America/Edmonton",

  // --- Review SMS delay ---
  // How many minutes after the appointment time to send the review SMS
  reviewDelayMinutes: 1440,  // 1440 = 24 hours (use 2 for testing)
};
