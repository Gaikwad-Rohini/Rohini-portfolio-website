import React from "react";
import { TypeAnimation } from "react-type-animation";
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"
                  
                  }
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <div className="designation">
                <TypeAnimation
                  sequence={[
                    "A DESIGNER",
                    500,
                    "A DEVELOPER",
                    500,
                    "A FREELANCER",
                    500,
                  ]}
                  style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
