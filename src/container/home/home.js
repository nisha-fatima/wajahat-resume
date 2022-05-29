import React from "react";
import Navbar from "../../componets/navbar/navbar";
import personImage from "../../assets/personImage.jpg";
import PostCard from "../../componets/post.card/post.card";
import WorkCard from "../../componets/work.card/work.card";
import one from "../../assets/1.jpg";
import two from "../../assets/2.jpg";
import three from "../../assets/3.jpg";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import { IsMobileWidth } from "../../utils/utils";
import clsx from "clsx";

export default function Home() {
  const mobileWidth = IsMobileWidth();

  return (
    <div>
      <Navbar />
      <div
        className={clsx(
          "p-5 flex items-center justify-center w-full",
          mobileWidth && "mt-10",
          !mobileWidth && "mt-44"
        )}
      >
        <div
          className={clsx(
            "flex",
            mobileWidth && "w-full flex-col-reverse",
            !mobileWidth && "w-9/12"
          )}
        >
          <div
            className={clsx(
              mobileWidth && "w-full mt-10 text-center",
              !mobileWidth && "w-9/12"
            )}
          >
            <h3 className="font-bold text-5xl">
              Hi, I am John,
              <br />
              Creative Technologist
            </h3>
            <p className="text-lg mt-5">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet <br />
              sint. Velit officia consequat duis enim velit mollit. Exercitation
              veniam <br />
              consequat sunt nostrud amet.
            </p>
            <button className="mt-5 w-56 bg-red-400 rounded-sm text-white h-14 text-lg font-bold">
              Download Resume
            </button>
          </div>
          <div
            className={clsx(mobileWidth && "w-full flex justify-center", !mobileWidth && "w-3/12")}
          >
            <img
              src={personImage}
              alt="personImage"
              className="rounded-full w-72 h-72 object-cover"
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "p-5 pt-15 pb-20 flex items-center justify-center w-full bg-sky-100",
          mobileWidth && "mt-16",
          !mobileWidth && "mt-32"
        )}
      >
        <div
          className={clsx(
            "flex flex-col",
            mobileWidth && "w-full",
            !mobileWidth && "w-9/12"
          )}
        >
          <div className="flex justify-between w-full">
            <p className="text-2xl">Recent Posts</p>
            <p className="underline text-sky-400 text-lg">View all</p>
          </div>
          <div
            className={clsx(
              "mt-5 flex",
              mobileWidth && "justify-center flex-col",
              !mobileWidth && "justify-between"
            )}
          >
            <div
              className={clsx(
                mobileWidth && "w-full",
                !mobileWidth && "w-5/12"
              )}
            >
              <PostCard
                heading="Creating pixel perfect icons in Figma"
                text="Figma, Icon Design"
                pera="Amet minim mollit non deserunt ullamco est sit
                    aliqua dolor do amet sint. Velit officia consequat
                    duis enim velit mollit. Exercitation veniam
                    consequat sunt nostrud amet."
                date="12 Feb 2020"
              />
            </div>
            <div
              className={clsx(
                mobileWidth && "w-full mt-5",
                !mobileWidth && "w-5/12"
              )}
            >
              <PostCard
                heading="Creating pixel perfect icons in Figma"
                text="Figma, Icon Design"
                pera="Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. Velit officia consequat
                        duis enim velit mollit. Exercitation veniam
                        consequat sunt nostrud amet."
                date="12 Feb 2020"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={clsx(
          " flex items-center justify-center w-full mt-5",
          mobileWidth && "p-1",
          !mobileWidth && "p-5"
        )}
      >
        <div className="flex w-8/12 flex-col">
          <p className="text-xl font-semibold">Featured Works</p>
          <div className="mt-5 mb-7 w-11/12">
            <WorkCard
              image={one}
              heading="Designing Dashboards"
              year="2020"
              text="Dashoard"
              pera="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
          </div>
          <hr />
          <div className="mt-7 mb-7 w-11/12">
            <WorkCard
              image={two}
              heading="Vibrant Portraits of 2020"
              year="2018"
              text="Illustration"
              pera="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
          </div>
          <hr />
          <div className="mt-7 mb-7 w-11/12">
            <WorkCard
              image={three}
              heading="36 Days of Malayalam type"
              year="2018"
              text="Typography"
              pera="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
            />
          </div>
        </div>
      </div>
      <div className="p-5 flex items-center justify-center w-full mt-20">
        <div className="flex w-8/12 justify-center">
          <img src={facebook} alt="facebook" className="w-10 h-10" />
          <img src={instagram} alt="instagram" className="ml-4 w-10 h-10" />
          <img src={twitter} alt="twitter" className="ml-4 w-10 h-10" />
          <img src={linkedin} alt="linkedin" className="ml-4 w-10 h-10" />
        </div>
      </div>
    </div>
  );
}
