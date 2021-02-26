import React from "react";
import { minutesToDuration } from "../utils/duration/index";
import { secondsToDuration } from "../utils/duration/index";

function Timer(props) {
  const {
    activeSession,
    onBreak,
    initialDuration,
    initialBreakDuration,
    durationMinutes,
    durationSeconds,
    isTimerRunning,
    durationProgress,
  } = props;
  return (
    <div style={activeSession ? { display: "block" } : { display: "none" }}>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">
            {!onBreak ? "Focusing" : "On Break"} for{" "}
            {!onBreak
              ? minutesToDuration(initialDuration)
              : minutesToDuration(initialBreakDuration)}{" "}
            minutes
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(durationMinutes * 60 + durationSeconds)}{" "}
            remaining
          </p>
          {!isTimerRunning ? <h2>PAUSED</h2> : null}
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={durationProgress}
              style={{ width: `${durationProgress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timer;
