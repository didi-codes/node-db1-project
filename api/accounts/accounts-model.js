const db = require('../../data/db-config');

const getAll = () => {
  return deleteById('accounts');
};

const getById = (id) => {
  return deleteById('accounts').where('id', id).first();
};

const create = async account => {
  // DO YOUR MAGIC
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = async id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
