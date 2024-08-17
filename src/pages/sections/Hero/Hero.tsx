import { 
    Box,
    Button,
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    Link,
    Slide,
    styled,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

import Avatar from "../../../assets/images/avatar.jpg"
import Brazil from "../../../assets/images/brazil.png"
import UnitedKingdom from "../../../assets/images/united-kingdom.png"
import LFButton from "../../../components/LFButton/LFButton";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import LangButton from "../../../components/LangButton/LangButton";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import LFNavBar from "../../../components/LFNavBar/LFNavBar";
import About from "../About/About";
import Projects from "../Projects/Projects";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            paddingTop: "50px",
            h1: {fontSize: "70px"},
            h2: {fontSize: "30px"},
            h3: {fontSize: "18px"}
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "0",
            height: "100vh",
            h1: {fontSize: "95px"},
            h2: {fontSize: "30px"},
            h3: {fontSize: "18px"}
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

    const FlagImg = styled("img")(() => ({
        width: "1.6em",
        height: "1.6em",
    }))

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />
    })

    const { t, i18n: {changeLanguage, language}} = useTranslation()
    const [currentlanguage, setCurrentLanguage] = useState(language)
    
    const handleChangelanguage = () => {
        const newLanguage = currentlanguage === "pt" ? "en": "pt"
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    const [openDialogCV, setOpenDialogCV] = React.useState(false)
    const handleClickOpenDialogCV = () => {setOpenDialogCV(true)}
    const handleCloseDialogCV = () => {setOpenDialogCV(false)}

    const [openDialogMail, setOpenDialogMail] = React.useState(false)
    const handleClickOpenDialogMail = () => {setOpenDialogMail(true)}
    const handleCloseDialogMail = () => {setOpenDialogMail(false)}

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

    const cvPtLink = "https://docs.google.com/document/d/18IP8h8ai94lE2Gk71Oex0aAos9mTB7UybGOZn8WpOxY/pub"
    const cvEnLink = "https://docs.google.com/document/d/1asqcqWN2-J26qBHVMXL4_-VTLU_9TH6hZt9AwWG58MM/pub"
    const gitHubLink = "https://github.com/lvcax"
    const linkedInLink = "https://www.linkedin.com/in/lucasferreiraos/"

    return (
        <>
            <LFNavBar />
            <StyledHero>
                <Grid item>
                    <Box>
                        <LangButton onClick={handleChangelanguage}>
                            {currentlanguage === "pt" ?
                                <><Typography>View in english</Typography><FlagImg src={UnitedKingdom} /></> :
                                <><Typography>Ver em Português</Typography><FlagImg src={Brazil} /></>
                            }
                        </LangButton>
                        
                    </Box>
                </Grid>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative" textAlign="center">
                                <StyledImg src={Avatar}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center">Lucas Ferreira</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">{t("softwareDev")}</Typography>
                            
                            <Grid container display="flex" justifyContent="center" pt={3}>
                                <Typography color="primary.contrastText" variant="h3" textAlign="center">{t("findMe")}</Typography>
                            </Grid>

                            <Grid container display="flex" justifyContent="center" pt={2}>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Link target="_blank" href={gitHubLink}>
                                        <GitHubIcon sx={{color: theme.palette.secondary.main}} />
                                    </Link>
                                    <Link target="_blank" href={linkedInLink}>
                                        <LinkedInIcon sx={{color: theme.palette.secondary.main}} />
                                    </Link>
                                </Stack>
                            </Grid>
                            
                            <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <LFButton onClick={handleClickOpenDialogCV}>
                                        <DownloadIcon />
                                        <Typography>{t("downloadCV")}</Typography>
                                    </LFButton>
                                    <React.Fragment>
                                        <Dialog
                                            fullScreen={fullScreen}
                                            open={openDialogCV}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleCloseDialogCV}
                                            aria-describedby="alert-dialog-cv-download"
                                        >
                                            <DialogContent>
                                                <DialogTitle textAlign="center">{t("dialogTitleCV")}</DialogTitle>
                                                <DialogContentText id="alert-dialog-cv-download">
                                                    <Typography textAlign="center">
                                                        <Link target="_blank" href={cvPtLink}>{t("dialogPTCV")}</Link>
                                                    </Typography>
                                                    <Typography textAlign="center">
                                                        <Link target="_blank" href={cvEnLink}>{t("dialogENCV")}</Link>
                                                    </Typography>
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleCloseDialogCV}>{t("close")}</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </React.Fragment>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <LFButton onClick={handleClickOpenDialogMail}>
                                        <EmailIcon />
                                        <Typography>{t("sendEmail")}</Typography>
                                    </LFButton>
                                    <React.Fragment>
                                        <Dialog
                                            fullScreen={fullScreen}
                                            open={openDialogMail}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={handleCloseDialogMail}
                                            aria-describedby="alert-dialog-mail-download"
                                        >
                                            <DialogContent>
                                                <DialogTitle textAlign="center">{t("dialogMailTitle")}</DialogTitle>
                                                <DialogContentText id="alert-dialog-mail-download">
                                                    <Typography textAlign="center">{t("dialogMailMessage1")}</Typography>
                                                    <Typography textAlign="center">{t("dialogMailMessage2")}</Typography>
                                                    <Typography color={theme.palette.info.main} textAlign="center">
                                                        <b>lucasferreiraek@gmail.com</b>
                                                    </Typography>
                                                    <Typography textAlign="center">{t("dialogMailMessage3")}</Typography>
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleCloseDialogMail}>{t("close")}</Button>
                                            </DialogActions>
                                        </Dialog>
                                    </React.Fragment>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
            <About />
            <Projects />
        </>
    )
}

export default Hero
