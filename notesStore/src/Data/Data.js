

// Nav [a] Links  Data.......................
export const navLinks =[
    {
        name:'Home',
        path:'/'
    },
    {
        name:'About',
        path:'/about'
    },

    {
        name:'Shope',
        path:'/shope'
    },
    {
        name:'Articles',
        path:'/articles'
    },
    {
        name:'Contact',
        path:'/contact'
    },
  ];
  
  
  
  
  // React Icons For Nav And React.......................
  import { FiUser } from 'react-icons/fi';
  import { VscSearch } from 'react-icons/vsc';
  import { BsBag } from 'react-icons/bs';
  
  
  // navRight links Data..............................

  export const navRight = {
  managements: [
    { id: "1", type: "search", icon: VscSearch, link: "/shope" },
    { id: "2", type: "cart", icon: BsBag, link: "/cart" },
    { id: "3", type: "login", icon: FiUser, link: "/login" }
  ]
};
  
  
  
  
  // Header Books  Data.......................
  import HBook1 from '../assets/HeaderBooks/headerBook1.png'
  import HBook2 from '../assets/HeaderBooks/headerBook2.png'
  import HBook3 from '../assets/HeaderBooks/headerBook3.png'
  
  export const headerBooks =[
      {
          id: 1,
          img: HBook1,
          title:'Life of the wild',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat <br> amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna <br> velit eleifend. Amet, quis urna, a eu.',
          btnLink: '*'
      },
      {
          id: 2,
          img: HBook2,
          title:'Simple way of piece life',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat <br> amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna <br> velit eleifend. Amet, quis urna, a eu.',
          btnLink: '*'
      },
      {
          id: 3,
          img: HBook3,
          title:'Great travel at desert',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat <br> amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna <br> velit eleifend. Amet, quis urna, a eu.',
          btnLink: '*'
      },
  ];
  
  
  
  // Brands Data.......................
  import Brand1 from '../assets/Brands/brand1.png'
  import Brand2 from '../assets/Brands/brand2.png'
  import Brand3 from '../assets/Brands/brand3.png'
  import Brand4 from '../assets/Brands/brand4.png'
  import Brand5 from '../assets/Brands/brand5.png'
  
  
  
  export const brandsData =[
      {
          id: 1,
          img: Brand1,        
      },
      {
          id: 2,
          img: Brand2,        
      },
      {
          id: 3,
          img: Brand3,        
      },
      {
          id: 4,
          img: Brand4,        
      },
      {
          id: 5,
          img: Brand5,        
      },
  ];
  
  
  
  // Featured Books Data.......................
  import FeaturedBooks1 from '../assets/FeaturedBooksImages/FeaturedBook1.png'
  import FeaturedBooks2 from '../assets/FeaturedBooksImages/FeaturedBook2.png'
  import FeaturedBooks3 from '../assets/FeaturedBooksImages/FeaturedBook3.png'
  import FeaturedBooks4 from '../assets/FeaturedBooksImages/FeaturedBook4.png'
  import FeaturedBooks5 from '../assets/FeaturedBooksImages/FeaturedBook5.png'
  
  
  export const featuredBooksData =[
      {
          id: 1,
          img: FeaturedBooks1, 
          imgLlink: "*", 
          nameLink:"*",
          name: 'Great travel at desert',        
          writer:'Sanchit Howdy',
          price: '$ 38.00 '      
      },
      {
          id: 2,
          img: FeaturedBooks2,  
          imgLlink: "*", 
          nameLink:"*",
          name: 'Great travel at desert',
          writer:'Sanchit Howdy',
          price: '$ 38.00 ' 
  
      },
      {
          id: 3,
          img: FeaturedBooks3, 
          imgLlink: "*", 
          nameLink:"*", 
          name: 'Great travel at desert',
          writer:'Sanchit Howdy',
          price: '$ 38.00 '      
      },
      {
          id: 4,
          img: FeaturedBooks4, 
          imgLlink: "*", 
          nameLink:"*", 
          name: 'Great travel at desert',
          writer:'Sanchit Howdy',
          price: '$ 38.00 '      
      },
      {
          id: 5,
          img: FeaturedBooks5, 
          imgLlink: "*", 
          nameLink: "*", 
          name: 'Great travel at desert',
          writer:'Sanchit Howdy',
          price: '$ 38.00 '      
      },
  ];
  
  
  
  // Selling Data.......................
  import sellingBookimage from '../assets/SellingBookImage/sellingBook.png'
  
  export const sellingBooksData =[
      {
          id: 1,
          img: sellingBookimage,
          infoTitleTop: 'By Timbur Hood',
          infoTitle: 'Birds gonna be happy',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac',
          price: '$ 45.00',
          shopbtnLink: "*",
      }
  ];
  
  
  
  
  // Popular Books Data.......................
  
  import popularbook1 from '../assets/PopularBooksImage/book1.png'
  import popularbook2 from '../assets/PopularBooksImage/book2.png'
  import popularbook3 from '../assets/PopularBooksImage/book3.png'
  import popularbook4 from '../assets/PopularBooksImage/book4.png'
  import popularbook5 from '../assets/PopularBooksImage/book5.png'
  import popularbook6 from '../assets/PopularBooksImage/book6.png'
  import popularbook7 from '../assets/PopularBooksImage/book7.png'
  import popularbook8 from '../assets/PopularBooksImage/book8.png'
  
 export const galleryData = [
  {
    id: 1,
    name: 'Great Travel at Desert',
    writer: 'Sanchit Howdy',
    price: '$38.00',
    category: 'Business',
    image: popularbook1,
  },
  {
    id: 2,
    name: 'The Secrets of Ocean Life',
    writer: 'Aarav Verma',
    price: '$42.50',
    category: 'Technology',
    image: popularbook2,
  },
  {
    id: 3,
    name: 'Adventure in the Amazon Forest',
    writer: 'Neha Sharma',
    price: '$30.00',
    category: 'Adventure',
    image: popularbook3,
  },
  {
    id: 4,
    name: 'Romance Under the Moonlight',
    writer: 'Karan Mehta',
    price: '$25.00',
    category: 'Romantic',
    image: popularbook4,
  },
  {
    id: 5,
    name: 'The Fictional Realms',
    writer: 'Pooja Iyer',
    price: '$40.00',
    category: 'Fictional',
    image: popularbook5,
  },
  {
    id: 6,
    name: 'Corporate Climb: Business Secrets',
    writer: 'Rohan Malhotra',
    price: '$45.00',
    category: 'Business',
    image: popularbook6,
  },
  {
    id: 7,
    name: 'AI: The Future is Here',
    writer: 'Simran Kaur',
    price: '$50.00',
    category: 'Technology',
    image: popularbook7,
  },
  {
    id: 8,
    name: 'A Love Story in Paris',
    writer: 'Kabir Joshi',
    price: '$28.00',
    category: 'Romantic',
    image: popularbook8,
  },
  {
    id: 9,
    name: 'The Mountain Survival Guide',
    writer: 'Arjun Desai',
    price: '$35.00',
    category: 'Adventure',
    image: popularbook1,
  },
  {
    id: 10,
    name: 'Startups: From Zero to Hero',
    writer: 'Meera Kapoor',
    price: '$37.00',
    category: 'Business',
    image: popularbook2,
  },
  {
    id: 11,
    name: 'The Digital Age of Invention',
    writer: 'Yash Patel',
    price: '$41.00',
    category: 'Technology',
    image: popularbook3,
  },
  {
    id: 12,
    name: 'The Silent Letters',
    writer: 'Isha Choudhary',
    price: '$29.00',
    category: 'Fictional',
    image: popularbook4,
  },
  {
    id: 13,
    name: 'Jungle Trails and Hidden Paths',
    writer: 'Ankit Rao',
    price: '$33.00',
    category: 'Adventure',
    image: popularbook5,
  },
  {
    id: 14,
    name: 'Love Beyond Borders',
    writer: 'Priya Sharma',
    price: '$26.00',
    category: 'Romantic',
    image: popularbook6,
  },
  {
    id: 15,
    name: 'The Future of Artificial Intelligence',
    writer: 'Vikram Sethi',
    price: '$48.00',
    category: 'Technology',
    image: popularbook7,
  },
];

   
      
  
  
  
   // Quote Data .......................
   
  export const quoteData =[
      {
          id: 1,
          quote: '“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”',
          speaker: 'Dr. Seuss'
      }
  ];
  
  
  

  
   // lettestArticleData Data .......................
   import ArticleImage1 from '../assets/letestArticlesIamge/ArticleImage1.png'
   import ArticleImage2 from '../assets/letestArticlesIamge/ArticleImage2.png'
   import ArticleImage3 from '../assets/letestArticlesIamge/ArticleImage3.png'
  
  
   
