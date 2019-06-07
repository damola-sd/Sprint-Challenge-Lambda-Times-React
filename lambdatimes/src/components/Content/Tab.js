import React from 'react';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      let className = '';
      if(props.tab === props.selectedTab){
        className = 'tab active-tab';
      }else {
        className = 'tab';
      }
  return (
    <div
      className={className}
      onClick={props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.shape({
    tab: PropTypes.string,
    selectTabHandler: PropTypes.func,
    selectedTab: PropTypes.string
  })
};

export default Tab;
