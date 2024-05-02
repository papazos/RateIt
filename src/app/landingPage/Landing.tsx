import { Button, Space } from "antd";

export default function Landing() {
  return (
    <div className="flex flex-col 2xl:flex-row xl:mx-72 gap-5 justify-between items-center py-14">
      <div className="flex flex-col font-main gap-5 items-center text-center 2xl:text-start 2xl:items-start">
        <div className="text-2xl md:text-4xl lg:text-[48px] lg:w-[440px] lg:space-y-7">
          <span>Stop wasting time</span>
          <h1 className="font-bold"> in meetings</h1>
        </div>
        <span className="text-[15px] w-[279px]">
          Boost efficiency, save time & money with post meeting surveys.
        </span>
        <Space>
          <Button
            type="primary"
            size="large"
            className="lg:w-[200px] lg:h-[52px]"
          >
            Get Started
          </Button>
          <Button
            type="primary"
            ghost
            size="large"
            className="lg:w-[200px] lg:h-[52px]"
          >
            Sign up with Google
          </Button>
        </Space>
      </div>
      <img src="/img/CARTOON.png" alt="" />
    </div>
  );
}
