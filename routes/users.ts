import express, { Express, Request, Response, NextFunction } from 'express';
import { getProducts, getProductsN, getProductsById, addProduct, updateProductDetails, deleteProductDetails, getRegisterPage, getLoginPage, getUpdatePage, getUpdatePageById, getAddProductPage, getProductToDelete, logout, registerUser, loginUser} from '../controllers/controller';
import {isLoggedIn} from '../middleware/authMiddleware'
import { upload, fileSizeLimitErrorHandler} from '../middleware/multer'
// const {upload, fileSizeLimitErrorHandler} = require('../middleware/multer')
// const app = require('../app');
// import app from '../app';

const router = express.Router();

/* GET users listing. */
router.get('/', isLoggedIn, getProducts)
router.get('/seeproducts', getProductsN)
router.get('/register', getRegisterPage)
router.get('/login', getLoginPage)
router.get('/products/delete/:id', isLoggedIn, getProductToDelete)
router.get('/update/', isLoggedIn, getUpdatePage)
router.get('/update/:id', isLoggedIn, getUpdatePageById)
router.get('/logout', logout)
router.get('/add', isLoggedIn, getAddProductPage)

router.post('/add', isLoggedIn, upload.single("image"),
fileSizeLimitErrorHandler, addProduct);

router.put('/update/', upload.single("image"),
fileSizeLimitErrorHandler, isLoggedIn, updateProductDetails);

router.post('/register', registerUser)

router.get('/:id', isLoggedIn, getProductsById);
router.delete('/delete/:id', isLoggedIn,deleteProductDetails);

router.post('/login', loginUser)

export default router;
