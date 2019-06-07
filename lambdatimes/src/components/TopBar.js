import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const topbar = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const container = styled.div`
width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const containerLeft = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const containerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const cspan = styled.div`
  cursor: pointer;
  margin-right: 5%;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const containerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  &:span {
    cursor: pointer;
  }
`;

const 

const TopBar = () => {
  return (
    <topbar>
      <container>
        <containerLeft>
          <cspan>TOPICS</cspan><cspan>TOPICS</cspan><cspan>SEARCH</cspan>
        </containerLeft>
        <containerCenter>
        <cspan>GENERAL</cspan><cspan>BROWNBAG</cspan><cspan>RANDOM</cspan><cspan>MUSIC</cspan><cspan>ANNOUNCEMENTS</cspan>
        </containerCenter>
        <containerRight>
        <cspan>LOG IN</cspan>
        </containerRight>
      </container>
    </topbar>
  )
}

export default TopBar;