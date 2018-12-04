const jwt = require('jsonwebtoken')

module.exports = (token, secret) => {
  return new Promise(resolve => {
    jwt.verify(token, secret, (err, decoded) => {
      const result = err ? { err } : decoded
      resolve(JSON.stringify(result))
    })
  })
}
