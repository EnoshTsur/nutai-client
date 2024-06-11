import { create } from "zustand";
import { ActivityLevel, Gender, UserProfile, UserProfileStore } from "./types";

// Calculate Basal Metabolic Rate (BMR) using the Mifflin-St Jeor Equation
const calculateBMR = (profile: UserProfile): number => {
  let bmr: number;

  if (profile.gender === Gender.Male) {
    bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age + 5;
  } else {
    bmr = 10 * profile.weight + 6.25 * profile.height - 5 * profile.age - 161;
  }

  return bmr;
};

// Calculate Total Daily Energy Expenditure (TDEE) based on BMR and activity level
const calculateTDEE = (profile: UserProfile): number => {
  const bmr = calculateBMR(profile);
  const tdee = bmr * profile.activityLevel;
  return tdee;
};

export const useUserProfileStore = create<UserProfileStore>((set) => ({
  userProfile: {
    age: 0,
    weight: 0,
    height: 0,
    gender: Gender.Male,
    activityLevel: ActivityLevel.LightlyActive,
  },
  userBMR: 0,
  userTDE: 0,
  setUserProfile: (profile) =>
    set({
      userProfile: profile,
      userBMR: calculateBMR(profile),
      userTDE: calculateTDEE(profile),
    }),
}));
