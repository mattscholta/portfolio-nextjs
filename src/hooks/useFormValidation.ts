import { useEffect, useState } from 'react';

/**
 * @name useFormValidation
 * @description Simple hook that takes a form element as a ref and returns
 * the validity using HTML validation and the rules on the form inputs
 */
const useFormValidation = (
  formRef: React.RefObject<HTMLFormElement>,
  dependencies: unknown[]
): boolean => {
  // Hooks
  const [valid, setValid] = useState(false);

  // Setup
  const { current } = formRef;

  // Life Cycle
  useEffect(() => {
    if (!current) return;

    setValid(current.checkValidity());
  }, dependencies);

  return valid;
};

export { useFormValidation };
