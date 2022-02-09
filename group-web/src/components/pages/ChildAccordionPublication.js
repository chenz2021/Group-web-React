import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ChildAccordionPublication({child}) {  

  return (
        <>
        <Accordion>     
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>ID: {child.id}, Publication Title: {child.title}, Year Published: {child.year}, Journal: {child.publisher}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Link:{child.link}
                    </Typography>
                </AccordionDetails>
        </Accordion>
        </>
  );
}