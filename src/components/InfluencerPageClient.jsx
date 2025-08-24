"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Marquee from "@/components/Marquee";

const influencers = [
  {
    name: "Avneet Kaur",
    followers: "30M",
    img: "influencers/avneet.jpeg",
    insta: "https://www.instagram.com/avneetkaur_13/",
  },
  {
    name: "Barkha Singh",
    followers: "3M",
    img: "influencers/barksha.jpeg",
    insta: "https://www.instagram.com/barkhasingh0308/",
  },
  {
    name: "Curly Tales",
    followers: "1.2M",
    img: "influencers/curly.jpeg",
    insta: "https://www.instagram.com/curly.tales/",
  },
  {
    name: "Ishita Pundeer",
    followers: "2M",
    img: "influencers/isha.jpeg",
    insta: "https://www.instagram.com/its_me_isha39/",
  },
  {
    name: "Adarsh Singh",
    followers: "500K",
    img: "influencers/adarsh.jpeg",
    insta: "https://www.instagram.com/adarshuc/",
  },
  {
    name: "CarryMinati",
    followers: "20M",
    img: "influencers/carryminati.jpeg",
    insta: "https://www.instagram.com/carryminati/",
  },
  {
    name: "Harsh Beniwal",
    followers: "10M",
    img: "influencers/harsh.jpeg",
    insta: "https://www.instagram.com/harshbeniwal/",
  },
  {
    name: "Abhishek Malhan",
    followers: "1M",
    img: "influencers/abhishek.jpeg",
    insta: "https://www.instagram.com/fukra_insaan/",
  },
];

// Local Reels stored inside /public/Videos and /public/thumbnails
const reels = [
  {
    id: 1,
    videoUrl: "/Videos/reel1.mp4",
    brand: "Navi",
    thumbnail: "/thumbnails/reel1.jpg",
  },
  {
    id: 2,
    videoUrl: "/Videos/reel2.mp4",
    brand: "Hospital",
    thumbnail: "/thumbnails/reel2.jpg",
  },
  {
    id: 3,
    videoUrl: "/Videos/reel3.mp4",
    brand: "Indian Terrain",
    thumbnail: "/thumbnails/reel3.jpg",
  },
  {
    id: 4,
    videoUrl: "/Videos/reel4.mp4",
    brand: "Samsung",
    thumbnail: "/thumbnails/reel4.jpg",
  },
];

const frames = [
  "/influencers/avneet.jpeg",
  "/influencers/harsh.jpeg",
  "/influencers/barksha.jpeg",
  "/influencers/adarsh.jpeg",
  "/influencers/isha.jpeg",
  "/influencers/carryminati.jpeg",
];

