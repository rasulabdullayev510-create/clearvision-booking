// ================================================================
//  CLIENT CONFIG — EDIT THIS FILE FOR EACH NEW CLIENT
//  Then deploy the booking/ folder to Railway
// ================================================================
module.exports = {

  // --- Business info ---
  businessName:     "Business Name",
  bookingPageUrl:   "https://YOUR-APP.up.railway.app",   // used in rebook SMS links
  googleReviewLink: "https://g.page/your-business",      // 4-5 star review redirect

  // --- Operating hours ---
  // startHour / endHour are 24h format integers (9 = 9am, 17 = 5pm)
  // closedDays: 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  hours: {
    default:     { startHour: 9,  endHour: 17 },  // Mon–Thu
    friday:      { startHour: 9,  endHour: 17 },  // Friday
    weekend:     { startHour: 10, endHour: 16 },  // Sat & Sun
    closedDays:  [],                               // e.g. [0] to close Sundays
  },

  // --- Services shown on booking page ---
  // category is used as the badge label on each service card
  services: [
    {
      id:          "service-1",
      name:        "Service One",
      description: "What this service includes and who it helps.",
      duration:    60,      // minutes
      price:       50,      // dollars
      category:   "main",
    },
    {
      id:          "service-2",
      name:        "Service Two",
      description: "What this service includes and who it helps.",
      duration:    30,
      price:       30,
      category:   "main",
    },
  ],

  // --- Review SMS delay ---
  // How many minutes after the appointment time to send the review SMS
  reviewDelayMinutes: 1440,  // 1440 = 24 hours (use 2 for testing)
};
