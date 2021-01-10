import React, { Component } from 'react'
import Projects from './Components/Projects';
import {Helmet} from "react-helmet";

export default class Solutions extends Component {
    render() {
        return (
            <>
            <Helmet>
            <title>Решения — Voice Apps Studio</title>
            <meta name="description" content="Voice Apps Studio занимается разработкой смартапов для Сбера и навыков для Алисы." />
            </Helmet>
            <section className='solutions'>
            <Projects />
            </section>
            </>
        )
    }
}
