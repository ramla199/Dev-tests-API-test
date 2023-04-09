// import { useState, useEffect } from "react";
const ProductSearch = ({hiddeSearch, handlesearch , handleSubmit}) => {
    
  // console.log(` product: ${bookingList}` )
  return ( <div className={hiddeSearch ? 'hidden': 'w-full h-3/4 flex flex-col justify-center text-center gap-5 text-black p-4 mb-10'}>
  {/* <h1 className="text-lg"> Search For Cheapest Ticket </h1> */}
  <form className="flex justify-center items-center w-full mx-auto text-center text-white p-1">   
<label for="simple-search" className="sr-only">Search</label>
<div className="relative w-full  flex justify-center">
    <input type="text" id="simple-search" className="bg-gray-70 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 pl-10 p-2.5 md:w-2/4" placeholder="Search" required onChange={(e) => handlesearch(e.target.value)}/>
    <button onClick={handleSubmit} type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    <span class="sr-only">Search</span>
</button>
</div>

</form>



</div> );
}
 


export default ProductSearch;