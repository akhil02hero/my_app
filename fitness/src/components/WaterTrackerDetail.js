import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WaterTrackerDetail = ({
  water,
  faCheck,
  editableElementId,
  id,
  handleWaterChange,
  faPen,
  handleEditClick,
}) => {
  return (
    <>
      <div
        className="callout-info alert alert-info fade show container"
        key={water.id}
      >
        <div className="row">
          <div className="col-1 text-start">{water.id}</div>
          <div className="col-2 text-center">
            Time: <span>{water.time}</span>
          </div>
          <div className="col-4 text-center">
            Date: <span>{water.date}</span>
          </div>
          <div className="col text-center">
            Water Consumed:
            {editableElementId & (id === water.id) ? (
              <input
                type="number"
                value={water.water}
                onChange={(e) => handleWaterChange(water.id, e.target.value)}
              />
            ) : (
              <span>{water.water}</span>
            )}
            {editableElementId & (id === water.id) ? (
              <>
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{
                    color: "#03C03C",
                    marginLeft: "20px",
                    fontSize: "20px",
                  }}
                  onClick={() => handleEditClick(water.id, false)}
                />
              </>
            ) : (
              <></>
            )}
            <FontAwesomeIcon
              icon={faPen}
              style={{ color: "#fff", marginLeft: "20px" }}
              onClick={() => handleEditClick(water.id, true)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WaterTrackerDetail;
