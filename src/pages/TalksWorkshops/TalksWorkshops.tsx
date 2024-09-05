import { useState } from "react";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";

import FlagImg from "../../components/FlagImg/FlagImg";
import LFBar from "../../components/LFBar/LFBar"
import LFPageStyle from "../../components/LFPageStyle/LFPageStyle"
import LFooter from "../../components/LFooter/LFooter";
import LangButton from "../../components/LangButton/LangButton";

import Brazil from "../../assets/images/brazil.png";
import UnitedKingdom from "../../assets/images/united-kingdom.png";
import theme from "../../theme";
import { Link } from "react-router-dom";

const TalksWorkshops = () => {

    const youTubeLink = "https://www.youtube.com/watch?v=o1brPM9_qnw&t=316s&ab_channel=LucasFerreiraArt"

    const linkStyle = {
        color: "inherit",
        textDecoration: "none"
    }

    const sxParams = {
        flexDirection: "column",
        overflowY: "auto"
    }

    const { t, i18n: {changeLanguage, language}} = useTranslation()
    const [currentlanguage, setCurrentLanguage] = useState(language)
    const handleChangelanguage = () => {
        const newLanguage = currentlanguage === "pt" ? "en": "pt"
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

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
            <LFPageStyle sx={sxParams}>
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography fontWeight={500} fontSize="60px" color="secondary.main">
                                {t("talksWorkshops")}
                            </Typography>
                            <Typography variant="h3" color="primary.contrastText">
                                {t("twDescription")}
                            </Typography>
                            <Grid item pt={4} display="flex">
                                <Box>
                                    <Box sx={{paddingTop: 2}}>
                                        <Typography fontWeight={500} fontSize="25px" color="#736EF5">
                                            {t("rubyOnRailsTitle")}
                                        </Typography>
                                        <Typography variant="h4" color="secondary.main">
                                            UFAL, 2019
                                        </Typography>
                                    </Box>
                                    <Box sx={{paddingTop: 2}}>
                                        <Typography fontWeight={500} fontSize="25px" color="#736EF5">
                                            {t("matplotlibTitle")}
                                        </Typography>
                                        <Typography variant="h4" color="secondary.main">
                                            UFAL, 2019
                                        </Typography>
                                    </Box>
                                    <Box sx={{paddingTop: 2}}>
                                        <Typography fontWeight={500} fontSize="25px" color="#736EF5">
                                            {t("mlOnPracticeTitle")}
                                        </Typography>
                                        <Typography variant="h4" color="secondary.main">
                                            Meetup GDG Arapiraca, 2017
                                        </Typography>
                                        <Typography fontWeight={500} variant="h4" color="secondary.main">
                                            <Link style={linkStyle} to={youTubeLink}>
                                                {t("linkTalk")}
                                            </Link>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </LFPageStyle>
            <LFooter />
        </>
    )
}

export default TalksWorkshops