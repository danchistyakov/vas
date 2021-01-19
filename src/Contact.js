import React, { Component } from 'react'
import {Helmet} from "react-helmet";
import Form from "./Components/Form"
export default class Contact extends Component {
    render() {
        return (
            <>
            <Helmet>
            <title>Контакты — Voice Apps Studio</title>
            <meta name="description" content="Voice Apps Studio занимается разработкой смартапов для Сбера и навыков для Алисы." />
            </Helmet>
            <section className="solutions">
            <h2 className="section_title">Нужно связаться с разработчиком?</h2>
            <Form/>
            </section>
            </>
        )
    }
}
