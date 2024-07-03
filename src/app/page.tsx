import CardProject from "@/components/cardProject";
import { Stack, Text } from "@chakra-ui/react";
import * as ProjectsData from "@/data/projects.json";

export default function Home() {
  const data = ProjectsData;
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <header>
          <Stack>
            <h1 className="font-extrabold text-9xl font-serif">
              Kelly Jenyfer Soares Fernandes
            </h1>
            <Text className="font-serif">
              Jornalismo e Redação
            </Text>
          </Stack>
        </header>


        <h2> Projetos Selecionados</h2>
        <Stack direction="column" gap={12}>
          {
            data.map((article) => (
              <Stack key={article.id}>
                <h3>{article.section.title}</h3>
                <Stack direction="row" gap={8}>
                  {
                    article.section.cards.map((project) => (
                      <CardProject
                        key={project.id}
                        title={project.title}
                        description={project.slug}
                        image={project.image}
                        link={project.link}
                      />
                    ))
                  }
                </Stack>
              </Stack>
            ))
          }
        </Stack>

      </main>
    </>
  );
}
