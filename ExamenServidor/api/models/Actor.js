/**
 * Actor.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombres: {
      type: 'string',
      required: true
    },
    apellidos: {
      type: 'string',
      required: true
    },
    fechaNacimiento: {
      type: 'string',
      required: true
    },
    numeroPeliculas: {
      type: 'number',
      required: true
    },
    retirado: {
      type: 'boolean',
      required: true
    },
    foto: {
      type: 'string',
      required: true
    },

    peliculas:{
      collection: 'Pelicula',
      via:'actor'
    },

    usuario:{
      model:'Usuario'
    }

  },

};

