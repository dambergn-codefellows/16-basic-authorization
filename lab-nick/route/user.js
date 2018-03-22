

router.post('siginup', express.json(), (res, req) => {

})

router.get('/signin', (req, res) => {
    let [username, passord] = getCreds(req, res);

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