export const lettestArticleData = [
  {
    id: 1,
    title: 'The Joy of Morning Reading: A Fresh Start',
    image: ArticleImage1,
    titLink: "#",
    date: '1 Jan, 2023',
    inspiration: 'Start your day with inspiration',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 2,
    image: ArticleImage2,
    title: 'Why Books Are the Best Escape from Reality',
    titLink: "#",
    date: '14 Feb, 2023',
    inspiration: 'Escape into a world of imagination',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 3,
    image: ArticleImage3,
    title: 'Unlocking Creativity Through Daily Reading',
    titLink: "#",
    date: '10 Mar, 2023',
    inspiration: 'Fuel your creativity with stories',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 4,
    image: ArticleImage2,
    title: 'The Power of Non-Fiction to Shape Minds',
    titLink: "#",
    date: '22 Apr, 2023',
    inspiration: 'Knowledge is the key to growth',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 5,
    image: ArticleImage3,
    title: 'Five Reasons to Read Historical Novels',
    titLink: "#",
    date: '5 May, 2023',
    inspiration: 'History brings lessons to life',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 6,
    image: ArticleImage2,
    title: 'Building Daily Reading Habits That Stick',
    titLink: "#",
    date: '18 Jun, 2023',
    inspiration: 'Consistency builds wisdom',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 7,
    image: ArticleImage3,
    title: 'How Reading Fiction Improves Empathy',
    titLink: "#",
    date: '30 Jul, 2023',
    inspiration: 'Walk in someone else’s shoes',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
   {
    id: 8,
    image: ArticleImage1,
    title: 'Exploring the Science Behind Reading Benefits',
    titLink: "#",
    date: '12 Aug, 2023',
    inspiration: 'Science proves the power of books',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 9,
    image: ArticleImage2,
    title: 'The Magic of Fantasy: Why We Love Imaginary Worlds',
    titLink: "#",
    date: '25 Aug, 2023',
    inspiration: 'Let your imagination run free',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 10,
    image: ArticleImage3,
    title: 'How Biographies Teach Life Lessons',
    titLink: "#",
    date: '3 Sep, 2023',
    inspiration: 'Learn from the lives of great people',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 11,
    image: ArticleImage1,
    title: 'Developing Critical Thinking Through Reading',
    titLink: "#",
    date: '15 Sep, 2023',
    inspiration: 'Books sharpen your thinking',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 12,
    image: ArticleImage2,
    title: 'Why Poetry Still Matters in the Modern World',
    titLink: "#",
    date: '28 Sep, 2023',
    inspiration: 'Feel the rhythm of words',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 13,
    image: ArticleImage3,
    title: 'The Silent Power of Reading in Solitude',
    titLink: "#",
    date: '5 Oct, 2023',
    inspiration: 'Find peace in quiet reading moments',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 14,
    image: ArticleImage1,
    title: 'Books That Can Transform Your Mindset',
    titLink: "#",
    date: '18 Oct, 2023',
    inspiration: 'Change your life one page at a time',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
  {
    id: 15,
    image: ArticleImage2,
    title: 'The Rise of Audiobooks: Reading on the Go',
    titLink: "#",
    date: '30 Oct, 2023',
    inspiration: 'Listen, learn, and grow anywhere',
    fbLink: "*",
    instLink: "*",
    twitaLink: "*",
  },
];

  
   
  
  
  
  // import react Icon.......................
  import {  ImFacebook, ImBehance } from 'react-icons/im';
  import {  FiInstagram } from 'react-icons/fi';
  import {  RiTwitterXLine } from 'react-icons/ri';
  import {  GrLinkedinOption } from 'react-icons/gr';

  // Footers Data .......................  
  export const FootersLinksData = {
  
    Aboutus: [
      { linkname: 'vision ', link: "*", },    
      { linkname: 'articles ', link: "*", },    
      { linkname: 'careers ', link: "*", },    
      { linkname: 'service terms ', link: "*", },    
      { linkname: 'donate ', link: "*", },   
     
    ],    
    Discover: [
      { linkname: 'Home ', link: "*", },    
      { linkname: 'articles ', link: "*", },    
      { linkname: 'Books ', link: "*", },    
      { linkname: 'Authors  ', link: "*", },    
      { linkname: 'Subjects ', link: "*", },   
      { linkname: 'Advanced Search ', link: "*", },   
    ],    
    Myaccount: [
      { linkname: 'Sign In', link: "*", },    
      { linkname: 'articles ', link: "*", },    
      { linkname: 'View Cart', link: "*", },    
      { linkname: 'My Wishtlist  ', link: "*", },    
      { linkname: 'Track My Order ', link: "*", },      
    ],  
  
    Help: [
      { linkname: 'Help center ', link: "*", },    
      { linkname: 'Report a problem  ', link: "*", },    
      { linkname: 'View Cart', link: "*", },    
      { linkname: 'Suggesting edits ', link: '#' },    
      { linkname: 'Contact us', link: "*", },   
    ],  
  
    socials: [
      { icon: ImFacebook, link: 'https://www.facebook.com' },
      { icon: FiInstagram, link: 'https://www.twitter.com' },
      { icon: GrLinkedinOption, link: 'https://www.instagram.com' },
      { icon: RiTwitterXLine, link: 'https://www.twitter.com' },
      { icon: ImBehance, link: 'https://www.twitter.com' }
    ],    
      
  };