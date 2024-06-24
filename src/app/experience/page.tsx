import { Flex, Heading, Text } from "@radix-ui/themes";
import MainLayout from "../components/layouts/MainLayout";
import ThreeComponent from "../Three";

export default function Experience() {
  return (
    <MainLayout>
      <Flex
        direction={"column"}
        gap={"4"}
        className="w-full mt-24"
        justify={"center"}
      >
        <Heading as={"h1"}>Experience</Heading>
        <Flex direction={"column"} gap={"4"}>
          <div>
            {/* Heading */}
            <div className="ps-2 my-2 first:mt-0">
              <h3 className="text-xs font-medium uppercase ">
                1 May, 2023 - 1 November, 2024 · 6 mos
              </h3>
            </div>
            {/* End Heading */}

            {/* Item */}
            <div className="flex gap-x-3 relative group rounded-lg hover:bg-gray-100  hover:text-slate-800">
              {/* Icon */}
              <div className="relative last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-white border-2 border-gray-300 group-hover:border-gray-600"></div>
                </div>
              </div>
              {/* End Icon */}

              {/* Right Content */}
              <div className="grow p-2 pb-8">
                <h3 className="flex gap-x-1.5 text-lg font-bold ">
                  Software Engineer
                </h3>
                <h5 className="flex gap-x-1.5 text-md  font-semibold ">
                  KodingWorks · Internship
                </h5>
                <p className="mt-1 text-sm ">
                  Build a CMS Fullstack application for swimming club tracking
                  app using Laravel and Vue.js
                </p>
                <p className="mt-1 text-sm ">
                  Build a FrontEnd application for Learning Management System
                  app using Next.js
                </p>
                <p className="mt-4 text-sm ">Laravel · Vue.js · Next.js</p>
                <button
                  type="button"
                  className="mt-1 -ms-1 p-1 relative z-10 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent  hover:bg-white hover:shadow-sm disabled:opacity-50 disabled:pointer-events-none"
                >
                  <img
                    className="flex-shrink-0 size-12 rounded-full"
                    src="/kodingworks_logo.jpeg"
                    alt="Image Description"
                  />
                  KodingWorks - Semarang, Central Java, Indonesia · Remote
                </button>
              </div>
              {/* End Right Content */}
            </div>
            {/* End Item */}
          </div>
        </Flex>
      </Flex>
    </MainLayout>
  );
}
