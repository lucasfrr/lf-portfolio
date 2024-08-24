import { styled } from "@mui/material"


const LFPageStyle = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("xs")]: {
        paddingTop: "50px",
        h1: {fontSize: "70px"},
        h2: {fontSize: "30px"},
        h3: {fontSize: "18px"}
    },
    [theme.breakpoints.up("md")]: {
        paddingTop: "0",
        height: "100vh",
        h1: {fontSize: "80px"},
        h2: {fontSize: "30px"},
        h3: {fontSize: "18px"}
    }
}))

export default LFPageStyle