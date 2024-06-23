"use client";

import { Flex, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import MainLayout from "./components/layouts/MainLayout";
import ThreeComponent from "./Three";

export default function Home() {
  return (
    <MainLayout>
      <Flex
        direction={"column"}
        gap={"4"}
        className="w-full mt-24"
        justify={"center"}
      >
        <Heading as={"h1"}>Davin Zaki Pradipa</Heading>
        <Flex direction={"column"} gap={"4"}>
          <Text>Hi, I'm Davin Zaki Pradipa. I'm a frontend developer.</Text>
          {/* <Image src="/black-wave.jpg" alt="profile" width={400} height={100} /> */}
          <ThreeComponent />
        </Flex>
      </Flex>
    </MainLayout>
  );
}
