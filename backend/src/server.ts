import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Washing Pressure Pro API is running' });
});

// Contact form endpoint
app.post('/api/contact', (req: Request, res: Response) => {
  const { name, email, phone, message, service } = req.body;
  
  // In a real application, you would save this to a database or send an email
  console.log('Contact form submission:', { name, email, phone, message, service });
  
  res.json({ 
    success: true, 
    message: 'Thank you for contacting us! We will get back to you soon.' 
  });
});

// Get services endpoint
app.get('/api/services', (req: Request, res: Response) => {
  const services = [
    {
      id: 1,
      name: 'House Washing',
      description: 'Professional exterior house washing to restore your home\'s beauty',
      price: 'Starting at $150',
      icon: '🏠'
    },
    {
      id: 2,
      name: 'Driveway Cleaning',
      description: 'Remove oil stains, dirt, and grime from your driveway',
      price: 'Starting at $100',
      icon: '🚗'
    },
    {
      id: 3,
      name: 'Deck & Patio',
      description: 'Restore and protect your outdoor living spaces',
      price: 'Starting at $120',
      icon: '🪵'
    },
    {
      id: 4,
      name: 'Commercial Washing',
      description: 'Professional pressure washing for businesses',
      price: 'Custom Quote',
      icon: '🏢'
    },
    {
      id: 5,
      name: 'Roof Cleaning',
      description: 'Safe and effective roof cleaning to extend its lifespan',
      price: 'Starting at $200',
      icon: '🏠'
    },
    {
      id: 6,
      name: 'Fence Cleaning',
      description: 'Revitalize your fence and increase curb appeal',
      price: 'Starting at $80',
      icon: '🚧'
    }
  ];
  
  res.json(services);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
