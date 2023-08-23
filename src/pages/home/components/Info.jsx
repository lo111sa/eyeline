import React from "react";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="flex flex-col  md:flex-row gap-3 w-11/12 mx-auto rounded-md bg-[#638ff6] translate-y-[-50px] pt-20 pb-36">
      <div className="flex flex-col gap-3 text-white text-xl w-full p-8 md:w-1/2">
        <div className="flex items-center gap-4 text-[24px] mb-3">
          <ClockCircleOutlined />
          სამუშაო საათები
        </div>
        <div className="border-b pb-1 flex justify-between">
          <span>ორშაბათი-პარასკევი</span>
          <span>09:00 - 17:00</span>
        </div>
        <div className="border-b pb-1 flex justify-between">
          <span>შაბათი</span>
          <span>10:00 - 14:00</span>
        </div>
      </div>
      <div className="hidden  md:flex md:flex-col  gap-10 w-full text-white p-5 md:w-1/2">
        <p className="overflow-hidden text-[18px] ">
          სამედიცინო ცენტრი აილაინი 2016 წელს დაარსდა. ამ ხნის განმავლობაში
          კვალიფიციური კადრებით, მაღატექნოლოგიური აღჭურვილობით, ეთიკის და
          სოციალური პასუხისმგებლობის დაცვით , კლინიკამ შეძლო აღიარების და
          სანდოობის მოპოვება და შენარჩუნება. <br /> <br /> აილაინი საიმედო
          რეპუტაციის მქონე, სწრაფად მზარდი და შედეგებზე ორიენტირებული ბრენდია.
        </p>
        <div className="flex justify-end">
          <Link className="w-3/5 lg:w-2/5" to={"/about"}>
            <button className="border rounded bg-[#82a6fa] hover:bg-transparent transition-all duration-500 text-white p-3  mt-3">
              იხილეთ ვრცლად
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
