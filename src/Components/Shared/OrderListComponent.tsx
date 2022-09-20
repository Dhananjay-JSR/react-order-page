import React from "react";
import food from "./misc/food.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

type ConditionalProps =
  | {
      completed?: never;
      CookType: "prepared" | "unavailable";
      Quantity?: Number;
      ID?: never;
      FoodName: String;
      Price: Number;
    }
  | {
      completed: boolean;
      CookType: "prepared" | "served" | "pending";
      Quantity?: never;
      ID: number;
      FoodName: String;
      Price: Number;
    };

function OrderListComponent({
  CookType,
  completed,
  FoodName,
  Price,
  Quantity,
  ID,
}: ConditionalProps) {
  return (
    <>
      {completed ? (
        <div className="mt-5 mb-5 h-20 w-[95%] grid grid-cols-6 mx-auto rounded-md border-solid  border-[#E63946] border-2 ">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center h-[75%] w-[75%] bg-[#f166722b] rounded-md">
              <svg
                width="32"
                height="32"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.893 10.6668H4.66638C4.13305 10.6668 3.62638 10.8801 3.25305 11.2535C2.87972 11.6268 2.66638 12.1401 2.66638 12.6668C2.66638 13.1935 2.87972 13.7068 3.25305 14.0801C3.46638 14.2935 3.71971 14.4535 3.99971 14.5535V15.3735H2.73972C1.61305 15.3735 0.666382 16.3335 0.666382 17.5268C0.686382 18.7135 1.63305 19.6601 2.75305 19.6535H3.99971V22.9735C3.99971 25.3735 5.93305 27.3335 8.26638 27.3335H19.733C22.0664 27.3335 23.9997 25.3668 23.9997 22.9735V19.6535H25.273C26.393 19.6468 27.333 18.6868 27.333 17.5001C27.333 17.4801 27.333 17.5201 27.333 17.5001C27.313 16.3335 26.3797 15.3401 25.273 15.3335H23.9997V14.5535C24.2797 14.4535 24.533 14.2935 24.7464 14.0801C25.1197 13.7068 25.333 13.1935 25.333 12.6668C25.333 12.1401 25.1197 11.6268 24.7464 11.2535C24.373 10.8801 23.8597 10.6668 23.333 10.6668H22.4664L24.493 6.10014C24.913 5.16681 24.533 4.03347 23.6597 3.55347H23.653C23.3864 3.40681 23.0864 3.33347 22.7797 3.33347C21.9864 3.33347 21.2664 3.84681 20.993 4.62681L18.893 10.6668ZM5.33305 14.6668V22.9735C5.33305 24.6335 6.65305 26.0001 8.26638 26.0001H19.733C21.3464 26.0001 22.6664 24.6268 22.6664 22.9735V14.6668H5.33305ZM5.99971 20.0001V22.6601C5.99971 23.3668 6.27972 24.0535 6.78638 24.5535C7.28638 25.0535 7.96638 25.3401 8.67972 25.3401H10.0064C10.373 25.3401 10.673 25.0401 10.673 24.6735C10.673 24.3068 10.373 24.0068 10.0064 24.0068H8.67972C8.32638 24.0068 7.97971 23.8668 7.73305 23.6135C7.47971 23.3601 7.33972 23.0201 7.33972 22.6668V20.0068C7.33972 19.6401 7.03971 19.3401 6.67305 19.3401C6.30638 19.3401 6.00638 19.6401 6.00638 20.0068L5.99971 20.0001ZM16.6664 16.0001C16.6664 15.6335 16.3664 15.3335 15.9997 15.3335H11.9997C11.633 15.3335 11.333 15.6335 11.333 16.0001V18.0001C11.333 18.3668 11.633 18.6668 11.9997 18.6668H15.9997C16.3664 18.6668 16.6664 18.3668 16.6664 18.0001V16.0001ZM23.9997 16.6668H25.2664C25.673 16.6668 25.993 17.0735 25.9997 17.5001C25.9997 17.9335 25.6797 18.3135 25.2664 18.3201H23.9997V16.6668ZM3.99971 18.3135H2.74638C2.33305 18.3135 2.01305 17.9468 1.99972 17.5201C1.99972 17.0801 2.32638 16.7001 2.73972 16.7001H3.99971V18.3135ZM15.333 16.6668V17.3335H12.6664V16.6668H15.333ZM23.333 13.3335H4.66638C4.48638 13.3335 4.31972 13.2601 4.19305 13.1401C4.06638 13.0135 3.99971 12.8468 3.99971 12.6668C3.99971 12.4868 4.07305 12.3201 4.19305 12.1935C4.31972 12.0668 4.48638 12.0001 4.66638 12.0001H23.333C23.513 12.0001 23.6797 12.0735 23.8064 12.1935C23.933 12.3201 23.9997 12.4868 23.9997 12.6668C23.9997 12.8468 23.9264 13.0135 23.8064 13.1401C23.6797 13.2668 23.513 13.3335 23.333 13.3335ZM21.0064 10.6668L23.273 5.55347C23.4064 5.24681 23.3064 4.88014 23.0197 4.72014C22.9464 4.68014 22.8597 4.66014 22.7797 4.66014C22.5397 4.66014 22.333 4.82681 22.2464 5.06014L20.2997 10.6601H21.0064V10.6668ZM13.7064 0.733473C13.7064 0.733473 12.333 1.42681 12.053 2.68014C11.873 3.48014 12.0797 4.57347 13.5664 5.84014C14.4797 6.61347 14.753 7.20681 14.6397 7.69347C14.4864 8.38014 13.6997 8.73347 13.6997 8.73347C13.3664 8.89347 13.233 9.29347 13.393 9.62681C13.553 9.96014 13.953 10.0935 14.2864 9.93347C14.2864 9.93347 15.6597 9.24014 15.9397 7.98681C16.1197 7.18681 15.913 6.08681 14.4264 4.82681C13.513 4.05347 13.2397 3.46681 13.353 2.97347C13.5064 2.28681 14.2864 1.94014 14.2864 1.94014C14.6197 1.78014 14.753 1.38014 14.593 1.04681C14.433 0.713473 14.033 0.58014 13.6997 0.74014L13.7064 0.733473ZM17.713 2.08681C17.713 2.08681 16.8197 2.60014 16.633 3.53347C16.5197 4.11347 16.633 4.89347 17.5664 5.80681C18.0264 6.25347 18.1797 6.59347 18.1264 6.88014C18.0597 7.23347 17.7064 7.42014 17.7064 7.42014C17.3864 7.60014 17.273 8.00681 17.453 8.32681C17.633 8.64681 18.0397 8.76014 18.3597 8.58014C18.3597 8.58014 19.253 8.06681 19.433 7.12681C19.5464 6.54681 19.433 5.76681 18.4997 4.85347C18.0464 4.40681 17.8864 4.06681 17.9397 3.78681C18.0064 3.43347 18.3597 3.24681 18.3597 3.24681C18.6797 3.06681 18.793 2.66014 18.6197 2.34014C18.4397 2.02014 18.033 1.90681 17.713 2.08014V2.08681ZM9.59305 2.09347C9.59305 2.09347 8.72638 2.60014 8.55305 3.54014C8.44638 4.11347 8.55971 4.89347 9.45305 5.80014C9.89305 6.25347 10.0464 6.60014 9.99305 6.88681C9.92638 7.24014 9.59305 7.42681 9.59305 7.42681C9.27305 7.61347 9.16638 8.02014 9.35305 8.34014C9.53971 8.66014 9.94638 8.76681 10.2664 8.58014C10.2664 8.58014 11.133 8.06681 11.3064 7.12681C11.413 6.55347 11.2997 5.77347 10.4064 4.86681C9.96638 4.41347 9.81305 4.06681 9.86638 3.78681C9.93305 3.43347 10.2664 3.24681 10.2664 3.24681C10.5864 3.06014 10.693 2.65347 10.5064 2.33347C10.3197 2.01347 9.91305 1.90681 9.59305 2.09347Z"
                  fill="#E63946"
                />
              </svg>
            </div>
          </div>
          <div className="col-span-3 p-1">
            <div className="font-semibold text-2xl">{FoodName}</div>
            <div className="text-[#4361EE] text-xl">
              Total:
              <div className="font-bold inline-block">₹{Price.toString()}</div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col justify-evenly ">
            <div className="font-bold">
              <div className="text-black inline-block">ID:</div>
              <div className="text-red-600 inline-block">{ID.toString()}</div>
            </div>

            {CookType === "prepared" ? (
              <div className=" w-max bg-[#4362ee29] rounded-xl text-sm px-2 py-1 ">
                <div className="text-[#4361EE] inline-block font-medium text-xs">
                  Being prepared
                </div>
                <div className="inline-block mx-1">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6233 6.39895C10.6233 8.73155 8.73016 10.6247 6.39757 10.6247C4.06497 10.6247 2.17184 8.73155 2.17184 6.39895C2.17184 4.06635 4.06497 2.17323 6.39757 2.17323C8.73016 2.17323 10.6233 4.06635 10.6233 6.39895Z"
                      stroke="#4361EE"
                      stroke-width="0.724409"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.39763 3.86371V6.27841"
                      stroke="#4361EE"
                      stroke-width="0.724409"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.94881 0.966072H7.84644"
                      stroke="#4361EE"
                      stroke-width="0.724409"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ) : CookType === "served" ? (
              <div className="w-full m">
                <div className=" drop-shadow-lg ml-auto mr-2 w-max bg-[#cffae3] rounded-xl text-sm px-2 py-1 ">
                  <div className="text-[#2FBF71]  inline-block font-bold text-xs">
                    Served
                  </div>
                  <div className="inline-block mx-1">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 11C8.75 11 11 8.75 11 6C11 3.25 8.75 1 6 1C3.25 1 1 3.25 1 6C1 8.75 3.25 11 6 11Z"
                        stroke="#2FBF71"
                        stroke-width="0.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.875 6.00002L5.29 7.41502L8.125 4.58502"
                        stroke="#2FBF71"
                        stroke-width="0.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ) : CookType === "pending" ? (
              <div className="w-full m relative">
                <div className="absolute -top-4 right-0 ml-auto mr-2 w-max bg-[#fef8e7] rounded-xl text-sm px-2 py-1 ">
                  <div className="text-[#F9CA41]  inline-block font-bold text-[10px]">
                    Confirmation Pending
                  </div>
                  <div className="inline-block mx-1">
                    <svg
                      width="13"
                      height="12"
                      viewBox="0 0 13 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.49502 1H5.25502C3.37502 1 3.23002 2.69 4.24502 3.61L9.50502 8.39C10.52 9.31 10.375 11 8.49502 11H5.25502C3.37502 11 3.23002 9.31 4.24502 8.39L9.50502 3.61C10.52 2.69 10.375 1 8.49502 1Z"
                        stroke="#F9CA41"
                        stroke-width="0.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div
          className={` mt-5 mb-5 h-24 w-[95%] grid grid-cols-8 mx-auto rounded-md border-solid  border-2 ${
            CookType === "unavailable" ? `border-[#D90429]` : `border-[#fce7ab]`
          } `}
        >
          <div className="flex col-span-2 justify-center items-center ">
            {/*" */}

            <div
              className={`w-max h-max  ${
                CookType === "unavailable"
                  ? `relative z-10 before:bg-no-repeat after:rounded-md after:contents-[''] after:absolute after:w-full after:h-full after:bg-[#00000099] after:top-0 after:left-0  after:z-30           before::rounded-md after:contents-[''] before:absolute before:w-full before:h-full  before:top-0 before:left-0  before:bg-center before:bg-[url("data:image/svg+xml,%3Csvg%20width%3D%2236%22%20height%3D%2234%22%20viewBox%3D%220%200%2036%2034%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M34.2666%2023.5333L23.6%204.33334C22.1666%201.75001%2020.1833%200.333344%2018%200.333344C15.8166%200.333344%2013.8333%201.75001%2012.4%204.33334L1.7333%2023.5333C0.383296%2025.9833%200.233296%2028.3333%201.31663%2030.1833C2.39996%2032.0333%204.5333%2033.05%207.3333%2033.05H28.6666C31.4666%2033.05%2033.6%2032.0333%2034.6833%2030.1833C35.7666%2028.3333%2035.6166%2025.9667%2034.2666%2023.5333ZM16.75%2012C16.75%2011.3167%2017.3166%2010.75%2018%2010.75C18.6833%2010.75%2019.25%2011.3167%2019.25%2012V20.3333C19.25%2021.0167%2018.6833%2021.5833%2018%2021.5833C17.3166%2021.5833%2016.75%2021.0167%2016.75%2020.3333V12ZM19.1833%2026.5167C19.1%2026.5833%2019.0166%2026.65%2018.9333%2026.7167C18.8333%2026.7833%2018.7333%2026.8333%2018.6333%2026.8667C18.5333%2026.9167%2018.4333%2026.95%2018.3166%2026.9667C18.2166%2026.9833%2018.1%2027%2018%2027C17.9%2027%2017.7833%2026.9833%2017.6666%2026.9667C17.5666%2026.95%2017.4666%2026.9167%2017.3666%2026.8667C17.2666%2026.8333%2017.1666%2026.7833%2017.0666%2026.7167C16.9833%2026.65%2016.9%2026.5833%2016.8166%2026.5167C16.5166%2026.2%2016.3333%2025.7667%2016.3333%2025.3333C16.3333%2024.9%2016.5166%2024.4667%2016.8166%2024.15C16.9%2024.0833%2016.9833%2024.0167%2017.0666%2023.95C17.1666%2023.8833%2017.2666%2023.8333%2017.3666%2023.8C17.4666%2023.75%2017.5666%2023.7167%2017.6666%2023.7C17.8833%2023.65%2018.1166%2023.65%2018.3166%2023.7C18.4333%2023.7167%2018.5333%2023.75%2018.6333%2023.8C18.7333%2023.8333%2018.8333%2023.8833%2018.9333%2023.95C19.0166%2024.0167%2019.1%2024.0833%2019.1833%2024.15C19.4833%2024.4667%2019.6666%2024.9%2019.6666%2025.3333C19.6666%2025.7667%2019.4833%2026.2%2019.1833%2026.5167Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A")] before:z-40`
                  : null
              }  `}
            >
              <img
                alt="Food"
                className=" h-[100%] w-[100%] rounded-md"
                src={food}
              />
            </div>
          </div>
          <div className="col-span-3 p-2 ">
            <div className="font-semibold ">{FoodName}</div>
            <div className="text-[#a3a7a7] font-semibold">₹170</div>
          </div>
          {CookType === "prepared" ? (
            <div className="col-span-3 flex flex-col justify-evenly ">
              <div className=" w-max bg-[#4362ee29] rounded-xl text-sm px-2 py-1 ">
                <div className="text-[#4361EE] inline-block font-medium text-xs">
                  Being prepared
                </div>
                <div className="inline-block mx-1">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6233 6.39895C10.6233 8.73155 8.73016 10.6247 6.39757 10.6247C4.06497 10.6247 2.17184 8.73155 2.17184 6.39895C2.17184 4.06635 4.06497 2.17323 6.39757 2.17323C8.73016 2.17323 10.6233 4.06635 10.6233 6.39895Z"
                      stroke="#4361EE"
                      stroke-width="0.724409"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.39763 3.86371V6.27841"
                      stroke="#4361EE"
                      stroke-width="0.724409"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.94881 0.966072H7.84644"
                      stroke="#4361EE"
                      stroke-width="0.724409"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full">
                <div className="float-right mr-5 text-red-600 inline-block font-semibold">
                  Qty:
                  <div className="inline-block font-bold">
                    {Quantity != null ? Quantity.toString() : "NaN"} Nos
                  </div>
                </div>
              </div>
            </div>
          ) : CookType === "unavailable" ? (
            <div className="col-span-3 flex flex-col justify-evenly ">
              <div className="w-max ml-auto mr-2 bg-[#ffd7da] rounded-xl text-sm px-4 py-1 ">
                <div className="text-[#D90429] inline-block font-medium text-xs">
                  Item unavailable
                </div>
              </div>
              <div className="w-full">
                <div className="float-right mr-5 text-red-600 inline-block font-semibold">
                  <div className="inline-block font-bold text-2xl">
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

export default OrderListComponent;
