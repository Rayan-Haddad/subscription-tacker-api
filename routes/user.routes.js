import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  res.send({
    title: "GET all users",
  });
});
userRouter.get("/:id", (req, res) => {
  res.send({
    title: "GET user's details",
  });
});
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
