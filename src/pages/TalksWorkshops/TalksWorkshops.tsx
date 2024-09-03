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

const TalksWorkshops = () => {

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
            <LFPageStyle>
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography fontWeight={500} fontSize="60px" color="secondary.main">
                                {t("talksWorkshops")}
                            </Typography>
                            <Grid item pt={4} display="flex">
                                <Box>
                                    <Card sx={{ backgroundColor: theme.palette.primary.main }}>
                                        <CardContent>
                                            <Typography fontWeight={500} fontSize="25px" color="#736EF5">
                                                {t("rubyOnRailsTitle")}
                                            </Typography>
                                            <Typography variant="h4" color="secondary.main">
                                                UFAL, 2019
                                            </Typography>
                                        </CardContent>
                                        <CardContent>
                                            <Typography fontWeight={500} fontSize="25px" color="#736EF5">
                                                {t("matplotlibTitle")}
                                            </Typography>
                                            <Typography variant="h4" color="secondary.main">
                                                UFAL, 2019
                                            </Typography>
                                        </CardContent>
                                        <CardContent>
                                            <Typography fontWeight={500} fontSize="25px" color="#736EF5">
                                                {t("mlOnPracticeTitle")}
                                            </Typography>
                                            <Typography variant="h4" color="secondary.main">
                                                Meetup GDG Arapiraca, 2017
                                            </Typography>
                                        </CardContent>
                                    </Card>
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