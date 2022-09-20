import React from "react";
import BackBtn from "./misc/BackBtn";

interface PropType {
  completed?: Boolean;
}
function OrderSummaryHero({ completed }: PropType) {
  return (
    <>
      <div className="grid grid-cols-5 m-2 text-center">
        <BackBtn />
        {completed ? (
          <div className="p-3 text-center text-2xl col-span-3 font-bold">
            Order details
          </div>
        ) : (
          <div className="col-span-3">
            <div className="font-bold text-2xl">Order 1</div>
            <div className="text-blue-700 font-semibold">
              Order ID: 123456789
            </div>
          </div>
        )}
      </div>
      {completed ? (
        <div className="m-4 mb-8 mx-auto mt-5 border-dashed border-[#4361EE] border-2 h-14 text-center p-2 rounded w-11/12 bg-[#4362ee2c]">
          <div className="text-[#4e6cf6] font-bold inline-block m-1">Note:</div>
          Your order for the past 24 hrs
        </div>
      ) : (
        <div>

        <div className="font-bold text-[rgba(15,25,26,0.51)] grid-rows-5 grid bg-white h-60 m-3 mt-7 rounded-md p-4 drop-shadow-xl">
          <div className="row-span-3 grid-rows-3 grid">
            <div>
              Total items <div className="float-right text-black">4</div>
            </div>
            <div>
              Total amount <div className="float-right text-black">₹550 </div>
            </div>
            <div>
              Discount <div className="float-right text-[#2FBF71]">-₹50 </div>
            </div>
          </div>
          <div className="m-2 flex-grow border-t border-gray-400 border-dashed"></div>
          <div className="text-[#E63946] ">
            GRAND TOTAL <div className="text-[#4361EE] float-right">₹500 </div>
          </div>
        </div>
        <div className="mt-5 flex-grow border-t border-[#b7b7b78b] border-solid"></div>
        </div>
      )}
    </>
  );
}

export default OrderSummaryHero;
