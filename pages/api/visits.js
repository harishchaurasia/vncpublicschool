import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), './components/visit-count.txt');

export default async (req, res) => {
  try {
    // Read the current visit count from the file
    let count = 0;
    try {
      const data = await fs.readFile(filePath, 'utf8');
      count = parseInt(data, 10);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }

    // Increment the visit count
    count += 1;

    // Write the new visit count to the file
    await fs.writeFile(filePath, count.toString(), 'utf8');

    // Return the new visit count
    res.status(200).json({ visits: count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update visit count' });
  }
};
