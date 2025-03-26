import { Router } from "express";
import pool from "../config/database";

const router = Router();

// List all student profiles
router.get("/", async (req, res) => {
  try {
    const [students] = await pool.query("SELECT * FROM students ORDER BY created_at DESC");
    res.render("students/list", {
      title: "Student Profiles",
      students: students,
    });
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).render("students/list", {
      title: "Student Profiles",
      students: [],
      error: "Failed to load student profiles",
    });
  }
});

// Show create profile form
router.get("/create", (req, res) => {
  res.render("students/create", {
    title: "Create Student Profile",
    error: null,
  });
});

// Handle profile creation
router.post("/create", async (req, res) => {
  const { name, description, image_url } = req.body;

  if (!name || !description || !image_url) {
    return res.render("students/create", {
      title: "Create Student Profile",
      error: "All fields are required",
      formData: req.body,
    });
  }

  try {
    await pool.query("INSERT INTO students (name, description, image_url) VALUES (?, ?, ?)", [
      name,
      description,
      image_url,
    ]);
    res.redirect("/students");
  } catch (error) {
    console.error("Error creating student profile:", error);
    res.render("students/create", {
      title: "Create Student Profile",
      error: "Failed to create profile",
      formData: req.body,
    });
  }
});

export default router;
