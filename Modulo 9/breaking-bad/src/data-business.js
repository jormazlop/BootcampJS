let getCharacters = () => {

   return axios.get("https://www.breakingbadapi.com/api/characters")
       .catch(error => console.log("Se ha producido un error"));

}

export { getCharacters };