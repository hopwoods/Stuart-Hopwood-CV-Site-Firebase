import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { Button, ThemeProvider } from '@mui/material'
import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './App.css'
import { classes } from './App.css'
import ScrollToTopButton from './components/controls/buttons/scrollToTopButton'
import { About, Bubbles, Page } from './components/layout'
import { materialTheme } from './style'

function Banner() {
    return (
        <React.Fragment>
            <p>
                Hello I'm <span className="name">Stuart Hopwood.</span>
                <br />
                <span className={classes.subTitle}>I'm a full stack Developer.</span>
            </p>
            <Button className="about" variant="outlined" color="secondary" size="large" endIcon={<ArrowDownwardIcon />} component={HashLink} to="/#about" smooth>
                Find Out More
            </Button>
            <Bubbles />
        </React.Fragment>
    )

}

function App() {
    return (
        <ThemeProvider theme={materialTheme}>
            <Page id="Home" fullscreen={true} BannerContent={Banner}>
                <About />
                <div className={classes.toTopButton}>
                    <ScrollToTopButton color="secondary" />
                </div>
            </Page>
        </ThemeProvider>
    )
}
export default App

