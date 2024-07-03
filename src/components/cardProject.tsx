import { Card, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";

export default function CardProject({
	title,
	description,
	image,
	link,
	...props
}: {
	title: string,
	description: string,
	image: string,
	link: string,
}) {
	return (
		<Card
			border={{ base: '2px solid var(--background-accent)' }}
			overflow="hidden"
			variant="outline"
			backgroundColor="transparent"
		>
			<Link href={link} target="_target">
				<Stack
					pointerEvents={{ base: 'none' }}
					position="absolute"
					zIndex={1}
					p={4}
					w={{ base: '100%' }}
					bgGradient={{ base: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgb(26 32 44 / 69%) 50%, hsl(220 26% 5% / 1) 100%)' }}
				>
					<Heading className="title font-serif">
						{title}
					</Heading>
					<Text>
						{description}
					</Text>
				</Stack>
				<Image
					className="hover:scale-110"
					objectFit="cover"
					w={500}
					h={400}
					filter="saturate(80%)"
					_hover={{ filter: 'saturate(50%) brightness(50%) grayscale(50%) blur(5px)' }}
					cursor={{ base: 'pointer' }}
					transition={{ base: '0.5s' }}
					src={image}
					alt="Kelly Jenyfer"
				/>

				<Text
					position="absolute"
					bottom={-20}
					right={4}
					bgClip="text"
					fontSize="xl"
					fontWeight="bold"
				>
					Saiba Mais
				</Text>
			</Link>
		</Card>
	)
}