import React, { Component } from 'react'
import classes from './footer.module.css'

export default class footer extends Component {
    render() {
        return (
            <div>
                <div className={classes.footer}>
                    <div className={classes.home}>  Home >> Pricing >> </div>
                    <div className={classes.b2b}> B2B Marketing Packages</div>
                </div>
                <div className={classes.footer1}>
                    <div className={classes.icon}>
                        <div className={classes.icon1}></div>
                        <div className={classes.icon2}></div>
                        <div className={classes.icon3}></div>
                        <div className={classes.icon4}></div>
                        <div className={classes.icon5}></div>
                        <div className={classes.icon6}></div>
                    </div>
                    <div className={classes.line1}></div>
                    <div className={classes.text1}>
                    BizAmps is B2B marketing consultancy based out of India. The team is spread across Delhi NCR, Chandigarh & Mumbai
                    </div>
                    <div className={classes.text2}>
                    All Rights Reserved © Copyright 2020
                    </div>

                </div>
                
                
            </div>
        )
    }
}
