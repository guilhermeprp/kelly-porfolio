'use client';

import useBannerParallax from "@/hooks/bannerParallax";
import { Box, Container, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function Banner() {

	const { style, transition } = useBannerParallax();

	return (
		<Container
			id="banner"
			position="relative"
			zIndex={10}
			display="flex"
			maxW="100%"
			h="90dvh"
			pb={24}
		>
			<Stack w={{ base: "80dvw" }} m="auto" className="clip-animation">
				<Heading style={style} as="h1" fontWeight={900} fontFamily="serif" fontSize={{ base: '5xl', sm: '7xl', lg: '9xl' }}>
					Kelly Jenyfer Soares Fernandes
				</Heading>
				<Text style={style} fontSize={{ base: 'x-large' }}>
					Jornalismo e Redação
				</Text>
			</Stack>
			<Box style={{ opacity: style.opacity, scale: style.scale }} position="absolute" bottom={10} left="50%" transform="translate(-50%, 0)">
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