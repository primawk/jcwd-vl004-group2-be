const { messageController } = require('../controllers');
const router = require('express').Router();

router.post('/user/:id', messageController.getUserMsg);
router.post('/admin', messageController.getAdminMsg);
router.patch('/read/:id', messageController.read);
router.patch('/unnew/:id', messageController.unnew);
router.patch('/unnew-admin', messageController.unnewAdmin);
router.post('/delete-user/:id', messageController.deleteUser);
router.post('/delete-admin/:id', messageController.deleteAdmin);
router.post('/new', messageController.create);

module.exports = router;
