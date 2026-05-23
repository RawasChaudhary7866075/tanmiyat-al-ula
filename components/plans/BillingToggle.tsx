"use client";

import { useState } from "react";

export default function BillingToggle() {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="billing-toggle">
      <span className={!yearly ? "toggle-label active" : "toggle-label"}>
        Monthly
      </span>

      <div
        className={yearly ? "toggle-track active" : "toggle-track"}
        onClick={() => setYearly(!yearly)}
      >
        <div className="toggle-thumb"></div>
      </div>

      <span className={yearly ? "toggle-label active" : "toggle-label"}>
        Annual
      </span>

      <div className="save-badge">
        Save 15%
      </div>
    </div>
  );
}