import fs from 'node:fs/promises';
import path from 'node:path';

export async function getLocalData(filePath: string) {
	const fullFilePath = path.join(process.cwd(), filePath);
	const jsonData = await fs.readFile(fullFilePath);
	const data = JSON.parse(jsonData.toString());

	return data;
}