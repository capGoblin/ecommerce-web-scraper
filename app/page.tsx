import Image from "next/image";
import Frame1 from "../components/frame1";
import SectionFlashSales from "../components/down/section-flash-sales";
// import PerfumeContainer from "../uselessComp/perfume-container";
// import FullServices from "../components/full-services";
import Headersa from "../components/header";
// import LineIcon from "../uselessComp/line-icon";
// import ExclusiveCard1 from "../uselessComp/exclusive-card1";
// import BestSellingProductsContainer1 from "../components/best-selling-products-container1";
import NewArrivalContainer from "../components/down/new-arrival-container";

export default function Home() {
  return (
    <main
      className="relative bg-bg w-full h-[5902px] overflow-hidden"
      id="homePage"
    >
      {/* <ButtonPrimaryHoverNo
    viewAllProducts="View All Products"
    buttonPrimaryHoverNoBoxSizing="border-box"
    buttonPrimaryHoverNoCursor="pointer"
    buttonPrimaryHoverNoBorder="none"
    buttonPrimaryHoverNoPosition="absolute"
    buttonPrimaryHoverNoTop="1359px"
    buttonPrimaryHoverNoLeft="calc(50% - 117px)"
    viewAllProductsDisplay="inline-block"
  /> */}
      <Frame1 />
      <SectionFlashSales />
      {/* <PerfumeContainer
        productDescription="Perfume"
        productTitle="GUCCI INTENSE OUD EDP"
      /> */}
      {/* <FullServices
    services="/services.svg"
    services1="/services1.svg"
    services2="/services2.svg"
    services3="/services3.svg"
    showFrameDiv={false}
    fullServicesPosition="absolute"
    fullServicesTop="5161px"
    fullServicesLeft="249px"
  /> */}
      <Headersa />
      {/* <LineIcon />
      <ExclusiveCard1 /> */}
      <div className="absolute top-[1334.75px] left-[134.75px] box-border w-[1170.5px] h-[0.5px] opacity-[0.3] border-t-[0.5px] border-solid border-text2" />
      <img
        className="absolute top-[173px] left-[146px] w-[1062px] h-[3px] overflow-hidden"
        alt=""
        src="/frame.svg"
      />
      <section className="absolute top-[1545px] left-[161px] w-[1174px] h-[2890px]">
        <div className="absolute top-[0px] left-[0px] w-[1174px] h-[2890px] overflow-hidden">
          {/* <BestSellingProductsContainer1 /> */}
          <NewArrivalContainer />
        </div>
      </section>
      <div className="absolute top-[758px] left-[-402px] rounded-[5px] box-border w-[2453px] h-[493px] hidden border-[12px] border-solid border-aqua" />
    </main>
  );
}
