import React from "react";

interface PropType {
  children: React.ReactNode;
}
function ScreenFrame({ children }: PropType) {
  return (
    <div className="relative h-[850px] w-[400px] m-4 rounded border-2 border-x-black border-solid">
      {children}
    </div>
  );
}

export default ScreenFrame;
