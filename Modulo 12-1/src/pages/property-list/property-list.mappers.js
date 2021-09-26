export const mapRoomListFromApiToViewModel = roomList => {
   return roomList.map(room => mapRoomFromApiToViewModel(room));
};
 
const mapRoomFromApiToViewModel = room => {
   return {
     id: room.id,
     name: `+${room.name}`
   };
};

export const mapBathRoomListFromApiToViewModel = bathRoomList => {
   return bathRoomList.map(bathroom => mapBathRoomFromApiToViewModel(bathroom));
};
 
const mapBathRoomFromApiToViewModel = bathroom => {
   return {
     id: bathroom.id,
     name: `+${bathroom.name}`
   };
};

export const mapPriceListFromApiToViewModel = priceList => {
   return priceList.map(price => mapPriceFromApiToViewModel(price));
};
 
const mapPriceFromApiToViewModel = price => {
   return {
     id: price.id,
     name: `${price.name} €`
   };
};

export const mapPropertyListFromApiToViewModel = propertiesList => {
   return propertiesList.map(property => mapPropertyFromApiToViewModel(property));
};

function formatNumber(num) {
   return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}
 
const mapPropertyFromApiToViewModel = property => {
   return {
     id: property.id,
     address: property.address,
     bathrooms: property.bathrooms,
     city: property.city,
     email: property.email,
     equipmentIds: property.equipmentIds,
     image: property.images[0],
     locationUrl: property.locationUrl,
     mainFeatures: property.mainFeatures,
     notes: property.notes,
     phone: property.phone,
     price: `${formatNumber(property.price)} €`,
     provinceId: property.provinceId,
     rooms: `${property.rooms} habitaciones`,
     saleTypeIds: property.saleTypeIds,
     squareMeter: `${property.squareMeter}m2`,
     title: property.title
   };
};