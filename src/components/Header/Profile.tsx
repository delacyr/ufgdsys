import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Delacyr Ferreira</Text>
          <Text color="gray.300" fontSize="small">
            delacyrferreira@ufgd.edu.br
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Delacyr Ferreira"
        src="https://github.com/delacyr.png"
      />
    </Flex>
  );
}