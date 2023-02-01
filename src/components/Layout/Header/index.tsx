import { Flex, ResponsiveValue, useBreakpointValue } from "@chakra-ui/react";

import UserLoginData from "@/components/DataDisplay/UserLoginData";

export default function Header() {
  type FlexDirection = "row" | "column";

  const headerFlexDir = useBreakpointValue<ResponsiveValue<FlexDirection>>({
    md: "row",
    base: "column",
  });

  const headerPaddingX = useBreakpointValue<number>({
    md: 20,
    base: 1.5,
  });

  return (
    <Flex
      flexDir={headerFlexDir}
      paddingX={headerPaddingX}
      paddingY="5"
      w="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      {/* <Image
        src="/logo.png"
        alt="Logo Análise positiva"
        width={180}
        height={38}
      /> */}

      <img src="/logo.png" alt="Logo Análise positiva" width="180" />

      <UserLoginData />
    </Flex>
  );
}
