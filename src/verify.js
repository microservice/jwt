const jwt = require('jsonwebtoken')

module.exports = (token, secret) => {
  return new Promise(resolve => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        resolve(JSON.stringify({ err }))
      } else {
        resolve(JSON.stringify(decoded))
      }
    })
  })
}
