import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
// import UnderLineIcon from "./under-line-icon";

type PerfumeContainerType = {
  productDescription?: string;
  productTitle?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const PerfumeContainer: NextPage<PerfumeContainerType> = ({
  productDescription,
  productTitle,
  propTop,
  propLeft,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[4872px] left-[1059px] flex flex-col items-start justify-start gap-[8px] text-left text-5xl text-text font-heading-24px-semibold"
      style={frameDiv1Style}
    >
      <div className="flex flex-col items-start justify-start gap-[8px]">
        <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-inherit">
          {productDescription}
        </h3>
        <div className="relative text-sm leading-[21px] font-title-16px-semibold inline-block w-[191px]">
          {productTitle}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start text-base text-bg font-title-16px-semibold">
        <div className="relative leading-[24px] font-medium">Shop Now</div>
        {/* <UnderLineIcon
          underLineIconUnderLine="/underline.svg"
          underLineIconWidth="81px"
          underLineIconPosition="relative"
        /> */}
      </div>
    </div>
  );
};

export default PerfumeContainer;
