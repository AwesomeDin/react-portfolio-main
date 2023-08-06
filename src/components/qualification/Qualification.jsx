import React, { useState } from "react";
import "./qualification.css";
import {
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineCalendar,
} from "react-icons/hi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Chip } from "@mui/material";
import vz from "./vz.png";
import infinitesweeps from "./infinitesweepslogo.png";
import reachforthe from "./reachforthe.png";
import aws from "./aws3.jpg";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title" style={{ padding: "10px" }}>
        Timeline
      </h2>
      {/* <span className="section__subtitle">My Journey</span> */}

      <div className="qualification__container container">
        <div id="timeline">
          <VerticalTimeline lineColor="hidden">
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#b38f00", color: "white" }}
              contentArrowStyle={{ borderRight: "7px solid  #b38f00" }}
              iconStyle={{
                backgroundImage: `url(${reachforthe})`,
                backgroundSize: "cover",
              }}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  color: "var(--title-color)",
                }}
              >
                President
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                Computer Star Foundation
              </h4>
              <h5
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                August 2020 - Present
              </h5>
              <p
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                Conducted numerous camps and events in STEM for youth
                participants. Instrumental in generating new sponsorships and
                contributing to workshops.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                backgroundColor: "var(--title-color)",
                color: "white",
                textAlign: "center",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  var(--title-color)",
              }}
              iconStyle={{
                backgroundImage: `url(${infinitesweeps})`,
                backgroundSize: "cover",
              }}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  color: "#b38f00",
                }}
              >
                Testing Intern
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                Infinite Sweeps
              </h4>
              <h5
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                June 2021-August 2021
              </h5>
              <p
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  paddingBottom: "3px",
                }}
              >
                • Developed code to validate incoming stock data and perform
                error/exception handling <br /> • Generated KPI reports and
                aided in the design of the website to display real-time stock
                trading data <br /> • Increased platform engagement by 20% based
                on new designs
              </p>
              <Chip
                label="Java"
                style={{
                  backgroundColor: "#b38f00",
                }}
              />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: "#b38f00",
                color: "white",
                textAlign: "center",
              }}
              contentArrowStyle={{ borderRight: "7px solid  #b38f00" }}
              iconStyle={{
                backgroundImage: `url(${vz})`,
                backgroundSize: "cover",
              }}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  color: "var(--title-color)",
                }}
              >
                Software Engineer Intern
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                Verizon
              </h4>
              <h5
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                June 2022-August 2022
              </h5>
              <p
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  paddingBottom: "3px",
                }}
              >
                • Created an automated testing framework and integrated it with
                GitLab CI/CD
                <br /> • Designed different code components to allow
                SIT/UAT/Regression testing of frontend and backend
                <br /> • Composed testing configurations and tests for the
                Verizon ASPN platform <br />• Improved the reliability of
                functional features with over 542 monthly hours avoided in
                testing
              </p>
              <Chip
                label="JavaScript"
                style={{
                  color: "white",
                  backgroundColor: "var(--title-color)",
                }}
              />
              <Chip
                label="Mocha/Chai"
                style={{
                  color: "white",
                  backgroundColor: "var(--title-color)",
                }}
              />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                backgroundColor: "var(--title-color)",
                color: "white",
                textAlign: "center",
              }}
              contentArrowStyle={{
                borderRight: "7px solid  var(--title-color)",
              }}
              iconStyle={{
                backgroundImage: `url(${aws})`,
                backgroundSize: "contain",
              }}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  color: "#b38f00",
                }}
              >
                Testing Intern
              </h3>
              <h4
                className="vertical-timeline-element-subtitle"
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                Amazon Web Services
              </h4>
              <h5
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                May 2023 - August 2023
              </h5>
              <p
                style={{
                  textAlign: "center",
                  alignSelf: "center",
                  paddingBottom: "3px",
                }}
              >
                • More to come
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
