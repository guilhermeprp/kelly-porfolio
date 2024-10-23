'use client';

import { navConst } from "@/data/constants";
import { Link } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export default function NavBar() {
	const pathName = usePathname();

	const activeLink = (path: string) => path === pathName ? 'cyan.200' : '';

	return (
		<nav className="flex flex-col p-4 gap-2 fixed top-4 right-4 z-50">
			{navConst.content.map((nav) => (
				<Link key={nav.id} href={nav.link} color={activeLink(nav.link)} _hover={{ color: 'cyan.300' }} textDecoration="none !important" target={navConst.target} >
					{nav.text}
				</Link>
			))}
		</nav>
	)
}
