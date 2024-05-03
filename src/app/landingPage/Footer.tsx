import { LinkedinFilled, TwitterSquareFilled } from "@ant-design/icons";

export default function Footer() {
  return (
    <div className="h-96 lg:h-[536px] bg-[#090949] text-white flex flex-col justify-between p-7 lg:p-12">
      <div className="grid grid-cols-4 lg:grid-cols-6 grid-rows-5 lg:grid-rows-none font-main">
        <div className="row-span-1 col-span-6 lg:col-span-1">
          <div className="text-lg md:text-2xl lg:text-3xl font-bold flex justify-between lg:flex-col gap-3 lg:gap-10 pb-7">
            <h1>Need help with anything?</h1>
            <div>
              <TwitterSquareFilled /> <LinkedinFilled />
            </div>
          </div>
        </div>
        <div className="row-span-1 col-span-6 lg:col-start-3 lg:col-span-1 flex lg:flex-col gap-3 lg:gap-8 text-xs sm:text-lg">
          <span className="font-semibold">Home</span>
          <ul className="flex lg:flex-col gap-5 lg:gap-8 opacity-65">
            <li>What is it</li>
            <li>How its works</li>
            <li>Why it's important</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="row-span-1 col-span-6 lg:col-span-1 flex lg:flex-col gap-3 lg:gap-8 text-xs sm:text-lg">
          <span className="font-semibold">Company</span>
          <ul className="flex lg:flex-col gap-5 lg:gap-8 opacity-65">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="row-span-1 col-span-6 lg:col-span-1 flex lg:flex-col gap-3 lg:gap-8 text-xs sm:text-lg">
          <span className="font-semibold">Legal</span>
          <ul className="flex lg:flex-col gap-5 lg:gap-8 opacity-65">
            <li>Terms & Conditions</li>
            <li>Privacy & Policy</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="row-span-1 col-span-6 lg:col-span-1 flex lg:flex-col gap-3 lg:gap-8 text-xs sm:text-lg">
          <span className="font-semibold">Help</span>
          <ul className="flex lg:flex-col gap-5 lg:gap-8 opacity-65">
            <li>FAQs</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center h-8 font-main font-semibold gap-2 lg:text-3xl">
        <img src="/img/logo.svg" alt="" className="h-full" />
        <span>Rate it</span>
      </div>
    </div>
  );
}
