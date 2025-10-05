import paystro from "./assets/images/paystro.svg";
import culture_amp from "./assets/images/culture_amp.svg";
import squarespace from "./assets/images/squarespace.svg";
import treehouse from "./assets/images/treehouse.svg";
import razorpay from "./assets/images/razorpay.svg";
import robot from "./assets/images/robot.svg";
import doctors from "./assets/images/doctors.svg";

export const navItems = [
  { name: "Solutions", href: "#solutions" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "FAQ", href: "#faq" },
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
