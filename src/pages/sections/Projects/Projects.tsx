import { Container, Grid, styled, Typography } from "@mui/material"

const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("xs")]: {
            paddingTop: "50px",
            h1: {
                fontSize: "70px"
            },
            h2: {
                fontSize: "30px"
            }
        },
        [theme.breakpoints.up("md")]: {
            paddingTop: "0",
            height: "100vh",
            h1: {
                fontSize: "95px"
            },
            h2: {
                fontSize: "30px"
            }
        }
        
    }))
    return (
        <>
            <StyledProjects>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography color="secondary.main" variant="h1" textAlign="center">
                                Projects
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </StyledProjects>
        </>
    )
}

export default Projects