
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductHeader from '../components/ProductHeader';
import ProductDisplay from '../components/ProductDisplay';
import ProductDescription from '../components/ProductDescription';
import RelatedProducts from '../components/RelatedProducts';


const Product = () => {

  const { AllProducts } = useContext(ShopContext);
const { productId } = useParams();
const product = AllProducts.find((e) => e.id === Number(productId));

if(!product){
  return <div>Product Not Found</div>
}
  return <>

    <section className='max_padd_container py-28'>
      <div>
        <ProductHeader product={product} />
        <ProductDisplay product ={product}/>
        <ProductDescription />
        <RelatedProducts />
      </div>
    </section>

  </>
}

export default Product