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

<svg width="0" height="0">
  <defs>
    <clipPath id="myClip">
    <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 12.6863 0 7.02944 3.51472 3.51472C7.02944 0 12.6863 0 24 0H366C377.314 0 382.971 0 386.485 3.51472C390 7.02944 390 12.6863 390 24V196C390 207.314 390 212.971 386.485 216.485C383.91 219.06 380.185 219.749 373.929 219.933C373.404 216.287 370.054 213.476 366 213.476C361.921 213.476 358.555 216.322 358.062 220H342.938C342.445 216.322 339.079 213.476 335 213.476C330.921 213.476 327.555 216.322 327.062 220H311.938C311.445 216.322 308.079 213.476 304 213.476C299.921 213.476 296.555 216.322 296.062 220H280.938C280.445 216.322 277.079 213.476 273 213.476C268.921 213.476 265.555 216.322 265.062 220H249.938C249.445 216.322 246.079 213.476 242 213.476C237.921 213.476 234.555 216.322 234.062 220H218.938C218.445 216.322 215.079 213.476 211 213.476C206.921 213.476 203.555 216.322 203.062 220H187.938C187.445 216.322 184.079 213.476 180 213.476C175.921 213.476 172.555 216.322 172.062 220H156.938C156.445 216.322 153.079 213.476 149 213.476C144.921 213.476 141.555 216.322 141.062 220H125.938C125.445 216.322 122.079 213.476 118 213.476C113.921 213.476 110.555 216.322 110.062 220H94.938C94.4453 216.322 91.0792 213.476 87 213.476C82.9208 213.476 79.5547 216.322 79.062 220H63.938C63.4453 216.322 60.0792 213.476 56 213.476C51.9208 213.476 48.5547 216.322 48.062 220H32.938C32.4453 216.322 29.0792 213.476 25 213.476C20.9365 213.476 17.5806 216.3 17.0679 219.958C10.2049 219.815 6.2236 219.194 3.51472 216.485C0 212.971 0 207.314 0 196V24Z"/>
    </clipPath>
  </defs>
</svg>
        <div className="drop-shadow-xl">

        <div className="clip-styling font-bold text-[rgba(15,25,26,0.51)] grid-rows-5 grid bg-white h-60 m-3 mt-7 rounded-md p-4  ">
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
        </div>


        <div className="mt-5 flex-grow border-t border-[#b7b7b78b] border-solid"></div>
        </div>
      )}
    </>
  );
}

export default OrderSummaryHero;
