import { useState } from "react";
//importing img assets
import recipeApp from "../assets/recipeApp.png";

export default function Portfolio() {
  return (
    <>
      <div className="mb-5 flex gap-4 flex-wrap justify-center lg:justify-start">
        <div className="h-[400px] w-[320px] shadow-2xl p-3 rounded-2xl">
          <p className=" mb-2 font-medium">Ecommerce Project: Recipe box App</p>

          <img
            src={recipeApp}
            className="h-[160px] w-[100%] shadow-inner mx-auto mb-2"
          />
          <p className=" text-sm">
            Developed Object Oriented Web Applicaiton Used primarily HTML,CSS,
            JavaScript for the front end and used PHP for server side. Created
            an API to access a relational database I designed
            <br />
            <br />
            <a
              onClick={() => window.open("")}
              className="underline text-blue-900 hover:cursor-pointer"
            >
              See demo
            </a>
          </p>
        </div>
        <div className="h-[400px] min-w-[320px] shadow-2xl"></div>
      </div>
    </>
  );
}
