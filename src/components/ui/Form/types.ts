export type InputValueType = string | number | Readonly<string[]> | undefined;

export type FormFieldType = "input" | "select";

export interface OptionValue {
  readonly value: string;
  readonly label: string;
}

export interface InputField {
  readonly formType: "input";
  readonly inputType: "text" | "number";
  readonly value?: InputValueType;
  readonly label?: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly errorMessage?: string;
  readonly success?: boolean;
  readonly name: string
}

export interface SelectField {
  readonly formType: "select";
  readonly options: ReadonlyArray<string>;
  readonly value?: string;
  readonly label?: string;
  readonly onChange: (option: string) => void;
  readonly success?: boolean;
}

export const inputGuard = (formField: {
  formType: string;
}): formField is InputField => formField.formType === "input";
export const selectGuard = (formField: {
  formType: string;
}): formField is SelectField =>
  formField.formType === "select";
