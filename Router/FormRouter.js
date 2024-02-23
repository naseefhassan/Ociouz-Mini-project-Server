const express = require('express');
const router = express.Router();
const { postForm,userList,editdata ,deleteUser} = require('../Controller/FormController');

router.post('/postForm', postForm);
router.get('/userList',userList)

router.patch('/editdata/:userId',editdata)
router.delete('/deleteUser/:userId',deleteUser)


module.exports = router;
