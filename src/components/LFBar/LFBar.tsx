import { useState } from "react";

import { AppBar, Box, Drawer, Toolbar, Typography } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LFDrawer from "../../components/LFDrawer/LFDrawer";
import LangButton from "../LangButton/LangButton";
import { useTranslation } from "react-i18next";
import FlagImg from "../FlagImg/FlagImg";
import Brazil from "../../assets/images/brazil.png"
import UnitedKingdom from "../../assets/images/united-kingdom.png"

const LFBar = () => {

    const [open, setOpen] = useState(false)
    const toggleDrawer = (newOpen: boolean) => () => (
        setOpen(newOpen)
    )

    const { i18n: {changeLanguage, language}} = useTranslation()
    const [currentlanguage, setCurrentLanguage] = useState(language)
    const handleChangelanguage = () => {
        const newLanguage = currentlanguage === "pt" ? "en": "pt"
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon color="secondary" />
                        </IconButton>
                        <Drawer open={open} onClose={toggleDrawer(false)}>
                            <LFDrawer onClick={toggleDrawer(true)} />
                        </Drawer>
                        <LangButton onClick={handleChangelanguage}>
                            {currentlanguage === "pt" ?
                                <><Typography>View in english</Typography><FlagImg src={UnitedKingdom} /></> :
                                <><Typography>Ver em Português</Typography><FlagImg src={Brazil} /></>
                            }
                        </LangButton>
                    </Toolbar>
                </AppBar>
            </Box>    
        </>
    )
}

export default LFBar