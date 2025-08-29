"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
import Marquee from "@/components/Marquee";


const influencers = [
  {
    id:101,
    name: "Avneet Kaur",
    followers: "30M",
    img: "influencers/avneet.jpeg",
    insta: "https://www.instagram.com/avneetkaur_13/",
  },
  {
    id:102,
    name: "Barkha Singh",
    followers: "3M",
    img: "influencers/barksha.jpeg",
    insta: "https://www.instagram.com/barkhasingh0308/",
  },
  {
    id:103,
    name: "Curly Tales",
    followers: "1.2M",
    img: "influencers/curly.jpeg",
    insta: "https://www.instagram.com/curly.tales/",
  },
  {
    id:104,
    name: "Ishita Pundeer",
    followers: "2M",
    img: "influencers/isha.jpeg",
    insta: "https://www.instagram.com/its_me_isha39/",
  },
  {
    id:105,
    name: "Adarsh Singh",
    followers: "500K",
    img: "influencers/adarsh.jpeg",
    insta: "https://www.instagram.com/adarshuc/",
  },
  {
    id:106,
    name: "CarryMinati",
    followers: "20M",
    img: "influencers/carryminati.jpeg",
    insta: "https://www.instagram.com/carryminati/",
  },
  {
    id:107,
    name: "Harsh Beniwal",
    followers: "10M",
    img: "influencers/harsh.jpeg",
    insta: "https://www.instagram.com/harshbeniwal/",
  },
  {
    id:108,
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
    brand: "PW",
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
    brand: "Unacademy",
    thumbnail: "/thumbnails/reel3.jpg",
  },
  {
    id: 4,
    videoUrl: "/Videos/reel4.mp4",
    brand: "The Sleep Company",
    thumbnail: "/thumbnails/reel4.jpg",
  },
];

const frames = [
  "/influencers/avneet.jpeg",
  "/influencers/harsh.jpeg",
  "/influencers/barksha.jpeg",
  "/influencers/soniya.jpg",
  "/influencers/carryminati.jpeg",
  "/influencers/isha.jpeg",
  
];

