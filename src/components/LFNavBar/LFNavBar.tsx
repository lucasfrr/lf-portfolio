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
                        {t("about")}
                    </MenuItem>
                    <MenuItem>
                        Skills
                    </MenuItem>
                    <MenuItem>
                        {t("projects")}
                    </MenuItem>
                </LFToolBar>
            </AppBar>
        </>
    )
}

export default LFNavBar
