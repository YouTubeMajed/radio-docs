"use client";
import { Box, Flex, HStack } from "@chakra-ui/react";
import Image from "next/image";
import { Sidebar } from "../../exports/sidebar";
import { MainContent } from "../../exports/main";

export default function Home() {
  return (
    <>
      <HStack spacing={1} align={"stretch"} minH={"100vh"} minW={"100vw"}>
        <Sidebar />
        <MainContent />
      </HStack>
    </>
  );
}
