import { Router } from "express";

const router = Router();

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Login",
    error: null,
    username: null,
    password: null,
  });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.render("login", {
      title: "Login",
      error: "Please fix the errors below",
      username: username || "",
      password: password || "",
    });
  }

  // Here you would typically validate credentials against a database
  // For demo purposes, we'll just redirect to home
  res.redirect("/home");
});

export default router;
