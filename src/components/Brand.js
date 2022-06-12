import { useContext } from "react";
import MainContext from "../MainContext";
import checkIcon from "../icons/check-svgrepo-com.svg";
import { getContrastYIQ } from "../helper";
import React from "react";
import Clipboard from "react-clipboard.js";

function Brand({ brand }) {
  const { selectedBrands, setSelectedBrands, setCopied } =
    useContext(MainContext);

  const toggleSelected = () => {
    if (selectedBrands.includes(brand.slug)) {
      setSelectedBrands(selectedBrands.filter((slug) => slug !== brand.slug));
    } else {
      setSelectedBrands([...selectedBrands, brand.slug]);
    }
  };

  const copied = (color) => {
    setCopied(color);
  };

  return (
    <div className={`brand`}
    >
      <p
      onClick={toggleSelected}
        className={`brand__title ${
          selectedBrands.includes(brand.slug) ? "selectedTitle" : ""
        }`}
      >
        <span
          className={`selectedIcon ${
            selectedBrands.includes(brand.slug) ? "" : "displayNone"
          }`}
        >
          <img src={checkIcon} alt='check' />
        </span>{" "}
        {brand.title}
      </p>

      <ol className='brand__color'>
        {brand.colors.map((color, index) => {
          return (
            <Clipboard
              component={"li"}
              data-clipboard-text={color}
              onSuccess={() => copied(color)}
              key={index}
              className={`brand__color ${
                selectedBrands.includes(brand.slug) ? "selectedColor" : ""
              }`}
              style={{ backgroundColor: `#${color}` }}
            >
              {/*-----COPY ICON---------*/}
              <span className={`copyIcon`}>
                <svg
                  width='24px'
                  height='24px'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 2h11v2H6v13H4V2zm4 4h12v16H8V6zm2 2v12h8V8h-8z'
                    fill={`${getContrastYIQ(color)}`}
                  />
                </svg>
              </span>
              {/*-----COPY ICON---------*/}
              <span
                className={`ClipBoardText ${
                  selectedBrands.includes(brand.slug)
                    ? "activeClipBoardText"
                    : ""
                }`}
                style={{ marginTop: "4px", color: `${getContrastYIQ(color)}` }}
              >
                {color}
              </span>
            </Clipboard>
          );
        })}
      </ol>
    </div>
  );
}

export default React.memo(Brand);
