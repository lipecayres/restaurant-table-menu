const menu = [
  //
  // Cocktails
  //

  // signature
  {
    id: 101,
    title: "The Glamour",
    category: "cocktail's",
    price: 12,
    img: "./images/gengar.jpg",
    shortDesc: `Vodka. Blue Curacao. Citrus `,
    longDesc: `Vodka. Blue Curacao. Lemon soda. Sugar cane syrup. Orange for garnish. `,
  },
  {
    id: 102,
    title: "Carapacho",
    category: "cocktail's",
    price: 12,
    img: "./images/gengar.jpg",
    shortDesc: `Amarguinha. Malibu. `,
    longDesc: `Amarguinha. Malibu. pineapple juice, mint and splash of grenadine.`,
  },
  {
    id: 103,
    title: "Porto",
    category: "cocktail's",
    price: 12,
    img: "./images/gengar.jpg",
    shortDesc: `Soft. Flavour. Citrus `,
    longDesc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 104,
    title: "Fresh Air",
    category: "cocktail's",
    price: 12,
    img: "./images/gengar.jpg",
    shortDesc: `Soft. Flavour. Citrus `,
    longDesc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },

  // classics

  {
    id: 105,
    title: "Margarita",
    category: "cocktail's",
    price: 14,
    img: "./images/margarita.jpg",
    shortDesc: "Tequila. Triple Sec. Lime. Refreshing.",
    longDesc:
      "A classic cocktail with tequila, lime juice, and a touch of sweetness, served with a salted rim.",
  },
  {
    id: 106,
    title: "Mojito",
    category: "cocktail's",
    price: 13,
    img: "./images/mojito.jpg",
    shortDesc: "Mint. Lime. Fresh.",
    longDesc:
      "A refreshing Cuban cocktail made with white rum, fresh mint, lime juice, sugar, and soda water.",
  },
  {
    id: 107,
    title: "Caipirinha",
    category: "cocktail's",
    price: 12,
    img: "./images/caipirinha.jpg",
    shortDesc: "Cachaça. Lime. Bold.",
    longDesc:
      "A traditional Brazilian drink made with cachaça, sugar, and fresh lime, served over crushed ice.",
  },
  {
    id: 108,
    title: "Long Island Iced Tea",
    category: "cocktail's",
    price: 15,
    img: "./images/long_island.jpg",
    shortDesc: "Strong. Refreshing. Complex.",
    longDesc:
      "A potent cocktail featuring vodka, tequila, rum, gin, triple sec, and a splash of cola for color.",
  },
  {
    id: 109,
    title: "Sex on the Beach",
    category: "cocktail's",
    price: 12,
    img: "./images/sex_on_the_beach.jpg",
    shortDesc: "Fruity. Sweet. Smooth.",
    longDesc:
      "A fun cocktail with vodka, peach schnapps, cranberry juice, and orange juice.",
  },
  {
    id: 110,
    title: "Pornstar Martini",
    category: "cocktail's",
    price: 16,
    img: "./images/pornstar_martini.jpg",
    shortDesc: "Passionfruit. Vodka. Sweet.",
    longDesc:
      "A glamorous cocktail made with vanilla vodka, passionfruit puree, and a shot of prosecco on the side.",
  },
  {
    id: 111,
    title: "Blue Lagoon",
    category: "cocktail's",
    price: 13,
    img: "./images/blue_lagoon.jpg",
    shortDesc: "Vibrant. Citrusy. Refreshing.",
    longDesc: "A bright blue cocktail with vodka, blue curaçao, and lemonade.",
  },
  {
    id: 112,
    title: "Espresso Martini",
    category: "cocktail's",
    price: 15,
    img: "./images/espresso_martini.jpg",
    shortDesc: "Coffee. Vodka. Smooth.",
    longDesc:
      "A sophisticated cocktail with vodka, espresso, coffee liqueur, and sugar syrup.",
  },

  //
  // Mixes & Shots
  //

  {
    id: 201,
    title: "Gin and Tonic",
    category: "Mixes & Shots",
    price: 11,
    img: "./images/gin_tonic.jpg",
    shortDesc: "Crisp. Refreshing. Classic.",
    longDesc:
      "A timeless cocktail with gin and tonic water, served with a slice of lime.",
  },
  {
    id: 202,
    title: "Rum and Coke",
    category: "Mixes & Shots",
    price: 10,
    img: "./images/rum_coke.jpg",
    shortDesc: "Sweet. Smooth. Classic.",
    longDesc:
      "A simple yet delicious cocktail made with rum and cola, often served with a lime wedge.",
  },
  {
    id: 203,
    title: "Vodka and Soda",
    category: "Mixes & Shots",
    price: 10,
    img: "./images/vodka_soda.jpg",
    shortDesc: "Light. Refreshing. Bubbly.",
    longDesc:
      "A clean and refreshing mix of vodka and soda water, garnished with a lemon or lime wedge.",
  },
  {
    id: 204,
    title: "Malibu and RedBull",
    category: "Mixes & Shots",
    price: 12,
    img: "./images/malibu_redbull.jpg",
    shortDesc: "Tropical. Energetic. Sweet.",
    longDesc:
      "A vibrant drink combining Malibu coconut rum with RedBull for a tropical energy boost.",
  },
  {
    id: 205,
    title: "Mixed Drinks",
    category: "Mixes & Shots",
    price: 12,
    img: "./images/malibu_redbull.jpg",
    shortDesc: "Make your own mix",
    longDesc:
      "A classic mix of spirits and non-alcoholic mixers, perfect for any occasion.",
  },
  {
    id: 206,
    title: "Premium Mixed Drinks",
    category: "Mixes & Shots",
    price: 15,
    img: "./images/malibu_redbull.jpg",
    shortDesc: "Make it premium",
    longDesc:
      "Elevate your experience with top-shelf spirits and premium mixers for a refined taste.",
  },

  // Beers

  {
    id: 301,
    title: "Domestic Beers - 355mL",
    category: "Beer's",
    price: 4.75,
    img: "./images/domestic_beer.jpg",
    shortDesc: "Classic. Refreshing. Local.",
    longDesc:
      "A variety of locally brewed beers, perfect for everyday enjoyment.",
  },
  {
    id: 302,
    title: "Imported Beers - 355mL",
    category: "Beer's",
    price: 5.0,
    img: "./images/imported_beer.jpg",
    shortDesc: "Exotic. Unique. Premium.",
    longDesc:
      "A selection of international beers with distinctive flavors from around the world.",
  },
  {
    id: 303,
    title: "Pint",
    category: "Beer's",
    price: 6.0,
    img: "./images/pint.jpg",
    shortDesc: "Full. Bold. Satisfying.",
    longDesc: "A generous pint of your favorite beer, served fresh and cold.",
  },
  {
    id: 304,
    title: "Half-Pint",
    category: "Beer's",
    price: 4.5,
    img: "./images/half_pint.jpg",
    shortDesc: "Light. Crisp. Perfect portion.",
    longDesc:
      "A half-pint serving, ideal for a quick refreshment or lighter drink.",
  },
  {
    id: 305,
    title: "Panache",
    category: "Beer's",
    price: 7.0,
    img: "./images/panache.jpg",
    shortDesc: "Light. Sweet. Sparkling.",
    longDesc:
      "A refreshing mix of half-pint beer and 7Up, delivering a crisp and sweet experience.",
  },

  // Soft Drinks

  {
    id: 401,
    title: "Water",
    category: "Soft Drinks",
    price: 2.0,
    img: "./images/water.jpg",
    shortDesc: "Pure. Refreshing. Essential.",
    longDesc: "A bottle of pure water to keep you hydrated and refreshed.",
  },
  {
    id: 402,
    title: "Juice",
    category: "Soft Drinks",
    price: 2.5,
    img: "./images/juice.jpg",
    shortDesc: "Natural. Sweet. Fruity.",
    longDesc: "A variety of fruit juices for a healthy and refreshing drink.",
  },
  {
    id: 403,
    title: "Sparkling Water",
    category: "Soft Drinks",
    price: 2.5,
    img: "./images/sparkling_water.jpg",
    shortDesc: "Bubbly. Crisp. Refreshing.",
    longDesc: "A fizzy sparkling water that adds some sparkle to your day.",
  },
  {
    id: 404,
    title: "Pop Can",
    category: "Soft Drinks",
    price: 2.5,
    img: "./images/pop_can.jpg",
    shortDesc: "Sweet. Fizzy. Classic.",
    longDesc: "A cold can of soda to enjoy anytime.",
  },
  {
    id: 405,
    title: "RedBull",
    category: "Soft Drinks",
    price: 6.0,
    img: "./images/redbull.jpg",
    shortDesc: "Energizing. Bold. Refreshing.",
    longDesc: "A can of RedBull to give you a burst of energy.",
  },

  // coffee

  {
    id: 501,
    title: "Espresso",
    category: "Coffee",
    price: 2.0,
    img: "./images/espresso.jpg",
    shortDesc: "Bold. Intense. Classic.",
    longDesc: "A shot of rich espresso to kickstart your day.",
  },
  {
    id: 502,
    title: "Espresso + Cheirinho",
    category: "Coffee",
    price: 2.5,
    img: "./images/espresso_cheirinho.jpg",
    shortDesc: "Espresso with a twist.",
    longDesc: "A shot of espresso enhanced with a splash of brandy or liquor.",
  },
  {
    id: 503,
    title: "Cappuccino (Galão)",
    category: "Coffee",
    price: 4.5,
    img: "./images/cappuccino.jpg",
    shortDesc: "Creamy. Smooth. Portuguese style.",
    longDesc:
      "A frothy mix of espresso, steamed milk, and foam, served in a large cup.",
  },
  {
    id: 504,
    title: "Americano",
    category: "Coffee",
    price: 2.0,
    img: "./images/americano.jpg",
    shortDesc: "Smooth. Mild. Classic.",
    longDesc: "A simple coffee made with espresso and hot water.",
  },

  // after 9pm menu

  {
    id: 601,
    title: "Domestic Beers - 355mL",
    category: "After 9pm",
    price: 5.5,
    img: "./images/domestic_beer.jpg",
    shortDesc: "Classic. Refreshing. Local.",
    longDesc:
      "A variety of locally brewed beers, perfect for everyday enjoyment.",
  },
  {
    id: 602,
    title: "Imported Beers - 355mL",
    category: "After 9pm",
    price: 5.5,
    img: "./images/imported_beer.jpg",
    shortDesc: "Exotic. Unique. Premium.",
    longDesc:
      "A selection of international beers with distinctive flavors from around the world.",
  },
  {
    id: 603,
    title: "Beers - 210mL",
    category: "After 9pm",
    price: 5.0,
    img: "./images/imported_beer.jpg",
    shortDesc: "Exotic. Unique. Premium.",
    longDesc:
      "A selection of international beers with distinctive flavors from around the world.",
  },
];

export default menu;
