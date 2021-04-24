import React, { useState } from 'react';
import './MobFooter.css';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import toyota from '../../../assets/toyota.svg';
import olympic from '../../../assets/olympic.svg'
import paralympic from '../../../assets/paralympic.svg'
import toyota_big from '../../../assets/toyota_big.svg'
import {facebook, twitter, youtube, instagram, pinterest} from '../../../assets/socials/index'

const Accordion = withStyles({
    root: {
      border: '1px solid rgb(210, 211, 215)',
      color: 'white',
      backgroundColor: 'rgb(38, 38, 38)',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
  const AccordionSummary = withStyles({
    root: {
      color: 'rgb(37, 37, 37)',
      backgroundColor: 'rgb(237, 240, 245)',
    //   borderBottom: '1px solid rgba(0, 0, 0, .125)',
      marginBottom: -1,
      minHeight: 56,
      '&$expanded': {
        minHeight: 56,
      },
    },
    content: {
      '&$expanded': {
        margin: '12px 0',
      },
    },
    expanded: {},
  })(MuiAccordionSummary);
  
  const AccordionDetails = withStyles((theme) => ({
    root: {
      color: 'black',
      backgroundColor: 'white',
      padding: '0',
    },
  }))(MuiAccordionDetails);
  
function MobFooter(){

    const [expandOne, setExpandOne] = useState(false);
    const [expandTwo, setExpandTwo] = useState(false);
    const [expandThree, setExpandThree] = useState(false);
    const [expandFour, setExpandFour] = useState(false);
    const [expandFive, setExpandFive] = useState(false);

    return(
        <div className='mf-wrapper'>

            <div className='mf-button-wrapper'>
                <div className='mf-button red'>
                    <button><strong>REQUEST A QUOTE</strong></button>
                </div>
                <div className='mf-button white'>
                    <button><strong>TRADE-IN VALUE</strong></button>
                </div>
            </div>

            <div className='mf-links-wrapper'>
                <Accordion square onClick={()=>setExpandOne(!expandOne)}>
                    <AccordionSummary>
                        <div className={expandOne !== true ? 'mf-accordion-summary two' : 'mf-accordion-summary-selected'}>
                            <div>Helpful Links</div>
                            <FontAwesomeIcon icon={faPlus} className='mf-accordion-icon'></FontAwesomeIcon>
                        </div>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Trade-In Value
                            </div>
                        </div>
                    </AccordionDetails>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Build Your Toyota
                            </div>
                        </div>
                    </AccordionDetails>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Search Inventory
                            </div>
                        </div>
                    </AccordionDetails>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Find a Dealer
                            </div>
                        </div>
                    </AccordionDetails>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Local Specials
                            </div>
                        </div>
                    </AccordionDetails>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                What Fits My Budget
                            </div>
                        </div>
                    </AccordionDetails>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Payment Estimator
                            </div>
                        </div>
                    </AccordionDetails>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Request a Quote
                            </div>
                        </div>
                    </AccordionDetails>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Accesories
                            </div>
                        </div>
                    </AccordionDetails>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Find Your Match
                            </div>
                        </div>
                    </AccordionDetails>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Toyota Certified Used Vehicles
                            </div>
                        </div>
                    </AccordionDetails>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Buy Parts & Accesories
                            </div>
                        </div>
                    </AccordionDetails>
                    
                </Accordion>

                <Accordion square onClick={()=>setExpandTwo(!expandTwo)}>                
                    <AccordionSummary>
                        <div className={expandTwo !== true ? 'mf-accordion-summary one' : 'mf-accordion-summary-selected'}>
                            <div>Shopping Tools</div>
                            <FontAwesomeIcon icon={faPlus} className='mf-accordion-icon'></FontAwesomeIcon>
                        </div>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Safety Recalls & Service Campaigns
                            </div>
                            <div className='mf-accordion-option'>
                                Dealers
                            </div>
                            <div className='mf-accordion-option'>
                                Dealers and Incentives
                            </div>
                            <div className='mf-accordion-option'>
                                Toyota Financial Services
                            </div>
                            <div className='mf-accordion-option'>
                                Toyota Insurance Management Solutions
                            </div>
                            <div className='mf-accordion-option'>
                                ToyotaCare
                            </div>
                            <div className='mf-accordion-option'>
                                Toyota Safety Sense
                            </div>
                            <div className='mf-accordion-option'>
                                Audio Multimedia
                            </div>
                            <div className='mf-accordion-option'>
                                Mobile Phone Compatability
                            </div>
                            <div className='mf-accordion-option'>
                                Connected Services
                            </div>
                            <div className='mf-accordion-option'>
                                Toyota Certified Collision Centers
                            </div>
                            <div className='mf-accordion-option'>
                                Toyota Mobility Feature
                            </div>
                            <div className='mf-accordion-option'>
                                Toyota Fleet
                            </div>
                            <div className='mf-accordion-option'>
                                Toyota Rent A Car
                            </div>
                            <div className='mf-accordion-option'>
                                Car Tips & Advice
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion square onClick={()=>setExpandThree(!expandThree)}>
                    <AccordionSummary>
                        <div className={expandThree !== true ? 'mf-accordion-summary two' : 'mf-accordion-summary-selected'}>
                            <div>Help</div>
                            <FontAwesomeIcon icon={faPlus} className='mf-accordion-icon'></FontAwesomeIcon>
                        </div>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Contact Us
                            </div>
                            <div className='mf-accordion-option'>
                                Accesibility
                            </div>
                            <div className='mf-accordion-option'>
                                FAQ
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion square onClick={()=>setExpandFour(!expandFour)}>
                    <AccordionSummary>
                        <div className={expandFour !== true ? 'mf-accordion-summary two' : 'mf-accordion-summary-selected'}>
                            <div>About Toyota</div>
                            <FontAwesomeIcon icon={faPlus} className='mf-accordion-icon'></FontAwesomeIcon>
                        </div>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Careers
                            </div>
                            <div className='mf-accordion-option'>
                                Our Company
                            </div>
                            <div className='mf-accordion-option'>
                                Shop Toyota Merchandise
                            </div>
                            <div className='mf-accordion-option'>
                                Toyota USA Newsroom
                            </div>
                            <div className='mf-accordion-option'>
                                Toyota Worldwide
                            </div>
                            <div className='mf-accordion-option'>
                                Toyota Racing
                            </div>
                            <div className='mf-accordion-option'>
                                TRD USA
                            </div>
                            <div className='mf-accordion-option'>
                                Toyota Plant Tours
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion square onClick={()=>setExpandFive(!expandFive)}>
                    <AccordionSummary>
                        <div className={expandFive !== true ? 'mf-accordion-summary two' : 'mf-accordion-summary-selected'}>
                            <div>Language</div>
                            <FontAwesomeIcon icon={faPlus} className='mf-accordion-icon'></FontAwesomeIcon>
                        </div>
                    </AccordionSummary>

                    <AccordionDetails>
                        <div className='mf-accordion-details'>
                            <div className='mf-accordion-option'>
                                Español
                            </div>
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='mf-footer-wrapper'>

                <div className='mf-footer-logos'>
                    <div className='mf-footer-toyota-logo'>
                        <img src={toyota} alt=''></img>
                    </div>
                    <div className='mf-footer-toyota-text'>
                        <img src={toyota_big} alt=''></img>
                    </div>
                    <div className='mf-footer-olympic'>
                        <img src={olympic} alt=''></img>
                    </div>
                    <div className='mf-footer-paralympic'>
                        <img src={paralympic} alt=''></img>             
                    </div>
                    <div className='mf-footer-title'>
                        Proud Mobility Partner
                    </div>
                </div>

                <div className='mf-footer-socials'>
                    <img src={facebook} alt=''></img>
                    <img src={youtube} alt=''></img>
                    <img src={twitter} alt=''></img>
                    <img src={instagram} alt=''></img>
                    <img src={pinterest} alt=''></img>
                </div>

                <div className='mf-footer-info'>

                </div>

            </div>
        </div>
    )
}

export default MobFooter;