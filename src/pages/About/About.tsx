import { t } from "i18next";
import { Box, Card, CardContent, Container, Grid, Stack, Typography } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';

import LFPageStyle from "../../components/LFPageStyle/LFPageStyle";
import LFPaper from "../../components/LFPaper/LFPaper";
import LFBar from "../../components/LFBar/LFBar";
import LFooter from "../../components/LFooter/LFooter";

const About = () => {

    return (
        <>
            <LFBar />
            <LFPageStyle>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center">
                                {t("about")}
                            </Typography>
                        </Grid>
                        <Grid container pt={3} display="flex" justifyContent="center" spacing={3}>
                            <Grid item>
                                <Card sx={{
                                            width: 300,
                                            height: 180,
                                            backgroundColor: "#1C1C1C",
                                            border: "1px solid #2F2F2F",
                                            transition: "border-color 0.5s, background-color 0.5s",
                                            '&:hover': {
                                                border: "1px solid #4527A0",
                                                color: "#4527A0"
                                            }
                                        }} variant="outlined">
                                    <CardContent>
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            <WorkspacePremiumIcon color="secondary"/>
                                        </Box>
                                        <Typography color="primary.contrastText" textAlign="center" pt={2}>
                                            <b>{t("experience")}</b>
                                        </Typography>
                                        <Typography color="primary.contrastText" textAlign="center">
                                            {t("howLong")}
                                        </Typography>
                                        <Typography color="primary.contrastText" textAlign="center">
                                            {t("role")}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card sx={{
                                    width: 300,
                                    height: 180,
                                    backgroundColor: "#1C1C1C",
                                    border: "1px solid #2F2F2F",
                                    transition: "border-color 0.5s, background-color 0.5s",
                                    '&:hover': {
                                        border: "1px solid #4527A0",
                                        color: "#4527A0"
                                    }
                                }} variant="outlined">
                                    <CardContent>
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            <SchoolIcon color="secondary" />
                                        </Box>
                                        <Typography color="primary.contrastText" textAlign="center" pt={2}>
                                            <b>{t("education")}</b>
                                        </Typography>
                                        <Typography color="primary.contrastText" textAlign="center">
                                            {t("degree")}
                                        </Typography>
                                        <Typography color="primary.contrastText" textAlign="center">
                                            {t("computerScience")}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Typography color="primary.contrastText" textAlign="justify" pt={5} pl={4}>
                                {t("aboutMeText")}
                            </Typography>
                        </Grid>
                        <Grid container spacing={2} pl={3.5}>
                            <Grid item xs={12}>
                                <Typography color="primary.contrastText" variant="h1" textAlign="center" pt={3}>Skills</Typography>
                            </Grid>
                            <Grid item md={12} xs={6} display="flex" justifyContent="center">
                                <Stack
                                    direction={{ xs: "column", md: "row" }}
                                    spacing={2}
                                    alignItems="center"
                                >
                                    <LFPaper variant="outlined">
                                        <Typography color="primary.contrastText" pt={2}>Python</Typography>
                                    </LFPaper>
                                    <LFPaper variant="outlined">
                                        <Typography color="primary.contrastText" pt={2}>Django</Typography>
                                    </LFPaper><LFPaper variant="outlined">
                                        <Typography color="primary.contrastText" pt={2}>Flask</Typography>
                                    </LFPaper><LFPaper variant="outlined">
                                        <Typography color="primary.contrastText" pt={2}>Go</Typography>
                                    </LFPaper><LFPaper variant="outlined">
                                        <Typography color="primary.contrastText" pt={2}>Web Scrapping</Typography>
                                    </LFPaper>
                                </Stack>
                            </Grid>
                            <Grid item md={12} xs={5} display="flex" justifyContent="center">
                                <Stack
                                    direction={{ xs: "column", md: "row" }}
                                    spacing={2}
                                    alignItems="center"
                                >
                                <LFPaper variant="outlined">
                                        <Typography color="primary.contrastText" pt={2}>Postgres</Typography>
                                    </LFPaper><LFPaper variant="outlined">
                                        <Typography color="primary.contrastText" pt={2}>ElasticSearch</Typography>
                                    </LFPaper><LFPaper variant="outlined">
                                        <Typography  color="primary.contrastText"pt={2}>Git</Typography>
                                    </LFPaper><LFPaper variant="outlined">
                                        <Typography color="primary.contrastText" pt={2}>Docker</Typography>
                                    </LFPaper><LFPaper variant="outlined">
                                        <Typography color="primary.contrastText" pt={2}>AWS</Typography>
                                    </LFPaper>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </LFPageStyle>
            <LFooter />
        </>
    )
}

export default About