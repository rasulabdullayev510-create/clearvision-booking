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
    default:     { startHour: 8, endHour: 18 },  // Mon–Fri
    friday:      { startHour: 8, endHour: 18 },  // Friday
    weekend:     { startHour: 9, endHour: 17 },  // Saturday
    closedDays:  [0],                             // Closed Sundays
  },

  // --- Services ---
  services: [
    {
      id:          "minor-restoration",
      name:        "Minor Headlight Restoration",
      description: "Light yellowing and haze removed. Perfect for newer vehicles starting to show wear.",
      duration:    45,
      price:       90,
      category:   "restoration",
    },
    {
      id:          "major-restoration",
      name:        "Major Headlight Restoration",
      description: "Heavy oxidation, deep fogging, and UV damage fully corrected. Like new results.",
      duration:    60,
      price:       110,
      category:   "restoration",
    },
    {
      id:          "light-sand",
      name:        "Light Sand Restoration",
      description: "Surface-level scratches and cloudiness sanded and polished out for a clear finish.",
      duration:    45,
      price:       70,
      category:   "restoration",
    },
  ],

  // --- Timezone ---
  timezone: "America/Edmonton",

  // --- Review SMS delay ---
  reviewDelayMinutes: 1440,  // 24 hours after appointment
};
