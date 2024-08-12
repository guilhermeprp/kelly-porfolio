import ProjectsData from "@/data/projects.json";
import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import CardProject from "../components/cardProject";

export default function Projects() {
	const autoFit = (min: string) => `repeat(auto-fit, minMax(${min}, 1fr))`;

	return (
		<Container id="projects" maxW="100%" w="100%" borderRadius={30}>
			<Heading as="h2" w="full" fontSize={'5xl'} fontStyle="serif" marginBlock={20} >
				Projetos Selecionados
			</Heading>
			<Stack
				display="grid"
				gridTemplateColumns={{
					base: autoFit("300px"),
					sm: autoFit("450px"),
					md: autoFit("500px"),
				}}
				gap={8}
			>
				{ProjectsData.map((article) => (
					<Box display="contents" key={article.id}>
						{article.section.cards.map((project) => (
							<CardProject
								key={project.id}
								title={project.title}
								description={project.lead}
								image={project.image}
								link={project.link}
								section={article.section.title}
							/>
						))}
					</Box>
				))}
			</Stack>
		</Container>
	)
}