// Expanded Influencers (10 categories × 9 influencers)
const categoryInfluencers = [
  // FASHION
  {
    id:101,
    name: "Sejal Kumar",
    category: "Fashion",
    followers: "812K",
    img: "/influencers/sejal.jpg",
    insta: "https://www.instagram.com/sejalkumar1195/",
  },
  {
    id:102,
    name: "Komal Pandey",
    category: "Fashion",
    followers: "1.9M",
    img: "/influencers/komal.webp",
    insta: "https://www.instagram.com/komalpandeyofficial/",
  },
  {
    id:103,
    name: "Kritika Khurana",
    category: "Fashion",
    followers: "1.9M",
    img: "/influencers/kritika.webp",
    insta: "https://www.instagram.com/thatbohogirl/",
  },
  {
    id:104,
    name: "Aashna Shroff",
    category: "Fashion",
    followers: "1.1M",
    img: "/influencers/aashna.jpg",
    insta: "https://www.instagram.com/aashnashroff/",
  },
  {
    id:105,
    name: "Santoshi Shetty",
    category: "Fashion",
    followers: "705K",
    img: "/influencers/santoshi.webp",
    insta: "https://www.instagram.com/santoshishetty/",
  },
  {
    id:106,
    name: "Juhi Godambe",
    category: "Fashion",
    followers: "543K",
    img: "/influencers/juhi.webp",
    insta: "https://www.instagram.com/juhigodambe/",
  },
  {
    id:107,
    name: "Riya Jain",
    category: "Fashion",
    followers: "420K",
    img: "/influencers/riya.jpg",
    insta: "https://www.instagram.com/riyajain/",
  },
  {
    id:108,
    name: "Masoom Minawala",
    category: "Fashion",
    followers: "1.3M",
    img: "/influencers/masoom.webp",
    insta: "https://www.instagram.com/masoomminawala/",
  },
  {
    id:109,
    name: "Aakriti Rana",
    category: "Fashion",
    followers: "1.1M",
    img: "/influencers/aakriti.webp",
    insta: "https://www.instagram.com/aakritiranaofficial/",
  },
  {
    id:110,
    name: "Aarav Mehta",
    img: "/influencers/nancy.jpg",
    followers: "3M",
    category: "Fashion",
    insta: "https://instagram.com/nancytyagi__",
  },

  // TRAVEL
  {
    id:111,
    name: "Shivya Nath",
    category: "Travel",
    followers: "134K",
    img: "/influencers/shivya.jpg",
    insta: "https://www.instagram.com/shivya/",
  },
  {
    id:112,
    name: "Travelling Desi",
    category: "Travel",
    followers: "2M",
    img: "/influencers/travellingdesi.jpeg",
    insta: "https://www.instagram.com/travellingdesi/",
  },
  {
    id:113,
    name: "Varun Vagish",
    category: "Travel",
    followers: "1M",
    img: "/influencers/varun.jpg",
    insta: "https://www.instagram.com/varunvagish/",
  },
  {
    id:114,
    name: "Lost LeBlanc",
    category: "Travel",
    followers: "727K",
    img: "/influencers/leblanc.webp",
    insta: "https://www.instagram.com/lostleblanc/",
  },
  {
    id:115,
    name: "Radhika Nomllers",
    category: "Travel",
    followers: "703K",
    img: "/influencers/radhika.jpg",
    insta: "https://www.instagram.com/radhika_nomllers/",
  },
  {
    id:116,
    name: "Ankita Kumar",
    category: "Travel",
    followers: "553K",
    img: "/influencers/ankita.webp",
    insta: "https://www.instagram.com/monkey.inc/",
  },
  {
    id:117,
    name: "Travel with Neel",
    category: "Travel",
    followers: "150K",
    img: "/influencers/neel.jpeg",
    insta: "https://www.instagram.com/travelwithneel/",
  },
  {
    id:118,
    name: "Shivam Gupta",
    category: "Travel",
    followers: "80.3K",
    img: "/influencers/shivam.jpg",
    insta: "https://www.instagram.com/casting_shivam/",
  },
  {
    id:119,
    name: "Backpackers India",
    category: "Travel",
    followers: "40.8K",
    img: "/influencers/backpackers.jpg",
    insta: "https://www.instagram.com/backpackerindian/",
  },
  {
    id:120,
    name: "Mackenzie ",
    img: "/influencers/Mackenzie.jpg",
    followers: "210K",
    category: "Travel",
    insta: "https://instagram.com/girlgoingtravel/",
  },

  // FOOD
  {
    id:121,
    name: "Kunal Kapur",
    category: "Food",
    followers: "3.8M",
    img: "/influencers/kunal.jpg",
    insta: "https://www.instagram.com/chefkunal/",
  },
  {
    id:122,
    name: "Ranveer Brar",
    category: "Food",
    followers: "4.4M",
    img: "/influencers/ranveer.webp",
    insta: "https://www.instagram.com/ranveer.brar/",
  },
  {
    id:123,
    name: "Sanjeev Kapoor",
    category: "Food",
    followers: "2.1M",
    img: "/influencers/sanjeev.jpg",
    insta: "https://www.instagram.com/sanjeevkapoor/",
  },
  {
    id:124,
    name: "Archana Doshi",
    category: "Food",
    followers: "700K",
    img: "/influencers/archana.jpg",
    insta: "https://www.instagram.com/archanaskitchen/",
  },
  {
    id:125,
    name: "Pooja Dhingra",
    category: "Food",
    followers: "850K",
    img: "/influencers/pooja.png",
    insta: "https://www.instagram.com/poojadhingra/",
  },
  {
    id:126,
    name: "The Bong Guy",
    category: "Food",
    followers: "600K",
    img: "/influencers/bong.jpg",
    insta: "https://www.instagram.com/yourbongguy/",
  },
  {
    id:127,
    name: "Nisha Madhulika",
    category: "Food",
    followers: "341M",
    img: "/influencers/nisha.webp",
    insta: "https://www.instagram.com/nishamadhulika_cooks/",
  },
  {
    id:128,
    name: "Hebbars Kitchen",
    category: "Food",
    followers: "3.7M",
    img: "/influencers/hebbars.webp",
    insta: "https://www.instagram.com/hebbars.kitchen/",
  },
  {
    id:129,
    name: "Chetna Makan",
    category: "Food",
    followers: "695K",
    img: "/influencers/chetna.jpg",
    insta: "https://www.instagram.com/chetnamakan/",
  },
  {
    id:130,
    name: "Kunal Sharma",
    img: "influencers/kunals.jpeg",
    followers: "180K",
    category: "Food",
    insta: "https://www.instagram.com/chef_kunalofficial/",
  },

  // BEAUTY
  {
    id:131,
    name: "Malvika Sitlani",
    category: "Beauty",
    followers: "711K",
    img: "/influencers/malvika.jpg",
    insta: "https://www.instagram.com/malvikasitlaniofficial/",
  },
  {
    id:132,
    name: "Neha Malhotra",
    img: "influencers/neha.jpeg",
    followers: "44.1K",
    category: "Beauty",
    insta: "https://instagram.com/nehaulicious",
  },
  {
    id:133,
    name: "Debasree Banerjee",
    category: "Beauty",
    followers: "400K",
    img: "/influencers/debasree.jpg",
    insta: "https://www.instagram.com/debasreebanerjee/",
  },
  {
    id:134,
    name: "Santoshi Shetty",
    category: "Beauty",
    followers: "720K",
    img: "/influencers/santoshi.webp",
    insta: "https://www.instagram.com/santoshishetty/",
  },
  {
    id:135,
    name: "Ankita Chaturvedi",
    category: "Beauty",
    followers: "300K",
    img: "/influencers/ankitabeauty.jpeg",
    insta: "https://www.instagram.com/coralistablog/",
  },
  {
    id:136,
    name: "Komal Narang",
    category: "Beauty",
    followers: "500K",
    img: "/influencers/komalnarang.jpg",
    insta: "https://www.instagram.com/myhappinesz/",
  },
  {
    id:137,
    name: "Shruti Arjun Anand",
    category: "Beauty",
    followers: "9M",
    img: "/influencers/shruti.webp",
    insta: "https://www.instagram.com/shrutiarjunanand/",
  },
  {
    id:138,
    name: "Jovita George",
    category: "Beauty",
    followers: "250K",
    img: "/influencers/jovita.jpg",
    insta: "https://www.instagram.com/mrjovitageorge/",
  },
  {
    id:139,
    name: "Shreya Jain",
    category: "Beauty",
    followers: "430K",
    img: "/influencers/shreya.jpg",
    insta: "https://www.instagram.com/shreyajain26/",
  },
  {
    id:140,
    name: "Ankush Bahuguna",
    category: "Beauty",
    followers: "1.2M",
    img: "/influencers/ankush.webp",
    insta: "https://www.instagram.com/ankushbahuguna/",
  },

  // FITNESS
  {
    id:141,
    name: "Ranveer Allahbadia",
    category: "Fitness",
    followers: "2M",
    img: "/influencers/ranveer.jpg",
    insta: "https://www.instagram.com/beerbiceps/",
  },
  {
    id:142,
    name: "Yasmin Karachiwala",
    category: "Fitness",
    followers: "900K",
    img: "/influencers/yasmin.jpg",
    insta: "https://www.instagram.com/yasminkarachiwala/",
  },
  {
    id:143,
    name: "Rujuta Diwekar",
    category: "Fitness",
    followers: "1.8M",
    img: "/influencers/rajuta.jpg",
    insta: "https://www.instagram.com/rujuta.diwekar/",
  },
  {
    id:144,
    name: "Sapna Vyas",
    category: "Fitness",
    followers: "1.5M",
    img: "/influencers/sapna.jpg",
    insta: "https://www.instagram.com/coachsapna/",
  },
  {
    id:145,
    name: "Pranit Shilimkar",
    category: "Fitness",
    followers: "600K",
    img: "/influencers/pranit.jpg",
    insta: "https://www.instagram.com/fitnesstalks_with_pranit/",
  },
  {
    id:146,
    name: "Gaurav Taneja",
    category: "Fitness",
    followers: "3.5M",
    img: "/influencers/gaurav.webp",
    insta: "https://www.instagram.com/taneja.gaurav/",
  },
  {
    id:147,
    name: "Anushka Rathod",
    category: "Fitness",
    followers: "1.2M",
    img: "/influencers/anushka.png",
    insta: "https://www.instagram.com/anushkarathod98/",
  },
  {
    id:148,
    name: "Rajveer Shishodia",
    category: "Fitness",
    followers: "350K",
    img: "/influencers/rajveer.jpg",
    insta: "https://www.instagram.com/rajveer_fitness_series/",
  },
  {
    id:149,
    name: "Akshay Chopra",
    category: "Fitness",
    followers: "300K",
    img: "/influencers/akshay.webp",
    insta: "https://www.instagram.com/akshaychopra_werstupid/",
  },
  {
    id:150,
    name: "Soniya Singh Khatri",
    img: "/influencers/soniya.jpg",
    followers: "2.6M",
    category: "Fitness",
    insta: "https://instagram.com/fitgirl_08",
  },

  // TECH
  {
    id: 151,
    name: "Technical Guruji",
    category: "Tech",
    followers: "5M",
    img: "/influencers/guruji.jpg",
    insta: "https://www.instagram.com/technicalguruji/",
  },
  {
    id: 152,
    name: "Geeky Ranjit",
    category: "Tech",
    followers: "800K",
    img: "/influencers/ranjit.webp",
    insta: "https://www.instagram.com/geekyranjitofficial/",
  },
  {
    id: 153,
    name: "Aditya Verma",
    img: "/influencers/aditya.jpg",
    followers: "400K",
    category: "Tech",
    insta: "https://instagram.com/digitalquadrate",
  },
  {
    id: 154,
    name: "Trakin Tech",
    category: "Tech",
    followers: "2M",
    img: "/influencers/trakin.jpg",
    insta: "https://www.instagram.com/trakintech/",
  },
  {
    id: 155,
    name: "Shlok Srivastava",
    category: "Tech",
    followers: "1.2M",
    img: "/influencers/shlok.webp",
    insta: "https://www.instagram.com/techburner/",
  },
  {
    id: 156,
    name: "Gadgets 360",
    category: "Tech",
    followers: "5M",
    img: "/influencers/gadgets.jpg",
    insta: "https://www.instagram.com/gadgets.360/",
  },
//   {
//     name: "Beebom",
//     category: "Tech",
//     followers: "1.1M",
//     img: "/influencers/beebom.jpeg",
//     insta: "https://www.instagram.com/beebomco/",
//   },
  {
    id: 157,
    name: "C4ETech",
    category: "Tech",
    followers: "500K",
    img: "/influencers/c4etech.jpg",
    insta: "https://www.instagram.com/c4etech/",
  },
  {
    id: 158,
    name: "Techno Ruhez",
    category: "Tech",
    followers: "1M",
    img: "/influencers/ruhez.jpg",
    insta: "https://www.instagram.com/technoruhez/",
  },
  {
    id: 159,
    name: "Gyan Therapy",
    category: "Tech",
    followers: "750K",
    img: "/influencers/gyan.jpg",
    insta: "https://www.instagram.com/gyantherapy/",
  },

  // EDUTECH
  {
    id: 160,
    name: "Unacademy",
    category: "Edutech",
    followers: "943K",
    img: "/influencers/unacademy.png",
    insta: "https://www.instagram.com/unacademy/",
  },
  {
    id: 161,
    name: "Physics Wallah",
    category: "Edutech",
    followers: "3.6M",
    img: "/companies/PW.jpg",
    insta: "https://www.instagram.com/physicswallah/",
  },
  {
    id: 162,
    name: "BYJU'S",
    category: "Edutech",
    followers: "228K",
    img: "/influencers/byju.png",
    insta: "https://www.instagram.com/byjus_app/",
  },
  {
    id: 163,
    name: "Vedantu",
    category: "Edutech",
    followers: "175K",
    img: "/influencers/vedantu.jpg",
    insta: "https://www.instagram.com/vedantu_learn/",
  },
  {
    id: 164,
    name: "Doubtnut",
    category: "Edutech",
    followers: "61.8K",
    img: "/influencers/doubtnut.png",
    insta: "https://www.instagram.com/doubtnut/",
  },
  {
    id: 165,
    name: "Toppr",
    category: "Edutech",
    followers: "32.9K",
    img: "/influencers/toppr.png",
    insta: "https://www.instagram.com/mytoppr/",
  },
  {
    id: 166,
    name: "Khan Academy",
    category: "Edutech",
    followers: "304K",
    img: "/companies/khan-academy.png",
    insta: "https://www.instagram.com/khanacademy/",
  },
  {
    id: 167,
    name: "Gradeup",
    category: "Edutech",
    followers: "350K",
    img: "/influencers/gradeup.png",
    insta: "https://www.instagram.com/gradeupapp/",
  },
  {
    id: 168,
    name: "Career360",
    category: "Edutech",
    followers: "21.3K",
    img: "/influencers/careers.png",
    insta: "https://www.instagram.com/careers360official/",
  },

  // PARENTING
  {
    id: 169,
    name: "Momspresso",
    category: "Parenting",
    followers: "190K",
    img: "/influencers/momspresso.png",
    insta: "https://www.instagram.com/momspresso/",
  },
  {
    id: 170,
    name: "Parentune",
    category: "Parenting",
    followers: "20.2K",
    img: "/influencers/parantune.png",
    insta: "https://www.instagram.com/parentunelive/",
  },
  {
    id: 171,
    name: "Baby Chakra",
    category: "Parenting",
    followers: "116K",
    img: "/influencers/babychakra.png",
    insta: "https://www.instagram.com/mybabychakra/",
  },
  {
    id: 172,
    name: "FirstCry Parenting",
    category: "Parenting",
    followers: "1.7M",
    img: "/influencers/firstcry.png",
    insta: "https://www.instagram.com/firstcryindia/",
  },
  {
    id: 173,
    name: "Kidsstoppress",
    category: "Parenting",
    followers: "367K",
    img: "/influencers/kidsstoppress.jpg",
    insta: "https://www.instagram.com/kidsstoppress/",
  },
  {
    id: 174,
    name: "Being Momma",
    category: "Parenting",
    followers: "350K",
    img: "/influencers/beingmomma.avif",
    insta: "https://www.instagram.com/beingmomma/",
  },
//   {
//     id: 174,
//     name: "The Champa Tree",
//     category: "Parenting",
//     followers: "200K",
//     img: "/influencers/champa.jpeg",
//     insta: "https://www.instagram.com/thechampatree/",
//   },
//   {
//     name: "Mom Junction",
//     category: "Parenting",
//     followers: "1.1M",
//     img: "/influencers/momjunction.jpeg",
//     insta: "https://www.instagram.com/momjunctionofficial/",
//   },
//   {
//     name: "Mothersgurukul",
//     category: "Parenting",
//     followers: "180K",
//     img: "/influencers/mothersgurukul.jpeg",
//     insta: "https://www.instagram.com/mothersgurukul/",
//   },

  // FINANCE
  {
    id: 175,
    name: "CA Rachana Phadke",
    category: "Finance",
    followers: "1.5M",
    img: "/influencers/rachna.webp",
    insta: "https://www.instagram.com/ca_rachanaranade/",
  },
  {
    id: 176,
    name: "Ankur Warikoo",
    category: "Finance",
    followers: "3.7M",
    img: "/influencers/ankur.jpg",
    insta: "https://www.instagram.com/ankurwarikoo/",
  },
  {
    id: 177,
    name: "Neha Nagar",
    category: "Finance",
    followers: "2M",
    img: "/influencers/nehan.jpeg",
    insta: "https://www.instagram.com/iamnehanagar/",
  },
  {
    id: 178,
    name: "Sharan Hegde",
    category: "Finance",
    followers: "2.8M",
    img: "/influencers/sharan.jpg",
    insta: "https://www.instagram.com/financewithsharan/",
  },
  {
    id: 179,
    name: "Pranjal Kamra",
    category: "Finance",
    followers: "938K",
    img: "/influencers/pranjal.jpg",
    insta: "https://www.instagram.com/pranjalkamra/",
  },
  {
    id: 180,
    name: "Shreya Kapoor",
    category: "Finance",
    followers: "609K",
    img: "/influencers/shreyafin.png",
    insta: "https://www.instagram.com/shreyakapoor/",
  },
  {
    id: 181,
    name: "Asset Yogi",
    category: "Finance",
    followers: "212K",
    img: "/influencers/assetyogi.jpg",
    insta: "https://www.instagram.com/assetyogi/",
  },
  {
    id: 182,
    name: "CA Mohit Tandon",
    category: "Finance",
    followers: "250K",
    img: "/influencers/mohit.jpeg",
    insta: "https://www.instagram.com/camohittandon/",
  },
//   {
    
//     name: "CA Foundation Classes",
//     category: "Finance",
//     followers: "200K",
//     img: "/influencers/cafoundation.jpeg",
//     insta: "https://www.instagram.com/cafoundationclasses/",
//   },

  // GAMING
  {
    id: 183,
    name: "Mortal",
    category: "Gaming",
    followers: "5.1M",
    img: "/influencers/mortal.avif",
    insta: "https://www.instagram.com/ig_mortal/",
  },
  {
    id: 184,
    name: "Dynamo Gaming",
    category: "Gaming",
    followers: "2M",
    img: "/influencers/dynamo.jpg",
    insta: "https://www.instagram.com/dynamo__gaming/",
  },
  {
    id: 185,
    name: "ScoutOP",
    category: "Gaming",
    followers: "4.4M",
    img: "/influencers/scoutop.png",
    insta: "https://www.instagram.com/scoutop/",
  },
  {
    id: 186,
    name: "CarryisLive",
    category: "Gaming",
    followers: "21.3M",
    img: "/influencers/carry.jpg",
    insta: "https://www.instagram.com/carryminati/",
  },
  {
    id: 187,
    name: "Jonathan Gaming",
    category: "Gaming",
    followers: "4M",
    img: "/influencers/jonathan.avif",
    insta: "https://www.instagram.com/ig_jonathangaming/",
  },
  {
    id: 188,
    name: "Kronten",
    category: "Gaming",
    followers: "446K",
    img: "/influencers/kronten.avif",
    insta: "https://www.instagram.com/krontengaming/",
  },
  {
    id: 189,
    name: "Xyaa",
    category: "Gaming",
    followers: "227K",
    img: "/influencers/xyaa.jpg",
    insta: "https://www.instagram.com/xyaalive/",
  },
  {
    id: 190,
    name: "Ankkita C",
    category: "Gaming",
    followers: "181K",
    img: "/influencers/ankitac.jpg",
    insta: "https://www.instagram.com/ankkitac/",
  },
  {
    id: 191,
    name: "Techno Gamerz",
    category: "Gaming",
    followers: "1.6M",
    img: "/influencers/techno.avif",
    insta: "https://www.instagram.com/techno_gamerz/",
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
              //  FIXED: unique key using img + index
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

      {/*  Add Marquee right below Hero */}
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
            ) // show only selected category
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
                    className="text-red-500 text-sm mb-2 hover:underline"
                  >
                    @{inf.name.toLowerCase().replace(/\s+/g, "")}
                  </a>

                  <p className="text-sm text-gray-300">
                    {inf.followers} Followers
                  </p>

                  <span className="text-xs mt-2 px-3 py-1 bg-red-500 text-black rounded-full font-semibold">
                    #{inf.category}
                  </span>

                  <a
                    href={inf.insta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-red-500 text-black px-4 py-2 rounded-lg text-sm font-semibold hover:bg-yellow-400 transition"
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
