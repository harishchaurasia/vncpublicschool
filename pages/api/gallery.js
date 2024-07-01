import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const galleryDir = path.resolve('./public/gallery');
  const filenames = fs.readdirSync(galleryDir);

  res.status(200).json(filenames);
}
