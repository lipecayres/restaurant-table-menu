const menu = [
  //
  // Cocktails
  //

  // signature

  {
    id: 101,
    title: "The Glamour (2oz)",
    category: "cocktail's",
    price: 12,
    img: "./images/cocktails/the-glamour.jpg",
    shortDesc: `Sweet. Elegant. Stylish`,
    longDesc: `A  cocktail combining gin, lime juice, and sugar cane syrup, topped with a splash of grenadine for a sweet finish. `,
  },
  {
    id: 102,
    title: "Carapacho (2oz)",
    category: "cocktail's",
    price: 12,
    img: "./images/cocktails/carapacho.png",
    shortDesc: `Tropical. Sweet. Bright.`,
    longDesc: `A delightful cocktail blending Amarguinha, melon liqueur, Malibu, and Sprite, delivering a light and fruity taste.`,
  },
  {
    id: 103,
    title: "Porto (2oz)",
    category: "cocktail's",
    price: 12,
    img: "./images/cocktails/porto.png",
    shortDesc: `Bold. Herbal. Spirit-forward. `,
    longDesc: `Combining Macieira , Licor Beirão, and tonic water, this refreshing blend offers a smooth and bittersweet finish, perfect for unwinding. `,
  },
  {
    id: 104,
    title: "Brazilian Flag (2oz)",
    category: "cocktail's",
    price: 12,
    img: "./images/cocktails/brazilian-flag.png",
    shortDesc: `Citrusy. Vibrant. Tropical. `,
    longDesc: `A lively drink made with cachaça, blue curaçao, soda and orange juice. The colours evokes the vibrant energy of Brazil. `,
  },

  // classics

  {
    id: 105,
    title: "Margarita (1.5oz)",
    category: "cocktail's",
    price: 9,
    img: "./images/cocktails/margarita.png",
    shortDesc: "Classic. Vibrant. Smooth.",
    longDesc:
      "A classic cocktail with tequila, lime juice, and a touch of sweetness, served with a salted rim.",
  },
  {
    id: 106,
    title: "Mojito (1oz)",
    category: "cocktail's",
    price: 9,
    img: "./images/cocktails/mojito.png",
    shortDesc: "Mint. Lime. Fresh.",
    longDesc:
      "An invigorating Cuban cocktail made with white rum, fresh mint, lime juice, sugar, and soda water.",
  },
  {
    id: 107,
    title: "Caipirinha (1oz)",
    category: "cocktail's",
    price: 9,
    img: "./images/cocktails/caipirinha.jpeg",
    shortDesc: "Cachaça. Lime. Bold.",
    longDesc:
      "A traditional Brazilian drink made with cachaça, sugar, and lime, served over crushed ice.",
  },
  {
    id: 108,
    title: "Long Island Iced Tea (1.5oz)",
    category: "cocktail's",
    price: 9,
    img: "./images/cocktails/long-island.png",
    shortDesc: "Strong. Lively. Complex.",
    longDesc:
      "A potent cocktail featuring vodka, tequila, rum, gin, triple sec, and a splash of cola for color.",
  },
  {
    id: 109,
    title: "Sex on the Beach (1.5oz)",
    category: "cocktail's",
    price: 9,
    img: "./images/cocktails/sex-on-the-beach.jpeg",
    shortDesc: "Fruity. Sweet. Smooth.",
    longDesc:
      "A fun cocktail with vodka, peach schnapps, cranberry juice, and orange juice.",
  },
  {
    id: 110,
    title: "Irish Coffee (1oz)",
    category: "cocktail's",
    price: 9,
    img: "./images/cocktails/irish-coffee.jpeg",
    shortDesc: "Whiskey. Coffee. Creamy.",
    longDesc:
      "A cocktail made with rich black coffee, smooth Irish whiskey, a touch of sugar, and topped with a layer of lightly irish cream.",
  },
  {
    id: 111,
    title: "Blue Lagoon (1.5oz)",
    category: "cocktail's",
    price: 9,
    img: "./images/cocktails/blue-lagoon.png",
    shortDesc: "Vibrant. Citrusy. Refreshing.",
    longDesc: "A bright blue cocktail with vodka, blue curaçao, and lemonade.",
  },
  {
    id: 112,
    title: "Espresso Martini (1.5oz)",
    category: "cocktail's",
    price: 9,
    img: "./images/cocktails/espresso-martini.jpg",
    shortDesc: "Coffee. Vodka. Smooth.",
    longDesc:
      "A sophisticated cocktail with vodka, espresso, coffee liqueur, and sugar syrup.",
  },

  //
  // Mixes & Shots
  //

  {
    id: 201,
    title: "Gin and Tonic (1oz)",
    category: "Mixes & Shots",
    price: 8,
    img: "./images/mixed-drinks/gin-tonic.jpg",
    shortDesc: "Crisp. Refreshing. Classic.",
    longDesc:
      "A timeless cocktail with gin and tonic water, served with a slice of lime.",
  },
  {
    id: 202,
    title: "Rum and Coke (1oz)",
    category: "Mixes & Shots",
    price: 8,
    img: "./images/mixed-drinks/rum-coke.png",
    shortDesc: "Sweet. Smooth. Classic.",
    longDesc:
      "A simple yet delicious cocktail made with rum and cola, often served with a lime wedge.",
  },
  {
    id: 203,
    title: "Vodka and Soda (1oz)",
    category: "Mixes & Shots",
    price: 8,
    img: "./images/mixed-drinks/vodka-soda.png",
    shortDesc: "Light. Refreshing. Bubbly.",
    longDesc:
      "A clean and refreshing mix of vodka and soda water, garnished with a lemon or lime wedge.",
  },
  {
    id: 204,
    title: "Malibu and RedBull (1oz)",
    category: "Mixes & Shots",
    price: 9,
    img: "./images/mixed-drinks/malibu-redbull.jpg",
    shortDesc: "Tropical. Energetic. Sweet.",
    longDesc:
      "A vibrant drink combining Malibu coconut rum with RedBull for a tropical energy boost.",
  },
  {
    id: 205,
    title: "Mixed Drinks (1oz)",
    category: "Mixes & Shots",
    price: "8 ~ 9",
    img: "./images/mixed-drinks/mixed-drinks.png",
    shortDesc: "Make your own mix",
    longDesc:
      "A classic mix of spirits and non-alcoholic mixers, perfect for any occasion.",
  },
  {
    id: 206,
    title: "Premium Mixed Drinks (1oz)",
    category: "Mixes & Shots",
    price: "9 ~ 11",
    img: "./images/mixed-drinks/premium-mixed-drinks.png",
    shortDesc: "Make it premium",
    longDesc:
      "Elevate your experience with top-shelf spirits and premium mixers for a refined taste.",
  },
  {
    id: 207,
    title: "Shots (1oz)", 
    category: "Mixes & Shots",
    price: "7 ~ 9",
    img: "./images/mixed-drinks/shots.jpg",
    shortDesc: "A perfect way to party it up. Cheers!",
    longDesc:
      " Ideal for lively gatherings and celebrations, offering lots of different spirits to suit any taste."
  },
  {
    id: 208,
    title: "Premium Shots (1oz)", 
    category: "Mixes & Shots",
    price: "10 ~ 12",
    img: "./images/mixed-drinks/premium-shots.jpg",
    shortDesc: "Crafted with top-shelf spirits.",
    longDesc:
      "Experience luxury in every sip with premium spirits .Top-shelf liqueurs Perfect for those seeking a refined, bold flavor to elevate any occasion."
  },

  // Beers

  {
    id: 301,
    title: "Domestic Beers - 355mL",
    category: "Beer's",
    price: 4.75,
    img: "./images/beers/domestic-beers.png",
    shortDesc: "Enjou the flavour of our local beers.",
    longDesc:
      "A variety of locally brewed beers, perfect for everyday enjoyment.",
  },
  {
    id: 302,
    title: "Imported Beers - 355mL",
    category: "Beer's",
    price: 5.0,
    img: "./images/beers/imported-beers.jpeg",
    shortDesc: "Taste the flavours of the world.",
    longDesc:
      "A selection of international beers with distinctive flavors from around the world.",
  },
  {
    id: 303,
    title: "Beers - 210mL",
    category: "Beer's",
    price: 4.5,
    img: "./images/beers/coronita.jpg",
    shortDesc: "Exotic. Unique. Premium.",
    longDesc:
      "A selection of international beers with distinctive flavors from around the world.",
  },
  {
    id: 304,
    title: "Pint - 600mL",
    category: "Beer's",
    price: 6.0,
    img: "./images/beers/pint.png",
    shortDesc: "Full. Bold. Satisfying.",
    longDesc: "A generous pint of your favorite beer, served fresh and cold.",
  },
  {
    id: 305,
    title: "Half-Pint - 350mL",
    category: "Beer's",
    price: 4.5,
    img: "./images/beers/half-pint.jpg",
    shortDesc: "Light. Crisp. Perfect portion.",
    longDesc:
      "A half-pint serving, ideal for a quick refreshment or lighter drink.",
  },
  {
    id: 306,
    title: "Panache - 350mL",
    category: "Beer's",
    price: 7.0,
    img: "./images/beers/panache.png",
    shortDesc: "Light. Sweet. Sparkling.",
    longDesc:
      "A refreshing mix of half-pint beer and 7up, delivering a crisp and sweet experience.",
  },

  // Soft Drinks

  {
    id: 401,
    title: "Water - 200mL",
    category: "Soft Drinks",
    price: 2.0,
    img: "./images/soft-drinks/agua-luso.png",
    shortDesc: "Pure. Refreshing. Essential.",
    longDesc: "A bottle of pure water to keep you hydrated and refreshed.",
  },
  {
    id: 402,
    title: "Juice - 355mL",
    category: "Soft Drinks",
    price: 2.5,
    img: "./images/soft-drinks/juice.png",
    shortDesc: "Natural. Sweet. Fruity.",
    longDesc: "A variety of fruit juices for a healthy and refreshing drink.",
  },
  {
    id: 403,
    title: "Sparkling Water - 200mL",
    category: "Soft Drinks",
    price: 2.5,
    img: "./images/soft-drinks/sparkling-water.png",
    shortDesc: "Bubbly. Crisp. Refreshing.",
    longDesc: "A fizzy sparkling water that adds some sparkle to your day.",
  },
  {
    id: 404,
    title: "Pop Can - 355mL",
    category: "Soft Drinks",
    price: 6.0,
    img: "./images/soft-drinks/pop.jpg",
    shortDesc: "Sweet. Fizzy. Classic.",
    longDesc: "A cold can of soda to enjoy anytime.",
  },
  {
    id: 405,
    title: "RedBull - 250mL",
    category: "Soft Drinks",
    price: 6.0,
    img: "./images/soft-drinks/redbull.jpg",
    shortDesc: "Energizing. Bold. Refreshing.",
    longDesc: "A can of RedBull to give you a burst of energy.",
  },
  

  // coffee

  {
    id: 501,
    title: "Espresso",
    category: "Coffee",
    price: 2.0,
    img: "./images/coffee/espresso.jpg",
    shortDesc: "Bold. Intense. Classic.",
    longDesc: "A shot of rich espresso to kickstart.",
  },
  {
    id: 502,
    title: "Espresso + Cheirinho (0.25oz)",
    category: "Coffee",
    price: 2.5,
    img: "./images/coffee/coffee-cheirinho.png",
    shortDesc: "Espresso with a twist.",
    longDesc: "A shot of espresso enhanced with a splash of liqueur or cream.",
  },
  {
    id: 503,
    title: "Cappuccino (Galão)",
    category: "Coffee",
    price: 4.5,
    img: "./images/coffee/cappuccino.png",
    shortDesc: "Creamy. Smooth. Portuguese style.",
    longDesc:
      "A frothy mix of espresso, steamed milk, and foam, served in a large cup.",
  },
  {
    id: 504,
    title: "Americano (Carioca)",
    category: "Coffee",
    price: 2.0,
    img: "./images/coffee/americano.jpeg",
    shortDesc: "Smooth. Mild. Classic.",
    longDesc: "A simple coffee made with espresso and hot water.",
  },

  // after 9pm menu

  {
    id: 601,
    title: "Domestic Beers - 355mL",
    category: "After 9pm",
    price: 5.5,
    img: "./images/beers/domestic-beers.png",
    shortDesc: "Classic. Refreshing. Local.",
    longDesc:
      "A variety of locally brewed beers, perfect for everyday enjoyment.",
  },
  {
    id: 602,
    title: "Imported Beers - 355mL",
    category: "After 9pm",
    price: 5.5,
    img: "./images/beers/imported-beers.jpeg",
    shortDesc: "Exotic. Unique. Premium.",
    longDesc:
      "A selection of international beers with distinctive flavors from around the world.",
  },
  {
    id: 603,
    title: "Beers - 210mL",
    category: "After 9pm",
    price: 5.0,
    img: "./images/beers/coronita.jpg",
    shortDesc: "Exotic. Unique. Premium.",
    longDesc:
      "A selection of international beers with distinctive flavors from around the world.",
  },
];

export default menu;
