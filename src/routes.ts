import express, { Request, Response, Router } from "express";
import axios, { AxiosResponse } from "axios";

const router: Router = express.Router();

router.get("/", (_, response: Response) => {
  response.status(200).json({ status: "success" });
});

// router.get("/users", async (req: Request, res: Response) => {
//   const fetchedData: AxiosResponse = await axios.get(
//     "https://jsonplaceholder.typicode.com/users"
//   );
//   const users = fetchedData.data;
//   res.status(200).json({ users });
// });

router.get("/users/:id?", async (req: Request, res: Response) => {
  if (req.params.id) {
    const id: string = req.params.id;
    const fetchedData: AxiosResponse = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = fetchedData.data;
    res.status(200).json({ user });
  } else {
    const fetchedData: AxiosResponse = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = fetchedData.data;
    res.status(200).json({ users });
  }
});

router.post("/users", (req, res) => {
  res.status(201).json({
    status: "created",
  });
});

export default router;
