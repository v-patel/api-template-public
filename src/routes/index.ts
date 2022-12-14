import express from "express";
import { default as disableBrowserCache } from "nocache";
import { router as userRoute } from "./user";

export const router = express.Router();

// disable browser cache for all requests
router.use(disableBrowserCache());

// human-readable API index
router.get("/", (req: express.Request, res: express.Response) => {
  res.send("Example API");
});

// API endpoints
router.use("/user", userRoute);

router.use((req: express.Request, res: express.Response) => {
  res.status(404).send({ message: "Endpoint not found" });
});
