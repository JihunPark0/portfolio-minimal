import { useState } from "react";
export default function Experiences(props) {
  return (
    <div className="mb-5">
      <p className="mb-5">
        This is the experiences in the U Developed Object Oriented Web
        Applicaiton Used primarily HTML,CSS,
        <br /> <br />
        JavaScript for the front end and used PHP for server side. Created an
        API to access a relational database I designedK
      </p>
      {props.experiences.map((experience) => {
        return (
          <div className="mb-3 py-3 w-[100%] border-t border-b border-gray flex justify-between">
            <p className=" mb-0 text-gray-600 text-sm">
              {experience.experience}
            </p>
            <p className="mb-0 whitespace-pre mx-14 text-gray-400 text-sm">
              {experience.date}
            </p>
          </div>
        );
      })}
    </div>
  );
}
