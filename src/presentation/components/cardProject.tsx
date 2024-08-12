import { getBase64Image } from "@/helpers/base64Image";
import {
	Box,
	Card,
	Heading,
	LinkBox,
	LinkOverlay,
	Stack,
	Text
} from "@chakra-ui/react";
import Image from "next/image";

export default async function CardProject({ title, description, image, link, section, ...props }: {
	title: string;
	description: string;
	image: string;
	link: string;
	section: string;
}) {

	const getBlurDataUrl = await getBase64Image(image);

	return (
		<Card
			border="0"
			overflow="hidden"
			variant="outline"
			backgroundColor="transparent"
		>
			<LinkBox>
				<LinkOverlay className="group" href={link} target="_target">
					<Box position="relative" borderRadius={8} overflow="hidden">
						<Image
							src={image}
							alt="image"
							decoding="async"
							width={545}
							height={400}
							placeholder="blur"
							blurDataURL={getBlurDataUrl}
							className="group-hover:overflow-hidden group-hover:transform group-hover:scale-105 group-hover:blur-sm h-[300px] sm:h-[400px] w-full object-cover cursor-pointer transition duration-300"
						/>

						<Text
							fontWeight={500}
							fontSize={24}
							position="absolute"
							bottom={-20}
							right={8}
							textShadow="0px 0px 3px black"
							transition="0.3s"
							_groupHover={{ bottom: 4 }}
						>
							Saiba mais
						</Text>
					</Box>

					<Stack zIndex={1} paddingBlock={4} w="100%">
						<Text
							paddingInline={4}
							paddingBlock={2}
							bgColor="var(--background-accent--light)"
							w="fit-content"
						>
							{section}
						</Text>
						<Heading
							as="h4"
							className="title"
							fontSize={{ base: "xl", md: "2xl" }}
							fontWeight={700}
							fontFamily={"serif"}
						>
							{title}
						</Heading>
						<Text>{description}</Text>
					</Stack>
				</LinkOverlay>
			</LinkBox>
		</Card>
	);
}
