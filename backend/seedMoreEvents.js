require('dotenv').config();
const mongoose = require('mongoose');
const Event = require('./models/Event');

const MONGO_URI = process.env.MONGO_URI;

const advancedEvents = [
  {
    name: "Cyber Security Hackathon",
    date: "2025-12-10",
    time: "48:00",
    location: "Online",
    description: "Compete against elite ethical hackers globally. Defend the mainframe and win massive bounties in our immersive cyber environment.",
    price: 1500,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Lo-Fi Beats Under the Stars",
    date: "2025-11-22",
    time: "20:00",
    location: "Jaipur, IN",
    description: "Relax, grab a drink, and enjoy chill vibes performed live by renowned internet producers. An atmospheric sonic getaway.",
    price: 900,
    image: "https://images.unsplash.com/photo-1549468057-5ce74e1d5267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "AI Generative Art Exhibit",
    date: "2026-01-15",
    time: "10:00",
    location: "Kolkata, IN",
    description: "A prestigious art gallery showcasing interactive, purely AI generated pieces. Marvel at algorithms transforming raw data to emotion.",
    price: 2500,
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "Global Tech Founders Summit",
    date: "2026-03-01",
    time: "09:00",
    location: "Delhi NCR, IN",
    description: "Connect with angel investors, unicorn venture capitalists, and top level CEOs at this elite gathering.",
    price: 12500,
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "VR E-Sports Arena Clash",
    date: "2026-05-18",
    time: "14:00",
    location: "Bangalore, IN",
    description: "Witness the sheer intensity of virtual reality tactical shooter championships on a giant holographic stage.",
    price: 3200,
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB Atlas...');
    console.log('Deploying secondary event catalog...');
    await Event.insertMany(advancedEvents);
    console.log('Additional events successfully seeded into database!');
    process.exit();
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });
