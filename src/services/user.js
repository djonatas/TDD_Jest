module.exports = (app) => {
  const findAll = async () => {
    return app.db('users').select();
  };

  const save = async (user) => {
    if (!user.name) {
      return { error: 'Nome é um atributo obrigatório' };
    }
    if (!user.email) {
      return { error: 'Email é um atributo obrigatório' };
    }
    return app.db('users').insert(user, '*');
  };

  return { findAll, save };
};
