export default {
  async fetch(request, env) {
    const url = "https://api-inference.huggingface.co/models/Xintao/GFPGAN";
    
    const headers = {
      "Authorization": `Bearer ${env.HF_API_KEY}`,
      "Content-Type": "application/json"
    };
    
    const body = JSON.stringify({ inputs: "https://your-image-url.com/image.jpg" });

    const response = await fetch(url, { method: "POST", headers, body });

    return new Response(await response.text(), {
      headers: { "Content-Type": "application/json" }
    });
  }
};