import React from "react";
import { IsMobileWidth } from "../../utils/utils";
import clsx from "clsx";

export default function Navbar() {
  const mobileWidth = IsMobileWidth();
  return (
    <div
      className={clsx(
        "w-full flex  items-center p-5",
        mobileWidth && "justify-center",
        !mobileWidth && "justify-end"
      )}
    >
      <div
        className={clsx(
          "flex justify-between",
          mobileWidth && "w-full text-lg",
          !mobileWidth && "w-2/12 text-xl"
        )}
      >
        <p className="font-bold">Works</p>
        <p className="font-bold">Blog</p>
        <p className="font-bold">Contact</p>
      </div>
    </div>
  );
}
