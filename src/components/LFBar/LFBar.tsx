import { useState } from "react";

import { AppBar, Box, Drawer, Toolbar } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import LFDrawer from "../../components/LFDrawer/LFDrawer";

const LFBar = () => {

    const [open, setOpen] = useState(false)
    const toggleDrawer = (newOpen: boolean) => () => (
        setOpen(newOpen)
    )

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
                    </Toolbar>
                </AppBar>
            </Box>    
        </>
    )
}

export default LFBar