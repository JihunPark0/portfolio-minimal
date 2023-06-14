import { NavLink } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiSubstack } from "react-icons/si";
import ModalCV from "../components/ModalCV.js";

export default function Home() {
  return (
    <>
      <div className=" mb-5">
        <p className=" text-black">
          Hi I'm Jihun Park. As a proactive, inquisitive, and tech-savvy
          individual, I've sharpened my critical thinking process through
          earning the 'CREST' gold award at A-level, winning a university-wide
          startup competition, and currently mentoring Level-4 Computer Science
          students.
          <br />
          <br />
          Having lived and studied independently in Korea, Singapore, and
          England, I've cultivated both confidence and effective cross-cultural
          communication skills.
          <br />
          <br />
          Teamwork is my forte, and I relish in gaining new insights that
          contribute to my career aspirations. Now, I'm thrilled to seek a
          placement year in software development within the IT sector. Ready to
          join forces and create remarkable things! Now, I'm eager to find
          experiences in the IT sector, with a keen interest in software
          development roles.
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
