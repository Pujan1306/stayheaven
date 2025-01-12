import type { TransportOption } from '../types/guide';

export const transportOptions: TransportOption[] = [
  {
    type: "Beverly Hills Trolley",
    description: "Free trolley service connecting major attractions",
    cost: "Free",
    tips: [
      "Runs every 15 minutes during peak hours",
      "Best for short trips within Beverly Hills",
      "Air-conditioned and wheelchair accessible"
    ]
  },
  {
    type: "Metro Bus",
    description: "Public bus service connecting Beverly Hills to greater LA",
    cost: "$1.75 per ride",
    tips: [
      "Get a TAP card for easier payment",
      "Download Metro app for real-time schedules",
      "Routes 20 and 720 serve major attractions"
    ]
  },
  {
    type: "Rideshare",
    description: "Uber and Lyft services",
    cost: "$10-30 per ride",
    tips: [
      "Most convenient for door-to-door service",
      "Higher rates during peak hours",
      "Designated pickup zones at major attractions"
    ]
  }
];