// Sample data for local development mode (npm run dev).
// In production, real data comes from window.__DATA__ (set by index.php).
export const DEV_DATA = {
  content: {
    brand: 'Uni Sushi',
    heroEyebrow: 'Kuta · Bali',
    heroTagline: 'Great food, great company, every day.',
    heroLede: 'Your neighborhood gathering spot in Kuta — international flavors made with local produce, signature cocktails, comfort food classics, and the best hangover cure in town.',
    heroImage: '/images/hero.webp',
    logo: "/images/Logo.webp",
    aboutEyebrow: 'Our story',
    aboutTitle: 'Your neighborhood favorite since 2016',
    aboutImage: '/images/About01.webp',
    aboutText: "Founded in 2016, Uni blends international flavors with local produce — a place for sports, late nights and the best hangover cure in town.\n\nWe're more than just a restaurant. We're your neighborhood gathering spot where great food meets great company, and every game feels like a celebration.\n\nFrom our signature cocktails to comfort food classics, everything is crafted with passion and served with the warmth that makes Uni feel like home.",
    address: 'Jl. Benesari, Kuta, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia',
    phone: '+62 895-4216-45000',
    whatsapp: '62895421645000',
    email: 'contact@unicafebali.com',
    instagram: 'unisushiasianfusion',
    hours: [
      { h: 'Open Close 12 am' },
    ],
  },
  categories: [
    { id: 1, name: 'Soup' },
    { id: 2, name: 'Sushi' },
    { id: 3, name: 'Tacho Sushi' },
    { id: 4, name: 'Sushi Combo' },
    { id: 5, name: 'Asian Food' },
    { id: 6, name: 'Hibachi' },
    { id: 7, name: 'House Roll' },
    { id: 8, name: 'Westren Cuisine' },
    { id: 9, name: 'The Fire Wok' },
    { id: 10, name: 'Fried Roll' },
    { id: 11, name: 'Sandwich & Dessert' },
    { id: 12, name: 'Appetizer' },
    { id: 13, name: 'Supreme' },
    { id: 14, name: 'Salad' },
    { id: 15, name: 'Pizza Edition' }
  ],
  items: [
  // Soup
  { id: 1, categories: 1, name: 'Tom Yum Gong', image: '/images/tom_yum_gong.webp' },
  // { id: 2, categories: 1, name: 'Cream Of Chicken Soup' },
  // { id: 3, categories: 1, name: 'Miso Soup' },
  // { id: 4, categories: 1, name: 'Egg Drop Soup' },
  // { id: 5, categories: 1, name: 'Prawn Clear Soup' },
  { id: 6, categories: 1, name: 'Seafood Cowder', image: '/images/seafood_cowder.webp' },

  // Sushi (Simple Nori)
  // { id: 7, categories: 2, name: 'Spicy Salmon' },
  // { id: 8, categories: 2, name: 'Spicy Tuna Roll' },
  // { id: 9, categories: 2, name: 'California Roll' },
  // { id: 10, categories: 2, name: 'Shrimp Tempura Roll' },
  // { id: 11, categories: 2, name: 'Spider Roll' },
  // { id: 12, categories: 2, name: 'Bagel Roll' },
  // { id: 13, categories: 2, name: 'Philadelphia Roll' },
  // { id: 14, categories: 2, name: 'Vegetable Roll' },
  // { id: 15, categories: 2, name: 'Alvocado Cucumber Roll' },
  { id: 16, categories: 2, name: 'Chicken Teriyaki Roll', image: '/images/chiken_teriyaki_roll.webp' },
  // { id: 17, categories: 2, name: 'Tuna Roll/Maki' },
  // { id: 18, categories: 2, name: 'Salmon Roll/Maki' },
  // { id: 19, categories: 2, name: 'Alvocado Roll/Maki' },
  // { id: 20, categories: 2, name: 'Cucumber Roll/Maki' },
  // { id: 21, categories: 2, name: 'Salmon Skin Roll' },

  // Taco Sushi
  // { id: 22, categories: 3, name: 'Tree Flavor Taco' },
  // { id: 23, categories: 3, name: 'Crispy Tuna Poke Taco' },
  // { id: 24, categories: 3, name: 'Tuna Tataki Taco' },
  // { id: 25, categories: 3, name: 'Burrito Sushi' },

  // Sushi Combo
  { id: 26, categories: 4, name: 'Street Beet Combo', image: '/images/street_beet_combo.webp' },
  { id: 27, categories: 4, name: 'Sushi Lover', image: '/images/sushi_lover.webp', isFeatured: true },
  // { id: 28, categories: 4, name: 'Hangout Sushi Set' },
  // { id: 29, categories: 4, name: 'Double Site Roll' },

  // Asian Food
  // { id: 30, categories: 5, name: 'Chicken And Cashewnut' },
  // { id: 31, categories: 5, name: 'braised Pork Belly & Bok Coy' },
  // { id: 32, categories: 5, name: 'Sweet & Sour Chicken' },
  // { id: 33, categories: 5, name: 'Stir Fry Broccoli & Chicken' },
  // { id: 34, categories: 5, name: 'General TSOS Chicken' },
  { id: 35, categories: 5, name: 'Nasi Goreng Nusantara', image: '/images/nasi_goreng_nusantara.webp', isFeatured: true },
  // { id: 36, categories: 5, name: 'Mie Goreng(Spesial Fried Noodles)' },
  // { id: 37, categories: 5, name: 'Chicken Satay' },
  // { id: 38, categories: 5, name: 'Chicken Black Pepper Mushroom' },
  // { id: 39, categories: 5, name: 'Grilled Atlantic Salmon' },

  // Hibachi
  { id: 40, categories: 6, name: 'Chicken Habachi Grill', image: '/images/chiken_habachi_grill.webp' },

  // House Roll
  // { id: 41, categories: 7, name: 'Rainbow Roll' },
  // { id: 42, categories: 7, name: 'Rock Starr Roll' },
  // { id: 43, categories: 7, name: 'Crispy Rice Spicy Tuna' },
  // { id: 44, categories: 7, name: 'Rock & Roll' },
  // { id: 45, categories: 7, name: 'Funky Roll' },
  // { id: 46, categories: 7, name: 'Mango Roll/Seasoned' },
  // { id: 47, categories: 7, name: 'Cheese Tempura Chunch Roll' },
  // { id: 48, categories: 7, name: 'Crunch Blast Roll' },
  // { id: 49, categories: 7, name: 'Snow White Roll' },
  // { id: 50, categories: 7, name: 'Rock Star Roll' },
  // { id: 51, categories: 7, name: 'Bed Dragon Roll' },
  // { id: 52, categories: 7, name: 'Super Crunch Roll' },
  // { id: 53, categories: 7, name: 'Crazy Roll' },
  // { id: 54, categories: 7, name: 'Pink Lady Roll' },
  // { id: 55, categories: 7, name: 'Red Hot Crunch Roll' },
  // { id: 56, categories: 7, name: 'Pophies Roll' },
  // { id: 57, categories: 7, name: 'Red Fire Roll' },
  // { id: 58, categories: 7, name: 'Fuji Roll' },
  // { id: 59, categories: 7, name: 'Geisha Roll' },

  // Western Cuisine
  { id: 60, categories: 8, name: 'Tripel Monkey Burger', image: '/images/tripel_monkey_burger.webp' },
  // { id: 61, categories: 8, name: 'Cheese Burger' },
  // { id: 62, categories: 8, name: 'Supreme Beef Burger' },
  { id: 63, categories: 8, name: 'Ultimate Burger Uni', image: '/images/ultimate_burger_uni.webp' },
  // { id: 64, categories: 8, name: 'Chicken Burger' },
  // { id: 65, categories: 8, name: 'Aglio A Olio With Grill Praw/Chicken' },
  // { id: 66, categories: 8, name: 'carbonara' },
  // { id: 67, categories: 8, name: 'Bolognese' },
  // { id: 68, categories: 8, name: 'Seafood Spagetti' },

  // The Fire Wok
  // { id: 69, categories: 9, name: 'Spicy Beef Salad' },
  { id: 70, categories: 9, name: 'Mongolian Beef', image: '/images/mongolian_beef.webp', isFeatured: true },
  // { id: 71, categories: 9, name: 'Beef Black Pepper Mushroom' },
  // { id: 72, categories: 9, name: 'Pork Chop Suey' },
  // { id: 73, categories: 9, name: 'Oriental Spicy Prawn' },
  // { id: 74, categories: 9, name: 'Veggie Delight Chicken' },
  // { id: 75, categories: 9, name: 'Orange Chicken' },
  // { id: 76, categories: 9, name: 'Thai Green Curry' },
  // { id: 77, categories: 9, name: 'Kung Pao Chicken' },

  // Fried Roll
  // { id: 78, categories: 10, name: 'Bali Rock City Roll' },
  // { id: 79, categories: 10, name: 'Bali Side Kick Roll' },
  // { id: 80, categories: 10, name: 'Golden Fried Roll' },
  // { id: 81, categories: 10, name: 'Beef Steak Uni' },
  // { id: 82, categories: 10, name: 'Rocky Roll' },
  // { id: 83, categories: 10, name: 'Tempura Fried Roll' },
  // { id: 84, categories: 10, name: 'Flying Fish Roll' },
  // { id: 85, categories: 10, name: 'Aussie Roll' },

  // Sandwich
  { id: 86, categories: 11, name: 'Uni Club Sandwich', image: '/images/uni_club_sandwich.webp' },
  // { id: 87, categories: 11, name: 'Juicy Steak BBQ Sauce' },
  // { id: 88, categories: 11, name: 'BLT Sandwich' },

  // Dessert
  // { id: 89, categories: 12, name: 'Brownies' },
  // { id: 90, categories: 12, name: 'Cheese Cake' },
  // { id: 91, categories: 12, name: 'Ice Cream Scoup' },
  // { id: 92, categories: 12, name: 'Manggo Sticky Rice' },

  // Appetizer
  { id: 93, categories: 12, name: 'Gyoza', image: '/images/gyoza_chiken.webp' },
  // { id: 94, categories: 12, name: 'Crab Tempura' },
  // { id: 95, categories: 12, name: 'Ebi Tempura' },
  // { id: 96, categories: 12, name: 'Chicken Karaage' },
  // { id: 97, categories: 12, name: 'Squid Karaage' },
  // { id: 98, categories: 12, name: 'Yakitori' },
  // { id: 99, categories: 12, name: 'Sake Kama/Salmon Neck' },
  // { id: 100, categories: 12, name: 'Chiken Wings' },
  // { id: 101, categories: 12, name: 'Spring Roll' },
  // { id: 102, categories: 12, name: 'Onion Ring' },
  // { id: 103, categories: 12, name: 'Potato Wedges' },
  // { id: 104, categories: 12, name: 'fries' },

  // Supreme
  // { id: 105, categories: 13, name: 'Super Fire Roll' },
  // { id: 106, categories: 13, name: 'Volcano Roll' },
  // { id: 107, categories: 13, name: 'Royal Roll' },
  // { id: 108, categories: 13, name: 'Pasta Roll' },
  // { id: 109, categories: 13, name: 'Poke Bowl' },
  { id: 110, categories: 13, name: 'Salmon Mentai', image: '/images/salmon_mentai_roll.webp', isFeatured: true },
  // { id: 111, categories: 13, name: 'Salmon Salsa Roll' },
  // { id: 112, categories: 13, name: 'Chefs Special Roll' },
  // { id: 113, categories: 13, name: 'Ocean Wafe Roll' },

  // Salad
  // { id: 114, categories: 14, name: 'Edamane' },
  { id: 115, categories: 14, name: 'Seaweed Salad Uni', image: '/images/seaweed_salad_uni.webp' },
  // { id: 116, categories: 14, name: 'Sunomono/Cucumber Crab Salad' },
  { id: 117, categories: 14, name: 'Kani Crab Salad', image: '/images/kani_crab_salad.webp' },
  // { id: 118, categories: 14, name: 'Classic Caesar Salad' },
  // { id: 119, categories: 14, name: 'Thai beef Salad' },
  // { id: 120, categories: 14, name: 'Greek Salad' },
  // { id: 121, categories: 14, name: 'Fresh Garden Salad' },
  // { id: 122, categories: 14, name: 'Smoke Salmon & Avo Salad' },

  // Pizza Edition
  { id: 123, categories: 15, name: 'Uni Spot Bar Pizza', image: '/images/uni_spot_bar_pizza.webp' },
  { id: 124, categories: 15, name: 'Margarita Pizza', image: '/images/margarita_pizza.webp' },
  // { id: 125, categories: 15, name: 'Seafood Pizza' },
  // { id: 126, categories: 15, name: 'White Pizza' },
  // { id: 127, categories: 15, name: 'Salani Pizza' },
  { id: 128, categories: 15, name: 'Calsone Pizza', image: '/images/calsone_pizza.webp' },

  // Drinks / Uncategorized
  { id: 129, name: 'Alvocado Coffee', image: '/images/avocado_coffee.webp' },
  { id: 130, name: 'Bucket Bali Hai', image: '/images/bucket_bali_hai.webp' },
  { id: 131, name: 'Chiraszi Deluxe Uni', image: '/images/chiraszi_deluxe_uni.webp' },
  { id: 132, name: 'Expresso Martini', image: '/images/expresso_martini.webp' },
  { id: 133, name: 'Fruid Tingle', image: '/images/fruid_tingle.webp' },
  { id: 134, name: 'Karage Chicken', image: '/images/karage_chiken.webp' },
  { id: 135, name: 'Manggo Daiquiri', image: '/images/manggo_daiquiri.webp' },
  { id: 136, name: 'Pinacolada', image: '/images/pinacolada.webp' },
  { id: 137, name: 'Cosmic Colanda', image: '/images/cosmic_colanda.webp' },
  { id: 138, name: 'Sex On The Beach', image: '/images/sex_on_the_beach.jpg'}
],

  instagramPosts: [
    {
      image: '/images/Gallery 1.webp',
      url: 'https://www.instagram.com/p/DbHfnnIzl93/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      video: '/images/Gallery 2.webm',
      url: 'https://www.instagram.com/reel/Dat7VpuyLPY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      video: '/images/gallery 3.webm',
      url: 'https://www.instagram.com/reel/Da7dwKnu1eW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      image: '/images/gallery 4.webp',
      url: 'https://www.instagram.com/p/Da7bTOFOKbX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      image: '/images/gallery 5.webp',
      url: 'https://www.instagram.com/p/Dax01IfuZJs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      image: '/images/gallery 6.webp',
      url: 'https://www.instagram.com/p/DanccCSmpxc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      image: '/images/gallery 7.webp',
      url: 'https://www.instagram.com/p/DanccCSmpxc/?img_index=2'
    },
    {
      image: '/images/gallery 8.webp',
      url: 'https://www.instagram.com/p/DanccCSmpxc/?img_index=3'
    },
    {
      image: '/images/gallery 9.webp',
      url: 'https://www.instagram.com/p/DanccCSmpxc/?img_index=4'
    },
    {
      image: '/images/gallery 10.webp',
      url: 'https://www.instagram.com/p/DanccCSmpxc/?img_index=5'
    },
    {
      video: '/images/gallery 11.webm',
      url: 'https://www.instagram.com/reel/Dai2GBmJJgD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      video: '/images/gallery 12.webm',
      url: 'https://www.instagram.com/reel/DaizdBtPu2d/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      video: '/images/gallery 13.webm',
      url: 'https://www.instagram.com/reel/Daid5WjJje5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      image: '/images/gallery 15.webp',
      url: 'https://www.instagram.com/p/DUUno4tE7FN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      video: '/images/gallery 16.webm',
      url: 'https://www.instagram.com/reel/DScYLM6E8ln/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      image: '/images/gallery 17.webp',
      url: 'https://www.instagram.com/p/DP3cOuUE2db/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
      image: '/images/gallery 18.webp',
      url: 'https://www.instagram.com/p/DPc-mlKk5o5/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    }
  ],

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