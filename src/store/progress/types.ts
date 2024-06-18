export enum Stage {
  anonymouse = 1,
  registered = 2,
  hasProfile = 3,
  hasGoal = 4,
}
export interface ProgressStore {
  readonly stage: Stage;
  readonly setStage: (stage: Stage) => void;
}
