import { useState, useEffect, useContext, useRef } from "react";
import MainContext from "../MainContext";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import { BsCloudy, BsColumns, BsLink } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

function Download() {
  const { brands, selectedBrands, setSelectedBrands } = useContext(MainContext);
  const [downloadUrl, setDownloadUrl] = useState();
  const [cssMethod, setCssMethod] = useState("css");
  const [allCssMethod, setAllCssMethod] = useState("css");
  const [downloadAllUrl, setDownloadAllUrl] = useState();

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = "";
      switch (cssMethod) {
        case "css":
          output += `:root{\n`;
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `--bc-${slug}-${key}: #${color};\n`;
            });
          });
          output += `}`;
          break;
        case "scss":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `\$bc-${slug}-${key}: #${color};\n`;
            });
          });
          break;

        case "less":
          selectedBrands.map((slug) => {
            let brand = brands.find((brand) => brand.slug === slug);
            brand.colors.map((color, key) => {
              output += `\@bc-${slug}-${key}: #${color};\n`;
            });
          });
      }

      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      };
    }
  }, [selectedBrands, cssMethod]);

  useEffect(() => {
    let all = "";
    switch (allCssMethod) {

      case "css":
        all += `:root{\n`;
        brands.map((brand) => {
          brand.colors.map((color, key) => {
            all += `--bc-${brand.slug}-${key}: #${color};\n`;
          });
        });
        all += `}`;
        break;

      case "scss":
        brands.map((brand) => {
          brand.colors.map((color, key) => {
            all += `\$bc-${brand.slug}-${key}: #${color};\n`;
          });
        });
        break;
        
      case "less":
        
        brands.map((brand) => {
          brand.colors.map((color, key) => {
            all += `\@bc-${brand.slug}-${key}: #${color};\n`;
          });
        });
        
    }
    const allUrl = URL.createObjectURL(new Blob([all]));
    setDownloadAllUrl(allUrl);
    return () => {
      URL.revokeObjectURL(allUrl);
      setDownloadAllUrl("");
    };
  }, [allCssMethod]);

  return (
    <div className={`group`}>
     <div className={`${selectedBrands.length < 1 ? "passive" : ""}`} style={{display:"flex"}}>
     <select
        className='select'
        disabled={selectedBrands.length > 0 ? false : true}
        onChange={(e) => {
          setCssMethod(e.target.value);
        }}
      >
        <option value='css' defaultChecked>CSS</option>
        <option value='scss'>SCSS</option>
        <option value='less'>LESS</option>
      </select>
      <a
        download={`brands.${cssMethod}`}
        href={downloadUrl}>
        <FiDownload className='group__icon' />
      </a>
      <Link to={`/collection/${selectedBrands.join(",")}`} >
        <BsLink className='group__icon'/>
      </Link>
      <GrClose
        onClick={() => {
          setSelectedBrands([]);
        }}
        className='group__icon'
      />
      <h5 className="toolbarTitle">{selectedBrands.length} brands collected</h5>
     </div>

      <span style={{margin:"0 10px"}}>|</span>

        <select onChange={(e) => {
          setAllCssMethod(e.target.value);
        }} className="select">
          <option value='css'>CSS</option>
          <option value='scss'>SCSS</option>
          <option value='less'>LESS</option>
        </select>
      <a download={`brands.${allCssMethod}`} href={downloadAllUrl} style={{display:"flex"}}>
        <FiDownload className='allDownloadButton group__icon' />
        <h5 className="toolbarTitle">All brands</h5>
      </a>
    </div>
  );
}

export default Download;
