import { Flex, Grid, Heading, Text } from "@radix-ui/themes";
import MainLayout from "../components/layouts/MainLayout";
import { CodeIcon, GlobeIcon } from "@radix-ui/react-icons";

export default function Projects() {
  return (
    <MainLayout>
      <Flex
        direction={"column"}
        gap={"4"}
        className="w-full mt-24"
        justify={"center"}
      >
        <Heading as={"h1"}>Projects</Heading>
        <Grid columns={"2"} gap={"6"} width="auto">
          <Flex direction={"column"} gap={"4"} className="w-full">
            <Flex
              direction={"column"}
              className="group rounded-lg w-full border border-slate-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <Heading as="h2" size={"4"} className="mb-3  font-semibold">
                Doodle Base
              </Heading>
              <Text className="m-0 text-sm opacity-50">
                Project for Web Design Competition - Finalist
              </Text>
              <Text className="text-sm opacity-90" mt={"2"}>
                HTML · CSS · JavaScript · TailwindCSS
              </Text>

              <Flex
                direction={"row"}
                gap={"4"}
                className="mt-4"
                justify={"end"}
              >
                <a target="_blank" href="https://doodle-base.vercel.app/">
                  <CodeIcon />{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/davinzaki/doodle-base"
                >
                  <GlobeIcon />
                </a>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={"4"} className="w-full">
            <Flex
              direction={"column"}
              className="group rounded-lg w-full border border-slate-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <Heading as="h2" size={"4"} className="mb-3  font-semibold">
                Accounting App
              </Heading>
              <Text className="m-0 text-sm opacity-50">
                Open source accounting system
              </Text>
              <Text className="text-sm opacity-90" mt={"2"}>
                Laravel · Vue JS · Inertia JS · TailwindCSS
              </Text>

              <Flex
                direction={"row"}
                gap={"4"}
                className="mt-4"
                justify={"end"}
              >
                <a
                  target="_blank"
                  href="https://github.com/davinzaki/accounting-app"
                >
                  <GlobeIcon />
                </a>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={"4"} className="w-full">
            <Flex
              direction={"column"}
              className="group rounded-lg w-full border border-slate-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <Heading as="h2" size={"4"} className="mb-3  font-semibold">
                Inertia Auth
              </Heading>
              <Text className="m-0 text-sm opacity-50">
                Inertia JS Authentication System
              </Text>
              <Text className="text-sm opacity-90" mt={"2"}>
                Laravel · Inertia JS · Blade · TailwindCSS
              </Text>

              <Flex
                direction={"row"}
                gap={"4"}
                className="mt-4"
                justify={"end"}
              >
                <a
                  target="_blank"
                  href="https://github.com/davinzaki/inertia-auth"
                >
                  <GlobeIcon />
                </a>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction={"column"} gap={"4"} className="w-full">
            <Flex
              direction={"column"}
              className="group rounded-lg w-full border border-slate-700 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <Heading as="h2" size={"4"} className="mb-3  font-semibold">
                Role Spatie
              </Heading>
              <Text className="m-0 text-sm opacity-50">
                Role Management System using Spatie
              </Text>
              <Text className="text-sm opacity-90" mt={"2"}>
                Laravel · VUe JS · Inertia JS · TailwindCSS
              </Text>

              <Flex
                direction={"row"}
                gap={"4"}
                className="mt-4"
                justify={"end"}
              >
                <a
                  target="_blank"
                  href="https://github.com/davinzaki/role-spatie"
                >
                  <GlobeIcon />
                </a>
              </Flex>
            </Flex>
          </Flex>
        </Grid>
      </Flex>
    </MainLayout>
  );
}
