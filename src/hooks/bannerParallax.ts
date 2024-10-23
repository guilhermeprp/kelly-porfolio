import { useEffect, useState } from "react";

export default function useBannerParallax() {
	const [scrollY, setScrollY] = useState(0);
	const [windowHeight, setWindowHeight] = useState(1080);

	const translateDown = (y: number) => `0 ${y / 3}px`;
	const scaleDown = (y: number, limit: number) => 1 - y / limit;

	useEffect(() => {
		setWindowHeight(window.innerHeight);

		const handleScroll = () => {
			setScrollY(window.scrollY);
		};

		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return {
		style: {
			translate: translateDown(scrollY),
			scale: scaleDown(scrollY, windowHeight * 10),
			opacity: scaleDown(scrollY, windowHeight * 0.8),
		},
		transition: "0.05s",
	};
}
