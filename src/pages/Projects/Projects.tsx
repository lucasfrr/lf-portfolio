import { useState } from "react";
import { Container, Grid, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";

import LFPageStyle from "../../components/LFPageStyle/LFPageStyle"
import LFBar from "../../components/LFBar/LFBar";
import LFooter from "../../components/LFooter/LFooter";
import FlagImg from "../../components/FlagImg/FlagImg";
import LangButton from "../../components/LangButton/LangButton";

import Brazil from "../../assets/images/brazil.png";
import UnitedKingdom from "../../assets/images/united-kingdom.png";
import theme from "../../theme";

const Projects = () => {

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
                                {t("projects")}
                            </Typography>
                            <Typography color="secondary.main" variant="h3" pt={2}>
                                {t("comingSoon")}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </LFPageStyle>
            <LFooter />
        </>
    )
}

export default Projects