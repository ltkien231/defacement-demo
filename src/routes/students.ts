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
  let image = image_url;
  if (!image_url) {
    image =
      "https://images.unsplash.com/photo-1742576948659-3c630862a38d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
  if (!name || !description) {
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
      image,
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
