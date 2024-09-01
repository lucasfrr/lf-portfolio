import { t } from 'i18next';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

interface LFDrawerProps {
    onClick: () => void
}

const linkStyle = {
    color: "inherit",
    textDecoration: "none"
}

const LFDrawer: React.FC<LFDrawerProps> = ({ onClick }) => {

    return (
        <>
            <Box sx={{width: 250}} role="presentation" onClick={onClick}>
                <List>
                    <ListItem key="home">
                        <Link style={linkStyle} to="/"><ListItemText primary="Home" /></Link>
                    </ListItem>
                    <ListItem key="aboutme">
                        <Link style={linkStyle} to="/about-me"><ListItemText primary={t("about")} /></Link>
                    </ListItem>
                    <ListItem key="projects">
                        <Link style={linkStyle} to="/projects"><ListItemText primary={t("projects")} /></Link>
                    </ListItem>
                    <ListItem key="tw">
                        <Link style={linkStyle} to="/talks-and-workshops"><ListItemText primary={t("talksWorkshops")} /></Link>
                    </ListItem>
                    <ListItem key="tw">
                        <Link style={linkStyle} to="/blog"><ListItemText primary="Blog" /></Link>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

export default LFDrawer