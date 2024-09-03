import React, { useState } from "react";
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
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { TransitionProps } from "@mui/material/transitions";
import { useTranslation } from "react-i18next";

import AvatarImg from "../../assets/images/avatar.jpg"
import FlagImg from "../../components/FlagImg/FlagImg";
import LangButton from "../../components/LangButton/LangButton";
import LFAvatar from "../../components/LFAvatar/LFAvatar";
import LFBar from "../../components/LFBar/LFBar";
import LFButton from "../../components/LFButton/LFButton";
import LFooter from "../../components/LFooter/LFooter";
import LFPageStyle from "../../components/LFPageStyle/LFPageStyle";

import Brazil from "../../assets/images/brazil.png";
import UnitedKingdom from "../../assets/images/united-kingdom.png";


const Hero = () => {

    const Transition = React.forwardRef(function Transition(
        props: TransitionProps & {
            children: React.ReactElement<any, any>;
        },
        ref: React.Ref<unknown>,
    ) {
        return <Slide direction="up" ref={ref} {...props} />
    })

    const [openDialogCV, setOpenDialogCV] = React.useState(false)
    const handleClickOpenDialogCV = () => {setOpenDialogCV(true)}
    const handleCloseDialogCV = () => {setOpenDialogCV(false)}

    const [openDialogMail, setOpenDialogMail] = React.useState(false)
    const handleClickOpenDialogMail = () => {setOpenDialogMail(true)}
    const handleCloseDialogMail = () => {setOpenDialogMail(false)}

    const { t, i18n: {changeLanguage, language}} = useTranslation()
    const [currentlanguage, setCurrentLanguage] = useState(language)
    const handleChangelanguage = () => {
        const newLanguage = currentlanguage === "pt" ? "en": "pt"
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    const theme = useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"))

    const cvPtLink = "https://drive.google.com/file/d/1FJQLVq9WHm8U7WFTVHBb0_vXSpL2fGBX/view?usp=sharing"
    const cvEnLink = "https://drive.google.com/file/d/1881QZjCna5i8iu0YsiIXu79LK4SHcBwd/view?usp=sharing"
    const gitHubLink = "https://github.com/lucasfrr"
    const linkedInLink = "https://www.linkedin.com/in/lucasfrr"

    return (
        <>
            <LFBar />
            <Grid bgcolor={theme.palette.primary.main} item>
                <LangButton onClick={handleChangelanguage}>
                    {currentlanguage === "pt" ?
                        <><Typography fontSize="13px">Switch to</Typography><FlagImg src={UnitedKingdom} /></> :
                        <><Typography fontSize="13px">Mudar para</Typography><FlagImg src={Brazil} /></>
                    }
                </LangButton>
            </Grid>
            <LFPageStyle sx={{ alignItems: "center" }}>
                <Container maxWidth="lg">
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={5}>
                            <Box position="relative" textAlign="center">
                                <LFAvatar src={AvatarImg}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography fontWeight={400} color="primary.contrastText" variant="h1" textAlign="center">
                                Lucas Ferreira
                            </Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">{t("softwareDev")}</Typography>
                            <Grid container display="flex" justifyContent="center" pt={3}>
                                <Typography color="primary.contrastText" variant="h3" textAlign="center">{t("findMe")}</Typography>
                            </Grid>

                            <Grid container display="flex" justifyContent="center" pt={2}>
                                <Stack direction="row" alignItems="center" spacing={2}>
                                    <Link target="_blank" href={gitHubLink}>
                                        <GitHubIcon sx={{
                                            color: theme.palette.secondary.main,
                                            transition: "color 0.5s",
                                            '&:hover': {
                                                color: theme.palette.info.main
                                            }
                                        }} />
                                    </Link>
                                    <Link target="_blank" href={linkedInLink}>
                                        <LinkedInIcon sx={{
                                            color: theme.palette.secondary.main,
                                            transition: "color 0.5s",
                                            '&:hover': {
                                                color: theme.palette.info.main
                                            }
                                        }} />
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
            </LFPageStyle>
            <LFooter />
        </>
    )
}

export default Hero
