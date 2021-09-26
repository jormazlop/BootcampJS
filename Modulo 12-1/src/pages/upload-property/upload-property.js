import { formValidation, formValidation2 } from './upload-property.validations';
import { onUpdateField, onSubmitForm, onSetError } from '../../common/helpers';
import { getProvinceList, getEquipmentsList, getTypeList, getProperties } from '../property-list/property-list.api';
import { setOptions } from '../property-list/property-list.helpers';
import { insertProperty } from './upload-property.api';
import { setCheckboxList } from './upload-property.helpers';

let property = {
   id: '',
   title: '',
   notes: '',
   email: '',
   phone: '',
   price: 0,
   saleTypeIds: [],
   address: '',
   city: '',
   provinceId: '',
   squareMeter: 0,
   rooms: 0,
   bathrooms: 0,
   locationUrl: '',
   mainFeatures: [],
   equipmentIds: [],
   images: [],
};

onUpdateField('title', event => {
   const value = event.target.value;
   property = {
     ...property,
     title: value,
   };
   formValidation.validateField('title', property.title).then(result => {
     onSetError('title', result);
   });
});

onUpdateField('notes', event => {
   const value = event.target.value;
   property = {
     ...property,
     notes: value,
   };
   formValidation.validateField('notes', property.notes).then(result => {
     onSetError('notes', result);
   });
});

onUpdateField('email', event => {
   const value = event.target.value;
   property = {
     ...property,
     email: value,
   };
   formValidation.validateField('email', property.email).then(result => {
     onSetError('email', result);
   });
});

onUpdateField('phone', event => {
   const value = event.target.value;
   property = {
     ...property,
     phone: value,
   };
   formValidation.validateField('phone', property.phone).then(result => {
     onSetError('phone', result);
   });
});

onUpdateField('price', event => {
   const value = event.target.value;
   property = {
     ...property,
     price: value,
   };
   formValidation.validateField('price', property.price).then(result => {
     onSetError('price', result);
   });
});

onUpdateField('address', event => {
   const value = event.target.value;
   property = {
     ...property,
     address: value,
   };
   formValidation.validateField('address', property.address).then(result => {
     onSetError('address', result);
   });
});

onUpdateField('city', event => {
   const value = event.target.value;
   property = {
     ...property,
     city: value,
   };
   formValidation.validateField('city', property.city).then(result => {
     onSetError('city', result);
   });
});

onUpdateField('province', event => {
   const value = event.target.value;
   property = {
     ...property,
     provinceId: value,
   };
   formValidation.validateField('provinceId', property.provinceId).then(result => {
     onSetError('province', result);
   });
});

onUpdateField('squareMeter', event => {
   const value = event.target.value;
   property = {
     ...property,
     squareMeter: value,
   };
   formValidation.validateField('squareMeter', property.squareMeter).then(result => {
     onSetError('squareMeter', result);
   });
});

onUpdateField('rooms', event => {
   const value = event.target.value;
   property = {
     ...property,
     rooms: value,
   };
   formValidation.validateField('rooms', property.rooms).then(result => {
     onSetError('rooms', result);
   });
});

onUpdateField('bathrooms', event => {
   const value = event.target.value;
   property = {
     ...property,
     bathrooms: value,
   };
   formValidation.validateField('bathrooms', property.bathrooms).then(result => {
     onSetError('bathrooms', result);
   });
});

onUpdateField('locationUrl', event => {
   const value = event.target.value;
   property = {
     ...property,
     locationUrl: value,
   };
   formValidation.validateField('locationUrl', property.locationUrl).then(result => {
     onSetError('locationUrl', result);
   });
});

onSubmitForm('insert-feature-button', () => { 

   const newFeature = document.getElementById('newFeature').value;

   formValidation2.validateField('newFeature', newFeature).then(result => {

      if (result.succeeded) {  
         property.mainFeatures.push(newFeature);
         document.getElementById('mainFeatures').innerText = property.mainFeatures;
      } else {
         onSetError('newFeature', result);
      }
   })
});

onUpdateField('equipments', event => {
   const value = event.target.value;

   property.equipmentIds.includes(value)? property.equipmentIds.splice(property.equipmentIds.indexOf(value), 1) : property.equipmentIds.push(value);

   formValidation.validateField('equipmentIds', property.equipmentIds).then(result => {
     onSetError('equipments', result);
   });
});

onUpdateField('saleTypes', event => {
  const value = event.target.value;

  property.saleTypeIds.includes(value)? property.saleTypeIds.splice(property.saleTypeIds.indexOf(value), 1) : property.saleTypeIds.push(value);

  formValidation.validateField('saleTypeIds', property.saleTypeIds).then(result => {
    onSetError('saleTypes', result);
  });
});

onUpdateField('images', event => {
   const value = event.target.value;
   property = {
     ...property,
     images: value,
   };
   formValidation.validateField('images', property.images).then(result => {
     onSetError('images', result);
   });
});

getProvinceList().then(provinceList => {
   setOptions(provinceList, 'province', '¿Donde?');
});

getEquipmentsList().then(equipmentList => {
   setCheckboxList(equipmentList, 'equipments')
})

getTypeList().then(typeList => {
  setCheckboxList(typeList, 'saleTypes')
})

onSubmitForm('save-button', () => {

   formValidation.validateForm(property).then(results => {

      if (results.succeeded) {  
        document.getElementById('form-error').innerText = "Property saved!";
        document.getElementById('form-error').style = "color: green; text-align: center;";

        getProperties().then(propertiesList => {

          property.id = Number.parseInt(propertiesList[propertiesList.length-1].id) + 1;

          insertProperty(property);
        });
      } else {
         document.getElementById('form-error').innerText = "Invalid field!";
         document.getElementById('form-error').style = "color: red; text-align: center;";
      }
   })
});
