import React, { Component } from 'react'
import {Helmet} from "react-helmet";

export default class About extends Component {
    render() {
        return (
            <>
            <Helmet>
            <title>О нас — Voice Apps Studio</title>
            <meta name="description" content="Voice Apps Studio занимается разработкой смартапов для Сбера и навыков для Алисы." />
            </Helmet>
            <section className="about">
                <h2 className="section_title">О нас</h2>
                <p>Мы молодая команда профессионалов, которые увлечены любимым делом — обучать голосовых ассистентов различным навыкам, делая жизнь людей проще и увлекательнее!</p>
            </section>
            </>
        )
    }
}
