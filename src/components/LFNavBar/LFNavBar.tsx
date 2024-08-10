import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

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
                        About
                    </MenuItem>
                    <MenuItem>
                        Skills
                    </MenuItem>
                    <MenuItem>
                        Projects
                    </MenuItem>
                    <MenuItem>
                        Blog
                    </MenuItem>
                </LFToolBar>
            </AppBar>
        </>
    )
}

export default LFNavBar
