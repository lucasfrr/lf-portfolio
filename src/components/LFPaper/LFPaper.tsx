import { Paper, styled } from "@mui/material"

const LFPaper = styled(Paper)(({ theme }) => ({
    width: 150,
    height: 50,
    textAlign: "center",
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    transition: "border-color 0.5s, background-color 0.5s",
    '&:hover': {
        border: `1px solid ${theme.palette.info.main}`,
        color: theme.palette.info.main
        
    }
}))

export default LFPaper