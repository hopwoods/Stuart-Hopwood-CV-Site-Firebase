/** @jsxImportSource @emotion/react */
import React from 'react'
import './App.css'
import { Bubbles, About, Page } from './components/layout'
import { Button } from '@material-ui/core'
import { HashLink } from 'react-router-hash-link'
import ScrollToTopButton from './components/controls/buttons/scrollToTopButton'
import { toTopButton } from './App.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

//TODO: Change Button colour to white.
//TODO: Change to Function from FC.
function Banner() {
    return (
        <React.Fragment>
            <p>
                Hello I'm <span className="name">Stuart Hopwood.</span>
                <br />
                I'm a full stack Developer.
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
        <React.Fragment>
            <Page id="Home" fullscreen={true} BannerContent={Banner}>
                <About />
                <div css={toTopButton}>
                    <ScrollToTopButton color="secondary" />
                </div>
            </Page>
        </React.Fragment>
    )
}
export default App

