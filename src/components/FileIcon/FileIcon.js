import React, { useState } from "react";
import propTypes from "prop-types";

import styled from "styled-components";

const Icon = styled.span`
  position: relative;
  display: inline-block;
  height: ${({ height }) => (height ? parseInt(height) : 24)}px;
  width: ${({ height }) =>
    height ? Math.round(0.83 * parseInt(height)) : 20}px;
  border-bottom: 2px solid #050608;
  border-right: 2px solid #050608;
  border-left: 2px solid #ced0cf;
  border-top: 2px solid #ced0cf;
  flex-shrink: 0;
  background: #fff;
  :before,
  :after {
    content: "";
    position: absolute;
    right: -2px;
    top: -2px;
  }
  &:before {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-left: 2px solid black;
    border-bottom: 2px solid black;
    background: #fff;
    z-index: 1;
  }
  &:after {
    content: "";
    position: absolute;
    right: -2px;
    top: 0px;
    width: 7px;
    border-top: 2px solid #ced0cf;
    transform: rotate(45deg);
    z-index: 2;
  }
`;
const IconIMG = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  transition: 0.2s all ease-out;
  opacity: ${({ isLoaded }) => (isLoaded ? "1" : "0")};
`;
const FileIcon = ({ imageURL, height, ...otherProps }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Icon {...otherProps} height={height}>
      {imageURL && (
        <IconIMG
          isLoaded={isLoaded}
          src={imageURL}
          alt={`icon`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </Icon>
  );
};

FileIcon.propTypes = {
  imageURL: propTypes.string
};

export default FileIcon;
