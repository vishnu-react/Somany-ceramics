import React from "react";
import Carouse from "../Carousal/Carouse";
import Downcarouse from "../down-carouse/downcarouse";
import Headr1 from "../Header1/Headr1";
import Section from "../section/section";
import Section1 from "../Section1/Section1";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";

function Home() {
  return (
    <div>
      <Headr1/>
      <Carouse />
      <Downcarouse />
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
     
    </div>
  );
}

export default Home;
