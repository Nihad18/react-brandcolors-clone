import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import MainContext from "../MainContext";
import Brand from "./Brand";
import LazyLoad from "react-lazyload";
import Loader from "./Loader";

function Collection() {
  const { slugs } = useParams();
  const history = createBrowserHistory();
  const { brands, selectedBrands, setSelectedBrands } = useContext(MainContext);

  useEffect(() => {
    setSelectedBrands(slugs.split(","));
  }, []);

  const clearSelectedBrands = () => {
    setSelectedBrands = [];
    history.push("/");
  };
  return (
    <div className='main'>
      <header className='header'>
        <Link to='/' onClick={clearSelectedBrands}>
          All brands
        </Link>
      </header>
      {selectedBrands.map((slug) => {
        let brand = brands.find((brand) => brand.slug === slug);
        return (
          <LazyLoad
            className='brand'
            key={brand.id}
            once={true}
            placeholder={<Loader/>}>
            <Brand brand={brand} />
          </LazyLoad>
        );
      })}
    </div>
  );
}

export default Collection;
