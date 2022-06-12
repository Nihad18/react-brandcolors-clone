import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import MainContext from "./MainContext";
import BrandsData from "./brands.json";
import {useState,useEffect} from  "react";
import Copied from "./components/Copied";
import Collection from "./components/Collection";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const brandsArray = [];
  Object.keys(BrandsData).map((key) => {
    brandsArray.push(BrandsData[key]);
  });

  const [brands, setBrands] = useState(brandsArray);

  const [selectedBrands, setSelectedBrands] = useState([]);

  const [copied, setCopied] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(()=>{
    if (copied){
      setTimeout(() => {
        setCopied(false)
      }, 500);
    }
  },[copied])

  useEffect(()=>{
    setBrands(brandsArray.filter(brand=>brand.title.toLowerCase().includes(search)));
  },[search])

  const data= {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch,
  }

  return (
    <>
    <MainContext.Provider value={data}>
    <div className='App'>
      <Sidebar />
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/collection/:slugs" element={<Collection />}/>
    </Routes>
  </BrowserRouter>
      {/* <Main /> */}
    {copied && <Copied color={copied} />}
    </div>
    </MainContext.Provider>
    </>
  );
}

export default App;
