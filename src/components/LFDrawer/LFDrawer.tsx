import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { t } from 'i18next';
import { Link } from 'react-router-dom';

interface LFDrawerProps {
    onClick: () => void
}

const LFDrawer: React.FC<LFDrawerProps> = ({ onClick }) => {

    return (
        <>
            <Box sx={{width: 250}} role="presentation" onClick={onClick}>
                <List>
                    <ListItem key="home">
                        <Link to="/"><ListItemText primary="Home" /></Link>
                    </ListItem>
                    <ListItem key="aboutme">
                        <Link to="/about-me"><ListItemText primary={t("about")} /></Link>
                    </ListItem>
                    <ListItem key="projects">
                        <Link to="/projects"><ListItemText primary={t("projects")} /></Link>
                    </ListItem>
                    <ListItem key="tw">
                        <Link to="/talks-and-workshops"><ListItemText primary={t("talksWorkshops")} /></Link>
                    </ListItem>
                </List>
            </Box>
        </>
    )
}

export default LFDrawer