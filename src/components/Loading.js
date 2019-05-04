import React from "react";
/* this loading animation is from https://loading.io/css/ */

const Loading = () => (
  <div id="loading" className="flex-center column">
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loading;
