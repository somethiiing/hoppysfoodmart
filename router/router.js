var router = express.Router();

//api specific routes
router.get('/', function(req, res) {
  //send html for admin
    res.send('Welcome to admin!');
});

exports.router = router;
