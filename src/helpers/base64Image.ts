import fs from 'node:fs/promises';
import { getPlaiceholder } from "plaiceholder";

export async function getBase64Image(imageUrl: string): Promise<string | undefined> {
	try {
		const res = await fetch(imageUrl);

		if (!res.ok) {
			throw new Error(`Failed to fetch image: ${res.statusText} (${res.status})`);
		}

		const buffer = await res.arrayBuffer();

		const { base64 } = await getPlaiceholder(Buffer.from(buffer));

		return base64;
	} catch (err) {
		if (err instanceof Error) console.error(err.stack);
	}
}


export async function getLocalBase64Image(imagePath: string) {
	try {
		const file = await fs.readFile(imagePath);

		const { base64 } = await getPlaiceholder(file);

		console.log(base64);

		return base64;
	} catch (err) {
		err;
	}
}