// Expanded Influencers (10 categories × 9 influencers)
const categoryInfluencers = [
  // FASHION
  {
    name: "Sejal Kumar",
    category: "Fashion",
    followers: "860K",
    img: "/influencers/sejal.jpg",
    insta: "https://www.instagram.com/sejalkumar1195/",
  },
  {
    name: "Komal Pandey",
    category: "Fashion",
    followers: "1.5M",
    img: "/influencers/komal.webp",
    insta: "https://www.instagram.com/komalpandey/",
  },
  {
    name: "Kritika Khurana",
    category: "Fashion",
    followers: "1.7M",
    img: "/influencers/kritika.webp",
    insta: "https://www.instagram.com/thatbohogirl/",
  },
  {
    name: "Aashna Shroff",
    category: "Fashion",
    followers: "950K",
    img: "/influencers/aashna.jpg",
    insta: "https://www.instagram.com/aashnashroff/",
  },
  {
    name: "Santoshi Shetty",
    category: "Fashion",
    followers: "720K",
    img: "/influencers/santoshi.webp",
    insta: "https://www.instagram.com/santoshishetty/",
  },
  {
    name: "Juhi Godambe",
    category: "Fashion",
    followers: "550K",
    img: "/influencers/juhi.webp",
    insta: "https://www.instagram.com/juhi_godambe/",
  },
  {
    name: "Riya Jain",
    category: "Fashion",
    followers: "680K",
    img: "/influencers/riya.jpeg",
    insta: "https://www.instagram.com/caughtinacuff/",
  },
  {
    name: "Masoom Minawala",
    category: "Fashion",
    followers: "1.1M",
    img: "/influencers/masoom.webp",
    insta: "https://www.instagram.com/masoomminawala/",
  },
  {
    name: "Aakriti Rana",
    category: "Fashion",
    followers: "700K",
    img: "/influencers/aakriti.webp",
    insta: "https://www.instagram.com/aakritiranaofficial/",
  },
  {
    name: "Aarav Mehta",
    img: "/influencers/aarav.jpg",
    followers: "250K",
    category: "Fashion",
    insta: "https://instagram.com/aarav.fashion",
  },

  // TRAVEL
  {
    name: "Shivya Nath",
    category: "Travel",
    followers: "400K",
    img: "/influencers/shivya.jpg",
    insta: "https://www.instagram.com/shivya/",
  },
  {
    name: "Travelling Desi",
    category: "Travel",
    followers: "2M",
    img: "/influencers/travellingdesi.jpeg",
    insta: "https://www.instagram.com/travellingdesi/",
  },
  {
    name: "Varun Vagish",
    category: "Travel",
    followers: "1M",
    img: "/influencers/varun.jpg",
    insta: "https://www.instagram.com/varunvagish/",
  },
  {
    name: "Lost LeBlanc",
    category: "Travel",
    followers: "1.5M",
    img: "/influencers/leblanc.webp",
    insta: "https://www.instagram.com/lostleblanc/",
  },
  {
    name: "Radhika Nomllers",
    category: "Travel",
    followers: "320K",
    img: "/influencers/radhika.jpeg",
    insta: "https://www.instagram.com/nomllers/",
  },
  {
    name: "Ankita Kumar",
    category: "Travel",
    followers: "280K",
    img: "/influencers/ankita.webp",
    insta: "https://www.instagram.com/monkey.inc/",
  },
  {
    name: "Travel with Neel",
    category: "Travel",
    followers: "150K",
    img: "/influencers/neel.jpeg",
    insta: "https://www.instagram.com/travelwithneel/",
  },
  {
    name: "Shivam Gupta",
    category: "Travel",
    followers: "180K",
    img: "/influencers/shivam.jpeg",
    insta: "https://www.instagram.com/shivamgupta_travel/",
  },
  {
    name: "Backpackers India",
    category: "Travel",
    followers: "200K",
    img: "/influencers/backpackers.jpeg",
    insta: "https://www.instagram.com/backpackersindia/",
  },
  {
    name: "Simran Joshi",
    img: "/influencers/simran.jpg",
    followers: "210K",
    category: "Travel",
    insta: "https://instagram.com/simran.travels",
  },

  // FOOD
  {
    name: "Kunal Kapur",
    category: "Food",
    followers: "2M",
    img: "/influencers/kunal.jpg",
    insta: "https://www.instagram.com/chefkunal/",
  },
  {
    name: "Ranveer Brar",
    category: "Food",
    followers: "3M",
    img: "/influencers/ranveer.webp",
    insta: "https://www.instagram.com/ranveer.brar/",
  },
  {
    name: "Sanjeev Kapoor",
    category: "Food",
    followers: "4M",
    img: "/influencers/sanjeev.jpeg",
    insta: "https://www.instagram.com/sanjeevkapoor/",
  },
  {
    name: "Archana Doshi",
    category: "Food",
    followers: "700K",
    img: "/influencers/archana.jpg",
    insta: "https://www.instagram.com/archanaskitchen/",
  },
  {
    name: "Pooja Dhingra",
    category: "Food",
    followers: "850K",
    img: "/influencers/pooja.png",
    insta: "https://www.instagram.com/poojadhingra/",
  },
  {
    name: "The Bong Guy",
    category: "Food",
    followers: "600K",
    img: "/influencers/bong.jpeg",
    insta: "https://www.instagram.com/thebongguy/",
  },
  {
    name: "Nisha Madhulika",
    category: "Food",
    followers: "1.2M",
    img: "/influencers/nisha.webp",
    insta: "https://www.instagram.com/nishamadhulika/",
  },
  {
    name: "Hebbars Kitchen",
    category: "Food",
    followers: "2.5M",
    img: "/influencers/hebbars.webp",
    insta: "https://www.instagram.com/hebbars.kitchen/",
  },
  {
    name: "Chetna Makan",
    category: "Food",
    followers: "400K",
    img: "/influencers/chetna.jpg",
    insta: "/influencers/chetna.jpg",
  },
  {
    name: "Kunal Sharma",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
    followers: "180K",
    category: "Food",
    insta: "influencers/kunals.jpeg",
  },

  // BEAUTY
  {
    name: "Malvika Sitlani",
    category: "Beauty",
    followers: "1M",
    img: "/influencers/malvika.jpg",
    insta: "https://www.instagram.com/malvikasitlaniofficial/",
  },
  {
    name: "Neha Malhotra",
    img: "influencers/neha.jpeg",
    followers: "150K",
    category: "Beauty",
    insta: "https://instagram.com/neha.beauty",
  },
  {
    name: "Debasree Banerjee",
    category: "Beauty",
    followers: "400K",
    img: "/influencers/debasree.jpg",
    insta: "https://www.instagram.com/debasreebanerjee/",
  },
  {
    name: "Santoshi Shetty",
    category: "Beauty",
    followers: "720K",
    img: "/influencers/santoshi.webp",
    insta: "https://www.instagram.com/santoshishetty/",
  },
  {
    name: "Ankita Chaturvedi",
    category: "Beauty",
    followers: "300K",
    img: "/influencers/ankitabeauty.jpeg",
    insta: "https://www.instagram.com/coralista/",
  },
  {
    name: "Komal Narang",
    category: "Beauty",
    followers: "500K",
    img: "/influencers/komalnarang.jpg",
    insta: "https://www.instagram.com/myhappinesz/",
  },
  {
    name: "Shruti Arjun Anand",
    category: "Beauty",
    followers: "9M",
    img: "/influencers/shruti.jpeg",
    insta: "https://www.instagram.com/shrutiarjunanand/",
  },
  {
    name: "Jovita George",
    category: "Beauty",
    followers: "250K",
    img: "/influencers/jovita.jpeg",
    insta: "https://www.instagram.com/mrjovitageorge/",
  },
  {
    name: "Shreya Jain",
    category: "Beauty",
    followers: "800K",
    img: "/influencers/shreya.jpeg",
    insta: "https://www.instagram.com/shreyajain26/",
  },
  {
    name: "Ankush Bahuguna",
    category: "Beauty",
    followers: "1.2M",
    img: "/influencers/ankush.jpeg",
    insta: "https://www.instagram.com/ankushbahuguna/",
  },

  // FITNESS
  {
    name: "Ranveer Allahbadia",
    category: "Fitness",
    followers: "2M",
    img: "/influencers/ranveer.jpeg",
    insta: "https://www.instagram.com/beerbiceps/",
  },
  {
    name: "Yasmin Karachiwala",
    category: "Fitness",
    followers: "900K",
    img: "/influencers/yasmin.jpeg",
    insta: "https://www.instagram.com/yasminbodyimage/",
  },
  {
    name: "Rujuta Diwekar",
    category: "Fitness",
    followers: "1M",
    img: "/influencers/rujuta.jpeg",
    insta: "https://www.instagram.com/rujuta.diwekar/",
  },
  {
    name: "Sapna Vyas",
    category: "Fitness",
    followers: "700K",
    img: "/influencers/sapna.jpeg",
    insta: "https://www.instagram.com/coachsapna/",
  },
  {
    name: "Pranit Shilimkar",
    category: "Fitness",
    followers: "600K",
    img: "/influencers/pranit.jpeg",
    insta: "https://www.instagram.com/fitnesstalks_with_pranit/",
  },
  {
    name: "Gaurav Taneja",
    category: "Fitness",
    followers: "5M",
    img: "/influencers/gaurav.jpeg",
    insta: "https://www.instagram.com/flyingbeast320/",
  },
  {
    name: "Anushka Rathod",
    category: "Fitness",
    followers: "400K",
    img: "/influencers/anushka.jpeg",
    insta: "https://www.instagram.com/anushkarathod/",
  },
  {
    name: "Rajveer Shishodia",
    category: "Fitness",
    followers: "350K",
    img: "/influencers/rajveer.jpeg",
    insta: "https://www.instagram.com/rajveershishodia/",
  },
  {
    name: "Akshay Chopra",
    category: "Fitness",
    followers: "300K",
    img: "/influencers/akshay.jpeg",
    insta: "https://www.instagram.com/akshaychoprafitness/",
  },
  {
    name: "Riya Kapoor",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    followers: "320K",
    category: "Fitness",
    insta: "https://instagram.com/riya.fitness",
  },

  // TECH
  {
    name: "Technical Guruji",
    category: "Tech",
    followers: "5M",
    img: "/influencers/guruji.jpeg",
    insta: "https://www.instagram.com/technicalguruji/",
  },
  {
    name: "Geeky Ranjit",
    category: "Tech",
    followers: "800K",
    img: "/influencers/ranjit.jpeg",
    insta: "https://www.instagram.com/geekyranjit/",
  },
  {
    name: "Aditya Verma",
    img: "https://randomuser.me/api/portraits/men/65.jpg",
    followers: "400K",
    category: "Tech",
    insta: "https://instagram.com/aditya.tech",
  },
  {
    name: "Trakin Tech",
    category: "Tech",
    followers: "2M",
    img: "/influencers/trakin.jpeg",
    insta: "https://www.instagram.com/trakintech/",
  },
  {
    name: "Shlok Srivastava",
    category: "Tech",
    followers: "1.2M",
    img: "/influencers/shlok.jpeg",
    insta: "https://www.instagram.com/techburner/",
  },
  {
    name: "Gadgets 360",
    category: "Tech",
    followers: "900K",
    img: "/influencers/gadgets.jpeg",
    insta: "https://www.instagram.com/gadgets360/",
  },
  {
    name: "Beebom",
    category: "Tech",
    followers: "1.1M",
    img: "/influencers/beebom.jpeg",
    insta: "https://www.instagram.com/beebomco/",
  },
  {
    name: "C4ETech",
    category: "Tech",
    followers: "500K",
    img: "/influencers/c4etech.jpeg",
    insta: "https://www.instagram.com/c4etech/",
  },
  {
    name: "Techno Ruhez",
    category: "Tech",
    followers: "1M",
    img: "/influencers/ruhez.jpeg",
    insta: "https://www.instagram.com/technoruhez/",
  },
  {
    name: "Gyan Therapy",
    category: "Tech",
    followers: "750K",
    img: "/influencers/gyan.jpeg",
    insta: "https://www.instagram.com/gyantherapy/",
  },

  // EDUTECH
  {
    name: "Unacademy",
    category: "Edutech",
    followers: "500K",
    img: "/influencers/unacademy.jpeg",
    insta: "https://www.instagram.com/unacademy/",
  },
  {
    name: "Physics Wallah",
    category: "Edutech",
    followers: "2M",
    img: "/influencers/pw.jpeg",
    insta: "https://www.instagram.com/physicswallah/",
  },
  {
    name: "BYJU'S",
    category: "Edutech",
    followers: "1.2M",
    img: "/influencers/byjus.jpeg",
    insta: "https://www.instagram.com/byjus_app/",
  },
  {
    name: "Vedantu",
    category: "Edutech",
    followers: "800K",
    img: "/influencers/vedantu.jpeg",
    insta: "https://www.instagram.com/vedantu_learn/",
  },
  {
    name: "Doubtnut",
    category: "Edutech",
    followers: "650K",
    img: "/influencers/doubtnut.jpeg",
    insta: "https://www.instagram.com/doubtnut_official/",
  },
  {
    name: "Toppr",
    category: "Edutech",
    followers: "400K",
    img: "/influencers/toppr.jpeg",
    insta: "https://www.instagram.com/toppr_com/",
  },
  {
    name: "Khan Academy",
    category: "Edutech",
    followers: "1M",
    img: "/influencers/khan.jpeg",
    insta: "https://www.instagram.com/khanacademy/",
  },
  {
    name: "Gradeup",
    category: "Edutech",
    followers: "350K",
    img: "/influencers/gradeup.jpeg",
    insta: "https://www.instagram.com/gradeupapp/",
  },
  {
    name: "Career360",
    category: "Edutech",
    followers: "300K",
    img: "/influencers/career360.jpeg",
    insta: "https://www.instagram.com/careers360/",
  },

  // PARENTING
  {
    name: "Momspresso",
    category: "Parenting",
    followers: "1M",
    img: "/influencers/momspresso.jpeg",
    insta: "https://www.instagram.com/momspresso/",
  },
  {
    name: "Parentune",
    category: "Parenting",
    followers: "600K",
    img: "/influencers/parentune.jpeg",
    insta: "https://www.instagram.com/parentune/",
  },
  {
    name: "Baby Chakra",
    category: "Parenting",
    followers: "900K",
    img: "/influencers/babychakra.jpeg",
    insta: "https://www.instagram.com/babychakra/",
  },
  {
    name: "FirstCry Parenting",
    category: "Parenting",
    followers: "2M",
    img: "/influencers/firstcry.jpeg",
    insta: "https://www.instagram.com/firstcryparenting/",
  },
  {
    name: "Kidsstoppress",
    category: "Parenting",
    followers: "700K",
    img: "/influencers/kidsstoppress.jpeg",
    insta: "https://www.instagram.com/kidsstoppress/",
  },
  {
    name: "Being Momma",
    category: "Parenting",
    followers: "350K",
    img: "/influencers/beingmomma.jpeg",
    insta: "https://www.instagram.com/beingmomma/",
  },
  {
    name: "The Champa Tree",
    category: "Parenting",
    followers: "200K",
    img: "/influencers/champa.jpeg",
    insta: "https://www.instagram.com/thechampatree/",
  },
  {
    name: "Mom Junction",
    category: "Parenting",
    followers: "1.1M",
    img: "/influencers/momjunction.jpeg",
    insta: "https://www.instagram.com/momjunctionofficial/",
  },
  {
    name: "Mothersgurukul",
    category: "Parenting",
    followers: "180K",
    img: "/influencers/mothersgurukul.jpeg",
    insta: "https://www.instagram.com/mothersgurukul/",
  },

  // FINANCE
  {
    name: "CA Rachana Phadke",
    category: "Finance",
    followers: "1.5M",
    img: "/influencers/rachana.jpeg",
    insta: "https://www.instagram.com/ca_rachanaofficial/",
  },
  {
    name: "Ankur Warikoo",
    category: "Finance",
    followers: "3M",
    img: "/influencers/warikoo.jpeg",
    insta: "https://www.instagram.com/warikoo/",
  },
  {
    name: "Neha Nagar",
    category: "Finance",
    followers: "2M",
    img: "/influencers/neha.jpeg",
    insta: "https://www.instagram.com/nehanagar/",
  },
  {
    name: "Sharan Hegde",
    category: "Finance",
    followers: "1.2M",
    img: "/influencers/sharan.jpeg",
    insta: "https://www.instagram.com/financewithsharan/",
  },
  {
    name: "Pranjal Kamra",
    category: "Finance",
    followers: "1M",
    img: "/influencers/pranjal.jpeg",
    insta: "https://www.instagram.com/pranjalkamra/",
  },
  {
    name: "Shreya Kapoor",
    category: "Finance",
    followers: "400K",
    img: "/influencers/shreyafin.jpeg",
    insta: "https://www.instagram.com/shreyakapoor/",
  },
  {
    name: "Asset Yogi",
    category: "Finance",
    followers: "900K",
    img: "/influencers/assetyogi.jpeg",
    insta: "https://www.instagram.com/assetyogi/",
  },
  {
    name: "CA Mohit Tandon",
    category: "Finance",
    followers: "250K",
    img: "/influencers/mohit.jpeg",
    insta: "https://www.instagram.com/camohittandon/",
  },
  {
    name: "CA Foundation Classes",
    category: "Finance",
    followers: "200K",
    img: "/influencers/cafoundation.jpeg",
    insta: "https://www.instagram.com/cafoundationclasses/",
  },

  // GAMING
  {
    name: "Mortal",
    category: "Gaming",
    followers: "4M",
    img: "/influencers/mortal.jpeg",
    insta: "https://www.instagram.com/mortalyt/",
  },
  {
    name: "Dynamo Gaming",
    category: "Gaming",
    followers: "2.5M",
    img: "/influencers/dynamo.jpeg",
    insta: "https://www.instagram.com/dynamo__gaming/",
  },
  {
    name: "ScoutOP",
    category: "Gaming",
    followers: "3M",
    img: "/influencers/scout.jpeg",
    insta: "https://www.instagram.com/scoutop/",
  },
  {
    name: "CarryisLive",
    category: "Gaming",
    followers: "10M",
    img: "/influencers/carrylive.jpeg",
    insta: "https://www.instagram.com/carryminati/",
  },
  {
    name: "Jonathan Gaming",
    category: "Gaming",
    followers: "2M",
    img: "/influencers/jonathan.jpeg",
    insta: "https://www.instagram.com/jonathangaming/",
  },
  {
    name: "Kronten",
    category: "Gaming",
    followers: "1.5M",
    img: "/influencers/kronten.jpeg",
    insta: "https://www.instagram.com/krontengaming/",
  },
  {
    name: "Xyaa",
    category: "Gaming",
    followers: "800K",
    img: "/influencers/xyaa.jpeg",
    insta: "https://www.instagram.com/xyaa/",
  },
  {
    name: "Ankkita C",
    category: "Gaming",
    followers: "700K",
    img: "/influencers/ankkita.jpeg",
    insta: "https://www.instagram.com/ankkitac/",
  },
  {
    name: "Techno Gamerz",
    category: "Gaming",
    followers: "20M",
    img: "/influencers/techno.jpeg",
    insta: "https://www.instagram.com/ujjwalgamer/",
  },
];

