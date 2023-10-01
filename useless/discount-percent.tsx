import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type DiscountPercentType = {
  prop?: string;

  /** Style props */
  discountPercentPosition?: CSSProperties["position"];
  discountPercentTop?: CSSProperties["top"];
  discountPercentLeft?: CSSProperties["left"];
  discountPercentBoxSizing?: CSSProperties["boxSizing"];
  discountPercentCursor?: CSSProperties["cursor"];
  discountPercentBorder?: CSSProperties["border"];
  divDisplay?: CSSProperties["display"];
};

const DiscountPercent: NextPage<DiscountPercentType> = ({
  prop,
  discountPercentPosition,
  discountPercentTop,
  discountPercentLeft,
  discountPercentBoxSizing,
  discountPercentCursor,
  discountPercentBorder,
  divDisplay,
}) => {
  const discountPercentStyle: CSSProperties = useMemo(() => {
    return {
      position: discountPercentPosition,
      top: discountPercentTop,
      left: discountPercentLeft,
      boxSizing: discountPercentBoxSizing,
      cursor: discountPercentCursor,
      border: discountPercentBorder,
    };
  }, [
    discountPercentPosition,
    discountPercentTop,
    discountPercentLeft,
    discountPercentBoxSizing,
    discountPercentCursor,
    discountPercentBorder,
  ]);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      display: divDisplay,
    };
  }, [divDisplay]);

  return (
    <div
      className="rounded bg-secondary-2 flex flex-row items-center justify-center py-1 px-3 text-left text-xs text-text font-title-16px-semibold"
      style={discountPercentStyle}
    >
      <div className="relative leading-[18px]" style={div1Style}>
        {prop}
      </div>
    </div>
  );
};

export default DiscountPercent;
