import { history } from '../../core/router';
import { getProperties, getEquipmentsList, insertQuestion } from '../property-list/property-list.api';
import { setPropertyValues } from './property-detail.helpers';
import { mapPropertyFromApiToViewModel } from './property-detail.mappers'; 
import { formValidation } from './property-detail.validations';
import { onUpdateField, onSubmitForm, onSetError } from '../../common/helpers';

const params = history.getParams();

getEquipmentsList().then(equipmentList => {

   getProperties(params.id).then(property => {

      setPropertyValues(mapPropertyFromApiToViewModel(property, equipmentList));

   });
});

let question = {
   email: '',
   message: ''
};

onUpdateField('email', event => {
   const value = event.target.value;
   question = {
     ...question,
     email: value,
   };

   formValidation.validateField('email', question.email).then(result => {
     onSetError('email', result);
   });
});

onUpdateField('message', event => {
   const value = event.target.value;
   question = {
     ...question,
     message: value,
   };

   formValidation.validateField('message', question.message).then(result => {
     onSetError('message', result);
   });
});


onSubmitForm('contact-button', () => {

   formValidation.validateForm(question).then(results => {
      if (results.succeeded) {  
         document.getElementById('form-error').innerText = "Question sent!";
         document.getElementById('form-error').style = "color: green; text-align: center;";
         insertQuestion(question);
      } else {
         document.getElementById('form-error').innerText = "Invalid field!";
         document.getElementById('form-error').style = "color: red; text-align: center;";
      }
   })
});
