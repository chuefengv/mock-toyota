import React from 'react';
import './BCMobile.css';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CarsAndMinivan from '../bc-desktop/BCDCars/CarsAndMinivan';
import Trucks from '../bc-desktop/BCDCars/Trucks';
import CrossAndSuvs from '../bc-desktop/BCDCars/CrossAndSuvs';
import Hybrids from '../bc-desktop/BCDCars/Hybrids';
import Upcoming from '../bc-desktop/BCDCars/Upcoming';

const Accordion = withStyles({
    root: {
      border: '1px solid rgba(0, 0, 0, .125)',
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
      backgroundColor: 'rgba(0, 0, 0, .03)',
      borderBottom: '1px solid rgba(0, 0, 0, .125)',
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
      backgroundColor: 'white',
      color: 'black',
      padding: theme.spacing(2),
    },
  }))(MuiAccordionDetails);
  

function BCMobile(){

    // const [expanded, setExpanded] = React.useState('panel1');

    // const handleChange = (panel) => (event, newExpanded) => {
    //   setExpanded(newExpanded ? panel : false);
    // };

    return(
        <div className='bcmobile-wrapper'>

            <div className='bcmobile-dropdown'>
                <Accordion square>
                    <AccordionSummary expandIcon={<ExpandMoreIcon className='arrow'/>}>
                        <div className='bcmobile-summary'>
                            <div>Cars & Minivans</div>
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                        <CarsAndMinivan />
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='bcmobile-dropdown'>
                <Accordion square >
                    <AccordionSummary expandIcon={<ExpandMoreIcon className='arrow'/>}>
                        <div className='bcmobile-summary'>
                            <div>Trucks</div>
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Trucks />
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='bcmobile-dropdown'>
                <Accordion square >
                    <AccordionSummary expandIcon={<ExpandMoreIcon className='arrow'/>}>
                        <div className='bcmobile-summary'>
                            <div>Crossovers & SUVs</div>
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                        <CrossAndSuvs />
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='bcmobile-dropdown'>
                <Accordion square >
                    <AccordionSummary expandIcon={<ExpandMoreIcon className='arrow'/>}>
                        <div className='bcmobile-summary'>
                            <div>Hybrid & Fuel Cell</div>
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Hybrids />
                    </AccordionDetails>
                </Accordion>
            </div>

            <div className='bcmobile-dropdown'>
                <Accordion square >
                    <AccordionSummary expandIcon={<ExpandMoreIcon className='arrow'/>}>
                        <div className='bcmobile-summary'>
                            <div>Upcoming Vehicles</div>
                        </div>

                    </AccordionSummary>
                    <AccordionDetails>
                        <Upcoming />
                    </AccordionDetails>
                </Accordion>
            </div>
            
        </div>
    )
}

export default BCMobile;