import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Link, Slide, styled, Typography, useMediaQuery, useTheme } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

import Avatar from "../../../assets/images/avatar.jpg"
import LFButton from "../../../components/LFButton/LFButton";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            paddingTop: "50px",
            h1: {
                fontSize: "70px"
            },
            h2: {
                fontSize: "30px"
            }
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "0",
            height: "100vh",
            h1: {
                fontSize: "95px"
            },
            h2: {
                fontSize: "30px"
            }
        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        width: "85%",
        border: `2px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%",
        transition: "border-color 0.5s, background-color 0.5s",
        '&:hover': {
            backgroundColor: theme.palette.info.main,
            border: `2px solid ${theme.palette.info.dark}`
        }
    }))

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />
    })

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {setOpen(true)}
    const handleClose = () => {setOpen(false)}
    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

    const cvPortuguese = "https://docs.google.com/document/d/18IP8h8ai94lE2Gk71Oex0aAos9mTB7UybGOZn8WpOxY/pub"
    const cvEnglish = "https://docs.google.com/document/d/1asqcqWN2-J26qBHVMXL4_-VTLU_9TH6hZt9AwWG58MM/pub"

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
                                    <LFButton onClick={handleClickOpen}>
                                        <DownloadIcon />
                                        <Typography>Download CV</Typography>
                                    </LFButton>
                                    <React.Fragment>
                                        <Dialog
                                            fullScreen={fullScreen}
                                            open={open}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleClose}
                                            aria-describedby="alert-dialog-cv-download"
                                        >
                                            <DialogContent>
                                                <DialogTitle>{"Escolha o idioma"}</DialogTitle>
                                                <DialogContentText id="alert-dialog-cv-download">
                                                    <Typography textAlign="center">
                                                        <Link href={cvPortuguese}>CV em português</Link>
                                                    </Typography>
                                                    <Typography textAlign="center">
                                                        <Link href={cvEnglish}>CV in english</Link>
                                                    </Typography>
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClose}>Fechar</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </React.Fragment>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <LFButton onClick={() => window.alert("email")}>
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
