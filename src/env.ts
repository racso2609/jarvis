import { z } from "zod";
import dotenv from "dotenv";
import process from "node:process";

dotenv.config();

export const env = z
  .object({
    SEARCH_API_KEY: z.string().min(1, "SEARCH_API_KEY is required")
  })
  .parse(process.env);
