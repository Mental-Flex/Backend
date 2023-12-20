const { Router } = require('express');
const { getUser } = require('../handlers/authHandlers')
const { postUser } = require('../handlers/authHandlers');

const router = Router();

router.post('/', postUser)
router.get('/',getUser)


module.exports = router;