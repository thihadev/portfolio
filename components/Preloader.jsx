import React, { useState, useEffect } from 'react';
import { css } from "@emotion/react";
import { CircleLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
`;

const Preloader = ({ loading }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setVisible(false);
      }, 1000); // Adjust the timeout duration as needed
    }
  }, [loading]);

  // Render the preloader conditionally based on the loading state
  return (
    <div className="preloader" style={{ backgroundColor: '#202020'}}>
      {visible && (
        <CircleLoader 
          color={"#5fa5f8"} 
          loading={loading} 
          css={override} 
          size={100} 
          aria-label="Circle Loader"
          data-testid="loader"
        />
      )}
    </div>
  );
};

export default Preloader;
