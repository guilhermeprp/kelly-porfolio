import { getBase64Image } from "@/helpers/base64Image";
import Image from "next/image";

export default async function Background() {
	const getBlurDataUrl = await getBase64Image(process.env.HOST_NAME + '/background.jfif');

	return <Image
		src="/background.jfif"
		alt="background"
		className="fixed inset-0 z-0 opacity-40 invert min-h-dvh"
		width={2560}
		height={1080}
		placeholder="blur"
		blurDataURL={getBlurDataUrl}
		priority
	/>
}