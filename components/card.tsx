import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
// import DiscountPercent from "../uselessComp/discount-percent";
// import FourHalfStar from "./four-half-star";

type Card = {
  prop?: string;
  fillEye?: string;
  samMoghadamKhamsehKvmdsTr?: string;
  sSeriesComfortChair?: string;
  prop1?: string;
  prop2?: string;
  vector?: string;
  vector1?: string;
  vector2?: string;
  vector3?: string;
  starHalfFilled?: string;
  prop3?: string;

  /** Style props */
  property1Variant4Position?: CSSProperties["position"];
  property1Variant4Top?: CSSProperties["top"];
  property1Variant4Left?: CSSProperties["left"];
  discountPercentBoxSizing?: CSSProperties["boxSizing"];
  discountPercentCursor?: CSSProperties["cursor"];
  discountPercentBorder?: CSSProperties["border"];
  divDisplay?: CSSProperties["display"];
  samMoghadamKhamsehKvmdsTrTop?: CSSProperties["top"];
  samMoghadamKhamsehKvmdsTrLeft?: CSSProperties["left"];
  samMoghadamKhamsehKvmdsTrWidth?: CSSProperties["width"];
  samMoghadamKhamsehKvmdsTrHeight?: CSSProperties["height"];
  starHalfFilledIconOverflow?: CSSProperties["overflow"];
  starHalfFilledIconFlexShrink?: CSSProperties["flexShrink"];
  starHalfFilledIconBorderRadius?: CSSProperties["borderRadius"];
};

const Property1Variant4: NextPage<Card> = ({
  prop,
  fillEye,
  samMoghadamKhamsehKvmdsTr,
  sSeriesComfortChair,
  prop1,
  prop2,
  vector,
  vector1,
  vector2,
  vector3,
  starHalfFilled,
  prop3,
  property1Variant4Position,
  property1Variant4Top,
  property1Variant4Left,
  discountPercentBoxSizing,
  discountPercentCursor,
  discountPercentBorder,
  divDisplay,
  samMoghadamKhamsehKvmdsTrTop,
  samMoghadamKhamsehKvmdsTrLeft,
  samMoghadamKhamsehKvmdsTrWidth,
  samMoghadamKhamsehKvmdsTrHeight,
  starHalfFilledIconOverflow,
  starHalfFilledIconFlexShrink,
  starHalfFilledIconBorderRadius,
}) => {
  const property1Variant4Style: CSSProperties = useMemo(() => {
    return {
      position: property1Variant4Position,
      top: property1Variant4Top,
      left: property1Variant4Left,
    };
  }, [property1Variant4Position, property1Variant4Top, property1Variant4Left]);

  const discountPercentStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: discountPercentBoxSizing,
      cursor: discountPercentCursor,
      border: discountPercentBorder,
    };
  }, [discountPercentBoxSizing, discountPercentCursor, discountPercentBorder]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      display: divDisplay,
    };
  }, [divDisplay]);

  const samMoghadamKhamsehKvmdsTrGOIconStyle: CSSProperties = useMemo(() => {
    return {
      top: samMoghadamKhamsehKvmdsTrTop,
      left: samMoghadamKhamsehKvmdsTrLeft,
      width: samMoghadamKhamsehKvmdsTrWidth,
      height: samMoghadamKhamsehKvmdsTrHeight,
    };
  }, [
    samMoghadamKhamsehKvmdsTrTop,
    samMoghadamKhamsehKvmdsTrLeft,
    samMoghadamKhamsehKvmdsTrWidth,
    samMoghadamKhamsehKvmdsTrHeight,
  ]);

  const starHalfFilledIconStyle: CSSProperties = useMemo(() => {
    return {
      overflow: starHalfFilledIconOverflow,
      flexShrink: starHalfFilledIconFlexShrink,
      borderRadius: starHalfFilledIconBorderRadius,
    };
  }, [
    starHalfFilledIconOverflow,
    starHalfFilledIconFlexShrink,
    starHalfFilledIconBorderRadius,
  ]);

  return (
    <div
      className="flex flex-col items-start justify-start gap-[16px] text-left text-base text-text2 font-title-16px-semibold"
      style={property1Variant4Style}
    >
      <div className="relative rounded bg-secondary w-[270px] h-[250px] overflow-hidden shrink-0">
        {/* <DiscountPercent
          prop="-25%"
          discountPercentPosition="absolute"
          discountPercentTop="12px"
          discountPercentLeft="12px"
          discountPercentBoxSizing="border-box"
          discountPercentCursor="unset"
          discountPercentBorder="unset"
          divDisplay="inline-block"
        /> */}
        <div className="absolute top-[12px] right-[12px] flex flex-col items-start justify-start gap-[8px]">
          <img
            className="relative w-[34px] h-[34px]"
            alt=""
            src="/fill-heart.svg"
          />
          <img className="relative w-[34px] h-[34px]" alt="" src={fillEye} />
        </div>
        <div className="absolute top-[calc(50%_-_90px)] left-[calc(50%_-_95px)] w-[190px] h-[180px] overflow-hidden">
          <img
            className="absolute top-[0px] left-[41px] w-[107px] h-[180px] object-cover"
            alt=""
            src={samMoghadamKhamsehKvmdsTr}
            style={samMoghadamKhamsehKvmdsTrGOIconStyle}
          />
        </div>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <div className="relative leading-[24px] font-medium">
          {sSeriesComfortChair}
        </div>
        <div className="flex flex-row items-start justify-start gap-[12px] text-secondary-2">
          <div className="relative leading-[24px] font-medium">{prop1}</div>
          <div className="relative [text-decoration:line-through] leading-[24px] font-medium text-text2 opacity-[0.5]">
            {prop2}
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px] text-sm">
          {/* <FourHalfStar
            vector="/vector.svg"
            vector1="/vector.svg"
            vector2="/vector.svg"
            vector3="/vector.svg"
            starHalfFilled="/starhalffilled6.svg"
          /> */}
          <div className="relative leading-[21px] font-semibold inline-block w-8 h-5 shrink-0 opacity-[0.5]">
            {prop3}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property1Variant4;
