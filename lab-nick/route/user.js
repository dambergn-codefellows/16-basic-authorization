'use strict';

// router.post('siginup', express.json(), (req, res) => {

// });

router.get('/signin', (req, res) => {
  let [username, password] = getCreds(req, res);

  User.findOne({
    username
  }).then(user => {
    user.checkPassword(password).then(result => {
      if (result) {
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    });
  });
});

module.exports = router;