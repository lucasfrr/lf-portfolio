import { t } from "i18next"
import { Avatar, Container, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material"
import Groups2Icon from '@mui/icons-material/Groups2';
import SchoolIcon from '@mui/icons-material/School';

import LFBar from "../../components/LFBar/LFBar"
import LFPageStyle from "../../components/LFPageStyle/LFPageStyle"

const TalksWorkshops = () => {
    return (
        <>
            <LFBar />
            <LFPageStyle>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography color="secondary.main" variant="h1" textAlign="center">
                                {t("talksWorkshops")}
                            </Typography>
                            <Grid item pt={4} display="flex" justifyContent="center">
                                <List sx={{ width: '100%', maxWidth: 440, bgcolor: 'background.paper'}}>
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
        </>
    )
}

export default TalksWorkshops