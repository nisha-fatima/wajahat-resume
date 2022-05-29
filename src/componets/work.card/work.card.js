import React from 'react'
import { IsMobileWidth } from "../../utils/utils";
import clsx from "clsx";

export default function WorkCard(props) {
  const { heading, text, image, pera, year } = props;
  const mobileWidth = IsMobileWidth();

  return (
    <div className={clsx("flex",mobileWidth && "flex-col" )}>
      <div className={clsx(mobileWidth && "w-full", !mobileWidth && "w-3/12" )}>
        <img src={image} alt={text} className="rounded-md w-full h-full" />
      </div>
      <div className={clsx(mobileWidth && "w-full text-center mt-5", !mobileWidth && "w-9/12 ml-10" )}>
        <p className='text-3xl font-bold'>{heading}</p>
        <div className='mt-3 flex items-center'>
          <p className='bg-black-50 rounded-full pl-3 pr-3 pt-1 pb-1 w-20 text-center text-white text-lg font-bold'>
            {year}
          </p>
          <p className='ml-5 text-xl font-bold text-gray-300'>
            {text}
          </p>
          
        </div>
        <p className='mt-5 text-lg font-semibold'>
            {pera}
          </p>
      </div>
    </div>
  )
}
