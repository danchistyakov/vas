import React, { Component } from 'react'
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import {Helmet} from "react-helmet";

export default class Home extends Component {
    render() {
        return (
            <>
            <Helmet>
            <title>Voice Apps Studio — мы делаем ассистентов умнее.</title>
            <meta name="description" content="Voice Apps Studio занимается разработкой смартапов для Сбера и навыков для Алисы." />
            </Helmet>
            <Hero />
            <Projects />
            </>
        )
    }
}
