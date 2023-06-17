import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experiences from "./pages/Experiences";
import { useState, useEffect } from "react";

function App() {
  const [experiences, setExperiences] = useState([
    {
      experience: "A Level: Economics, Maths, Psychology",
      date: "2019 Sep - 2021 Jul",
    },
    {
      experience: "BSc Computer Science",
      date: "2021 Sep - Current",
    },
    {
      experience:
        "Paid Academic mentor for first year and Second year CS students",
      date: "2022 Sep - Current",
    },
    {
      experience:
        "Winner of Bright Ideas (Computer Science Catagory) -University wide Start Up Competition",
      date: "2023 Feb",
    },
    {
      experience:
        "Part of Kingston University Fast Track Program cohort: Accelerated customer learning",
      date: "2023 Apr - Current",
    },
  ]);

  return (
    <>
      <BrowserRouter>
        <div className="flex justify-center mt-28">
          <div className=" mx-6 min-w-[335px] w-[700px] ">
            <Navbar>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route
                  path="/experiences"
                  element={<Experiences experiences={experiences} />}
                />
                <Route path="/*" element={<Home />} />
              </Routes>
            </Navbar>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
