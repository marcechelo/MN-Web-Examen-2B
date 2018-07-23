/**
 * Usuario.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre: {
      type: 'string'
    },
    apellido: {
      type: 'string'
    },
    username: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    imagen: {
      type: 'string',
      required: true
    },

    actores:{
      collection: 'Actor',
      via:'usuario'
    },

    peticiones:{
      collection: 'Peticiones',
      via:'usuario'
    },

    peticionesConfirmar:{
      collection: 'Peticiones',
      via:'idUsuarioSolicitado'
    }

  },

};

