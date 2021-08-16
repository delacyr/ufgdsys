import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize="3xl"
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
    >
      UFGD
      <Text as="span" ml="0" color="pink.500">sys</Text>
    </Text>
  );
}