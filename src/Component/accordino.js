import React from "react";
import classes from './accordino.module.css';
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
 
const Accordion = withStyles({
  root: {
    border: "none",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, 0)",
    borderBottom: "1px solid rgba(0, 0, 0, 0)",
    marginBottom: -1,
    minHeight: 56,
    padding:0,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiAccordionSummary);



export default function SimpleAccordion() {

    let contentvalue = ['Benchmarks & Results of Account-Based Marketing',
                   'ABM examples vs B2B Demand Generation',
                   'How to used old content & better messaging (Video: skip to 13.37 mins mark)',
                   'Why sales in ABM?',
                   'Sales responsibility in ABM',
                   'Backend & Tech Stack for ABM (For scaling)',
                   'Points to Note before starting',
                   'How to Select Accounts (The 5 Levels)',
                   'BizAmpss Step by Step ABM Pilot'
                   ]
  

  return (
    <div>
      {/* TABLE CONTENT */}
      {contentvalue.map((content,index) => {
                          let count =index+1;
                          let contentt = content;
                          return(
                            
          <Accordion >
       <AccordionSummary>
        
          <div className={classes.accordion}>
              <div className={classes.count}>{count}</div>
              <div className={classes.content}>
              {contentt}
              </div>
              </div>
          
          </AccordionSummary>
        
        <AccordionDetails >

            <div className={classes.typography}>
              <div className={classes.box1}>
                <div className={classes.smallbox1}></div>
                <div className={classes.smallbox2}></div>
                <div className={classes.smallbox3}></div>
                <div className={classes.smallbox4}></div>
                <div className={classes.smallbox5}></div>
                <div className={classes.box2}></div>
              </div> 
            </div>
        </AccordionDetails>
      </Accordion>
                          )
                      })}

                      
     
    </div>
  );
}
