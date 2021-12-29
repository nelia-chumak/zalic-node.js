export const run = (method) => (req, res) => {
  method(req)
    .then((result) => (result ? res.send(result) : res.sendStatus(204)))
    .catch((error) => res.status(error.status).send({ error: error.message }));
};
