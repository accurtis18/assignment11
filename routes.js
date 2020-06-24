exports.route = (app) => {
    app.get('api/notes', function(req, res) {
        res.send("Got Notes");
      });
}