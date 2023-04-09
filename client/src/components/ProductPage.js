// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image1 from '../assets/image1.jpg';
const ProductPage = ({item}) => {
  const saving = item.price_from_child - (item.price_from_adult *  1 / 100)
  console.log(item)
  return ( <div className="h-auto  flex justify-center items-center">
      <div className="card">
      
       {/* i tried to create ternary operator for the image and it doesnot work */}

        <img className="w-full h-full object-cover" src={item.img_sml ? item.img_sml : image1 }/>
     

      <div className="p-5 flex flex-col gap-2">

        {/* badge */}
        <div className="flex items-center gap-2">
          <span className="badge">{item.dest}</span>
          <span className="badge">{item.updated}</span>
        </div>
        {/* product title */}

        <h2 className="product-title" title="Best Headphone ever">
          {item.title}
        </h2>

        {/* product price */}
        <div>
          <span className="text-sm font-semibold">
            {`adult ticket from ${item.price_from_adult}`}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm line-through opacity-50">
          {`child ticket from ${item.price_from_child}`}
          </span>
          <span className="discount-percent">
            {`save ${saving}% for 3`}
          </span>
      
        </div>
        {/* product action button */}
        <div className="mt-5 flex items-center justify-center">
          <button className="button-primary text-base">
            Add to the Cart
          </button>         
        </div>
        </div>
      </div>
      
  </div> );
}
 
export default ProductPage;