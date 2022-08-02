import { Avatar, Box, Flex, Link, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            Lucas Rodrigues
            <Text color="gray.300" fontSize="small">
              lucasrodrigues7691@gmail.com
            </Text>
          </Text>
        </Box>
      )}

      <Link href="https://github.com/lucasrodrigues03">
        <Avatar
          size="md"
          name="Lucas Rodrigues"
          src="https://github.com/lucasrodrigues03.png"
        />
      </Link>
    </Flex>
  )
}
