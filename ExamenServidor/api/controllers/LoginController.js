/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  helloworld: function (req, res) {
        return res.json({hola:'Hi there!'});
  }

};

