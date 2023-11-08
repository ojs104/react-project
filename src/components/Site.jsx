import React from 'react'
import { siteText } from '../constansts'

const site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <div className="site__title">
                    Site Coding <em>나의 작업물</em>
                </div>
                <div className="site__wrap">
                    {siteText.map((site, key) => (
                        <article className={`site__item s${key + 1}`} key={key}>
                            <span className="num">{key + 1}</span>
                            <div className="text">
                                <div>{site.text[0]}</div>
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="btn">
                                <a href="/">{site.code}</a>
                                <a href="/">{site.view}</a>
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </article>
                    ))}
                </div>


                {/* <div className="site__item s4">
                        <span className="num">4. </span>
                        <div className="text">
                            <div>make</div>
                            <div>site compiant width</div>
                            <div>webstandard</div>
                        </div>
                        <h3 className="title">
                            VITE를 이용한 사이트 제작
                        </h3>
                        <div className="btn">
                            <a href="/">code</a>
                            <a href="/">view</a>
                        </div>
                        <div className="info">
                            <span>site coding</span>
                            <span>production period : two days</span>
                            <span>use stack : html5/css, css variable, vite</span>
                        </div>
                    </div> */}
            </div>

        </section >
    )
}

export default site