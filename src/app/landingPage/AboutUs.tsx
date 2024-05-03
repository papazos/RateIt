import { forwardRef } from "react";

export default forwardRef<HTMLDivElement>(function AboutUs(_props, ref) {
  return (
    <div
      ref={ref}
      className="py-[100px] xl:px-72 flex flex-col gap-5 font-main"
    >
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center xl:items-start">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-[48px]">
          About us
        </h1>
        <div className="flex xl:hidden flex-col justify-center items-center h-7 w-14 lg:w-20">
          <img src="/img/logo.svg" alt="" />
          <h1 className="font-semibold lg:text-lg">Rate it</h1>
        </div>
      </div>
      <div className="flex justify-center xl:justify-start pt-10">
        <hr className="w-[58px] border-[rgb(31,100,255)] border-2 rounded-full just" />
      </div>
      <div className="flex justify-between items-center px-7 xl:p-0">
        <div className="pt-10 flex flex-col gap-10">
          <div className="xl:max-w-[657px]">
            Picture this….you're in your weekly meeting and you ask a question.
            No one responds. Whether they're zoned out or are responding to
            emails or chatting on slack, it can feel defeating.
          </div>
          <div className="flex flex-col gap-4">
            <div>In order to have an epic meeting, you need five parts:</div>
            <ul className="list-image-ellipse pl-10">
              <li>Set a cadence for your team meetings</li>
              <li>Have a clear meeting objective and agenda</li>
              <li>Start on time and end on time</li>
              <li>Have the right attendees in the room</li>
              <li>
                Have clear action items [who, what, when] at the end of the
                meeting
              </li>
            </ul>
          </div>
          <div className="xl:max-w-[1067px]">
            <div>
              Rate It was created to help leaders and managers have epic
              meetings that aren't wasting anyone's time.
            </div>
            <div>
              With timely feedback on how meetings can be productive, you will
              soon be holding world-class and super effective meetings.
            </div>
          </div>
        </div>
        <div className="hidden xl:flex flex-col text-center">
          <img src="/img/logo.svg" alt="" />
          <h1 className="font-semibold xl:text-2xl 2xl:text-5xl">Rate it</h1>
        </div>
      </div>
    </div>
  );
});
