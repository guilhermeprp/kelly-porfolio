'use client';

import { socialConst } from "@/data/constants";
import useBannerParallax from "@/hooks/bannerParallax";
import { Box, Container, Heading, Icon, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaLinkedinIn, FaRegEnvelope } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function Banner() {

	const { style, transition } = useBannerParallax();

	const socialIconsList = [() => React.createElement(FaLinkedinIn), () => React.createElement(FaInstagram), () => React.createElement(FaRegEnvelope)];

	const socialLinksList = socialConst.content.map((social, index) => (
		<Link key={social.id} href={social.link} title={social.text} target={socialConst.target} _hover={{ color: 'cyan.200' }}>
			<Icon fontSize="2xl">
				{socialIconsList[index]()}
			</Icon>
		</Link>
	));

	return (
		<>
			<Stack style={style} zIndex={1} direction="row" w={{ base: "80dvw" }} marginInline="auto" paddingInline={{ base: 0, lg: 4, '2xl': 0 }} gap={4} >
				{socialLinksList.map((socialLink) => socialLink)}
			</Stack>
			<Container
				id="banner"
				position="relative"
				zIndex={10}
				display="flex"
				flexDirection="column"
				maxW="100%"
				h="90vh"
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
				<Box style={{ opacity: style.opacity, scale: style.scale }} position="absolute" bottom={16} left="50%" transform="translate(-50%, 0)">
					<Link href="#projects">
						<Stack direction="row" alignItems="center" gap={0}>
							<Text fontFamily="serif">Scroll Down</Text>
							<IoIosArrowRoundDown size={24} />
						</Stack>
					</Link>
				</Box>
			</Container>
		</>
	)
}