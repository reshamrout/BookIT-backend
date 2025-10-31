// This code for used for seeding initial data into the database

require('dotenv').config();
const mongoose = require('mongoose');
const Experience = require('./models/Experience');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/travel_db';

async function seed() {
  await mongoose.connect(MONGO_URI);
  console.log('Connected to DB');

  await Experience.deleteMany({});

  const experiences = [
    {
      title: 'Kayaking Adventure',
      shortDescription: 'Curated small-group experience. Certified guide.',
      longDescription: 'Helmet and life jackets along with an expert will accompany in kayaking.',
      image: '/images/kayak.jpg',
      location: 'Udupi, Karnataka',
      tags: ['water', 'adventure'],
      slots: [
        { date: '2025-11-05', time: '07:00 am', capacity: 10, booked: 6, price: 999 },
        { date: '2025-11-05', time: '09:00 am', capacity: 10, booked: 8, price: 999 },
        { date: '2025-11-06', time: '11:00 am', capacity: 8, booked: 3, price: 999 }
      ]
    },
    {
      title: 'Nandi Hills Sunrise Trek',
      shortDescription: 'Sunrise trek and scenic views.',
      longDescription: 'Guided small-group experience to view sunrise over the hills.',
      image: '/images/nandi.jpg',
      location: 'Bangalore, Karnataka',
      tags: ['trek', 'sunrise'],
      slots: [
        { date: '2025-11-04', time: '05:00 am', capacity: 20, booked: 5, price: 899 },
        { date: '2025-11-05', time: '05:00 am', capacity: 20, booked: 2, price: 899 }
      ]
    },
    {
      title: 'Scuba Diving in Andaman',
      shortDescription: 'Dive into the deep blue sea with experts.',
      longDescription: 'A thrilling underwater experience with certified trainers and full equipment.',
      image: '/images/scuba.jpg',
      location: 'Havelock Island, Andaman',
      tags: ['adventure', 'water'],
      slots: [
        { date: '2025-11-10', time: '08:00 am', capacity: 12, booked: 4, price: 3499 },
        { date: '2025-11-11', time: '10:00 am', capacity: 10, booked: 6, price: 3499 }
      ]
    },
    {
      title: 'Camel Safari in Jaisalmer',
      shortDescription: 'Ride through golden dunes at sunset.',
      longDescription: 'Experience Rajasthan’s desert charm with local guides and authentic food.',
      image: '/images/camel.jpg',
      location: 'Jaisalmer, Rajasthan',
      tags: ['desert', 'culture'],
      slots: [
        { date: '2025-11-08', time: '04:00 pm', capacity: 15, booked: 5, price: 1299 },
        { date: '2025-11-09', time: '05:00 pm', capacity: 15, booked: 7, price: 1299 }
      ]
    },
    {
      title: 'Paragliding at Bir Billing',
      shortDescription: 'Fly high over the Himalayas.',
      longDescription: 'Certified tandem instructors ensure a safe yet thrilling flight experience.',
      image: '/images/paragliding.jpg',
      location: 'Bir Billing, Himachal Pradesh',
      tags: ['adventure', 'aerial'],
      slots: [
        { date: '2025-11-06', time: '11:00 am', capacity: 10, booked: 5, price: 2499 },
        { date: '2025-11-07', time: '02:00 pm', capacity: 10, booked: 7, price: 2499 }
      ]
    },
    {
      title: 'Tea Plantation Walk',
      shortDescription: 'Scenic walk through lush tea gardens.',
      longDescription: 'Guided tour with tasting sessions and photography stops.',
      image: '/images/tea.jpg',
      location: 'Munnar, Kerala',
      tags: ['nature', 'culture'],
      slots: [
        { date: '2025-11-03', time: '09:00 am', capacity: 25, booked: 10, price: 699 },
        { date: '2025-11-04', time: '03:00 pm', capacity: 25, booked: 8, price: 699 }
      ]
    },
    {
      title: 'Backwater Cruise',
      shortDescription: 'Relaxing houseboat ride with local meals.',
      longDescription: 'Float through the serene backwaters with onboard dining and sunset views.',
      image: '/images/houseboat.jpg',
      location: 'Alleppey, Kerala',
      tags: ['relax', 'romantic'],
      slots: [
        { date: '2025-11-05', time: '10:00 am', capacity: 8, booked: 3, price: 2999 },
        { date: '2025-11-06', time: '02:00 pm', capacity: 8, booked: 5, price: 2999 }
      ]
    },
    {
      title: 'Snow Trek Expedition',
      shortDescription: 'Winter trek through snow-capped peaks.',
      longDescription: 'Perfect for adventure seekers with warm gear provided.',
      image: '/images/snow.jpg',
      location: 'Manali, Himachal Pradesh',
      tags: ['snow', 'adventure'],
      slots: [
        { date: '2025-12-10', time: '07:00 am', capacity: 15, booked: 4, price: 1999 },
        { date: '2025-12-11', time: '08:00 am', capacity: 15, booked: 5, price: 1999 }
      ]
    },
    {
      title: 'Wildlife Safari',
      shortDescription: 'Jeep safari through the national park.',
      longDescription: 'Spot tigers, elephants, and deer with an expert forest guide.',
      image: '/images/safari.jpg',
      location: 'Bandipur, Karnataka',
      tags: ['wildlife', 'nature'],
      slots: [
        { date: '2025-11-09', time: '06:00 am', capacity: 20, booked: 10, price: 1599 },
        { date: '2025-11-10', time: '04:00 pm', capacity: 20, booked: 8, price: 1599 }
      ]
    },
    {
      title: 'Cultural Food Walk',
      shortDescription: 'Taste local delicacies with a foodie expert.',
      longDescription: 'A guided walk through the best street food spots in the city.',
      image: '/images/foodwalk.jpg',
      location: 'Delhi, India',
      tags: ['food', 'culture'],
      slots: [
        { date: '2025-11-02', time: '06:00 pm', capacity: 20, booked: 5, price: 799 },
        { date: '2025-11-03', time: '06:00 pm', capacity: 20, booked: 8, price: 799 }
      ]
    },
    {
      title: 'Caving Expedition',
      shortDescription: 'Explore ancient caves with a geologist.',
      longDescription: 'An exciting educational adventure for thrill-seekers and history lovers.',
      image: '/images/cave.jpg',
      location: 'Cherrapunji, Meghalaya',
      tags: ['adventure', 'nature'],
      slots: [
        { date: '2025-11-12', time: '09:00 am', capacity: 10, booked: 3, price: 1299 },
        { date: '2025-11-13', time: '10:00 am', capacity: 10, booked: 4, price: 1299 }
      ]
    },
    {
      title: 'City Heritage Walk',
      shortDescription: 'Discover stories of old temples and forts.',
      longDescription: 'A storytelling experience through historical landmarks.',
      image: '/images/heritage.jpg',
      location: 'Jaipur, Rajasthan',
      tags: ['culture', 'history'],
      slots: [
        { date: '2025-11-01', time: '07:00 am', capacity: 30, booked: 12, price: 499 },
        { date: '2025-11-02', time: '04:00 pm', capacity: 30, booked: 10, price: 499 }
      ]
    },
    {
      title: 'Yoga by the Beach',
      shortDescription: 'Morning yoga with ocean breeze.',
      longDescription: 'Rejuvenating yoga session guided by a certified instructor.',
      image: '/images/yoga.jpg',
      location: 'Goa, India',
      tags: ['wellness', 'relax'],
      slots: [
        { date: '2025-11-05', time: '06:00 am', capacity: 20, booked: 6, price: 599 },
        { date: '2025-11-06', time: '06:00 am', capacity: 20, booked: 7, price: 599 }
      ]
    },
    {
      title: 'Rock Climbing Challenge',
      shortDescription: 'Push your limits with safe climbing sessions.',
      longDescription: 'Learn the basics of rock climbing under trained supervision.',
      image: '/images/rockclimb.jpg',
      location: 'Hampi, Karnataka',
      tags: ['adventure', 'fitness'],
      slots: [
        { date: '2025-11-10', time: '09:00 am', capacity: 12, booked: 4, price: 1499 },
        { date: '2025-11-11', time: '09:00 am', capacity: 12, booked: 6, price: 1499 }
      ]
    },
    {
      title: 'Cycling Tour',
      shortDescription: 'Explore countryside trails on cycle.',
      longDescription: 'An easy 15km guided cycling tour with scenic stops.',
      image: '/images/cycle.jpg',
      location: 'Pondicherry, Tamil Nadu',
      tags: ['fitness', 'nature'],
      slots: [
        { date: '2025-11-02', time: '06:00 am', capacity: 15, booked: 5, price: 999 },
        { date: '2025-11-03', time: '06:00 am', capacity: 15, booked: 7, price: 999 }
      ]
    },
    {
      title: 'Photography Workshop',
      shortDescription: 'Learn to capture perfect travel moments.',
      longDescription: 'Guided session by a professional travel photographer.',
      image: '/images/photo.jpg',
      location: 'Mumbai, Maharashtra',
      tags: ['learning', 'art'],
      slots: [
        { date: '2025-11-08', time: '10:00 am', capacity: 12, booked: 4, price: 1299 },
        { date: '2025-11-09', time: '10:00 am', capacity: 12, booked: 6, price: 1299 }
      ]
    },
    {
      title: 'Camping by the Lake',
      shortDescription: 'Bonfire, BBQ, and stargazing.',
      longDescription: 'An overnight camping experience with food and fun games.',
      image: '/images/camp.jpg',
      location: 'Pawna Lake, Maharashtra',
      tags: ['camping', 'adventure'],
      slots: [
        { date: '2025-11-12', time: '06:00 pm', capacity: 20, booked: 8, price: 1599 },
        { date: '2025-11-13', time: '06:00 pm', capacity: 20, booked: 10, price: 1599 }
      ]
    },
    {
      title: 'Surfing Lessons',
      shortDescription: 'Ride the waves with trained surfers.',
      longDescription: 'Learn basic surfing and balancing techniques safely.',
      image: '/images/surf.jpg',
      location: 'Gokarna, Karnataka',
      tags: ['water', 'adventure'],
      slots: [
        { date: '2025-11-05', time: '09:00 am', capacity: 8, booked: 3, price: 1899 },
        { date: '2025-11-06', time: '11:00 am', capacity: 8, booked: 4, price: 1899 }
      ]
    },
    {
      title: 'Hot Air Balloon Ride',
      shortDescription: 'Experience panoramic sunrise views from above.',
      longDescription: 'An unforgettable morning flight with certified pilots.',
      image: '/images/balloon.jpg',
      location: 'Lonavala, Maharashtra',
      tags: ['aerial', 'romantic'],
      slots: [
        { date: '2025-11-07', time: '05:30 am', capacity: 8, booked: 4, price: 3999 },
        { date: '2025-11-08', time: '06:00 am', capacity: 8, booked: 5, price: 3999 }
      ]
    },
    {
      title: 'Wine Tasting Tour',
      shortDescription: 'Tour the vineyard and enjoy tastings.',
      longDescription: 'Discover winemaking secrets and sample premium wines.',
      image: '/images/wine.jpg',
      location: 'Nashik, Maharashtra',
      tags: ['food', 'luxury'],
      slots: [
        { date: '2025-11-09', time: '04:00 pm', capacity: 15, booked: 5, price: 1999 },
        { date: '2025-11-10', time: '04:00 pm', capacity: 15, booked: 8, price: 1999 }
      ]
    },
    {
      title: 'Spa and Wellness Retreat',
      shortDescription: 'Relax and rejuvenate your body and mind.',
      longDescription: 'Luxury spa with full-body massage and organic meals.',
      image: '/images/spa.jpg',
      location: 'Rishikesh, Uttarakhand',
      tags: ['wellness', 'relax'],
      slots: [
        { date: '2025-11-12', time: '10:00 am', capacity: 10, booked: 4, price: 2999 },
        { date: '2025-11-13', time: '10:00 am', capacity: 10, booked: 6, price: 2999 }
      ]
    },
    {
      title: 'Coffee Estate Stay',
      shortDescription: 'Stay inside a working coffee estate.',
      longDescription: 'Enjoy plantation walks, coffee tastings, and local cuisine.',
      image: '/images/coffee.jpg',
      location: 'Coorg, Karnataka',
      tags: ['nature', 'stay'],
      slots: [
        { date: '2025-11-14', time: '08:00 am', capacity: 6, booked: 3, price: 2499 },
        { date: '2025-11-15', time: '08:00 am', capacity: 6, booked: 4, price: 2499 }
      ]
    }
  ];

  await Experience.insertMany(experiences);
  console.log('✅ 20 Experiences seeded successfully!');
  process.exit(0);
}

seed().catch(err => {
  console.error('❌ Error seeding data:', err);
  process.exit(1);
});
