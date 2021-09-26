import Axios from 'axios';

const urlProperties = `${process.env.BASE_API_URL}/properties`;

export const insertProperty = property =>
  Axios.post(`${urlProperties}`, property).then(response => {
    return response.data;
});