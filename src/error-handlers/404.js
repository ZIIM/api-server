function notFound(req, res, next){
  res.status(404).send('Invalid 404');
}

module.exports = notFound;