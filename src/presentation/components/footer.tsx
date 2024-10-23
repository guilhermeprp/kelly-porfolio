import { navConst, rightsConst, socialConst } from "@/data/constants";
import { Container, Divider, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";

export default function footer() {

	const list = [rightsConst, socialConst, navConst];

	return (
		<Container
			display="flex"
			className="w-available"
			width="-webkit-fill-available"
			maxW="auto"
			zIndex={1}
			flexWrap="wrap"
			gap={4}
			marginTop="54px"
			marginInline={{ base: -1, md: -8, lg: -32 }}
			paddingX={{ base: 4, md: 8, lg: 32 }}
			paddingBlock="32px 48px"
			background="var(--background)"
		>
			{list.map((item) => (
				<Stack key={item.id} flex="1 1 300px">
					<Heading as="h6">{item.title}</Heading>
					<Divider />
					{item.content.map((content, index) => (
						<Link
							key={index}
							href={content.link}
							target={item.target}
							className={
								content.link ? "pointer-events-auto w-max" : "pointer-events-none"
							}
						>
							{content.text}
						</Link>
					))}
				</Stack>
			))}
		</Container>
	);
}
