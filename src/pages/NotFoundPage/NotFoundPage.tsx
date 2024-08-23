import { Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import LFPageStyle from "../../components/LFPageStyle/LFPageStyle"
import { t } from "i18next"

const NotFoundPage = () => {
    return (
        <LFPageStyle>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography color="primary.contrastText" variant="h1" textAlign="center">
                        404 not found :(
                    </Typography>
                    
                        <Link to="/"><Typography color="primary.contrastText" variant="h3" textAlign="center">{t("backHomePage")}</Typography></Link>
                    
                </Grid>
            </Grid>
        </LFPageStyle>
    )
}


export default NotFoundPage