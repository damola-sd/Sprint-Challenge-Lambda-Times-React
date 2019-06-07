import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          props.tabs.map(tab => (
            <Tab
              tab={tab}
              selectTabHandler={props.selectedTabHandler}
              selectedTab={props.selectedTab}
            />
          )
          )
        }
        
      </div>
    </div>
  );
};


Tabs.propTypes = {
  tabs: PropTypes.shape({
    tab: PropTypes.string,
    selectedTabHandler: PropTypes.func,
    selectedTab: PropTypes.string
  })
};
// Make sure to use PropTypes to validate your types!
export default Tabs;
