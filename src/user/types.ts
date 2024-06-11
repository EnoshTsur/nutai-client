export enum Gender {
    Male = "male",
    Female = "female"
}

export enum ActivityLevel {
    Sedentary = 1.2,
    LightlyActive = 1.375,
    ModeratelyActive = 1.55,
    VeryActive = 1.725,
    ExtraActive = 1.9
}

export interface UserProfile {
    readonly height: number; // in centimeters
    readonly weight: number; // in kilograms
    readonly gender: Gender;
    readonly age: number; // in years
    readonly activityLevel: ActivityLevel;
}

export interface UserProfileStore {
    readonly userProfile: UserProfile
    readonly userBMR: number
    readonly userTDE: number
    readonly setUserProfile: (userProfile: UserProfile) => void
}

