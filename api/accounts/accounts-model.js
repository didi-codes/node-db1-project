const db = require('../../data/db-config');

const getAll = () => {
  return db('accounts');
};

const getById = (id) => {
  return db('accounts').where('id', id).first();
};

const create = async (account) => {
  const [id] = await db('accounts').insert(account, ['id', 'name', 'budget']);
  return getById(id);
};

const updateById = async (id, account) => {
  await db('posts').where('id', id).update(account);
  return getById(id);
};

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
