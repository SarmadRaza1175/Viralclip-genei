export default async function handler(req, res) {
  const { url } = req.body;
  // Simulate AI response
  const caption = `Viral moment extracted from: ${url}`;
  res.status(200).json({ caption });
}