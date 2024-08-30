import { Container, Divider, Heading, Stack } from "@chakra-ui/react";
import Link from "next/link";

export default function footer() {
	const list = [
		{
			id: "62d9b4e8-0595-48ff-92e2-599bda4f0d91",
			title: "CopyRight",
			target: "_blank",
			content: [
				{
					text: "© 2024 Kelly Jenyfer",
					link: "",
				},
			],
		},
		{
			id: "05c0f6ba-56db-47e3-bdea-7c41e8524e50",
			title: "Contact",
			target: "_blank",
			content: [
				{
					text: "kellysoaresfernandes@gmail.com",
					link: "mailto: kellysoaresfernandes@gmail.com",
				},
				{
					text: "+55 61 99999-9999",
					link: "tel: +556199999999",
				},
				{
					text: "Linkedin",
					link: "https://www.linkedin.com/in/kelly-jenyfer/",
				},
				{
					text: "Instagram",
					link: "https://www.instagram.com/kellyjenyferjornalista/",
				},
			],
		},
		{
			id: "e9c42e23-0e35-45e5-950e-06f85405e6e5",
			title: "Menu",
			target: "_self",
			content: [
				{
					text: "Home",
					link: "/",
				},
				{
					text: "Sobre",
					link: "/about",
				},
			],
		},
	];

	return (
		<Container
			display="flex"
			maxW="auto"
			w="-webkit-fill-available"
			zIndex={1}
			gap={4}
			marginTop="54px"
			marginInline={{ base: -1, md: -8, lg: -32 }}
			paddingX={{ base: 1, md: 8, lg: 32 }}
			paddingBlock="32px 48px"
			background="var(--background)"
		>
			{list.map((item) => (
				<Stack key={item.id} flex={1}>
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
