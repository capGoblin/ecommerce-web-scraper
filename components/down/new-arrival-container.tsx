import type { NextPage } from "next";
// import BestSellingProductsContainer from "../../uselessComp/best-selling-products-container";
// import UnderLineIcon from "../../uselessComp/under-line-icon";
// import PerfumeContainer from "../../uselessComp/perfume-container";

const NewArrivalContainer: NextPage = () => {
  return (
    <div className="absolute top-[2122px] left-[0px] flex flex-col items-start justify-start gap-[60px] text-left text-5xl text-text font-heading-24px-semibold">
      {/* <BestSellingProductsContainer
        sectionTitle="Featured"
        productSectionTitle="New Arrival"
      /> */}
      <div className="flex flex-row items-start justify-start gap-[30px]">
        <div className="relative rounded bg-text2 w-[570px] h-[600px] overflow-hidden shrink-0">
          <img
            className="absolute top-[89px] left-[29px] w-[511px] h-[511px] object-cover"
            alt=""
            src="/ps5slimgoedkopeplaystation-large-1@2x.png"
          />
          <div className="absolute top-[446px] left-[32px] flex flex-col items-start justify-start gap-[16px]">
            <div className="flex flex-col items-start justify-start gap-[16px]">
              <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-inherit">
                PlayStation 5
              </h3>
              <div className="relative text-sm leading-[21px] font-title-16px-semibold inline-block w-[242px]">
                Black and White version of the PS5 coming out on sale.
              </div>
            </div>
            <div className="flex flex-col items-start justify-start text-base text-bg font-title-16px-semibold">
              <div className="relative leading-[24px] font-medium">
                Shop Now
              </div>
              {/* <UnderLineIcon
                underLineIconUnderLine="/underline.svg"
                underLineIconWidth="81px"
                underLineIconPosition="relative"
              /> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-[32px]">
          <div className="relative rounded bg-gray-100 w-[570px] h-[284px] overflow-hidden shrink-0">
            <img
              className="absolute top-[0px] left-[138px] w-[432px] h-[284px] object-cover"
              alt=""
              src="/attractivewomanwearinghatposingblackbackground-1@2x.png"
            />
            <div className="absolute top-[138px] left-[24px] flex flex-col items-start justify-start gap-[16px]">
              <div className="flex flex-col items-start justify-start gap-[16px]">
                <h3 className="m-0 relative text-inherit tracking-[0.03em] leading-[24px] font-semibold font-inherit">
                  Women’s Collections
                </h3>
                <div className="relative text-sm leading-[21px] font-title-16px-semibold inline-block w-[255px]">
                  Featured woman collections that give you another vibe.
                </div>
              </div>
              <div className="flex flex-col items-start justify-start text-base text-bg font-title-16px-semibold">
                <div className="relative leading-[24px] font-medium">
                  Shop Now
                </div>
                {/* <UnderLineIcon
                  underLineIconUnderLine="/underline.svg"
                  underLineIconWidth="81px"
                  underLineIconPosition="relative"
                /> */}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-center gap-[30px]">
            <div className="relative rounded bg-text2 w-[270px] h-[284px] overflow-hidden shrink-0">
              <img
                className="absolute top-[calc(50%_-_142px)] left-[calc(50%_-_135px)] w-[270px] h-[284px]"
                alt=""
                src="/ellipse-24.svg"
              />
              <div className="absolute top-[31px] left-[30px] w-[210px] h-[222px] overflow-hidden">
                <img
                  className="absolute top-[calc(50%_-_111px)] left-[calc(50%_-_95px)] w-[190px] h-[221px] object-cover"
                  alt=""
                  src="/69694768-amazonechopngcliparttransparentamazonechopng-1@2x.png"
                />
              </div>
              {/* <PerfumeContainer
                productDescription="Speakers"
                productTitle="Amazon wireless speakers"
                propTop="175px"
                propLeft="24px"
              /> */}
            </div>
            <div className="relative rounded bg-text2 w-[270px] h-[284px] overflow-hidden shrink-0">
              <img
                className="absolute top-[calc(50%_-_142px)] left-[calc(50%_-_135px)] w-[270px] h-[284px]"
                alt=""
                src="/ellipse-241.svg"
              />
              <div className="absolute top-[calc(50%_-_112px)] left-[calc(50%_-_105px)] w-[210px] h-[222px] overflow-hidden">
                <img
                  className="absolute top-[calc(50%_-_103px)] left-[calc(50%_-_101px)] w-[201px] h-[203px] object-cover"
                  alt=""
                  src="/652e82cd70aa6522dd785109a455904c@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivalContainer;
