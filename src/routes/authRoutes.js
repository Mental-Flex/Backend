const { Router } = require('express');
const { getUser, getUserByName } = require('../handlers/authHandlers')
const { postUser } = require('../handlers/authHandlers');

const router = Router();

router.post('/', postUser)
router.get('/',getUser)
router.get('/username', getUserByName )



module.exports = router;