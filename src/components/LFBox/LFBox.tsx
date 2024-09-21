import { Paper, styled } from "@mui/material"

const LFBox = styled(Paper)(({ theme }) => ({
    width: 432,
    height: 180,
    textAlign: "center",
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
    transition: "border-color 0.5s, background-color 0.5s",
    '&:hover': {
        border: `1px solid ${theme.palette.info.main}`,
    }
}))

export default LFBox