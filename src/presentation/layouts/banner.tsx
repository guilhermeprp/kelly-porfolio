import { Box, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function Banner() {
	return (
		<Container
			id="banner"
			position="relative"
			display="flex"
			maxW="100%"
			h="90dvh"
			pb={24}
		>
			<Stack w={{ base: "80dvw" }} m="auto">
				<Heading as="h1" fontWeight={900} fontFamily="serif" fontSize={{ base: '5xl', sm: '7xl', md: '9xl' }}>
					Kelly Jenyfer Soares Fernandes
				</Heading>
				<Text fontSize={{ base: 'x-large' }}>Jornalismo e Redação</Text>
			</Stack>
			<Box position="absolute" bottom={10} left="50%" transform="translate(-50%, 0)">
				<Link href="#projects">
					<Stack direction="row" alignItems="center" gap={0}>
						<Text fontFamily="serif">Scroll Down</Text>
						<IoIosArrowRoundDown size={24} />
					</Stack>
				</Link>
			</Box>
		</Container>
	)
}