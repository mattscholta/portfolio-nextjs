import { useState } from 'react';

type FormInputOnChange = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;
interface FormInput {
  onChange: FormInputOnChange;
  setValue: (val: string) => void;
  value: string;
}

/**
 * @name useFormInput
 * @description A convenience hook for working with text inputs
 */
const useFormInput = (initialValue = ''): FormInput => {
  // Hooks
  const [value, setValue] = useState(initialValue);

  // Handlers
  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
  };

  return { onChange, setValue, value };
};

export { useFormInput };
export type { FormInputOnChange, FormInput };
