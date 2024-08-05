import MeetingTypeList from "@/components/MeetingTypeList";
import React from "react";

const Home = () => {
const now = new Date();

  const time = now.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
  const date = (new Intl.DateTimeFormat('en-US', {dateStyle: 'full'})).format(now);

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <div className="h-[350px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between  p-11">
          {/* <h2 className="glassmorphism max-w-[300px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at 12:30 PM
          </h2> */}
          <div className="flex flex-col mt-[160px] gap-2 max-md:mt-[100px]">
            <h1 className="font-extrabold text-7xl max-md:text-[50px]">
              {time}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
      </div>
      <MeetingTypeList />
    </section>
  );
};

export default Home;
