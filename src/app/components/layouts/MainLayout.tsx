import { Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import Navbar from "../Navbar";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <main className="w-full ">
      <Navbar />
      <Flex className="w-full  mx-4 mt-8 lg:mx-auto max-w-2xl">{children}</Flex>
    </main>
  );
}
