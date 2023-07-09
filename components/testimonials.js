import Image from "next/image";
import React from "react";
import Container from "./container";

// import userOneImg from "../public/img/user1.jpg";
// import userTwoImg from "../public/img/user2.jpg";
// import userThreeImg from "../public/img/user3.jpg";

const Testimonials  = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
            <Mark>Cre8tiveByte</Mark> transformed our business with their custom software solutions. Highly recommended!
            </p>

            <Avatar
              image='https://i.pravatar.cc/40?img=1'
              name="John Smith"
              title="CEO"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
            The  <Mark>professionalism</Mark> and <Mark>expertise</Mark> of Cre8tiveByte were outstanding. Our digital transformation journey wouldn't have been the same without them.
            </p>

            <Avatar
              image='https://i.pravatar.cc/40'
              name="Sarah Johnson"
              title="CTO"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-xl leading-normal ">
            Choosing Cre8tiveByte was the best decision for our software development needs. Their customized solutions exceeded our expectations.
            </p>

            <Avatar
              image='https://i.pravatar.cc/40?img=3'
              name="David Thompson"
              title="Founder"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj48L3N2Zz4="
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;