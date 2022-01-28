module.exports = (app) => {
  const findAll = async (req, res) => {
    const sqlResponse = await app.services.user.findAll();
    res.status(200).send(sqlResponse);
  };

  const create = async (req, res) => {
    const sqlResponse = await app.services.user.save(req.body);

    if (sqlResponse.error) {
      return res.status(400).json(sqlResponse);
    }

    return res.status(201).json(sqlResponse);
  };

  return { findAll, create };
};
