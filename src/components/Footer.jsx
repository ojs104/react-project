import React from 'react'

const footer = () => {
  return (
    <footer id="footer" role="contentinfo">
        <div className="footer__inner">
            <h2 className="footer__text">
                <div>websloper</div>
                <div>@gmail.com</div>
            </h2>
            <div className="footer__info">
                <div className="left">
                    <div className="title">
                        <a href="/">sign up</a>
                    </div>
                    <p className="desc">회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                </div>
                <div className="right">
                    <h3>social</h3>
                    <ul>
                        <li>
                            <a href="https://www.youtube.com/@websloper">youtube</a>
                            <em>유튜브에 오시면 더 많은 강의를 볼 수 있습니다.</em>
                        </li>
                        <li>
                            <a href="https://github.com/websloper">github</a>
                            <em>깃헙에 들어오시면 모든 소스를 볼 수 있습니다.</em>
                        </li>
                        <li>
                            <a href="https://websloper.co.kr">tistory</a>
                            <em>티스토리에 들어오시면 좋은 정보 볼 수 있습니다.</em>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/playlist?list=PL4UVBBIc6giL8-6jvrClimg0cFL-Muqiq">gsap</a>
                            <em>GSAP를 공부하시고 오면 도움이 됩니다.</em>
                        </li>
                        <li>
                            <a href="https://github.com/websloper/port2023-vite">vite</a>
                            <em>비트 강의도 곧 오픈 예정입니다.</em>
                        </li>
                        <li>
                            <a href="https://github.com/websloper/port2023-react">react</a>
                            <em>리액트 강의도 곧 오픈 예정입니다.</em>
                        </li>
                        <li>
                            <a href="https://github.com/websloper/port2023-vue">vue</a>
                            <em>뷰 강의도 곧 오픈 예정입니다.</em>
                        </li>
                        <li>
                            <a href="https://github.com/websloper/port2023-next">next</a>
                            <em>넥스트 강의도 곧 오픈 예정입니다.</em>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__right">
                &copy; 2023 websloper<br />
                이 사이트는 비트를 이용하여 제작하였습니다.
            </div>
        </div>
    </footer>
  )
}

export default footer