/**
 * Peticiones.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    /*idUsuarioSolicitado: {
      type: 'number',
      required: true
    },
    idPeliculaSolicitada: {
      type: 'number',
      required: true
    },
    idPeliculaCambio: {
      type: 'number',
      required: true
    },*/
    estado: {
      type: 'number',
      required: true
    },

    idUsuarioSolicitado: {
      model: 'Usuario'
    },

    usuario:{
      model: 'Usuario'
    },

    idPeliculaSolicitada: {
      collection: 'Pelicula',
      via: 'peticionSolicitada'
    },
    idPeliculaCambio: {
      collection: 'Pelicula',
      via: 'peticionCambio'
    },

  },

};

