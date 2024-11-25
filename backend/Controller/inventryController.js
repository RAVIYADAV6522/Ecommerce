const { PrismaClient } = require('@prisma/client');
const asyncHandler = require('express-async-handler');
const prisma = new PrismaClient();

const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await prisma.category.findMany({
    include: { products: true, materials: true }
  });
  
  if (!categories.length) return res.status(404).json({ message: 'No categories found' });

  res.json(categories);
});


// create new category for future use
const addCategory = asyncHandler(async (req, res) => {
    const { name } = req.body;
  
    const category = await prisma.category.create({
      data: { name }
    });
  
    res.status(201).json({ message: 'Category added', category });
});

  
// get all products bruh 
const getAllProducts = asyncHandler(async (req, res) => {
    const products = await prisma.product.findMany({
      include: { category: true, variants: true, materials: true }
    });
  
    if (!products.length) return res.status(404).json({ message: 'No products found' });
  
    res.json(products);
});
  
// add a new product man common 
const addProduct = asyncHandler(async (req, res) => {
    const { name, code, categoryId, quantity, imageUrl } = req.body;
  
    const product = await prisma.product.create({
      data: { name, code, categoryId, quantity, imageUrl }
    });
  
    res.status(201).json({ message: 'Product added', product });
  });


//   what if i am feeling generous and wanna give discounts 
const updateProduct = asyncHandler(async (req, res) => {
    const { id, name, quantity, imageUrl } = req.body;
  
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: { name, quantity, imageUrl }
    });
  
    if (!updatedProduct) return res.status(404).json({ message: 'Product not found' });
  
    res.json({ message: 'Product updated', updatedProduct });
});
  


//   Delete a product ...


const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
  
    await prisma.product.delete({ where: { id: parseInt(id) } });
  
    res.status(200).json({ message: 'Product deleted' });
});
  


// what are these made of ?
const getAllMaterials = asyncHandler(async (req, res) => {
    const materials = await prisma.rawMaterial.findMany({
      include: { products: true }
    });
  
    if (!materials.length) return res.status(404).json({ message: 'No raw materials found' });
  
    res.json(materials);
});


// wanna add raw materials ?
const addMaterial = asyncHandler(async (req, res) => {
    const { name, code, categoryId, price, quantity, imageUrl } = req.body;
  
    const material = await prisma.rawMaterial.create({
      data: { name, code, categoryId, price, quantity, imageUrl }
    });
  
    res.status(201).json({ message: 'Raw material added', material });
});

const assignMaterialToProduct = asyncHandler(async (req, res) => {
    const { productId, materialId, quantityUsed } = req.body;
  
    const assignment = await prisma.productMaterial.create({
      data: { productId, materialId, quantityUsed }
    });
  
    res.status(201).json({ message: 'Material assigned to product', assignment });
});



module.exports = {getAllCategories,getAllCategories,getAllMaterials,getAllProducts,addCategory,addMaterial,addProduct,updateProduct,assignMaterialToProduct,deleteProduct};

  