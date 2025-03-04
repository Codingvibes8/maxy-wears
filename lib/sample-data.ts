import {hashSync} from "bcrypt-ts-edge";


const sampleData = {
  products: [
    {
      name: 'LOOSE FIT PIQUE JOGGER SWEATSHIRT',
      slug: 'loose-fit-pique-jogger-sweatshirt',
      category: "Men's Sweatshirts",
      images: ['/blue-sweatshirt.jpg', '/blue-sweatshirt2.jpg'],
      price: '59.99',
      brand: 'Nike',
      rating: '4.5',
      numReviews: 10,
      stock: 5,
      description:
        'Lacoste sporting elegance with an urban twist. Fall in love with this loose, cozy sweatshirt in super-comfortable double-face piqué.',
      isFeatured: true,
      banner: '/blue-sweatshirt3.jpg',
    },
    {
      name: 'LACOSTE TENNIS X NOVAK DJOKOVIC SWEATSHIRT',
      slug: 'lacoste-tennis-x-novak-djokovic-sweatshirt',
      category: "Men's Sweatshirts",
      images: ['/red-yellow.jpg', '/red-yellow2.jpg'],
      price: '199.90',
      brand: 'Lacoste',
      rating: '4.2',
      numReviews: 8,
      stock: 10,
      description:
        'Hit the courts like Novak Djokovic with this seamless stretch jacket, made to move your way.',
      isFeatured: true,
      banner: '/red-yellow3.jpg',
    },
    {
      name: 'SHOWERPROOF SPORTSUIT TRACK PANTS',
      slug: 'showerproof-sportsuit-track-pants',
      category: 'Track Pants',
      images: ['/redPants.jpg', '/redPants2.jpg'],

      price: '149.95',
      brand: 'Nike',
      rating: '4.9',
      numReviews: 3,
      stock: 0,
      description:
        'Stay stylish, whatever the weather. These showerproof track pants are here to protect you from the rain. ',
    },
    {
      name: "MEN'S LACOSTE SPORT FRENCH CAPSULE TRACKSUIT PANTS",
      slug: 'mens-lacoste-sport-french-capsule-tracksuit-pants',
      category: 'Track Pants',
      images: ['/greenpants.jpg', '/greenpants2.jpg'],
      price: '125.95',
      brand: 'Lacoste',
      rating: '3.6',
      numReviews: 5,
      stock: 10,
      description:
        'A design brings a distinctive edge to these lightweight tracksuit pants made of diamond taffeta. ',
    },
  ],
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: hashSync('123456', 10),
      role: 'admin',
    },
    {
      name: 'Jane',
      email: 'jane@example.com',
      password: hashSync('123456', 10),
      role: 'user',
    },
  ],
}

export default sampleData



