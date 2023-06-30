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
      title: "Mobile App Development",
      desc: "Deliver exceptional user experiences and expand your reach with our comprehensive mobile development services.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Collaboration and Communication",
      desc: "Our solutions foster better collaboration and communication within your organization, improving teamwork, knowledge sharing, and overall productivity.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Enhanced Security",
      desc: "We prioritize the security of your data and systems, implementing robust security measures to protect against cyber threats and ensure data privacy.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
