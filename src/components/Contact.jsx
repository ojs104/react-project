import React from 'react'

const Contact = () => {
  return (
    <section id="contect">
    <div className="contact__inner">
        <h2 className="contact__title">Contact</h2>

        <div className="contact__lines top" aria-hidden="true">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>

        <div className="contact__text">
            <div className="text">
                <div>
                    <a href="/">kakao</a>
                </div>
                <div>
                    <a href="/">Naver</a>
                </div>
            </div>
        </div>

        <div className="contact__lines bottom" aria-hidden="true">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
        </div>



    </div>
</section>
  )
}

export default Contact