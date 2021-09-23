import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/movements`;

export const getMovementsList = id =>
  Axios.get(url).then(response => {
    return id ? response.data.filter(movement => movement.accountId == id) : response.data;
  });
