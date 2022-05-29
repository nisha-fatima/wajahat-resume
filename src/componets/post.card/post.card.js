import React from "react";
import { IsMobileWidth } from "../../utils/utils";
import clsx from "clsx";

export default function PostCard(props) {
  const { heading, text, pera, date } = props;
  const mobileWidth = IsMobileWidth();

  return (
    <div className="p-5 h-full bg-white">
      <p className="text-3xl font-bold">{heading}</p>
      <div className={clsx("flex justify-between items-center mt-5", !mobileWidth && "mr-20", mobileWidth && "text-center")}>
        <p className="text-lg mt-5">{date}</p>
        <p className="mt-5">|</p>
        <p className="text-lg mt-5">{text}</p>
      </div>
      <p className="text-lg mt-5">{pera}</p>
    </div>
  );
}
