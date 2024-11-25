const express = require('express');
const {
  getAllCategories,
  addCategory,
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getAllMaterials,
  addMaterial,
  assignMaterialToProduct
} = require('../Controller/inventryController');

const router = express.Router();

router.get('/categories', getAllCategories);
router.post('/categories', addCategory);
router.get('/products', getAllProducts);
router.post('/products', addProduct);
router.put('/products', updateProduct);
router.delete('/products/:id', deleteProduct);
router.get('/materials', getAllMaterials);
router.post('/materials', addMaterial);
router.post('/assign-material', assignMaterialToProduct);

module.exports = router;
