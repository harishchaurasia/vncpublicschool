// pages/api/images.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const imagesDir = path.resolve('./public/images');
  const filenames = fs.readdirSync(imagesDir);

  res.status(200).json(filenames);
}
