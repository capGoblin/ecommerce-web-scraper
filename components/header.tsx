import type { NextPage } from "next";
// import HeaderHeaderHomeHover from "../uselessComp/header-header-home-hover";
import Property1Active from "./searchBar";

const Headersa: NextPage = () => {
  return (
    <div className="absolute top-[34px] left-[calc(50%_-_585px)] flex flex-row items-center justify-start gap-[148px] text-left text-5xl text-text2 font-heading-24px-semibold">
      <div className="flex flex-row items-start justify-start gap-[190px]">
        <div className="relative w-[118px] h-6">
          <h1 className="m-0 absolute top-[0%] left-[0%] text-inherit tracking-[0.03em] leading-[24px] font-bold font-inherit">
            Exclusive
          </h1>
        </div>
        <nav className="m-0 flex flex-row items-start justify-start gap-[48px] text-center text-base text-text2 font-title-16px-semibold">
          {/* <HeaderHeaderHomeHover /> */}
          {/* <HeaderHeaderHomeHover /> */}
          <div className="relative w-[66px] h-6">
            <div className="absolute top-[0%] left-[0%] leading-[24px]">
              Contact
            </div>
          </div>
          <div className="relative w-12 h-6">
            <div className="absolute top-[0%] left-[0%] leading-[24px]">
              About
            </div>
          </div>
          <div className="relative w-[61px] h-6">
            <div className="absolute top-[0%] left-[0%] leading-[24px]">
              Sign Up
            </div>
          </div>
        </nav>
      </div>
      <div className="flex flex-row items-center justify-start gap-[24px]">
        <Property1Active
          property1ActiveBoxSizing="border-box"
          property1ActiveBorder="none"
          property1ActiveFontFamily="Poppins"
          property1ActiveFontSize="12px"
        />
        <div className="flex flex-row items-center justify-center gap-[16px]">
          <img
            className="relative w-8 h-8 overflow-hidden shrink-0"
            alt=""
            src="/wishlist.svg"
          />
          <img className="relative w-8 h-8" alt="" src="/cart1-with-buy.svg" />
          <img
            className="relative w-8 h-8 overflow-hidden shrink-0 hidden"
            alt=""
            src="/user.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Headersa;
