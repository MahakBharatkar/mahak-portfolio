import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import styles from "./styles.module.css";
import { useState } from "react";
import ExperienceDescription from "./ExperienceDescription";

const List = [
    {
        designation:'Software Development Engineer 1', 
        company_name: 'Cogoport', date: 'July 2022 - Present', 
        description:[
            'Added new functionalities and translated UI/UX designs to re- usable React components. Fixed more than 15 production bugs.', 
            'Gamified sales pipeline tasks, like calling prospects, setting meetings, and closing deals, into a game by developing a gamified UI resulting in a 80% increase in productivity of sales agents and reducing TAT to 1 day.',
            'Developed a streamlined flow for allocating and re-allocating sales agents to the organizations by developing over 10 dashboards and implementing D3 graphs.',
            'Modified existing code to suit new requirements and enabled organic onboarding of more than 50 new countries.',
            'Optimized and created components for maximum performance across a vast array of web-capable devices and browsers.',
            'Lead a team of 4 interns and conducted over 20 code reviews in the team.'
        ]
    },
    {
      designation: 'SDE Intern',
      company_name: 'Samsung SDS',
      date: 'February 2022 - June 2022',
      description: ['Worked as an intern and learnt about the various technologies used in Samsung SDS.']
    }
] 

const Experience = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className={styles.experience_container}>
      <h4>EXPERIENCE</h4>
      
      <div className={styles.experience_flex}>
      <Tabs className={styles.custom_tabs} selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className={styles.custom_tab_list}>
          <Tab className={tabIndex===0? styles.custom_tab_selected: styles.custom_tab}>Cogoport</Tab>
          <Tab className={tabIndex===1? styles.custom_tab_selected:styles.custom_tab}>Samsung SDS</Tab>
        </TabList>

       {List.map((data)=>{
        return (
          <TabPanel className={styles.custom_tab_panels} key={data.company_name} ><ExperienceDescription data={data}/></TabPanel>
        )
       })}
      </Tabs>

      </div>
     
    </div>
  );
};

export default Experience;
