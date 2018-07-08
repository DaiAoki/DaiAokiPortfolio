const functions = require('firebase-functions');
const axios     = require('axios');

exports.contact = functions.https.onRequest((req, res) => {

  const name    = req.body.name
  const email   = req.body.email
  const message = req.body.message
  return axios.post('', {
    text: `From ${name}( ${email} )\n${message}`,
  })
    .then(res => {
      res.status(200).end()
    }).catch(err => {
      res.status(200).end() //Slack APIのレスポンスが、成功していてもerrorで返ってくるため
    })
});
