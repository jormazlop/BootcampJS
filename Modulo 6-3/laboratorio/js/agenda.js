let mostrarAgenda = () => {
   for(persona of myTeam) {
      console.log('Disponibilidad de ' + persona.name);
      for(index = 0; index < 8; index++) {
         const isDisponible = persona.availability[index]? 'Si': 'No';
         console.log(WORK_HOURS[index] + " : " + isDisponible);
      }

   }
}

let generacionAleatoria = () => {
   for(persona of myTeam) {
      for(index = 0; index < 8; index++) {
         var random_boolean = Math.random() < 0.5;
         persona.availability[index] = random_boolean;
      }
   }
}

let buscarHuecoDisponible = () => {

   for(index = 0; index < 8; index++) {
      let disponible = true;
      for(persona of myTeam) {
         if(!persona.availability[index]) {
            disponible = false;
            break;
         }
      }
      if(disponible) {
         console.log('Hueco encontrado en el horario ' + WORK_HOURS[index]);
         return;
      }
   }

   console.log('Lo siento. No hay hueco disponible en el equipo.');

}