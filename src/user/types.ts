export enum Gender {
  Male = "male",
  Female = "female",
}

export const isGenderKey = (key: string): key is keyof typeof Gender =>
  Object.keys(Gender).some((k) => k === key);

export const isActivityLevelKey = (
  key: string
): key is keyof typeof ActivityLevel =>
  Object.keys(ActivityLevel).some((k) => k === key);

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
  readonly bmr: number;
  readonly tdee: number;
}

export type UserBasicProfile = Pick<
  UserProfile,
  "age" | "height" | "weight" | "activityLevel" | "gender"
>;

export interface UserProfileStore {
  readonly userProfile: UserProfile;
  readonly setUserProfile: (userProfile: UserProfile) => void;
}

export const genderKeyGuard = (
  key: string | undefined
): key is keyof typeof Gender => (key ?? "") in Gender;

export const activityKeyGuard = (
  key: string | undefined
): key is keyof typeof ActivityLevel => (key ?? "") in ActivityLevel;
