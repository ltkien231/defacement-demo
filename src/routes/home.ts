import { Router } from "express";
import pool from "../config/database";

const router = Router();

router.get("/hello", (req, res) => {
  res.send("Hello World");
});

router.get("/", (req, res) => {
  res.render("login", {
    title: "Login",
  });
});

router.get("/home", async (req, res) => {
  try {
    const [programs] = await pool.query("SELECT * FROM programs ORDER BY created_at DESC LIMIT 3");

    res.render("home", {
      title: "Welcome to University",
      description: "Empowering minds, shaping futures",
      programs: programs,
    });
  } catch (error) {
    console.error("Error fetching programs:", error);
    res.status(500).render("home", {
      title: "Welcome to University",
      description: "Empowering minds, shaping futures",
      programs: [],
      error: "Failed to load programs",
    });
  }
});

export default router;
