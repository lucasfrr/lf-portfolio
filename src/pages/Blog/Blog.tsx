import { Box, Card, CardContent, Container, Grid, LinearProgress, Typography } from "@mui/material"
import LFPageStyle from "../../components/LFPageStyle/LFPageStyle"
import LFBar from "../../components/LFBar/LFBar"
import LFooter from "../../components/LFooter/LFooter"
import FlagImg from "../../components/FlagImg/FlagImg"
import LangButton from "../../components/LangButton/LangButton"
import theme from "../../theme"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import Brazil from "../../assets/images/brazil.png"
import UnitedKingdom from "../../assets/images/united-kingdom.png"
import { Link } from "react-router-dom"
import { Item, Medium } from "./medium"

const parser = new DOMParser()

const Blog = () => {

    const linkStyle = {
        color: "inherit",
        textDecoration: "none"
    }

    const sxParams = {
        flexDirection: "column",
        overflowY: "auto"
    }

    const { t, i18n: {changeLanguage, language}} = useTranslation()
    const [currentlanguage, setCurrentLanguage] = useState(language)
    const handleChangelanguage = () => {
        const newLanguage = currentlanguage === "pt" ? "en": "pt"
        changeLanguage(newLanguage)
        setCurrentLanguage(newLanguage)
    }

    const parseDescription = (description: string) => {
        const parsed = parser.parseFromString(description, "text/html")
        const result =
            parsed.querySelector("p.medium-feed-snippet") !== null
                ? parsed.querySelector("p.medium-feed-snippet")?.textContent
                : parsed.querySelector("p")?.textContent
        return result
    }

    const [mediumItems, setMediumItems] = useState<Item[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@lucasfrr",
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data: Medium) => {
            setMediumItems(
              data.items.map((x) => {
                return {
                  ...x,
                  description: parseDescription(x.description) as string,
                };
              })
            );
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
    
        return () => {
          setMediumItems([]);
        };
      }, []);
    
    return (
        <>
            <LFBar />
            <Grid bgcolor={theme.palette.primary.main} item>
                <LangButton onClick={handleChangelanguage}>
                    {currentlanguage === "pt" ?
                        <><Typography fontSize="13px">Switch to</Typography><FlagImg src={UnitedKingdom} /></> :
                        <><Typography fontSize="13px">Mudar para</Typography><FlagImg src={Brazil} /></>
                    }
                </LangButton>
            </Grid>
            <LFPageStyle sx={sxParams}>
                <Container maxWidth="md">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography fontWeight={500} fontSize="60px" color="primary.contrastText">
                                Blog
                            </Typography>
                            <Typography variant="h3" color="primary.contrastText">
                                {t("blogDescription1")} <b>Medium</b>. {t("blogDescription2")}
                            </Typography>
                        </Grid>
                        <Grid item mb={4} mt={3} xs={12}>
                            {isLoading ? (
                                <Box mt={4} sx={{ width: "100%" }}>
                                    <LinearProgress />
                                </Box>
                            ) : (
                                mediumItems.map((article, index) => {
                                    return (
                                        <Grid key={index} container>
                                            <Box sx={{paddingTop: 2}} key={index}>
                                                <Box>
                                                    <Typography variant="h4" color="secondary.light">
                                                        {article.pubDate}
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                <Link target="_blank" to={article.link} style={linkStyle}>
                                                    <Typography fontWeight={500} fontSize="25px" color="info.main">
                                                        {article.title}
                                                    </Typography>
                                                </Link>
                                                </Box>
                                                <Box>
                                                    <Typography variant="h4" color="secondary.main">
                                                        {article.description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    )
                                })
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </LFPageStyle>
            <LFooter />
        </>
    )
}

export default Blog