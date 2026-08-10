// ================================================================
//  CLIENT CONFIG — ClearVision Auto
// ================================================================
module.exports = {

  // --- Business info ---
  businessName:     "ClearVision Auto",
  bookingPageUrl:   "https://clearvision-booking.onrender.com",
  googleReviewLink: "https://g.page/r/CbgyguKR2ha2EBM/review",

  // --- Operating hours ---
  hours: {
    default:     { startHour: 11, endHour: 19 },  // Mon–Fri
    friday:      { startHour: 11, endHour: 19 },  // Friday
    weekend:     { startHour: 11, endHour: 19 },  // Saturday
    closedDays:  [],                              // No closed days
  },

  // --- Services ---
  services: [
    {
      id:          "minor-restoration",
      name:        "Standard Headlight Restoration",
      description: "Yellowing and fogginess removed. Perfect for vehicles with moderately hazy and yellow headlights.",
      duration:    90,
      price:       60,
      category:   "restoration",
    },
    {
      id:          "major-restoration",
      name:        "Major Headlight Restoration",
      description: "Heavy oxidation, deep fogging, and UV damage fully corrected. Like new results.",
      duration:    90,
      price:       70,
      category:   "restoration",
    },
    {
      id:          "light-sand",
      name:        "Light Sand Restoration",
      description: "Surface-level scratches and cloudiness sanded and polished out for a clear finish. Perfect for cars beginning to show wear.",
      duration:    90,
      price:       50,
      category:   "restoration",
    },
  ],

  // --- Timezone ---
  timezone: "America/Edmonton",

  // --- Review SMS delay ---
  reviewDelayMinutes: 1440,  // 24 hours after appointment
};
