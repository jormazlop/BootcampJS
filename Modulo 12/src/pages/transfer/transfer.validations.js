import { Validators, createFormValidation } from '@lemoncode/fonk';

const numberPattern = /^[\+\-]?\d*\.?\d+(?:[Ee][\+\-]?\d+)?$/;

const validationSchema = {
  field: {
    ibanDestino: [Validators.required],
    beneficiario: [Validators.required],
    importe: [Validators.required],
    concepto: [Validators.required],
    email: [Validators.required, Validators.email]
  },
};

export const formValidation = createFormValidation(validationSchema);