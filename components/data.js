import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "Customized solutions, increased productivity, scalability, cost savings, and a competitive edge. Experience improved customer experience, data-driven insights, ongoing support, enhanced security, and seamless collaboration.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Understand your customers deeply and tailor your offerings to meet their needs effectively.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Cost Savings",
      desc: "By leveraging our services, you can reduce operational costs, eliminate manual and repetitive tasks, and optimize resource allocation, resulting in significant savings",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Competitive Advantage",
      desc: "Our cutting-edge technology and innovative solutions give you a competitive edge, helping you stand out in the market and attract more customers",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "Gain a deeper understanding of your customers, drive customer loyalty, enhance customer satisfaction, improve decision-making, and deliver personalized experiences that set your business apart from the competition.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Customized Solutions for Every Business",
      desc: "Our software development service company crafts tailor-made solutions that align with your unique business needs, empowering you to optimize operations, enhance efficiency, and drive growth.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Seamless Integration and Scalability",
      desc: "With our expertise in software development, we ensure seamless integration of new solutions into your existing systems, providing scalability that adapts to your evolving business requirements, now and in the future",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Robust Support and Maintenance",
      desc: "We offer comprehensive support and maintenance services, ensuring your software runs smoothly and remains up-to-date, minimizing downtime, and allowing you to focus on core business activities.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
