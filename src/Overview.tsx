import javaScript from "../public/assets/javascript.png";
import typeScript from "../public/assets/typescript.png";
import sql from "../public/assets/sql.png";
import mongodb from "../public/assets/mongodb.png";
import node from "../public/assets/node.png";
import electron from "../public/assets/electron.png";
import Nav from "./Nav";
import reactPNG from "../public/assets/react.png";
import express from "../public/assets/express.png";

function Overview() {
  return (
    <>
      <div className="main-content">
        <Nav />
        <h1 className="name">Chris Gladney</h1>
        <div className="biography">
          <p>
            Not finding a career that I was extremely invested in prior to the
            Northcoders course, I undertook in late 2023 to early 2024, it gave
            me certainty that a career in tech is what I want to do. The idea of
            building solutions from my computer that many people will use is
            very appealing. Additionally, the problem-solving aspect of coding
            is something that greatly appeals to me and I find myself looking
            forward to the time I spend writing applications. {<br />}
            {<br />}My short term aims are to work as a developer for a company
            that provides solutions to a large number of clients with my long
            term goal to be owning my own software company that influences a
            great number of people.
          </p>
        </div>
        <div className="tech-stacks">
          <img src={javaScript} className="tech-stack" />
          <img src={typeScript} className="tech-stack" />
          <img src={node} className="tech-stack" />
          <img src={sql} className="tech-stack" />
          <img src={mongodb} className="tech-stack" />
          <img src={electron} className="tech-stack" />
          <img src={reactPNG} className="tech-stack" />
          <img src={express} className="tech-stack" />
        </div>
      </div>
    </>
  );
}

export default Overview;
