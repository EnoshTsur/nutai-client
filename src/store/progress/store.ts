import { create } from "zustand";
import { ProgressStore, Stage } from "./types";

export const useProgressStore = create<ProgressStore>((set) => ({
    stage: Stage.anonymouse,
    setStage: (stage) => set({ stage })
})) 