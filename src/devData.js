// Sample data for local development mode (npm run dev).
// In production, real data comes from window.__DATA__ (set by index.php).
export const DEV_DATA = {
  content: {
    brand: 'Uni Sushi',
    heroEyebrow: 'Kuta · Bali',
    heroTagline: 'Great food, great company, every day.',
    heroLede: 'Your neighborhood gathering spot in Kuta — international flavors made with local produce, signature cocktails, comfort food classics, and the best hangover cure in town.',
    heroImage: '/images/hero.jpg',
    logo: "/images/Logo.jpeg",
    aboutEyebrow: 'Our story',
    aboutTitle: 'Your neighborhood favorite since 2016',
    aboutImage: '/images/About01.jpg',
    aboutText: "Founded in 2016, Uni blends international flavors with local produce — a place for sports, late nights and the best hangover cure in town.\n\nWe're more than just a restaurant. We're your neighborhood gathering spot where great food meets great company, and every game feels like a celebration.\n\nFrom our signature cocktails to comfort food classics, everything is crafted with passion and served with the warmth that makes Uni feel like home.",
    address: 'Jl. Benesari, Kuta, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia',
    phone: '+62 895-4216-45000',
    whatsapp: '62895421645000',
    email: 'contact@unicafebali.com',
    instagram: 'unisushiasianfusion',
    mapsQuery: 'https://maps.app.goo.gl/LE8RhSwv8ccwumtr9',
    hours: [
      { h: 'Open Close 12 am' },
    ],
  },
  categories: [
    { id: 1, name: 'Soup' },
    { id: 2, name: 'Sushi' },
    { id: 3, name: 'Hibachi' },
    { id: 4, name: 'House Roll' },
    { id: 5, name: 'Westren Cuisine' },
    { id: 6, name: 'The Fire Wok' },
    { id: 7, name: 'Fried Roll' },
    { id: 8, name: 'Sandwich & Dessert' },
    { id: 9, name: 'Appetizer' },
    { id: 10, name: 'Supreme' },
    { id: 11, name: 'Salad' },
    { id: 12, name: 'Pizza Edition' }
  ],
  items: [
    { id: 1, name: 'Alvocado Coffee', image: '/images/avocado_coffee.jpg' },
    { id: 2, name: 'Bucket Bali Hai', image: '/images/bucket_bali_hai.jpg' },
    { id: 3, categories: 12, name: 'Calsone Pizza', image: '/images/calsone_pizza.jpg' },
    { id: 4, name: 'Chicken Habachi Grill', image: '/images/chiken_habachi_grill.jpg' },
    { id: 5, categories: 2, name: 'Chicken Teriyaki Roll', image: '/images/chiken_teriyaki_roll.jpg' },
    { id: 6, name: 'Chiraszi Deluxe Uni', image: '/images/chiraszi_deluxe_uni.jpg' },
    { id: 7, name: 'Expresso Martini', image: '/images/expresso_martini.jpg' },
    { id: 8, name: 'Fruid Tingle', image: '/images/fruid_tingle.jpg' },
    { id: 9, categories: 9, name: 'Gyoza Chicken', image: '/images/gyoza_chiken.jpg' },
    { id: 10, categories: 11, name: 'Kani Crab Salad', image: '/images/kani_crab_salad.jpg' },
    { id: 11, name: 'Karage Chicken', image: '/images/karage_chiken.jpg' },
    { id: 12, name: 'Manggo Daiquiri', image: '/images/manggo_daiquiri.jpg' },
    { id: 13, categories: 12, name: 'Margarita Pizza', image: '/images/margarita_pizza.jpg' },
    { id: 14, categories: 6, name: 'Mongolian Beef', image: '/images/mongolian_beef.jpg', isFeatured: true },
    { id: 15, name: 'Nasi Goreng Nusantara', image: '/images/nasi_goreng_nusantara.jpg', isFeatured: true },
    { id: 16, name: 'Pinacolada', image: '/images/pinacolada.jpg' },
    { id: 17, categories: 1, name: 'Seafood Cowder', image: '/images/seafood_cowder.jpg' },
    { id: 18, categories: 11, name: 'Seaweed Salad Uni', image: '/images/seaweed_salad_uni.jpg' },
    { id: 19, categories: 2, name: 'Street Beet Combo', image: '/images/street_beet_combo.jpg' },
    { id: 20, categories: 1, name: 'Tom Yum Gong', image: '/images/tom_yum_gong.jpg' },
    { id: 21, categories: 5, name: 'Tripel Monkey Burger', image: '/images/tripel_monkey_burger.jpg' },
    { id: 22, categories: 5, name: 'Ultimate Burger Uni', image: '/images/ultimate_burger_uni.jpg' },
    { id: 23, categories: 8, name: 'Uni Club Sandwich', image: '/images/uni_club_sandwich.jpg' },
    { id: 24, categories: 12, name: 'Uni Spot Bar Pizza', image: '/images/uni_spot_bar_pizza.jpg' },
    { id: 25, categories: 2, name: 'Sushi Lover', image: '/images/sushi_lover.jpg', isFeatured: true, },
    { id: 26, categories: 10, name: 'Salmon Mentai', image: '/images/salmon_mentai_roll.jpg', isFeatured: true },
    { id: 27, name: 'Cosmic Colanda', image: '/images/cosmic_colanda.jpg' }
  ],
  // gallery: [
  //   { id: 1, image: '/images/IMG_3696.jpg',},
  //   { id: 2, image: '/images/IMG_6304.jpg'},
  //   { id: 3, image: '/images/IMG_6306.jpg'},
  //   { id: 4, image: '/images/IMG_6328.jpg'},
  //   { id: 5, image: '/images/IMG_6462.jpg'},
  //   { id: 6, image: '/images/IMG_6539.jpg'},
  //   { id: 7, image: '/images/IMG_6710.jpg'},
  //   { id: 8, image: '/images/IMG_6711.jpg'},
  //   { id: 9, image: '/images/IMG_6712.jpg'}
  // ],

  faqData: [
    {
      q: "Where is Uni Sushi Bali located?",
      a: "We're located on Jl. Benesari, Kuta, Kec. Kuta, Kabupaten Badung, Bali — an easy walk from the heart of Kuta."
    },
    {
      q: "What are Uni Sushi's opening hours?",
      a: "We're open daily from 11:00 AM to 12:00 AM (midnight), including weekends."
    },
    {
      q: "What are Uni Sushi's signature menu items?",
      a: "We serve a mix of sushi bar and Asian fusion dishes, with guest favorites including Caesar Salad, Chicken Cashewnuts, and Chicken Strip with Vegetable — all made with fresh ingredients and bold flavors."
    },
    {
      q: "Does Uni Sushi offer delivery?",
      a: "Yes, we deliver via GoFood and GrabFood, or you can order directly through WhatsApp."
    },
    {
      q: "How can I contact or place an order?",
      a: "You can reach us at 0813-3990-099, or simply order through the 'Order via WhatsApp' button on our website."
    },
    {
      q: "Can I make a reservation?",
      a: "Yes, just use the 'Reserve' button on our website to book a table in advance — especially recommended during peak hours."
    },
    {
      q: "What's the average price range per person?",
      a: "Expect to spend around Rp75,000–Rp100,000 per person, depending on your menu choices."
    }
  ]
};