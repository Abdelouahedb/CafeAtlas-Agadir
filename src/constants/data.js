export const MENU_DATA = [
  {
    category: 'Petit Déjeuner',
    icon: '🌅',
    items: [
      { name: 'Avocado Toast', description: 'Pain artisanal, avocat frais, œuf poché, graines de sésame', price: 45, img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&q=75' },
      { name: 'Pancakes aux Fruits', description: 'Pancakes moelleux, fruits de saison, sirop d\'érable, chantilly', price: 40, img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=75' },
      { name: 'Msemen au Miel', description: 'Msemen traditionnel fait maison, miel de montagne, beurre', price: 25, img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=75' },
      { name: 'Omelette Berbère', description: 'Œufs fermiers, tomates, poivrons, herbes fraîches, fromage', price: 35, img: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=400&q=75' },
      { name: 'Açaí Bowl', description: 'Açaí, banane, granola maison, fruits frais, noix de coco', price: 50, img: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&q=75' },
      { name: 'Petit Déjeuner Complet', description: 'Msemen, baghrir, œufs, jus frais, thé à la menthe', price: 65, img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&q=75' },
    ],
  },
  {
    category: 'Plats Principaux',
    icon: '🍽️',
    items: [
      { name: 'Tajine de Poulet', description: 'Poulet fermier, olives, citron confit, herbes du jardin', price: 90, img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400&q=75' },
      { name: 'Couscous Royal', description: 'Semoule fine, légumes de saison, agneau tendre, bouillon parfumé', price: 110, img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=75' },
      { name: 'Tajine Kefta', description: 'Boulettes de viande épicées, sauce tomate, œuf, cumin', price: 85, img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&q=75' },
      { name: 'Pastilla au Poulet', description: 'Feuilleté croustillant, poulet, amandes, cannelle, sucre glace', price: 95, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=75' },
      { name: 'Salade Marocaine Complète', description: 'Légumes frais, thon, olives, huile d\'olive vierge', price: 55, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=75' },
      { name: 'Grillades Mixtes', description: 'Brochettes de viande et poulet, légumes grillés, riz safran', price: 120, img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=75' },
    ],
  },
  {
    category: 'Boissons',
    icon: '🥤',
    items: [
      { name: 'Jus d\'Orange Frais', description: 'Oranges pressées à la commande', price: 20, img: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&q=75' },
      { name: 'Thé à la Menthe', description: 'Thé vert gunpowder, menthe fraîche, servi traditionnellement', price: 15, img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=75' },
      { name: 'Café Espresso', description: 'Café arabica torréfié artisanalement', price: 18, img: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400&q=75' },
      { name: 'Smoothie Tropical', description: 'Mangue, ananas, banane, lait de coco', price: 35, img: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&q=75' },
      { name: 'Café Latte', description: 'Double espresso, lait mousseux, art latte', price: 25, img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=75' },
      { name: 'Limonade Maison', description: 'Citron, menthe, gingembre, miel', price: 22, img: 'https://images.unsplash.com/photo-1523371054106-bbf80586c38c?w=400&q=75' },
    ],
  },
  {
    category: 'Desserts',
    icon: '🍰',
    items: [
      { name: 'Crème Brûlée à la Fleur d\'Oranger', description: 'Crème onctueuse, caramel croustillant, eau de fleur d\'oranger', price: 40, img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=75' },
      { name: 'Pastilla au Lait', description: 'Feuilles de brick, crème pâtissière, amandes, cannelle', price: 35, img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=75' },
      { name: 'Cornes de Gazelle', description: 'Pâtisseries aux amandes traditionnelles marocaines', price: 30, img: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?w=400&q=75' },
      { name: 'Tiramisu Café Atlas', description: 'Notre version maison avec café arabica et mascarpone', price: 45, img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=75' },
      { name: 'Salade de Fruits Frais', description: 'Fruits de saison, menthe, filet de fleur d\'oranger', price: 30, img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=400&q=75' },
      { name: 'Cheesecake Spéculoos', description: 'Base spéculoos, fromage frais, coulis de fruits rouges', price: 45, img: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=75' },
    ],
  },
];

export const OPENING_HOURS = [
  { day: 'Lundi - Vendredi', hours: '07:00 - 23:00' },
  { day: 'Samedi', hours: '08:00 - 00:00' },
  { day: 'Dimanche', hours: '08:00 - 22:00' },
];

export const CONTACT_INFO = {
  phone: '+212 528 123 456',
  whatsapp: '+212661234567',
  email: 'contact@cafeatlas-agadir.ma',
  address: 'Boulevard du 20 Août, Agadir 80000, Maroc',
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.4559421455936!2d-9.5981!3d30.4278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDI1JzQwLjEiTiA5wrAzNSc1My4yIlc!5e0!3m2!1sfr!2sma!4v1234567890',
  mapsLink: 'https://maps.google.com/?q=30.4278,-9.5981',
};
