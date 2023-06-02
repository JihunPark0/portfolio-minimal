import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
export default function ModalCV() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <p
        onClick={handleShow}
        className=" inline text-blue-600 hover:cursor-pointer underline"
      >
        here
      </p>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        animation={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <div className="p-5">
          <div className="text-center mb-4">
            <h1>Jihun Park</h1>
            <p className=" my-0">Kingston Upon Thames, London</p>
            <p className=" my-0">jihunpark0989@gmail.com</p>
            <NavLink>https://www.linkedin.com/in/jihun-prk</NavLink>
          </div>

          <p>
            I am a pro-active, inquisitive, and technical individual with
            demonstrated critical thinking skills gained through the achievement
            of the 'CREST’ gold award and as an academic mentor for Level-4
            students. I am a global citizen having lived and studied in Korea,
            Singapore, and England developing confidence and effective
            communication skills to work across diverse backgrounds. Worked
            collaboratively to achieve team objectives whilst building knowledge
            and experience beneficial for my future career goals. Currently
            looking for a placement year within the IT sector, specifically in
            software development roles.
          </p>

          <h4 className="text-sm font-bold">TECHNICAL SKILLS</h4>
          <ul className="list-disc">
            <li>Strong fundamentals on Object Oriented programming in Java</li>
            <li>
              Understand the concept of Relational Databases, ER models and SQL
            </li>
            <li>
              Strong fundamentals in web technologies: JavaScript, HTML, CSS ,
              PHP, MySQL, PhpMyAdmin
            </li>
            <li>Strong foundation on frameworks like jQuery and React.</li>
            <li>
              Familiar with Agile project management principles and in SCRUM and
              KANBAN methodologies and regularly use tools such as Trello
            </li>
          </ul>
          <h4 className="text-sm font-bold">CORE SKILLS</h4>
          <ul className="list-disc">
            <li>
              Leadership and interpersonal skills through genuine empathy and
              communication; team leader (team of 5) for start-up competition
              project (Bright Ideas 2022){" "}
            </li>
            <li>
              Communication skill developed through living across different
              countries and culture
            </li>
            <li>
              Time management skills gained through managing both curricular,
              extra-curricular activity and personal life.{" "}
            </li>
            <li>Fluent in English and Korean</li>
          </ul>
          <h4 className="text-sm font-bold">EDUCATION</h4>
          <ul className="list-disc">
            <li>
              <p className="font-medium my-0">
                BSc (Hons) Computer Science, Kingston University, Sep 2021 to
                Present
              </p>
              <p className="">Grades achieved at Year 1 – Straight A’s</p>
              <p>
                Notable Modules - Programming I. Computing Fundamentals,
                Requirement analysis and Design, Professional Environments
              </p>
            </li>
            <li>
              <p className="font-medium my-0">Year 2 Modules</p>
              <p>
                Programming II, Database Driven Application Development,
                Computing Systems, Professional Environments II
              </p>
            </li>
            <li>
              <p className="font-medium my-0">
                A-Levels, INTO UEA, Sep 2019 to Jul 2021
              </p>

              <p>Psychology (C), Economics (B), Mathematics (C)</p>
            </li>
          </ul>
          <h4 className="text-sm font-bold">ACADEMIC ACHIEVEMENTS</h4>
          <p>
            A LEVEL ‘CREST’ Gold Award– INTER DISCIPLINARY ANALYSIS OF THE
            SUSTAINABILITY OF THE NHS
          </p>
          <p>
            This group research project (70+ hours) explored the sustainability
            of the NHS during the peak times of the COVID 19 pandemic, which
            involved mainly primary and secondary research in a group of 5.
            Achieved gold award
          </p>
          <ul className="list-disc">
            <li>
              Conducted primary research to gather insights on what was
              happening within the NHS. Especially problems that nurses and
              doctors were facing due to rapid change in system.{" "}
            </li>
            <li>
              Produced report which concluded that the NHS was not sustainable
              for the foreseeable future.
            </li>
          </ul>
          <h4 className="text-sm font-bold">PROFESSIONAL EXPERIENCE</h4>
          <p>
            Paid Computer Science Academic Peer Mentor, Kingston University (Sep
            2022 - Present){" "}
          </p>
          <p>
            Recommended by my module leader to take part in a paid program to
            improve the progression rate of level 4 students to level 5 Kingston
            University through mentoring.
          </p>
          <ul className="list-disc">
            <li>
              Mentored three modules: Programming I; Computing fundamentals;
              Professional Environment.
            </li>
            <li>Supported lead lecturer at workshops in a team of 4 to 7.</li>
            <li>
              Simplified the delivery of topics to help broaden mentee's
              technical knowledge and skills in Computer Science.
            </li>
          </ul>
          <h4 className="text-sm font-bold">EXTRA- CURRICULAR ACTIVITY </h4>
          <ul className="list-disc">
            <li>
              Winner of Kingston University Annual Start Up Competition:
              Computer Science category
            </li>
            <li>
              Student course representative for level 5 Computer Science Course
              (2022)
            </li>
            <li>
              Work Experience as a bike mechanic at Cycle King Cambridge – bike
              store (2018)
            </li>
          </ul>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Back to home
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
