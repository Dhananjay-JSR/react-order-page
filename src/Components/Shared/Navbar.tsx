import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faBatteryFull,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
interface PropType {
  date: String;
}
function Navbar({ date }: PropType) {
  return (
    <div className="flex justify-between h-14">
      <div className="select-none p-4 font-semibold text-center">{date}</div>
      <div className="w-28 flex justify-between items-center p-4">
        <FontAwesomeIcon icon={faSignal} />
        <FontAwesomeIcon icon={faWifi} />
        <FontAwesomeIcon icon={faBatteryFull} />
      </div>
    </div>
  );
}

export default Navbar;
