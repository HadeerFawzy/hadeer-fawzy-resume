import React, { createRef, useState } from 'react'
import { ThemeProvider, Hidden } from "@material-ui/core";
import theme from "config/theme";
import Header from 'components/Header';
import Menu from 'components/Menu';
import Section from 'components/Section';
import InfoIcon from '@material-ui/icons/Info';
import SettingsIcon from '@material-ui/icons/Settings';
import TimelineIcon from '@material-ui/icons/Timeline';
import SchoolIcon from '@material-ui/icons/School';

const App = () => {
  const menuItems = [{
    id: 'about',
    name: 'About Me',
    icon: <InfoIcon/>,
    content: 'TEST ABOUT CONTENT',
  },{
    id: 'skills',
    name: 'Skills',
    icon: <SettingsIcon/>,
    content: 'TEST SKILLS CONTENT',
  },{
    id: 'work_history',
    name: 'Work History',
    icon: <TimelineIcon/>,
    content: 'TEST WORK HISTORY CONTENT',
  },{
    id: 'educations_and_certificates',
    name: 'Educations And Certificates',
    icon: <SchoolIcon/>,
    content: 'TEST Educations And Certificates SECTION CONTENT',
  }]

  const [activeSection, setActiveSection] = useState('');

  const refs = menuItems.reduce((refsObj, item) => {
    refsObj[item.id] = createRef();
    return refsObj;
  }, {});

  const handleClickMenuItem = (id) => {
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return ( 
    <ThemeProvider theme={theme}>
      <div className="App">
        <Hidden lgUp>
          <Menu menuItems={menuItems} 
                activeSection={activeSection}
                handleClickMenuItem={handleClickMenuItem}/>
        </Hidden>
        <div id='home'>
          <Header/>
        </div>
        <Hidden mdDown>
          <Menu menuItems={menuItems} 
                activeSection={activeSection}
                handleClickMenuItem={handleClickMenuItem}/>
        </Hidden>
        {
          menuItems.map((item) => {
            return (
              <Section
                key={item.name}
                activeSection={activeSection}
                item={item}
                setActiveSection={setActiveSection}
                refs={refs}/>
            );
          })
        }
      </div>
    </ThemeProvider>
  );
}

export default App;
