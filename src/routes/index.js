import { Router } from "express";
const router = Router();

router.get("/", (req, res) =>
  res.render("index.ejs", { title: "prueba index.ejs" })
);

router.get("/abaut", (req, res) =>
  res.render("abaut.ejs", { title: "prueba abaut.ejs" })
);

router.get("/contact", (req, res) =>
  res.render("contact.ejs", { title: "prueba contact.ejs" })
);

export default router;
