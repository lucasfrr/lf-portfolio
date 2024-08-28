import { useState } from "react";
import { Avatar, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Groups2Icon from '@mui/icons-material/Groups2';
import SchoolIcon from '@mui/icons-material/School';
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

    const customListParams = {
        width: '100%',
        maxWidth: 440,
        bgcolor: 'background.paper'
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
            <LFPageStyle>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography color="secondary.main" variant="h1" textAlign="center">
                                {t("talksWorkshops")}
                            </Typography>
                            <Grid item pt={4} display="flex" justifyContent="center">
                                <List sx={customListParams}>
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <SchoolIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={t("rubyOnRailsTitle")}
                                            secondary="UFAL, 2019"
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <SchoolIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={t("matplotlibTitle")}
                                            secondary="UFAL, 2019"
                                        />
                                    </ListItem>
                                    <Divider />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <Groups2Icon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={t("mlOnPracticeTitle")}
                                            secondary="Meetup GDG Arapiraca, 2017"
                                        />
                                    </ListItem>
                                </List>
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