import { Container, Grid, styled, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

import Avatar from "../../../assets/images/avatar.jpg"
import LFButton from "../../../components/LFButton/LFButton";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            paddingTop: "50px"
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "0",
            height: "100vh"
        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "85%",
        border: `2px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%"
    }))

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative" textAlign="center">
                            <StyledImg src={Avatar}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pt={4}>Lucas Ferreira</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">Software Developer</Typography>
                            
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={8}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <LFButton>
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </LFButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <LFButton>
                                        <EmailIcon />
                                        <Typography>Contact Me</Typography>
                                    </LFButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
