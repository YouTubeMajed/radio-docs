import {
  Box,
  VStack,
  Button,
  Icon,
  useDisclosure,
  IconButton,
  useBreakpointValue,
  SlideFade,
  useOutsideClick,
} from "@chakra-ui/react";
import { HiHome } from "react-icons/hi";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsSlashSquareFill, BsFire } from "react-icons/bs";
import { MdQuestionMark } from "react-icons/md";
import { useRef, useState } from "react";
import Link from "next/link";

export function Sidebar() {
  const sidebarRef = useRef<any>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const { isOpen, onToggle } = useDisclosure();

  const isMobile = useBreakpointValue({ base: true, md: false });

  useOutsideClick({
    ref: sidebarRef,
    handler: () => setIsModalOpen(false),
  });

  return (
    <>
      {isMobile ? (
        <Box
          minW={isModalOpen ? "100%" : "0"}
          minH={isModalOpen ? "100%" : "0"}
          bg={isModalOpen ? "#1E1F22" : "transparent"}
          p={3}
          zIndex={999}
          ref={sidebarRef}
        >
          <IconButton
            aria-label=""
            icon={isModalOpen ? <FaTimes /> : <FaBars />}
            variant="unstyled"
            fontSize="2xl"
            onClick={() =>
              isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true)
            }
            mb={4}
            alignSelf="flex-end"
          />
          {isModalOpen && (
            <SlideFade in={isModalOpen} offsetY="20px">
              <VStack spacing={5} align="stretch">
                <Box border="1px" rounded="md" alignItems="center">
                  <Button w="100%" variant="unstyled">
                    <Icon boxSize={8} as={HiHome} />
                  </Button>
                </Box>
                <VStack spacing={2} align="stretch">
                  <Link href={"/commands"}>
                    <Button
                      w="100%"
                      variant="solid"
                      colorScheme="telegram"
                      leftIcon={<BsSlashSquareFill />}
                    >
                      Commands
                    </Button>
                  </Link>
                  <Link href={"/new"}>
                    <Button
                      w="100%"
                      variant="solid"
                      colorScheme="telegram"
                      leftIcon={<BsFire />}
                    >
                      What's New
                    </Button>
                  </Link>
                  <Link href={"/faq"}>
                    <Button
                      w="100%"
                      variant="solid"
                      colorScheme="telegram"
                      leftIcon={<MdQuestionMark />}
                    >
                      FAQ
                    </Button>
                  </Link>
                </VStack>
              </VStack>
            </SlideFade>
          )}
        </Box>
      ) : (
        <Box minW="250px" minH="100%" bg="#1E1F22" p={3}>
          <VStack spacing={5} align="stretch">
            <Box border="1px" rounded="md" alignItems="center">
              <Button w="100%" variant="unstyled">
                <Icon boxSize={8} as={HiHome} />
              </Button>
            </Box>
            <VStack spacing={2} align="stretch">
              <Link href={"/commands"}>
                <Button
                  w="100%"
                  variant="solid"
                  colorScheme="telegram"
                  leftIcon={<BsSlashSquareFill />}
                >
                  Commands
                </Button>
              </Link>
              <Link href={"/new"}>
                <Button
                  w="100%"
                  variant="solid"
                  colorScheme="telegram"
                  leftIcon={<BsFire />}
                >
                  What's New
                </Button>
              </Link>
              <Link href={"/faq"}>
                <Button
                  w="100%"
                  variant="solid"
                  colorScheme="telegram"
                  leftIcon={<MdQuestionMark />}
                >
                  FAQ
                </Button>
              </Link>
            </VStack>
          </VStack>
        </Box>
      )}
    </>
  );
}

// export function Sidebar() {
//   const { isOpen, onToggle } = useDisclosure();
//   return (
//     <Box w={"250px"} h={"100%"} bg={"#1E1F22"} p={3}>
//       <VStack spacing={5} align="stretch">
//         <Box border={"1px"} rounded={"md"} alignItems={"center"}>
//           <Button w={"100%"} variant="unstyled">
//             <Icon boxSize={8} as={HiHome} />
//           </Button>
//         </Box>
//         <VStack spacing={2} align="stretch">
//           <Box bg={"gray"} rounded={"md"} alignItems={"center"}>
//             <Button w={"100%"} variant="unstyled">
//               Commands
//             </Button>
//           </Box>
//           <Box bg={"gray"} rounded={"md"} alignItems={"center"}>
//             <Button w={"100%"} variant="unstyled">
//               What's New
//             </Button>
//           </Box>
//           <Box bg={"gray"} rounded={"md"} alignItems={"center"}>
//             <Button w={"100%"} variant="unstyled">
//               FAQ
//             </Button>
//           </Box>
//         </VStack>
//       </VStack>
//     </Box>
//   );
// }
