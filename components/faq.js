import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "What kind of software solutions do you offer?",
    answer: "We offer a wide range of software solutions including web applications, mobile apps, enterprise software, custom software development, and more. Our team has expertise in various technologies and platforms to cater to diverse business needs.",
  },
  {
    question: "Can you customize the software solutions according to our specific requirements?",
    answer: "Absolutely! We specialize in providing customized software solutions tailored to your unique business needs. We collaborate closely with you to understand your requirements and deliver a solution that aligns perfectly with your goals.",
  },
  {
    question: "How long does it take to develop a software solution?",
    answer:
      "The development timeline varies depending on the complexity and scope of the project. We work closely with you to define project milestones and provide you with a clear timeline. Timely delivery is one of our priorities, and we strive to meet agreed-upon deadlines.",
  },
  {
    question: "What kind of ongoing support do you provide? ",
    answer:
      "We provide comprehensive ongoing support and maintenance services to ensure the smooth operation of your software solution. Our support team is available to address any issues or concerns you may have and provide updates or enhancements as needed.",
  },
  {
    question: "How do you ensure the security of our data and systems? ",
    answer:
      "We prioritize the security of your data and systems. We follow industry best practices and implement robust security measures to protect against cyber threats and ensure data privacy. Our team is experienced in implementing secure software solutions.",
  },
  {
    question: "Can you develop mobile apps for both iOS and Android platforms? ",
    answer:
      "Yes, we have expertise in developing mobile apps for both iOS and Android platforms. We leverage the latest technologies and frameworks to create high-performing and user-friendly mobile applications.",
  },
  {
    question: "How do we get started with your services? ",
    answer:
      "Getting started is simple! Reach out to us through our contact form or give us a call. We'll schedule a consultation to discuss your requirements, provide recommendations, and outline the next steps in the development process.",
  },
  {
    question: "Do you work with clients from different industries? ",
    answer:
      "Yes, we work with clients from various industries, including healthcare, finance, e-commerce, education, and more. Our team has the versatility and adaptability to cater to different industry-specific needs.",
  },
];

export default Faq;