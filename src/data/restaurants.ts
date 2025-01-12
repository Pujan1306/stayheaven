import type { Restaurant } from '../types/guide';

export const restaurants: Restaurant[] = [
  {
    id: 'spago',
    name: "Spago Beverly Hills",
    cuisine: "California/Contemporary",
    priceRange: "$$$$",
    address: "176 N Canon Dr, Beverly Hills",
    neighborhood: "Golden Triangle",
    signatureDishes: [
      "House Smoked Salmon Pizza",
      "Handmade Agnolotti",
      "Wiener Schnitzel"
    ],
    averageMealCost: 150,
    reservationRequired: true,
    openingHours: "5:30 PM - 10:00 PM",
    accessibility: ["Wheelchair accessible", "Valet parking"]
  },
  {
    id: 'mastros',
    name: "Mastro's Steakhouse",
    cuisine: "Steakhouse",
    priceRange: "$$$$",
    address: "246 N Canon Dr, Beverly Hills",
    neighborhood: "Golden Triangle",
    signatureDishes: [
      "Bone-in Ribeye",
      "Butter Cake",
      "Seafood Tower"
    ],
    averageMealCost: 200,
    reservationRequired: true,
    openingHours: "5:00 PM - 11:00 PM",
    accessibility: ["Wheelchair accessible", "Elevator", "Valet parking"]
  },
  {
    id: 'urth-caffe',
    name: "Urth Caffé",
    cuisine: "Café/American",
    priceRange: "$$",
    address: "267 S Beverly Dr, Beverly Hills",
    neighborhood: "South Beverly",
    signatureDishes: [
      "Green Tea Latte",
      "Organic Coffee",
      "Spanish Latte"
    ],
    averageMealCost: 25,
    reservationRequired: false,
    openingHours: "6:00 AM - 10:00 PM",
    accessibility: ["Wheelchair accessible", "Street parking"]
  }
];