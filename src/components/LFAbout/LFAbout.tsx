import { styled } from "@mui/material";

const LFAbout = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
        h1: {
            fontSize: "65px"
        },
        h2: {
            fontSize: "30px"
        }
    },
    [theme.breakpoints.up("md")]: {
        height: "100vh",
        h1: {
            fontSize: "80px"
        },
        h2: {
            fontSize: "30px"
        }
    }
}))

export default LFAbout