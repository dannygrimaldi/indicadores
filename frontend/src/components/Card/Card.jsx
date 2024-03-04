import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <motion.div >
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} uniqueData={props.uniqueData} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)}  uniqueData={props.uniqueData}/>
      )}
    </motion.div>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;

  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        {/* antes de param.value puedes poner cualquier texto para que aparezca la información*/}
        <span>{param.value}</span>
        <span>Último mes</span>
      </div>
    </div>
  );
}

// Expanded Card

function ExpandedCard({ param, setExpanded, uniqueData }) {
  

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart options={uniqueData.options} series={param.series} type="area" />
      </div>
      <span>Último trimestre</span>
    </motion.div>
  );
}

export default Card;
