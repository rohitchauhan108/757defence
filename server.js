import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Delegate API routes directly to Next.js App Router route handlers
  app.post("/api/legal-advisor", async (req, res) => {
    try {
      const { POST } = await import("./src/app/api/legal-advisor/route.js");
      const fakeRequest = {
        json: async () => req.body,
      };
      const response = await POST(fakeRequest);
      const data = await response.json();
      res.status(response.status || 200).json(data);
    } catch (err) {
      console.error("Legal Advisor API Route Error:", err);
      res.status(500).json({ error: err.message });
    }
  });

  app.post("/api/case-evaluation", async (req, res) => {
    try {
      const { POST } = await import("./src/app/api/case-evaluation/route.js");
      const fakeRequest = {
        json: async () => req.body,
      };
      const response = await POST(fakeRequest);
      const data = await response.json();
      res.status(response.status || 200).json(data);
    } catch (err) {
      console.error("Case Evaluation API Route Error:", err);
      res.status(500).json({ error: err.message });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`LawOne Next.js server listening on http://localhost:${PORT}`);
  });
}

startServer();
