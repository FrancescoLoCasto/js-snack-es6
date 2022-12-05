/**
 * 
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.

 */


   const cars = [
      {
          marca : 'Ferrari',
          modello : '599 GTB',
          alimentazione : 'benzina'
      },

      {
         marca : 'Fiat',
         modello : 'Panda',
         alimentazione : 'metano'
      },

      {
      marca : 'Lamborghini',
      modello : 'Urus',
      alimentazione : 'benzina'
      }, 

      {
         marca : 'Tesla',
         modello : 'Model S',
         alimentazione : 'elettrico'
      },

      {
         marca : 'Peugeot',
         modello : '308',
         alimentazione : 'diesel'
      },

      {
         marca : 'Dodge',
         modello : 'Challenger',
         alimentazione : 'benzina'
      },

      {
         marca : 'Bmw',
         modello : '118i',
         alimentazione : 'benzina'
      },

      {
         marca : 'Audi',
         modello : 'RS6',
         alimentazione : 'benzina'
      },

      {
         marca : 'Audi',
         modello : 'RS6',
         alimentazione : 'benzina'
      },

      {
         marca : 'Volskwagen',
         modello : 'Golf',
         alimentazione : 'diesel'
      },

      
      {
         marca : 'Opel',
         modello : 'Corsa',
         alimentazione : 'diesel'
      }

   ]

   
   const dieselCars = [], benzinaCars = [], metanoCars = [], elettricoCars = []

   for (let i = 0; i < cars.length; i++) {
         switch(cars[i].alimentazione){
            case 'benzina':
               benzinaCars.push(cars[i])
               break
            case 'diesel':
               dieselCars.push(cars[i])
               break
            case 'metano':
               dieselCars.push(cars[i])
               break
            case 'elettrico':
               dieselCars.push(cars[i])
               break
         }
  }

   console.log('benzina',benzinaCars);
   console.log('diesel',dieselCars);
   console.log('other',metanoCars)
   console.log('other',elettricoCars)
