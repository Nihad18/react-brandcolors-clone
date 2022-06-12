import React from "react";
import MainContext from "../MainContext";
import Search from "./Search";
import Brand from "./Brand";
import Download from "./Download";
import { useContext } from "react";
import LazyLoad from "react-lazyload";
import Loader from "./Loader";

function Main() {
  const { brands, selectedBrands } = useContext(MainContext);

  return (
    <div className='main'>
      <header className="header">
        <Search />
        <Download/>
      </header>

        {brands.map((brand) => (
          <LazyLoad 
          className="brand"
            key={brand.id}
            once={true}
            placeholder={<Loader/>}>
            <Brand brand={brand} />
          </LazyLoad>
        ))}
    </div>
  );
}

export default React.memo(Main);
