import Header from "../Home/Header";
import leftArrow from "../../assets/icon-arrow-left.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import deleteIcon from "../../assets/icon-delete.svg";
import AddNewItem from "../Home/AddNewItem";
import arrowDown from "../../assets/icon-arrow-down.svg";
import { useRef, useState } from "react";

export default function CreateInvoice() {
  const history = useHistory();

  //drop-down for payment type.
  const [openPaymentTerms, setOpenPaymentTerms] = useState(false);
  const [paymentTerms, setPaymentTerms] = useState("-- -- --");

  const selectOneDayRef = useRef(null);
  const selectSevenDaysRef = useRef(null);
  const selectThirtyDaysRef = useRef(null);

  function handleSelectOneDay() {
    setPaymentTerms(selectOneDayRef.current.innerText);
  }

  function handleSelectSevenDaysRef() {
    setPaymentTerms(selectSevenDaysRef.current.innerText);
  }

  function handleSelectThirtyDaysRef() {
    setPaymentTerms(selectThirtyDaysRef.current.innerText);
  }

  return (
    <div>
      <div className="mb-10">
        <div>
          <Header />
        </div>
        <div className="px-3 pt-5">
          <div
            onClick={() => history.go(-1)}
            className="flex flex-row font-open-sans items-center gap-3 pt-2"
          >
            <div>
              <img src={leftArrow} alt="" className="h-4" />
            </div>
            <div className="font-bold tracking-wide">Go back</div>
          </div>

          <div className="pt-10">
            <div className="flex flex-col gap-5">
              <div className="font-bold font-open-sans text-2xl mb-2">
                New Invoice
              </div>

              {/* BILL FROM. */}
              <div className="text-[#7C5DFA] font-bold text-[18px] mb-5">
                Bill From
              </div>
            </div>

            {/* Form. */}
            <form action="" className="flex flex-col gap-5">
              <div className="flex flex-col gap-6">
                {/* street address. */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#3a15ce]">
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="19 Union Terrace"
                    className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                  />
                </div>

                {/* city and post code. */}
                <div className="flex flex-row gap-4">
                  {/* city. */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#3a15ce]">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="London"
                      className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent focus:duration-300 placeholder:tracking-wide"
                    />
                  </div>

                  {/* post code. */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#3a15ce]">
                      Post Code
                    </label>
                    <input
                      type="text"
                      placeholder="E1 3EZ"
                      className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent duration-300 placeholder:tracking-wide"
                    />
                  </div>
                </div>

                {/* country. */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#3a15ce]">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="United Kingdom"
                    className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                  />
                </div>
              </div>

              {/* BILL TO. */}
              <div className="text-[#7C5DFA] font-bold text-[18px] mb-1 mt-6">
                Bill To
              </div>
              <div className="flex flex-col gap-6">
                {/* Client Name. */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#3a15ce]">
                    Client's Name
                  </label>
                  <input
                    type="text"
                    placeholder="Alex Grim"
                    className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                  />
                </div>

                {/* Client Email. */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#3a15ce]">
                    Client's Email
                  </label>
                  <input
                    type="email"
                    placeholder="alexgrim@gmail.com"
                    className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                  />
                </div>

                {/* Street Address. */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#3a15ce]">
                    Street Address.
                  </label>
                  <input
                    type="text"
                    placeholder="84 Church Way"
                    className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                  />
                </div>

                {/* city and post code. */}
                <div className="flex flex-row gap-4">
                  {/* city. */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#3a15ce]">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Bradford"
                      className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent focus:duration-300 placeholder:tracking-wide"
                    />
                  </div>

                  {/* post code. */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#3a15ce]">
                      Post Code
                    </label>
                    <input
                      type="text"
                      placeholder="BD1 39PB"
                      className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 font-bold focus:outline-[#7C5DFA] w-40 outline-transparent duration-300 placeholder:tracking-wide"
                    />
                  </div>
                </div>

                {/* country. */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#3a15ce]">
                    Country
                  </label>
                  <input
                    type="text"
                    placeholder="United Kingdom"
                    className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                  />
                </div>

                {/* invoice date. */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#3a15ce]">
                    Invoice Date
                  </label>
                  <input
                    type="date"
                    placeholder="21 Aug 2021"
                    className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300"
                  />
                </div>

                {/* Payment Terms. */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#3a15ce]">
                    Payment Terms
                  </label>
                  <div className="flex flex-row justify-between border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300">
                    <div>{paymentTerms}</div>
                    <div onClick={() => setOpenPaymentTerms(!openPaymentTerms)}>
                      <img src={arrowDown} alt="" className="w-3 h-2 mt-2" />
                    </div>
                  </div>
                  {openPaymentTerms && (
                    <div className="duration-300 flex flex-col gap-3.5 border border-slate-300 bg-white font-semibold -mt-2 rounded-md py-4">
                      {/* 1 Day. */}
                      <div
                        onClick={handleSelectOneDay}
                        ref={selectOneDayRef}
                        className="hover:border hover:border-transparent hover:bg-slate-200 hover:p-2 hover:duration-300 pl-2 mb-1"
                      >
                        Net 1 Day
                      </div>

                      {/* 7 Days. */}
                      <div
                        onClick={handleSelectSevenDaysRef}
                        ref={selectSevenDaysRef}
                        className="hover:border hover:border-transparent hover:bg-slate-200 hover:p-2 hover:duration-300 pl-2 mb-1"
                      >
                        Net 7 Days
                      </div>

                      {/* 30 Days. */}
                      <div
                        onClick={handleSelectThirtyDaysRef}
                        ref={selectThirtyDaysRef}
                        className="hover:border hover:border-transparent hover:bg-slate-200 hover:p-2 hover:duration-300 pl-2"
                      >
                        Net 30 Days
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Description. */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="" className="text-[#3a15ce]">
                    Project Description
                  </label>
                  <input
                    type="text"
                    placeholder="Graphics Design"
                    className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                  />
                </div>
              </div>

              {/* ITEM LIST. */}
              <div className="text-[#2f206b] font-bold text-[18px] mb-1 mt-6">
                Item List
              </div>

              <div className="flex flex-col gap-16">
                {/* First Item Name. */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#2f206b]">
                      Item Name
                    </label>
                    <input
                      type="text"
                      placeholder="Banner Design"
                      className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center px-1">
                    <div className="flex flex-row gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#2f206b]">
                          Qty.
                        </label>
                        <input
                          type="text"
                          placeholder="1"
                          className="w-16 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#2f206b]">
                          Price.
                        </label>
                        <input
                          type="text"
                          placeholder="156.00"
                          className="w-24 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="mb-[17px] text-[#2f206b]">
                          Total
                        </label>
                        <span className="font-extrabold text-[#7C5DFA] opacity-70">
                          156.00
                        </span>
                      </div>
                    </div>
                    <div>
                      <img src={deleteIcon} alt="" className="mt-[30px] w-4" />
                    </div>
                  </div>
                </div>

                {/* Second Item Name. */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="" className="text-[#2f206b]">
                      Item Name
                    </label>
                    <input
                      type="text"
                      placeholder="Email Design"
                      className="border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                    />
                  </div>
                  <div className="flex flex-row justify-between items-center px-1">
                    <div className="flex flex-row gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#2f206b]">
                          Qty.
                        </label>
                        <input
                          type="text"
                          placeholder="1"
                          className="w-16 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="text-[#2f206b]">
                          Price.
                        </label>
                        <input
                          type="text"
                          placeholder="400.00"
                          className="w-24 border border-[#7C5DFA] p-4 rounded-md border-opacity-70 outline-transparent font-bold focus:outline-[#7C5DFA] focus:duration-300 placeholder:tracking-wide"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="" className="mb-[17px] text-[#2f206b]">
                          Total
                        </label>
                        <span className="font-extrabold text-[#7C5DFA] opacity-70">
                          400.00
                        </span>
                      </div>
                    </div>
                    <div>
                      <img src={deleteIcon} alt="" className="mt-[30px] w-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Button Check. */}
              <AddNewItem />

              <div className="flex flex-row justify-between pt-8 border-t-2">
                <div className="border border-transparent text-[#564791] bg-[#776e9c] rounded-full p-2 bg-opacity-30 font-bold px-3 cursor-pointer">
                  Discard
                </div>
                <div className="border border-transparent text-[#78738d] bg-[#2f206b] rounded-full p-2 font-bold px-3 cursor-pointer">
                  Save as Draft
                </div>
                <div className="border border-transparent text-white bg-[#3b1cb6] rounded-full p-2 font-semibold px-3 cursor-pointer">
                  Save & Send
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
