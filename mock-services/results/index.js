module.exports = {
  dataLoaded: function(req, res) {
    res.json({ dataLoaded: parseInt(req.query.count) === 3 });
  }
}
