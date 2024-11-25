import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Homepage from './pages/commonPages/homePage';
import Error from './pages/commonPages/error';
import Layout from './pages/adminPages/layout';
import BouquetPage from './pages/commonPages/bouquetPage';
import Products from './pages/adminPages/adminComponents/product';
import Categories from './pages/adminPages/adminComponents/category';
import RawMaterials from './pages/adminPages/adminComponents/materials';

function App() {
  const router =createBrowserRouter([
    {
      path:'/',
      element:<Homepage/>,
      children:[
        {
          index:true,
          element:<BouquetPage/>
        },
        {
          path:'*',
          element:<Error/>
        },
        {
          path:'bouquets',
          element:<BouquetPage/>
        }
      ]
    },
    {
      path: '/inventory',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index:true,
          element:<Products/>
        },
        {
          path: '*',
          element: <Error />, 
        },{
          path:'/inventory/products',
          element:<Products/>
        },{
          path:'/inventory/categories',
          element:<Categories/>
        },{
          path:'/inventory/raw-materials',
          element:<RawMaterials/>
        }
      ]
    }
  ])



  return (
    <div className='App'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;


