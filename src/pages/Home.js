import { NavLink } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiSubstack } from "react-icons/si";
import ModalCV from "../components/ModalCV.js";

export default function Home() {
  return (
    <>
      <div className=" mb-5">
        <p className=" text-black">
          I'm Jihun Park. I consider myself to be a proactive, inquisitive, and
          tech-savvy individual, and I think this is reflected in my
          achievements to date. I won the 'CREST' gold award at A-level, the
          Kingston University Bright Ideas business startup competition, and am
          currently mentoring level-4 Computer Science students.
          <br />
          <br />
          Having lived and studied independently in Korea, Singapore, and
          England, I've cultivated both confidence and effective cross-cultural
          communication skills.
          <br />
          <br />
          Teamwork is my forte, and I enjoy gaining new insights that contribute
          to my career aspirations. I am seeking a placement year in software
          development within the IT sector where I can broaden my industry
          experience, and am particularly interested in software development
          roles.
          <br />
          <br />
          View my CV <ModalCV /> or take a look at some of the{" "}
          <NavLink to="/experiences" className=" text-blue-600 underline">
            experiences
          </NavLink>{" "}
          I've had or my{" "}
          <NavLink to="/portfolio" className=" text-blue-600 underline">
            portfolio
          </NavLink>{" "}
          to see what sort of projects I've worked on.
          <br />
          <br />
          <div className="flex justify-start gap-5 text-3xl">
            <AiFillGithub
              className=" hover:cursor-pointer"
              onClick={() => {
                window.location.href = "https://github.com/JihunPark0";
              }}
            />
            <AiFillLinkedin
              className=" hover:cursor-pointer"
              onClick={() =>
                (window.location.href = "https://www.linkedin.com/in/jihun-prk")
              }
            />
            <SiSubstack
              className=" hover:cursor-pointer"
              onClick={() =>
                (window.location.href =
                  "https://substack.com/profile/149125232-jihun-park?utm_source=profile-page")
              }
            />
          </div>
        </p>
      </div>
    </>
  );
}
