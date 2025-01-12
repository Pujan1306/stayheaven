import type { Attraction } from '../types/guide';

export const attractions: Attraction[] = [
  {
    id: 'academy-museum',
    name: "Academy Museum of Motion Pictures",
    type: "museum",
    neighborhood: "Miracle Mile",
    description: "Celebrating the art and science of movies, featuring iconic film memorabilia and interactive exhibits.",
    admissionFee: 25,
    openingHours: "10:00 AM - 6:00 PM",
    bestTimeToVisit: "Weekday mornings",
    accessibility: ["Wheelchair accessible", "Audio guides", "Tactile exhibits"],
    currentExhibitions: [
      "Hayao Miyazaki",
      "The Art of Moviemaking",
      "Oscar® Experience"
    ]
  },
  {
    id: 'gagosian',
    name: "Gagosian Gallery",
    type: "gallery",
    neighborhood: "Beverly Hills",
    description: "Premier contemporary art gallery featuring rotating exhibitions by internationally renowned artists.",
    admissionFee: null,
    openingHours: "10:00 AM - 5:30 PM",
    bestTimeToVisit: "Tuesday-Saturday afternoons",
    accessibility: ["Wheelchair accessible", "Gallery guides available"],
    currentExhibitions: [
      "Contemporary Masters",
      "Emerging Artists Showcase"
    ]
  },
  {
    id: 'rodeo-drive',
    name: "Rodeo Drive",
    type: "landmark",
    neighborhood: "Golden Triangle",
    description: "World-famous luxury shopping street featuring high-end boutiques and designer stores.",
    admissionFee: null,
    openingHours: "10:00 AM - 6:00 PM",
    bestTimeToVisit: "Weekday mornings or late afternoons",
    accessibility: ["Wheelchair accessible sidewalks", "Benches throughout"]
  }
];