export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Método não permitido");
    return;
  }
  const { prompt } = req.body;
  const apiKey = "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";

  const response = await fetch("https://api.perplexity.ai/v1/answer", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "sonar-medium-online",
      messages: [{ role: "user", content: prompt }]
    })
  });
  const data = await response.json();
  res.status(200).json(data);
}
