import { colors } from "@/styles/theme";
import { useCountDown } from "@/utils/useCountDown";
import { Flex, Progress, Text, useBreakpointValue } from "@chakra-ui/react";

import { FaUser } from "react-icons/fa";

export default function UserLoginData() {
  const paddingTop = useBreakpointValue<number | undefined>({
    md: undefined,
    base: 5,
  });

  const { progress, minutes, seconds } = useCountDown(15);

  return (
    <Flex flexDir="column" paddingTop={paddingTop}>
      <Flex flexDir="row" alignItems="center">
        <FaUser color={colors.brand.purple} />
        <Text size="lg" color="brand.purple" fontWeight="medium" marginLeft="1">
          DANIEL GARCIA SAMPAR
        </Text>
      </Flex>

      <Text color="brand.purple">
        Restam: {minutes}:{seconds} minutos
      </Text>

      <Progress
        hasStripe
        colorScheme={progress > 33 ? "purple" : "red"}
        value={progress}
      />
    </Flex>
  );
}
