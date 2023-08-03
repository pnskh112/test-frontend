import axios from "axios";

import { TIME_ZONE } from "@/utils/date";

// TODO: 共通ErrorHandling
export const coreApi = axios.create({
  baseURL: "/api",
  headers: {
    "X-Time-Zone": `${TIME_ZONE}`,
  },
});
