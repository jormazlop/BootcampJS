import Axios from 'axios';

const urlTypes = `${process.env.BASE_API_URL}/sale-types`;
const urlEquipments = `${process.env.BASE_API_URL}/equipments`;
const urlProvinces = `${process.env.BASE_API_URL}/provinces`;
const urlRooms = `${process.env.BASE_API_URL}/rooms`;
const urlBathrooms = `${process.env.BASE_API_URL}/bathrooms`;
const urlPrices = `${process.env.BASE_API_URL}/prices`;
const urlProperties = `${process.env.BASE_API_URL}/properties`;
const urlQuestions = `${process.env.BASE_API_URL}/questions`;

export const getTypeList = () =>
  Axios.get(urlTypes).then(response => {
    return response.data;
});

export const getEquipmentsList = () => 
  Axios.get(urlEquipments).then(response => {
    return response.data;
});

export const getProvinceList = () =>
  Axios.get(urlProvinces).then(response => {
    return response.data;
});

export const getRoomList = () =>
  Axios.get(urlRooms).then(response => {
    return response.data;
});

export const getBathRoomList = () =>
  Axios.get(urlBathrooms).then(response => {
    return response.data;
});

export const getPrices = () =>
  Axios.get(urlPrices).then(response => {
    return response.data;
});

export const getProperties = id =>
  Axios.get(urlProperties).then(response => {
    return id? response.data[id - 1]: response.data;
});

export const insertQuestion = question =>
  Axios.post(`${urlQuestions}`, question).then(response => {
    return response.data;
});