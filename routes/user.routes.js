import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.get("/", getUsers);
userRouter.get("/:id", authorize, getUser);
userRouter.post("/", (req, res) => {
  res.send({
    title: "CREATE all users",
  });
});
userRouter.put("/:id", (req, res) => {
  res.send({
    title: "Update user by id",
  });
});
userRouter.get("/:id", (req, res) => {
  res.send({
    title: "DELETE a user",
  });
});

export default userRouter;
