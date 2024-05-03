import { Button, Form } from "antd";
import { forwardRef } from "react";

export default forwardRef<HTMLDivElement>(function MessageForm(_props, ref) {
  return (
    <div ref={ref} className="grid grid-cols-12">
      <div className="col-span-12 lg:col-span-5 xl:col-span-4 bg-[#1F64FF] flex justify-center items-center font-main text-3xl xl:text-4xl py-12 font-semibold text-white">
        <h1 className="max-w-60 xl:max-w-72 text-center">
          We all know that time is money... so stop wasting time, and save money
          with Rate It!
        </h1>
      </div>
      <div className="col-span-12 lg:col-span-7 xl:col-span-8">
        <div className="h-full px-10 xl:px-[85px] pt-10 lg:pt-28">
          <Form layout="vertical" autoComplete="off" className="h-full">
            <div className="flex flex-col h-full justify-between">
              <div className="flex justify-between gap-7 md:gap-10 lg:gap-20 xl:gap-32">
                <Form.Item
                  name="firstName"
                  label="First Name"
                  className="w-full"
                >
                  <input
                    type="text"
                    className="border-b border-[#1F64FF] outline-none w-full"
                  />
                </Form.Item>
                <Form.Item label="Last Name" name="lastName" className="w-full">
                  <input
                    type="text"
                    className="border-b border-[#1F64FF] outline-none w-full"
                  />
                </Form.Item>
              </div>
              <div className="flex justify-between gap-7 md:gap-10 lg:gap-20 xl:gap-32">
                <Form.Item label="Mail" name="mail" className="w-full">
                  <input
                    type="text"
                    className="border-b border-[#1F64FF] outline-none w-full"
                  />
                </Form.Item>
                <Form.Item label="Phone" name="phone" className="w-full">
                  <input
                    type="text"
                    className="border-b border-[#1F64FF] outline-none w-full"
                  />
                </Form.Item>
              </div>
              <Form.Item label="Message" name="message" className="w-full">
                <textarea
                  rows={4}
                  placeholder="Write your message"
                  className="border-b border-[#1F64FF] outline-none w-full resize-none"
                />
              </Form.Item>
              <Form.Item className="flex justify-end">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="xl:w-[200px] xl:h-[52px] font-semibold"
                >
                  Send Message
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
});
