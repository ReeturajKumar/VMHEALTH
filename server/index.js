import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/authRoute.js';
import userRoute from './routes/userRoute.js';
import doctorRoute from './routes/doctorRoute.js';
import reviewRoute from './routes/reviewRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: true,
};

app.get('/', (req, res) => {
  res.send('Hello World!')
});


//database connection
mongoose.set('strictQuery', false);

const connectDB = async () => {
  try {
   await mongoose.connect(process.env.DB_URL);
   console.log('MongoDB connected');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
}

//middeleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

//routes
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);

app.listen(port, () => {
  connectDB();
  console.log(`Server listening on port ${port}`)
})