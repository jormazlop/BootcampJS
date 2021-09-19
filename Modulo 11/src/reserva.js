class Reserva {
   constructor(tipoHabitacion, pax, noches, desayuno) {
      if(!tipoHabitacion || !pax || !noches) {
         this.tipoHabitacion = "standard",
         this.pax = 1,
         this.noches = 1,
         this.desayuno = false
      } else {
         this.tipoHabitacion = tipoHabitacion,
         this.pax = pax,
         this.noches = noches,
         this.desayuno = desayuno
      }
   }
}

export { Reserva };
