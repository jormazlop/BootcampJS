import { history } from '../../core/router';
import { getAccountList } from '../account-list/account-list.api';
import { setAccountOptions } from './transfer.helpers';
import { onUpdateField, onSubmitForm, onSetError } from '../../common/helpers';
import { formValidation } from './transfer.validations';
import { insertTransfer } from './transfer.api';

const params = history.getParams();
const isEditMode = Boolean(params.id);

if (isEditMode) {
   getAccountList().then(apiAccount => {
      setAccountOptions(apiAccount, params.id);
   });
} else {
   getAccountList().then(apiAccount => {
      setAccountOptions(apiAccount);
   });
}

let transfer = {
   ibanDestino: '',
   beneficiario: '',
   importe: '',
   concepto: '',
   email: ''
};

onUpdateField('iban', event => {
   const value = event.target.value;
   transfer = {
     ...transfer,
     ibanDestino: value,
   };

   formValidation.validateField('ibanDestino', transfer.ibanDestino).then(result => {
     onSetError('iban', result);
   });
});

onUpdateField('name', event => {
   const value = event.target.value;
   transfer = {
     ...transfer,
     beneficiario: value,
   };
 
   formValidation.validateField('beneficiario', transfer.beneficiario).then(result => {
     onSetError('name', result);
   });
});

onUpdateField('amount', event => {
   const value = event.target.value;
   transfer = {
     ...transfer,
     importe: value,
   };
 
   formValidation.validateField('importe', transfer.importe).then(result => {
     onSetError('amount', result);
   });
});

onUpdateField('concept', event => {
   const value = event.target.value;
   transfer = {
     ...transfer,
     concepto: value,
   };
 
   formValidation.validateField('concept', transfer.concepto).then(result => {
     onSetError('concept', result);
   });
});

onUpdateField('email', event => {
   const value = event.target.value;
   transfer = {
     ...transfer,
     email: value,
   };
 
   formValidation.validateField('email', transfer.email).then(result => {
     onSetError('email', result);
   });
});

onSubmitForm('transfer-button', () => {
   formValidation.validateForm(transfer).then(results => {
     if (results.succeeded) {  
         document.getElementById('form-error').innerText = "Transfer saved!";
         document.getElementById('form-error').style = "color: green";
         insertTransfer(transfer);
     } else {
         document.getElementById('form-error').innerText = "Invalid field!";
     }
   });
 });