import { getTypeList, getProvinceList, getRoomList, getBathRoomList, getPrices, getProperties } from './property-list.api';
import { setOptions, addPropertyRows, clearPropertyRows } from './property-list.helpers';
import { mapRoomListFromApiToViewModel, mapBathRoomListFromApiToViewModel, mapPriceListFromApiToViewModel, mapPropertyListFromApiToViewModel } from './property-list.mappers';
import { onSubmitForm } from '../../common/helpers';

let listPrices;

getTypeList().then(typeList => {
   setOptions(typeList, 'select-sale-type', '¿Que venta?');
});

getProvinceList().then(provinceList => {
   setOptions(provinceList, 'select-province', '¿Donde?');
});

getRoomList().then(roomList => {
   setOptions(mapRoomListFromApiToViewModel(roomList), 'select-room', '¿Habitaciones?');
});

getBathRoomList().then(bathRoomList => {
   setOptions(mapBathRoomListFromApiToViewModel(bathRoomList), 'select-bathroom', '¿Cuartos de baño?');
});

getPrices().then(pricesList => {
   listPrices = pricesList;
   setOptions(mapPriceListFromApiToViewModel(pricesList), 'select-min-price', 'Min (EUR)');
   setOptions(mapPriceListFromApiToViewModel(pricesList), 'select-max-price', 'Max (EUR)');
});

onSubmitForm('search-button', () => {
   getProperties().then(propertiesList => {

      clearPropertyRows();

      const type = document.getElementById('select-sale-type').value;
      const province = document.getElementById('select-province').value;
      const room = document.getElementById('select-room').value;
      const bathroom = document.getElementById('select-bathroom').value;
      const minPrice = document.getElementById('select-min-price').value;
      const maxPrice = document.getElementById('select-max-price').value;

      let houseList = propertiesList;
      
      console.log(houseList);
      if(type) {
         houseList = houseList.filter(house => house.saleTypeIds.includes(type));
      }

      console.log(houseList);

      if(province) {
         houseList = houseList.filter(house => house.provinceId == province);
      }

      if(room) {
         houseList = houseList.filter(house => house.rooms >= room);
      }

      if(bathroom) {
         houseList = houseList.filter(house => house.bathrooms >= bathroom);
      }

      if(minPrice) {
         houseList = houseList.filter(house => house.price >= listPrices[minPrice].name);
      }

      if(maxPrice) {
         houseList = houseList.filter(house => house.price <= listPrices[maxPrice].name);
      }

      addPropertyRows(mapPropertyListFromApiToViewModel(houseList));
   })
});
