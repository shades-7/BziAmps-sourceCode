import React ,{Component} from 'react';
import classes from './landing.module.css';
import Simple from './accordino'


class landing extends Component {
   
    render(){  
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
        return(
            <div>
                {/* LANDING PAGE */}

                <div className={classes.landing}>
                    <div className={classes.navbar}>
                        <div className={classes.logo}></div>
                        <div className={classes.toggle}>
                            <div className={classes.toggle1}></div>
                            <div className={classes.toggle1}></div>
                            <div className={classes.toggle1}></div>
                        </div>
                        <div className={classes.expertise}>Expertise</div>
                        <div className={classes.pricing}>Pricing</div>
                        <div className={classes.case}>Case Stories</div>
                    </div>
                    <div className={classes.landing1}>
                        <div className={classes.vector}>
                            <div className={classes.image}></div>
                        </div>
                        <div className={classes.textalign}>
                            <div className={classes.text}>
                                “I WENT THROUGH EVERY ACCOUNT-BASED MARKETING WEBINAR, TALK & EBOOK AND HERE’S THE BEST OF THEM!”
                            </div>
                            <div className={classes.note}>
                                Note : ABM is strategy, below mentioned are tactics & techniques
                            </div>
                        </div>
                    </div>
                </div>
                 {/* TABLE PAGE */}
                <div className={classes.tabelLanding}>
                    <div className={classes.tableNavbar}>
                        <div className={classes.tabelHeading}>Table of Contents:</div>
                    </div>
                    <div className={classes.tableContent}>
                      {/* TABLE CONTENT */}
                      {contentvalue.map((content,index) => {
                          let count =index+1;
                          let contentt = content;
                          return(
                            <div className={classes.tableContentAlign}>
                                <div className={classes.count}>{count}</div>
                                <div className={classes.content}>{contentt}</div>
                            </div>
                          )
                      })}
                      </div>  
                    </div>
                </div>
        
        )
    }
}

export default landing;