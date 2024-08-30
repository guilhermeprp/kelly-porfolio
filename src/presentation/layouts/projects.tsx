import ProjectsData from "@/data/projects.json";
import { Box, Container, Divider, Heading, Stack } from "@chakra-ui/react";
import CardProject from "../components/cardProject";

export default function Projects() {
	const autoFit = (min: string) => `repeat(auto-fit, minMax(${min}, 1fr))`;

	return (
		<>
			<Box position="absolute" zIndex={-1} inset="100vh 0 0" className="bg-gray-800" />
			<Container id="projects" position="relative" zIndex={10} maxW="100%" w="100%">
				<Stack direction="row" alignItems="baseline" gap={8}>
					<Heading as="h2" w="max-content" fontSize={{ base: '3xl', md: '5xl' }} fontStyle="serif" marginBlock={{ base: 12, lg: 20 }} >
						Projetos Selecionados
					</Heading>
					<Divider flex={1} borderWidth={1} className="-translate-y-3" />
				</Stack>
				<Stack
					display="grid"
					gridTemplateColumns={{
						base: autoFit("275px"),
						sm: autoFit("350px"),
						md: autoFit("425px"),
						lg: autoFit("500px")
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
		</>
	)
}