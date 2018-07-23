/**
 * Pelicula.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string',
      required: true
    },
    anioLanzamiento: {
      type: 'number',
      required: true
    },
    rating: {
      type: 'number',
      required: true
    },
    actoresPrincipales: {
      type: 'string',
      required: true
    },
    sinopsis: {
      type: 'string',
      required: true
    },
    imagen: {
      type: 'string',
      required: true
    },
    precio: {
      type: 'string',
      required: true
    },

    estado: {
      type: 'boolean',
      required: true
    },

    actor:{
      model:'Actor',
    },

    peticionSolicitada:{
      model: 'Peticiones'
    },

    peticionCambio:{
      model: 'Peticiones'
    }

  },

};

