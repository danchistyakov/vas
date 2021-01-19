import React, { Component } from 'react'
export default class Hero extends Component {
    render() {
        return (
            <section className="hero">
            <div className="hero_flex">
            <div className="hero_title">
            <h2 className="hero_title_h2">Мы делаем голосовых ассистентов умнее!</h2>    
            </div>
            <div className="hero_img">  
            </div>
            </div>
            <div className="hero_link">
            <a href="/solutions" className="hero_link_a"><button>Решения</button></a>
            </div>
            </section>
        )
    }
}
