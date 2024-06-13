import styled from "styled-components";
import {
  InputField,
  inputGuard,
  SelectField,
  selectGuard,
} from "./types";
import Input from "./Input/Input";
import Select from "./Select/Select";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 2rem;
`;

interface FormProps {
  readonly formFields: ReadonlyArray<InputField | SelectField>;
}

const Form = ({ formFields }: FormProps) => {
  return (
    <Container>
      {formFields.map((field, index) => {
        if (inputGuard(field)) {
          return (
            <Input
              key={`input ${index}`}
              value={field.value}
              onChange={field.onChange}
              placeholder={field.label}
              type={field.inputType}
              error={field.errorMessage}
              success={field.success}
              name={field.name}
            />
          );
        } else if (selectGuard(field)) {
          return (
            <Select
              key={`select ${index}`}
              options={field.options}
              onChange={field.onChange}
              value={field.value}
              label={field.label}
              success={field.success}
            />
          );
        } else {
          return <></>;
        }
      })}
    </Container>
  );
};

export default Form;
