import { Box, Card, CardContent, Container, Grid, styled, Typography } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';

const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            h1: {
                fontSize: "65px"
            },
            h2: {
                fontSize: "30px"
            }
        },
        [theme.breakpoints.up("md")]: {
            h1: {
                fontSize: "80px"
            },
            h2: {
                fontSize: "30px"
            }
        }
    }))

    return (
        <>
            <StyledAbout>
                <Container maxWidth="lg">

                    <Grid container spacing={2}>
                    
                        <Grid item xs={12}>
                            <Typography color="primary.main" variant="h1" textAlign="center" pt={4}>
                                About Me
                            </Typography>
                        </Grid>
                        <Grid container pt={5} display="flex" justifyContent="center" spacing={3}>

                            <Grid item>
                                <Card sx={{ width: 300, height: 180 }} variant="outlined">
                                    <CardContent>
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            <WorkspacePremiumIcon />
                                        </Box>
                                        <Typography textAlign="center" pt={2}><b>Experience</b></Typography>
                                        <Typography textAlign="center">2 years</Typography>
                                        <Typography textAlign="center">Backend Development</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item>
                                <Card sx={{ width: 300, height: 180 }} variant="outlined">
                                    <CardContent>
                                        <Box display="flex" alignItems="center" justifyContent="center">
                                            <SchoolIcon />
                                        </Box>
                                        <Typography textAlign="center" pt={2}><b>Education</b></Typography>
                                        <Typography textAlign="center">Bachelor's Degree</Typography>
                                        <Typography textAlign="center">Computer Science</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        
                        </Grid>

                        <Grid container spacing={2}>
                            <Typography textAlign="justify" pt={7}>
                                Mussum Ipsum, cacilds vidis litro abertis.  Copo furadis é disculpa de bebadis, arcu quam euismod magna.
                                Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Morbi viverra placerat justo, vel pharetra turpis.
                                Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
                                Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Suco de cevadiss deixa as pessoas mais interessantis.
                                Cevadis im ampola pa arma uma pindureta. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.
                            </Typography>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h1" textAlign="center" pt={5}>Skills</Typography>
                            </Grid>

                            <Grid item>
                                qqwr coisa
                            </Grid>
                            
                        </Grid>

                    </Grid>

                </Container>
            </StyledAbout>
        </>
    )
}

export default About