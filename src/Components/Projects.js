import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <section className="projects">
                <h2 className="section_title">Наши решения</h2>
                <div className="solutions_content">
                    <div className="solutions_block">
                        <div className="cuefa_logo"></div>
                        <div className="solution_info">
                        <div className="now_status">
                        <p>Доступно</p>
                        </div>
                        <div className="platforms">
                        <p className="platform_name">SBER</p>
                        </div>
                        </div>
                        <h3>Камень, ножницы, бумага!</h3>
                    </div>
                    <div className="solutions_block">
                    <div className="covid_logo"></div>
                    <div className="solution_info">
                        <div className="now_status">
                        <p>Доступно</p>
                        </div>
                        <div className="platforms">
                        <p className="platform_name">SBER</p>
                        </div>
                        </div>
                        <h3>Статистика коронавируса</h3>
                    </div>
                    <div className="solutions_block">
                    <div className="fairy_logo"></div>
                    <div className="solution_info">
                    <div className="now_status">
                        <p>Доступно</p>
                    </div>
                    <div className="platforms">
                        <p className="platform_name">SBER</p>
                        </div>
                        </div>
                        <h3>Сказки для детей</h3>
                    </div>
                    </div>
                    <div className="solutions_content">
                    <div className="solutions_block">
                    <div className="oge_logo"></div>
                    <div className="solution_info">
                    <div className="soon_status">
                        <p>Уже скоро!</p>
                    </div>
                    <div className="platforms">
                        <p className="platform_name">SBER</p>
                        </div>
                        </div>
                        <h3>Подготовка к ОГЭ</h3>
                    </div>
                    </div>
            </section>
        )
    }
}
