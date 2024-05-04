import React from "react";

function Model( {children, width}) {
  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div style={{ width: width || "600px" }}>
          <div className="bg-white  "> {children}</div>
        </div>
      </div>
    </>
  );
}

export default Model;
