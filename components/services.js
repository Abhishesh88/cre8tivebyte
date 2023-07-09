import React from "react";
import Container from "./container";

const Services  = () => {
    return (
        <Container>
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          <div className="lg:col-span-2 xl:col-auto">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <h3 className="text-2xl leading-normal font-medium text-gray-900">Web Development</h3>
              <p className="mt-4 text-gray-600 leading-6">
                We specialize in building responsive and scalable web applications using modern technologies such as React, Angular, and Vue.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <h3 className="text-2xl leading-normal font-medium text-gray-900">Mobile App Development</h3>
              <p className="mt-4 text-gray-600 leading-6">
                We create native and hybrid mobile applications for iOS and Android using frameworks such as React Native and Flutter.
              </p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
              <h3 className="text-2xl leading-normal font-medium text-gray-900">Cloud Solutions</h3>
              <p className="mt-4 text-gray-600 leading-6">
                We provide cloud-based solutions using AWS, Azure, and Google Cloud Platform to help businesses scale and optimize their operations.
              </p>
            </div>
          </div>
        </div>
      </Container>
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
  export default Services;