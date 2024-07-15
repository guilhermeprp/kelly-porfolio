import { Box, Card, Heading, Image, Link, LinkBox, LinkOverlay, Stack, Text } from "@chakra-ui/react";

export default function CardProject({
	title,
	description,
	image,
	link,
	section,
	...props
}: {
	title: string,
	description: string,
	image: string,
	link: string,
	section: string
}) {
	return (
		<Card
			className="group"
			maxW={{ base: '100%', md: 500 }}
			border="0"
			overflow="hidden"
			variant="outline"
			backgroundColor="transparent"
		>
			<LinkBox>
				<LinkOverlay href={link} target="_target">
					<Image
						borderRadius={8}
						objectFit="cover"
						w={500}
						h={400}
						cursor="pointer"
						transition="0.5s"
						src={image}
						alt="image"
					/>

					<Stack
						zIndex={1}
						paddingBlock={4}
						w="100%"
					>
						<Text paddingInline={4} paddingBlock={2} bgColor="var(--background-accent--light)" w="fit-content">
							{section}
						</Text>
						<Heading
							as="h4"
							className="title"
							fontSize={{ base: 'xl', md: '2xl' }}
							fontWeight={700}
							fontFamily={'serif'}
						>
							{title}
						</Heading>
						<Text>
							{description}
						</Text>
					</Stack>
				</LinkOverlay>
			</LinkBox>
		</Card>
	)
}