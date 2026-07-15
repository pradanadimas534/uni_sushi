// Sample data for local development mode (npm run dev).
// In production, real data comes from window.__DATA__ (set by index.php).
export const DEV_DATA = {
  content: {
    brand: 'Uni Sushi',
    heroEyebrow: 'Kuta · Bali',
    heroTagline: 'Great food, great company, every day.',
    heroLede: 'Your neighborhood gathering spot in Kuta — international flavors made with local produce, signature cocktails, comfort food classics, and the best hangover cure in town.',
    heroImage: '/images/hero.jpg',
    aboutEyebrow: 'Our story',
    aboutTitle: 'Your neighborhood favorite since 2016',
    aboutText: "Founded in 2016, Uni blends international flavors with local produce — a place for sports, late nights and the best hangover cure in town.\n\nWe're more than just a restaurant. We're your neighborhood gathering spot where great food meets great company, and every game feels like a celebration.\n\nFrom our signature cocktails to comfort food classics, everything is crafted with passion and served with the warmth that makes Uni feel like home.",
    address: 'Jl. Benesari, Kuta, Kec. Kuta, Kabupaten Badung, Bali 80361, Indonesia',
    phone: '+62 895-4216-45000',
    whatsapp: '6289542164500',
    email: 'contact@unicafebali.com',
    instagram: 'unicafebali',
    mapsQuery: 'https://maps.app.goo.gl/LE8RhSwv8ccwumtr9',
    hours: [
      { d: 'Every day', h: 'Hours to be confirmed' },
    ],
  },
  categories: [
    { id: 1, name: 'Breakfast, Brunch & Lunch' },
    { id: 2, name: 'Asian All Dining & Main Course' },
    { id: 3, name: 'Burgers & Sandwiches & Hot Dogs' },
    { id: 4, name: 'Pizza & Pasta' },
    { id: 5, name: 'Salads & Soups' },
    { id: 6, name: 'Sides & Snacks' },
    { id: 7, name: 'Desserts & Cakes' },
    { id: 8, name: 'Coffee & Tea' },
    { id: 9, name: 'Beverage' },
    { id: 10, name: 'Mocktails & Fresh Juices' },
    { id: 11, name: 'Cocktails & Spirits' },

  ],
  items: [
    // Breakfast, Brunch & Lunch
    { id: 1, category_id: 1, name: 'Full English Brekky', description: 'Eggs, bacon, sausage, hash brown, baked beans, grilled tomato, toast.', tag: '', featured: true, image: '' },
    { id: 2, category_id: 1, name: 'Egg benny', description: 'Toasted Muffin, Poached Eggs, Baby Spinach, Hollandaise Sauce', tag: '', Image: '' },
    { id: 3, category_id: 1, name: 'Big boy warp', description: 'Homemade Beef Patty, Bacon, Has Brown, Scrambled egg, cheese', image: ''},
    { id: 4, category_id: 1, name: 'Uni Brekky Burger', description: 'Homemade Beef Patty, Fried Egg, Hash Brown, Cheese, Burger Bun', image: ''},
    { id: 5, category_id: 1, name: 'Croissant Stacker', description: 'Croissant, Fried Egg, Ham, Cheese, Fresh Tomato, Basil, Avocado Smash', image: ''},
    { id: 6, category_id: 1, name: 'Croissant Tuna', description: 'croissant, Smashed Boiled Egg, Tuna Mayo', image: ''},
    // Asian All Dining & Main Course
    { id: 7, category_id: 2, name: 'Nasi Goreng', description: 'fried rice, Vegetables, Prawn Cracker, Traditional Pickle, Chicken Satay', image: ''},
    { id: 8, category_id: 2, name: 'Mie Goreng', description: 'fried noodle, vegetables, sunny side egg, prawn cracker, traditional pikles, chiken satay', image: ''},
    { id: 9, category_id: 2, name: 'Chicken Satay', description: 'grilled chicken skewers, peanut sauce, traditional pickles, steamed rice', image: ''},
    { id: 10, category_id: 2, name: 'Sweet & Sour Chicken', description: 'fried chiken, sweet & sour sauce, capsicum, pineaple, onion', image: ''},
    { id: 11, category_id: 2, name: 'Sweet & Sour Pork', description: 'pork, sweet & sour sauce, vegetables', image: ''},
    { id: 12, category_id: 2, name: 'Butter Chicken', description: 'chicken, butter sauce, coriader, steamed white rice', image: ''},
    { id: 13, category_id: 2, name: 'Chicken Teriyaki', description: 'chicken, teriyaki sauce, vegetables, steamed rice', image: ''},
    { id: 14, category_id: 2, name: 'Capcay', description: 'mixed vegetables, oyster sauce, steamed rice', image: ''},
    { id: 15, category_id: 2, name: 'Indosien Chicken Curry', description: 'chicken, rice indonesian curry sauce, steamed rice', image: ''},
    { id: 16, category_id: 2, name: 'Thai Green Curry', description: 'spicy green curry, coconut cream, steamed rice', image: ''},
    { id: 17, category_id: 2, name: 'Beef Bulgogi', description: 'marinated beef, steamed rice', image: ''},
    { id: 18, category_id: 2, name: 'Traditional Chicken Parmigiana', descriptin: 'crumbed chicken breast, parmesan, melted cheese, steamed rice', image: ''},
    { id: 19, category_id: 2,}
  ],
};
