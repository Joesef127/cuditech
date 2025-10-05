import paystro from "./assets/images/paystro.svg";
import culture_amp from "./assets/images/culture_amp.svg";
import squarespace from "./assets/images/squarespace.svg";
import treehouse from "./assets/images/treehouse.svg";
import razorpay from "./assets/images/razorpay.svg";
import robot from "./assets/images/robot.svg";
import doctors from "./assets/images/doctors.svg";
import art1 from "./assets/images/art1.svg";
import art3 from "./assets/images/art2.svg";
import art2 from "./assets/images/art3.svg";
import art4 from "./assets/images/art4.svg";
import dp from "./assets/images/dp.svg";

export const navItems = [
  {name: "Solutions", href: "#solutions"},
  {name: "About", href: "#about"},
  {name: "Why Us", href: "#why-us"},
  {name: "FAQ", href: "#faq"},
];

export const sponsorsData = [
  paystro,
  culture_amp,
  squarespace,
  treehouse,
  razorpay,
];

export const solutionsData = [
  {
    image: robot,
    heading: "Agentic AI Solution",
    desc: "Self-directed, adaptive AI agents that make autonomous decisions in real time. They don’t just follow rules — they learn, optimise, and get smarter with every outcome.",
    list: [
      "Cut manual intervention and reduce errors.",
      "Agents learn from every outcome, improving performance automatically.",
      "24/7 monitoring and response without downtime.",
    ],
  },

  {
    image: doctors,
    heading: "Industry-Specific Solution",
    desc: "Tailored AI agents that understand the unique workflows of your sector from finance and logistics to healthcare and manufacturing. We don’t give you generic AI; we give you AI that speaks your industry.",
    list: [
      "Relevant from Day One – Pre-configured workflows for your industry.",
      "Faster ROI – Skip long customisation cycles and see results quickly.",
      "Regulatory Confidence – Solutions aligned with your sector’s compliance needs.",
    ],
  },

  {
    image: robot,
    heading: "Enterprise IT Services",
    desc: "Seamless integration, security, and support for your IT ecosystem. From onboarding to compliance, we ensure your AI works with your existing infrastructure — not against it.",
    list: [
      "Seamless Integration – Plug into your current IT stack with minimal disruption",
      "Enterprise-Grade Security – Built with compliance and data protection at the core.",
      "End-to-End Support – From onboarding to scaling, our team ensures smooth adoption.",
    ],
  },
];

export const statisticsData = [
  {value: "22+", label: "Company & Startup"},
  {value: "43+", label: "Project completed"},
  {value: "4+", label: "Years of Excellence"},
];

export const whyChoseData = [
  {
    image: art1,
    title: "Secure & Scalable",
    desc: "Future-ready IT solutions built to grow with your business.",
    bgColor: "bg-[#1A73E8]"
  },
  {
    image: art2,
    title: "24/7 Support",
    desc: "Round-the-clock monitoring and optimisation.",
    bgColor: "bg-[#FFFFFF]"
  },
  {
    image: art3,
    title: "Industry Expertise:",
    desc: "Deep understanding of multiple industries and their challenges.",
    bgColor: "bg-[#E7ECFC]"
  },
  {
    image: art4,
    title: "Seamless Integration",
    desc: "Designed to work smoothly with your existing systems.",
    bgColor: "bg-[#174EA6]"
  },
];

export const testimonialsData = [
  {
    text: "The integration was seamless, and the AI insights are spot-on. We finally have clarity on processes that used to be messy and expensive to manage.",
    name: "Maria L",
    position: " CTO of a Retail Tech Company",
    image: dp,
  },
  {
    text: "Switching to [Your SaaS] saved our team countless hours. What used to take days of manual work now happens in minutes. It’s become the backbone of how we run operations",
    name: "Maria L",
    position: " CTO of a Retail Tech Company",
    image: dp,
  },
]
