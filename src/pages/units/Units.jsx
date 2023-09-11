import React from "react";
import "./units.scss";

const Units = () => {
  return (
    <div className="create">
      <div className="heading">Create Units</div>
      <form className="form" onSubmit={() => {}}>
        <label htmlFor="unitAmt">Units Amount</label>
        <input
          type="number"
          placeholder="Enter Units Amount"
          className="unitAmt"
        />
        <label htmlFor="unitRemark">Remark</label>
        <input type="text" id="unitRemark" placeholder="Enter Remark" />
        <button className="btn create-btn">Create</button>
      </form>
    </div>
  );
};

export default Units;
