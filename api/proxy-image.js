// api/proxy-image.js - Vercel Serverless Image Proxy
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { url } = req.query;

  if (!url) {
    return res.status(400).send('Missing url parameter');
  }

  try {
    const decodedUrl = decodeURIComponent(url);
    const response = await fetch(decodedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.ok) {
      return res.status(response.status).send(`Failed to fetch image: ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const buffer = await response.arrayBuffer();

    res.setHeader('Content-Type', contentType.includes('octet-stream') ? 'image/jpeg' : contentType);
    res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400');
    return res.status(200).send(Buffer.from(buffer));
  } catch (error) {
    return res.status(500).send(`Image proxy error: ${error.message}`);
  }
}
