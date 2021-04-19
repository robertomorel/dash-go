import { forwardRef, ForwardRefRenderFunction } from 'react';
import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormErrorMessage
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

type InputProps = {
  name: string;
  label?: string;
  error?: FieldError;
} & ChakraInputProps;

/**
 *
 * FormControl
 *   Div do Chakra para melhorar a dinâmica entre inputs
 */
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        type="email"
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900'
        }}
        size="lg" // large
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
