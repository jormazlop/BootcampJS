import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors } from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import { history, routes } from '../../core/router';
import swal from 'sweetalert';

let login = {
  user: '',
  password: '',
};

onUpdateField('user', event => {

  const usuario = document.getElementById('user').value;

  login = {
    ...login,
    user: usuario,
  };

  formValidation.validateField('user', login.user).then(result => {
    onSetError('user', result);
  });
});

onUpdateField('password', event => {

  const pass = document.getElementById('password').value;

  login = {
    ...login,
    password: pass,
  };

  formValidation.validateField('password', login.password).then(result => {
    onSetError('password', result);
  });
});

const onNavigate = isValid => {
  if (isValid) {
    history.push(routes.accountList);
  } else {
    swal( '¡Error!' ,  'Usuario y/o contraseña no válidos' ,  "error" )
  }
};

onSubmitForm('login-button', () => {
  formValidation.validateForm(login).then(result => {
    onSetFormErrors(result);
    if (result.succeeded) {
      isValidLogin(login).then(isValid => {
        onNavigate(isValid);
      });
    }
  });
});
