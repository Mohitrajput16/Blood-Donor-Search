require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const donorRoutes = require('./routes/DonorRoutes');

const app = express();

/* =========================
   CORS – CORRECT & ROBUST
========================= */

const allowedOrigins = [
  'https://blood-donor-search-75joqcvma-mohitrajput1694-3402s-projects.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow server-to-server & browser tools
    if (!origin) return callback(null, true);

    // allow Vercel preview + production
    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith('.vercel.app')
    ) {
      return callback(null, true);
    }

    return callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false
}));

// Explicit preflight handling
app.options('*', cors());

/* ========================= */

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/donors', donorRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Blood Donor API is running');
});

// Start server
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
