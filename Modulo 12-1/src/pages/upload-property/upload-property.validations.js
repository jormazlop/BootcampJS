import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    title: [Validators.required],
    notes: [Validators.required],
    email: [Validators.email],
    phone: [Validators.required],
    price: [Validators.required],
    saleTypeIds: [Validators.required],
    address: [Validators.required],
    city: [Validators.required],
    provinceId: [Validators.required],
    squareMeter: [Validators.required],
    rooms: [Validators.required],
    bathrooms: [Validators.required],
    locationUrl: [Validators.required],
    mainFeatures: [Validators.required],
    equipmentIds: [Validators.required],
    images: [Validators.required]
  },
};

const validationSchema2 = {
  field: {
    newFeature: [Validators.required]
  }
};

export const formValidation = createFormValidation(validationSchema);
export const formValidation2 = createFormValidation(validationSchema2);