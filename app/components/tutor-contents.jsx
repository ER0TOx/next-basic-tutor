import React from "react";
import "./tutor-contents.css";

import TCHead from "@/app/components/tc-head";
import TCBasic from "./tc-basic";
import TCRendering from "@/app/components/tc-rendering";
import TCInstall from "./tc-install";
import TCStruct from "./tc-struct";
import TCPagelink from "./tc-pagelink";
import TCComponent from "./tc-component";
import TCImage from "./tc-image";
import TCAgent from "./tc-agent";
import TCUse from "./tc-use";
import TCEvent from "./tc-event";
import TCApi from "./tc-api";
import TCDeploy from "./tc-deploy";
import TCFont from "./tc-font";

function TutorContent() {
  return (
    <>
      <TCHead />
      <TCBasic/>
      <TCRendering />
      <TCInstall/>
      <TCStruct/>
      <TCPagelink/>
      <TCComponent/>
      <TCImage/>
      <TCAgent/>
      <TCUse/>
      <TCEvent/>
      <TCApi/>
      <TCFont/>
      <TCDeploy/>
    </>
  );
}

export default TutorContent;
