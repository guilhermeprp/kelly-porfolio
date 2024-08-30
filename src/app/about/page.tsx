import { Box, Container, Heading, Text } from '@chakra-ui/react';

export default function About() {
	return (
		<Container id="projects" maxW="100%" w="100%" position='relative' zIndex={1}>
			<Box position='absolute' zIndex={10} inset="100vh 0 0" className="bg-gray-950" />
			<Heading as="h2" w="full" fontSize={{ base: '3xl', md: '5xl' }} fontStyle="serif" marginBlock={{ base: 12, lg: 20 }} >
				Sobre Mim
			</Heading>
			<Text>
				Sou uma jornalista apaixonada e dedicada, com experiências em diversas áreas da comunicação social, incluindo redação de notícias, produção de conteúdo, reportagem, fotografia e produção de vídeo. Minha carreira tem sido marcada pelo compromisso em realizar matérias jornalísticas de credibilidade.

				Tenho como competências: ótima comunicação, proatividade, trabalho em equipe, comprometimento com prazos e criatividade.
			</Text>
		</Container>
	);
};