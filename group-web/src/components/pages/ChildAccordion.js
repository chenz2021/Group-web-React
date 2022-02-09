import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ChildAccordion({child}) {  

  return (
        <>
        <Accordion>     
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Job Title: {child.title}, Posted_at: {child.posted_at.toString().slice(5,16)}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Job Description:{child.description}
                    </Typography>
                </AccordionDetails>
        </Accordion>
        </>
  );
}