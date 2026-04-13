require('dotenv').config();
const mongoose = require('mongoose');
const Event = require('./models/Event');

const MONGO_URI = process.env.MONGO_URI;

const dummyEvents = [
  {
    name: "Neon Horizon Music Festival",
    date: "2025-08-15",
    time: "18:00",
    location: "Mumbai, IN",
    description: "Experience the ultimate fusion of cyberpunk aesthetics and pulsating techno beats. A 3-day immersive visual and sonic journey.",
    price: 3500,
    image: "https://images.unsplash.com/photo-1540039155732-68085453775f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Web3 & AI Summit 2025",
    date: "2025-09-10",
    time: "09:00",
    location: "Bangalore, IN",
    description: "Join industry leaders to discuss the singularity, advanced intelligence, and the decentralized web architecture of tomorrow.",
    price: 8999,
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Midnight Drift Racing",
    date: "2025-10-31",
    time: "22:00",
    location: "New Delhi, IN",
    description: "High-octane underground racing tournament featuring custom imports and neon-lit street tracks.",
    price: 1500,
    image: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Cloud 9 Rooftop Mixer",
    date: "2025-07-20",
    time: "20:00",
    location: "Pune, IN",
    description: "An exclusive networking event for creatives, designers, and developers under the stars.",
    price: 2000,
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Retro Arcade Championship",
    date: "2025-11-05",
    time: "10:00",
    location: "Hyderabad, IN",
    description: "Battle it out on classic machines from the 80s and 90s. Heavy synthwave vibes and massive cash prizes.",
    price: 800,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB Atlas...');
    
    // Clear out standard demo test data if needed, or just insert new ones
    console.log('Injecting high-quality dummy events...');
    await Event.insertMany(dummyEvents);
    
    console.log('Events successfully added to the database!');
    process.exit();
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });
