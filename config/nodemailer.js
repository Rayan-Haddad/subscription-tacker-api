import nodemailer from "nodemailer";
import { EMAIL, EMAIL_PASS } from "./env.js";

const email = EMAIL;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: EMAIL_PASS,
  },
});
