"use client";

import type { NextPage } from "next";
import { useMemo, type CSSProperties, ChangeEvent, useState } from "react";
import { scrapeAndStoreProduct } from "../libs/actions";

type Property1ActiveType = {
  /** Style props */
  property1ActiveBoxSizing?: CSSProperties["boxSizing"];
  property1ActiveBorder?: CSSProperties["border"];
  property1ActiveFontFamily?: CSSProperties["fontFamily"];
  property1ActiveFontSize?: CSSProperties["fontSize"];
};

const Property1Active: NextPage<Property1ActiveType> = ({
  property1ActiveBoxSizing,
  property1ActiveBorder,
  property1ActiveFontFamily,
  property1ActiveFontSize,
}) => {
  const property1ActiveStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: property1ActiveBoxSizing,
      border: property1ActiveBorder,
      fontFamily: property1ActiveFontFamily,
      fontSize: property1ActiveFontSize,
    };
  }, [
    property1ActiveBoxSizing,
    property1ActiveBorder,
    property1ActiveFontFamily,
    property1ActiveFontSize,
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault;
    const value = e.target.value;

    setSearchTerm(value);
  };

  const handleSearch = () => {
    // console.log(searchTerm);
    scrapeAndStoreProduct(searchTerm);
  };

  return (
    <div
      className="rounded bg-secondary flex flex-col items-center justify-center py-[7px] pr-3 pl-5 text-left text-xs text-text2 font-title-16px-semibold"
      style={property1ActiveStyle}
    >
      <input
        className="flex flex-row items-center justify-center gap-[34px]"
        placeholder="What are you looking for?"
        value={searchTerm}
        onChange={handleInputChange}
      ></input>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Property1Active;
