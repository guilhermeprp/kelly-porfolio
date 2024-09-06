import { getBase64Image } from "@/helpers/base64Image";
import Image from "next/image";

export default async function Background() {
	const getBlurDataUrl = await getBase64Image(process.env.HOST_NAME + '/background.jpg');

	return <Image
		src="/background.jpg"
		alt="background"
		className="fixed inset-0 z-0 opacity-40 invert h-dvh w-dvw"
		width={1920}
		height={1080}
		blurDataURL={getBlurDataUrl}
		priority
	/>
}