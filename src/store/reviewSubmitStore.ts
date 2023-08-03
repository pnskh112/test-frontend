import { defineStore } from "pinia";

import { initializeStores } from "@/application/authApplication";
export const useReviewSubmitStore = defineStore("reviewSubmitStore", () => {
  const submit = async () => {
    await initializeStores();
  };

  return {
    submit,
  };
});
