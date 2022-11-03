import { Box, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {tokens} from "../../themes/themes";
import Header from "../../components/shared/Header";


const Faq = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="30px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" color={colors.blueAccent["500"]} />

            <Accordion defaultExpanded sx={{backgroundColor: colors.blueAccent["900"], }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.blueAccent[300]} variant="h5">
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={{backgroundColor: colors.blueAccent["900"]}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.blueAccent[300]} variant="h5">
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={{backgroundColor: colors.blueAccent["900"]}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.blueAccent[300]} variant="h5">
                        Your Favorite Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={{backgroundColor: colors.blueAccent["900"]}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.blueAccent[300]} variant="h5">
                        Some Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded sx={{backgroundColor: colors.blueAccent["900"]}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.blueAccent[300]} variant="h5">
                        The Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default Faq;
