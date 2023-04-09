import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ProductSearch from './components/ProductSearch';
import ProductPage from './components/ProductPage';

function App() {
  const [menu, setmenu] = useState(false)
  const [logo, setLogo] = useState(false)
  const [hiddeSearch,setHiddeSearch] = useState(false)
  let [bookingList, setBookingList] = useState([]);
  let [searchTitle ,setSearchTitle] = useState('');
  let [searchTerm, setSearchTerm] = useState('');
  
  const handleMenu = () => { 
    setmenu(!menu) 
    setLogo(!logo)
    setHiddeSearch(!hiddeSearch)
  }

function handleSubmit(e) {
  console.log(e)
  setSearchTitle(e)
}
  function handlesearch(e) {
    console.log(e)
    setSearchTerm(e);
}

  // get the data from the Api
  useEffect(() => {
    fetch('https://global.atdtravel.com/api/products?geo=en&title=london')
        .then(res => res.json())
        .then(data => {
            // console.log(data['data'])
            setBookingList(data['data'])
        })
        .catch((err) => console.log(err))
}, [])
  
console.log(`products: ${bookingList}`)
  return (
    <div className="App">
      <NavBar menu={menu} logo={logo} handleMenu={handleMenu}/>
       <ProductSearch hiddeSearch={hiddeSearch} handlesearch={handlesearch} handleSubmit={handleSubmit}/>
       <div className="h-auto w-full grid grid-cols-1 gap-x-4 sm:grid-cols-2  md:grid-cols-3 gap-4 mt-12">
       {bookingList && bookingList.filter(list => {
       if (searchTerm == "" || searchTitle == "") {  
        console.log(list)
                return list;
  } else if (list.title.toLowerCase().includes(searchTerm.toLowerCase() || searchTitle.toLowerCase())) {
      return list;
}}).sort((a, b) => {return a.title - b.title }).map(item => (
        <ProductPage item={item}/>
))}
 </div>
        <Footer />  
      </div>
  );
}

export default App;
