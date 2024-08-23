import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"
import { t } from "i18next"

const LFNavBar = () => {
    const LFToolBar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
        <>
            <AppBar position="relative">
                <LFToolBar>
                    <MenuItem>
                        <Link to="/">
                            <Typography color="primary.contrastText">
                                Home
                            </Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/aboutme">
                            <Typography color="primary.contrastText">
                                {t("about")}
                            </Typography>
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/projects">
                            <Typography color="primary.contrastText">
                        {t("projects")}
                    </MenuItem>
                </LFToolBar>
            </AppBar>
        </>
    )
}

export default LFNavBar
