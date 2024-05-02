import { Button } from "antd";

export default function Banner() {
  return (
    <div className="lg:h-[422px] flex justify-center xl:justify-between bg-[#F5F6FA] mt-[100px]">
      <div className="font-main font-semibold items-center text-center xl:text-start xl:items-start flex flex-col gap-10 xl:gap-20 py-24 xl:pl-32">
        <div className="text-3xl md:text-5xl">
          <h1>Send out your first</h1>
          <h1>Rate It today!</h1>
        </div>
        <Button
          className="w-[200px] h-[52px] font-main font-semibold"
          type="primary"
        >
          Try for free
        </Button>
      </div>
      <img src="/img/BANNER.svg" alt="" className="hidden xl:block" />
    </div>
  );
}
