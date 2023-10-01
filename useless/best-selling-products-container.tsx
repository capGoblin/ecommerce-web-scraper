import type { NextPage } from "next";

type BestSellingProductsContainerType = {
  sectionTitle?: string;
  productSectionTitle?: string;
};

const BestSellingProductsContainer: NextPage<
  BestSellingProductsContainerType
> = ({ sectionTitle, productSectionTitle }) => {
  return (
    <div className="flex flex-col items-start justify-start gap-[20px] text-left text-base text-secondary-2 font-title-16px-semibold">
      <div className="flex flex-row items-center justify-start gap-[16px]">
        <div className="relative w-5 h-10">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded bg-secondary-2" />
        </div>
        <div className="relative leading-[20px] font-semibold">
          {sectionTitle}
        </div>
      </div>
      <h4 className="m-0 relative text-17xl tracking-[0.04em] leading-[48px] font-semibold font-heading-24px-semibold text-text2">
        {productSectionTitle}
      </h4>
    </div>
  );
};

export default BestSellingProductsContainer;
