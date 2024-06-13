import { string } from "fp-ts";

export enum Gender {
  Male = "male",
  Female = "female",
}

export enum ActivityLevel {
  Sedentary = 1.2,
  LightlyActive = 1.375,
  ModeratelyActive = 1.55,
  VeryActive = 1.725,
  ExtraActive = 1.9,
}

export interface UserProfile {
  readonly height: number; // in centimeters
  readonly weight: number; // in kilograms
  readonly gender: Gender;
  readonly age: number; // in years
  readonly activityLevel: ActivityLevel;
}

export interface UserProfileStore {
  readonly userProfile: UserProfile;
  readonly userBMR: number;
  readonly userTDE: number;
  readonly setUserProfile: (userProfile: UserProfile) => void;
}

export const genderKeyGuard = (key: string | undefined): key is keyof typeof Gender => (key ?? '') in Gender

export const activityKeyGuard = (key: string | undefined): key is keyof typeof ActivityLevel => (key ?? '') in ActivityLevel

export const userProfileGuard = (userProfile: Readonly<Record<keyof UserProfile, string | number | undefined>>): userProfile is UserProfile => (
  typeof userProfile.height === 'number' &&
  typeof userProfile.weight === 'number' &&
  typeof userProfile.age === 'number' && 
  typeof userProfile.gender=== 'string' && Object.values(Gender).includes(userProfile.gender as Gender) &&
  typeof userProfile.activityLevel=== 'number' && Object.values(ActivityLevel).includes(userProfile.activityLevel as ActivityLevel) 
)