import React from "react";
import "./DoLAB.css";
import Link from "next/link";

function DoLAB({ lab, link }) {
  return (
    <div className="dolab-group">
      <Link href={link ?? ""}>
        <p>
          คลิกเพื่อทำแลป <q>{lab}</q>
        </p>
      </Link>
    </div>
  );
}

export default DoLAB;
