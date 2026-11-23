
export default {
  async fetch(request) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({
        status: "online",
        service: "Tatkal Health Monitor",
        timestamp: new Date().toISOString()
      }, {
        headers: {
          "Cache-Control": "no-store"
        }
      });
    }

    return new Response("Tatkal Health Monitor is running");
  }
};
