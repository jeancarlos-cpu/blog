import React from "react";
import ReactLoading from "react-loading";

const Loading = () => (
  <div style={style}>
    <ReactLoading type={"spin"} color={"#3f20ba"} height={50} width={50}/>
  </div>
);
export default Loading;

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}