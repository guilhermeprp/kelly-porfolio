import CardProject from "@/components/cardProject";
import * as ProjectsData from "@/data/projects.json";
import { Box, Container, Link, Stack, Text } from "@chakra-ui/react";
import { IoIosArrowRoundDown } from "react-icons/io";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Container id="banner" position="relative" display="flex" maxW="100%" h="90dvh" pb={24}>
          <Stack w={{ base: '80dvw' }} m="auto">
            <h1 className="font-extrabold text-9xl font-serif">
              Kelly Jenyfer Soares Fernandes
            </h1>
            <Text className="font-sans text-xl">
              Jornalismo e Redação
            </Text>
          </Stack>
          <Box position="absolute" bottom={10} left="50%" translateX="-50%">
            <Link href="#projects">
              <Stack direction="row" alignItems="center" gap={0}>
                <Text className="font-serif">Scroll Down</Text>
                <IoIosArrowRoundDown size={24} />
              </Stack>
            </Link>
          </Box>
        </Container>

        <Container id="projects" maxW="100%" w="100%">
          <h2 className="w-full"> Projetos Selecionados</h2>
          <Stack direction="row" wrap="wrap" gap={8}>
            {
              ProjectsData.map((article) => (
                <>
                  {
                    article.section.cards.map((project) => (
                      <CardProject
                        key={project.id}
                        title={project.title}
                        description={project.lead}
                        image={project.image}
                        link={project.link}
                        section={article.section.title}
                      />
                    ))
                  }
                </>
              ))
            }
          </Stack>

        </Container>
      </main >
    </>
  );
}
