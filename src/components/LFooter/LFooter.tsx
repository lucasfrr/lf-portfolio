import { Container, Grid, styled, Typography } from "@mui/material"
import CopyrightIcon from '@mui/icons-material/Copyright';

const LFooter = () => {

    const StyledFooter = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.dark,
        paddingTop: "70px",
        width: "100%",
        height: "180px",
        alignItems: "center",
        h4: {fontSize: "13px"}
    }))

    const customIconParams = { width: "13px", height: "13px" }

    return (
        <>
            <StyledFooter>
                <Container maxWidth="lg">
                    <Grid display="flex" position="static" container spacing={3}>
                        <Grid item xs={12} alignItems="center" justifyContent="center">
                            <Typography variant="h4" color="primary.contrastText" textAlign="center">
                                <CopyrightIcon sx={customIconParams} /> 2024 Lucas Ferreira - All rights reserved
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </StyledFooter>
        </>
    )
}

export default LFooter