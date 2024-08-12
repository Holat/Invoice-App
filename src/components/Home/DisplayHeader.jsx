import arrowDown from "../../assets/icon-arrow-down.svg";
import plus from "../../assets/icon-plus.svg";
import { BiPlus } from "react-icons/bi";

export default function DisplayHeader() {
  return (
    <div>
      <div className="font-open-sans flex flex-row justify-between px-3 pt-7 items-center">
        <div className="font-bold">
          <div className="text-[24px] tracking-tight">Invoices</div>
          <div className="opacity-65  text-[14px]">No invoices</div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="font-bold text-[18px] tracking-wide">Filter</div>
            <img src={arrowDown} alt="" className="w-3 h-2" />
          </div>
          <div className="flex flex-row justify-center items-center border border-transparent bg-[#7C5DFA] rounded-full p-0 px-2 py-2 gap-2">
            <div className="border border-white bg-white p-3 rounded-full">
              <img src={plus} alt="" className="w-3 h-3" />
            </div>
            <div className="text-white font-semibold tracking-wide">New</div>
          </div>
        </div>
      </div>
    </div>
  );
}