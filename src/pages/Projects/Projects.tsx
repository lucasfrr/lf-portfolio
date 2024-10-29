import { useState } from "react";
import { Chip, Container, Grid, Stack, Typography } from "@mui/material"
import { useTranslation } from "react-i18next";

import LFPageStyle from "../../components/LFPageStyle/LFPageStyle"
import LFBar from "../../components/LFBar/LFBar";
import LFooter from "../../components/LFooter/LFooter";
import FlagImg from "../../components/FlagImg/FlagImg";
import LangButton from "../../components/LangButton/LangButton";

import Brazil from "../../assets/images/brazil.png";
import UnitedKingdom from "../../assets/images/united-kingdom.png";
import theme from "../../theme";
import LFBox from "../../components/LFBox/LFBox";
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {

    const { t, i18n: {changeLanguage, language}} = useTranslation()
    const [currentlanguage, setCurrentLanguage] = useState(language)
    const handleChangelanguage = () => {
        const newLanguage = currentlanguage === "pt" ? "en": "pt"
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    const sxChip = {
        border: `1px solid ${theme.palette.secondary.main}`,
        transition: "border-color 0.5s",
        '&:hover': {
            border: `1px solid ${theme.palette.info.main}`,
        }
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
                                {t("projectsDesc")}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack
                                direction={{ xs: "column", md: "row" }}
                                spacing={2}
                                alignItems="center"
                            >
                                <LFBox sx={{paddingTop: 2}}>
                                    <Typography ml={1} mr={1} mt={2} fontWeight={600}>Go Chat</Typography>
                                    <Typography ml={1} mr={1} mb={2}>{t("prDesc1")}</Typography>
                                    <Chip
                                        variant="outlined"
                                        color="secondary"
                                        label={t("code")}
                                        component="a"
                                        href="https://github.com/lucasfrr/go-chat"
                                        target="blank"
                                        icon={<GitHubIcon />}
                                        sx={sxChip}
                                    />
                                </LFBox>
                                <LFBox sx={{paddingTop: 2}}>
                                    <Typography ml={1} mr={1} mt={2} fontWeight={600}>Live Streaming Server</Typography>
                                    <Typography ml={1} mr={1} mb={2}>{t("prDesc2")}</Typography>
                                    <Chip
                                        variant="outlined"
                                        color="secondary"
                                        label={t("code")}
                                        component="a"
                                        href="https://github.com/lucasfrr/go-live-streaming"
                                        target="blank"
                                        icon={<GitHubIcon />}
                                        sx={sxChip}
                                    />
                                </LFBox>
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack
                                direction={{ xs: "column", md: "row" }}
                                spacing={2}
                                alignItems="center"
                            >
                                <LFBox sx={{paddingTop: 2}}>
                                    <Typography ml={1} mr={1} mt={2} fontWeight={600}>Zidane</Typography>
                                    <Typography ml={1} mr={1} mb={2}>{t("prDesc3")}</Typography>
                                    <Chip
                                        variant="outlined"
                                        color="secondary"
                                        label={t("code")}
                                        component="a"
                                        href="https://github.com/lucasfrr/zidane"
                                        target="blank"
                                        icon={<GitHubIcon />}
                                        sx={sxChip}
                                    />
                                </LFBox>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </LFPageStyle>
            <LFooter />
        </>
    )
}

export default Projects