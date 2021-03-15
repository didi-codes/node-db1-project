const Account = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  const { name, budget} = req.body

  if(!name && !budget) {
    res.status(400).json({
      message: 'name and budget are required'
    })
  } else if(typeof name === 'string')
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  const { id } = req.params
  const idExists = await Account.getById(id)
  if(!idExists) {
    res.status(404).json({
      message: 'account not found'
    })
  } else {
    next()
  }
}
