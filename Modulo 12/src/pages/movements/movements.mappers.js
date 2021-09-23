export const mapMovementListFromApiToViewModel = movementList => {
   return movementList.map(movement => mapMovementFromApiToViewModel(movement));
 };
 
 const mapMovementFromApiToViewModel = movement => {
   return {
     accountId: movement.accountId,
     amount: `${movement.amount} €`,
     balance: `${movement.balance} €`,
     description: movement.description,
     id: movement.id,
     realTransaction: new Date(movement.realTransaction).toLocaleDateString(),
     transaction: new Date(movement.transaction).toLocaleDateString()
   };
 };
 