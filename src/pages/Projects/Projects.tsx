import { t } from "i18next";
import { Container, Grid, Typography } from "@mui/material"

import LFPageStyle from "../../components/LFPageStyle/LFPageStyle"
import LFBar from "../../components/LFBar/LFBar";

const Projects = () => {

    return (
        <>  
            <LFBar />
            <LFPageStyle>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography color="secondary.main" variant="h1" textAlign="center">
                                {t("projects")}
                            </Typography>
                            <Typography color="secondary.main" variant="h3" textAlign="center" pt={2}>
                                {t("comingSoon")}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </LFPageStyle>
        </>
    )
}

export default Projects