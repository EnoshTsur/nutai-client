import { create } from "zustand";
import { ActivityLevel, Gender, UserProfileStore } from "./types";

export const useUserProfileStore = create<UserProfileStore>((set) => ({
  userProfile: {
    age: 0,
    weight: 0,
    height: 0,
    gender: Gender.Male,
    activityLevel: ActivityLevel.LightlyActive,
    bmr: 0,
    tdee: 0,
  },
  setUserProfile: (profile) =>
    set({
      userProfile: profile,
    }),
}));
