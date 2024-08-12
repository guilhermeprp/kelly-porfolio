import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="flex flex-col p-4 gap-2 fixed top-4 right-4 z-50">
			<Link href='#void'>
				Home
			</Link>
			<Link href='#projects'>
				Projetos
			</Link>
		</nav>
	)
}
