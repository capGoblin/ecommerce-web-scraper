import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import DiscountPercent from "./discount-percent";
// import FourStar from "./four-star";

type Property1CartWithDiscountType = {
  vector?: string;
  vector1?: string;
  vector2?: string;
  vector3?: string;
  vector4?: string;

  /** Style props */
  property1CartWithDiscountPosition?: CSSProperties["position"];
  property1CartWithDiscountTop?: CSSProperties["top"];
  property1CartWithDiscountLeft?: CSSProperties["left"];
};

const Property1CartWithDiscount: NextPage<Property1CartWithDiscountType> = ({
  vector,
  vector1,
  vector2,
  vector3,
  vector4,
  property1CartWithDiscountPosition,
  property1CartWithDiscountTop,
  property1CartWithDiscountLeft,
}) => {
  const property1CartWithDiscountStyle: CSSProperties = useMemo(() => {
    return {
      position: property1CartWithDiscountPosition,
      top: property1CartWithDiscountTop,
      left: property1CartWithDiscountLeft,
    };
  }, [
    property1CartWithDiscountPosition,
    property1CartWithDiscountTop,
    property1CartWithDiscountLeft,
  ]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[16px] text-left text-base text-bg font-title-16px-semibold"
      style={property1CartWithDiscountStyle}
    >
      <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
        <DiscountPercent
          prop="-35%"
          discountPercentPosition="absolute"
          discountPercentTop="12px"
          discountPercentLeft="12px"
          discountPercentBoxSizing="border-box"
          discountPercentCursor="unset"
          discountPercentBorder="unset"
          divDisplay="inline-block"
        />
        <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] rounded-t-none rounded-b bg-text2 h-[41px]" />
        <div className="absolute top-[calc(50%_+_92px)] left-[calc(50%_-_48px)] leading-[24px] font-medium">
          Add To Cart
        </div>
        <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
          <img
            className="relative w-[34px] h-[34px]"
            alt=""
            src="/fill-heart.svg"
          />
          <img
            className="relative w-[34px] h-[34px]"
            alt=""
            src="/fill-eye.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_-_110px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
          <img
            className="absolute top-[calc(50%_-_50px)] left-[calc(50%_-_95px)] w-[191px] h-[101px] object-cover"
            alt=""
            src="/ak90001500x500-1@2x.png"
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] text-text2">
        <div className="relative leading-[24px] font-medium">
          AK-900 Wired Keyboard
        </div>
        <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
          <div className="relative leading-[24px] font-medium">$960</div>
          <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
            $1160
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
          {/* <FourStar
            vector="/vector.svg"
            vector1="/vector.svg"
            vector2="/vector.svg"
            vector3="/vector.svg"
            vector4="/vector1.svg"
          /> */}
          <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
            (75)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1CartWithDiscount;