// -------------------
// MAIN COMPONENT
const categories = [
  "All",
  ...new Set(categoryInfluencers.map((inf) => inf.category)),
];

export default function InfluencerPage() {
  const [selectedReel, setSelectedReel] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Fashion");

  // Filter influencers by category
  const filteredInfluencers =
    selectedCategory === "All"
      ? categoryInfluencers
      : categoryInfluencers.filter((inf) => inf.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-gradient-to-br from-red-100 via-white to-black/10 py-10 px-6 flex flex-col md:flex-row items-center justify-center md:justify-around md:gap-10">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left space-y-6 max-w-lg"
        >
          <h1 className="text-5xl font-bold text-gray-900 leading-snug">
            Collaborate with your <br /> favourite{" "}
            <span className="text-red-600">Brands</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Join <span className="text-red-600">100,000+</span> Indian Creators
          </p>
          <button className="mt-10 px-6 py-3 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
            Sign Up Now
          </button>
        </motion.div>

        {/* Right Influencer Frames */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 md:mt-0"
        >
          {frames.map((img, i) => {
            const rotations = [
              "rotate-2",
              "-rotate-3",
              "rotate-6",
              "-rotate-6",
              "rotate-1",
              "-rotate-2",
            ];
            const rotation = rotations[i % rotations.length];
            return (
              // ✅ FIXED: unique key using img + index
              <motion.img
                whileHover={{ scale: 1.08, rotate: 0 }}
                key={img + i}
                src={img}
                alt="Influencer"
                className={`rounded-xl shadow-xl object-cover w-32 h-32 md:w-40 md:h-40 border-4 border-white ${rotation}`}
              />
            );
          })}
        </motion.div>
      </section>

      {/* 👉 Add Marquee right below Hero */}
      <div className="w-full py-10 bg-white">
        <Marquee influencers={influencers} />
      </div>

      {/* Our Work Section */}
      <section className="max-w-7xl mx-auto py-20 px-6 bg-white">
        <div className="flex justify-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 relative inline-block
            after:content-[''] after:absolute after:w-0 after:h-[3px] after:bg-red-600 after:left-0 after:-bottom-2 
            after:transition-all after:duration-300 hover:after:w-full"
          >
            Our Work – <span className="text-red-600">Influencer's</span> Reels
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer rounded-xl overflow-hidden shadow-xl"
              onClick={() => setSelectedReel(reel)}
            >
              {/* Thumbnail Image */}
              <img
                src={reel.thumbnail}
                alt={reel.brand}
                className="object-cover w-full h-72"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition">
                <FaPlay className="text-white text-4xl mb-2" />
                <span className="bg-white text-gray-900 px-3 py-1 rounded-md text-sm font-semibold">
                  {reel.brand}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedReel && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setSelectedReel(null)} // close when clicking outside
        >
          <div
            className="relative bg-black rounded-lg shadow-2xl max-w-md w-full aspect-[9/16] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 z-10 text-white text-2xl hover:text-red-500"
              onClick={() => setSelectedReel(null)}
            >
              &times;
            </button>

            {/* Local Video Player */}
            <video
              src={selectedReel.videoUrl}
              poster={selectedReel.thumbnail}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* CATEGORY FILTER + INFLUENCERS GRID */}
      <section className="max-w-7xl mx-auto py-10">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories
            .filter((cat) => cat !== "All") // hide "All" button
            .map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat
                    ? "bg-yellow-500 text-black shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl font-bold mb-8">
          {selectedCategory} <span className="text-red-500">Influencers</span>
        </h2>

        {/* Influencers Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {categoryInfluencers
            .filter(
              (inf) =>
                selectedCategory === "All" || inf.category === selectedCategory
            ) // ✅ show only selected category
            .map((inf) => (
              <div
                key={inf.id}
                className="relative group w-full h-64 rounded-xl overflow-hidden shadow-lg"
              >
                {/* Influencer Image */}
                <img
                  src={inf.img}
                  alt={inf.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay with details (hidden until hover) */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4">
                  <h3 className="font-bold text-lg text-white mb-1">
                    {inf.name}
                  </h3>

                  <a
                    href={inf.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 text-sm mb-2 hover:underline"
                  >
                    @{inf.name.toLowerCase().replace(/\s+/g, "")}
                  </a>

                  <p className="text-sm text-gray-300">
                    {inf.followers} Followers
                  </p>

                  <span className="text-xs mt-2 px-3 py-1 bg-yellow-500 text-black rounded-full font-semibold">
                    #{inf.category}
                  </span>

                  <a
                    href={inf.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 transition"
                  >
                    View Insights
                  </a>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}
