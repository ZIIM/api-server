function serverError(err, req, res, next){
  console.log('Server Error',err);
  res.status(500).send('ERROR 500');
}

module.exports = serverError;