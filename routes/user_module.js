const express = require('express');
const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now().toString() + file.originalname);
    }
})

const upload = multer({ storage });

const user_controller = require('../controllers/user_controller');

router.get('/logout', user_controller.logout);

router.get('/dados', user_controller.dados);

router.get('/anuncios', user_controller.anuncios);

router.post('/atualizar', upload.single('foto'), user_controller.atualizar);

router.post('/remover', user_controller.remover);

router.post('/senha', user_controller.senha);

module.exports = router;