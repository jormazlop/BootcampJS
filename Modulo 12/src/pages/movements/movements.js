import { getMovementsList } from './movements.api';
import { addMovementRows } from './movements.helpers';
import { history } from '../../core/router';
import { mapMovementListFromApiToViewModel } from './movements.mappers';
import { getAccount } from '../account/account.api';

const params = history.getParams();

getMovementsList(params.id).then(movementList => {

   const viewModelAMovementList = mapMovementListFromApiToViewModel(movementList);

   addMovementRows(viewModelAMovementList);
});

if(params.id) {
   getAccount(params.id).then(apiAccount => {
      document.getElementById('balance').innerText = `${apiAccount.balance} €`;
      document.getElementById('alias').innerText = apiAccount.alias;
      document.getElementById('iban').innerText = apiAccount.iban;
   });
}