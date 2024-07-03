import Link from "next/link";

export default function NavBar() {
	return (
		<nav className="flex flex-col p-4 gap-2 fixed top-4 right-4">
			<Link href='#home'>
				Home
			</Link>
			<Link href='#sobre'>
				Sobre
			</Link>
			<Link href='#contato'>
				Contato
			</Link>
		</nav>
	)
}
