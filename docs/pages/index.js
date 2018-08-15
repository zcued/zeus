const assetPrefix = process.env.NODE_ENV === 'production' ? '/zeus' : ''

export default () => (
  <React.Fragment>
    <main className="home-main">
      <div className="page">
        <div className="page-section-content">
          <a className="btn-large btn-left btn-hover" href="./docs/get-started">
            Start
          </a>

          <div className="zeus-potrait">
            <img src={'./static/zeus.png'} alt="" />
          </div>
          <a href="./docs/components/icon" className="btn-large btn-right btn-hover">
            Learn
          </a>

          <div className="content-footer">
            <p>这里有句简短的描述，可中文可英文，也可中英文对照</p>
            <p>Focus on the essential experience</p>
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="page-section-content">
          <div className="page-section-title">A design system made for React.js</div>

          <div className="introduction">
            <img className="intro-img has-shadow intro-img-1" src={'./static/intro-1.png'} alt="" />
            <img className="intro-img has-shadow intro-img-2" src={'./static/intro-2.png'} alt="" />
            <div className="intro-item">
              <div className="intro-title">UI Component</div>
              <div className="intro-content">
                基于 Zeus Design 设计语言，我们提供了一套开箱即用的高质量 React
                组件，用于开发和服务于企业级中前台产品。使用样式化组件构建，以保持样式独立，并减少在应用程序中编写自定义CSS的需求。基于可配置的设计系统，Rebass的道具API使构建一致，响应速度更快的网络应用变得更加简单和快捷。
              </div>
            </div>

            <div className="intro-item">
              <div className="intro-title"> 超级炫酷 </div>
              <div className="intro-content">
                Zeus
                的企业级产品是一个庞大的体系。这类产品不仅量级巨大且功能复杂，而且变动和并发频繁，常常需要设计与开发能够快速的做出响应。同时这类产品中有存在很多类似的页面以及组件，可以通过抽象得到一些稳定且高复用性的内容。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="page-section-content">
          <div className="page-section-title">Solution</div>
          <ul className="ball-list">
            <li className="ball-item">
              <div className="ball-img has-shadow">
                <img src={'./static/ball-1.png'} alt="" />
              </div>
              <div className="ball-text">设计观</div>
            </li>
            <li className="ball-item">
              <div className="ball-img has-shadow">
                <img src={'./static/ball-2.png'} alt="" />
              </div>
              <div className="ball-text">特点</div>
            </li>
            <li className="ball-item">
              <div className="ball-img has-shadow">
                <img src={'./static/ball-3.png'} alt="" />
              </div>
              <div className="ball-text">自定义</div>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-container">
        <div className="page-section-content">
          <div className="page-section-title">A design system made for React.js</div>
          <div className="tech-statement">
            <img src={'./static/react.svg'} alt="" />
            <img className="sign" src={'./static/plus.svg'} alt="" />
            <img src={'./static/bitmap.svg'} alt="" />
            <img className="sign" src={'./static/equal.svg'} alt="" />
            <img src={'./static/logo.svg'} alt="" />
          </div>
          <p className="tech-description">
            Zeus Design
            提供了将概念从概念应用到实际应用所需的所有指导，组件和设计资源。我们使用React和Sketch来帮助您完成旅程。
          </p>
          <a href="./docs/get-started" className="btn-large btn-left btn-hover has-shadow">
            详细说明
          </a>
        </div>
      </div>
    </main>

    <style jsx>{`
      .home-main {
        background: #1a1f25;
        color: #fff;
        text-align: center;
      }

      .btn-hover:hover {
        background: #d8000b;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.56);
      }

      .page-section-title {
        font-size: 36px;
        font-weight: bolder;
        margin-top: 80px;
        margin-bottom: 48px;
      }

      .page-container {
        overflow: hidden;
        margin: 0 auto;
        max-width: 1200px;
      }

      .page-container:not(:last-child) {
        margin-bottom: 140px;
      }

      .btn-large {
        display: inline-block;
        width: 220px;
        height: 60px;
        color: #fff;
        text-decoration: none;
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        font-weight: bolder;
        background: transparent;
        border: 1px solid #d8000b;
        transition: all ease 0.3s;
      }

      .has-shadow {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.56);
      }

      .page {
        position: relative;
        width: 100vw;
        min-height: 100vh;
        overflow: hidden;
      }

      .page-section-content {
        width: 1200px;
      }

      .page .page-section-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
      }

      .zeus-potrait img {
        width: 100%;
      }

      .page .btn-large {
        top: 50%;
        position: absolute;
        transform: translateY(-50%);
      }

      .page .btn-large.btn-left {
        left: 0;
        transform: translateX(-10%);
      }

      .page .btn-large.btn-right {
        right: 0;
        border: none;
        transform: translateX(10%);
        background: @main-bg-color;
      }

      .content-footer {
        position: absolute;
        color: #aaa;
        bottom: 40px;
        left: 80px;
        text-align: left;
      }

      .ball-list {
        display: flex;
        justify-content: space-around;
        width: 1200px;
      }

      .ball-item {
        width: 200px;
        position: relative;
      }

      .ball-item .ball-img {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        margin-bottom: 32px;
      }

      .ball-item .ball-img img {
        width: 100%;
      }

      .tech-statement {
        margin-top: 60px;
        line-height: 100px;
      }

      .tech-statement img {
        height: 80px;
        margin-right: 40px;
      }

      .tech-statement img.sign {
        height: 40px;
      }

      .tech-description {
        width: 350px;
        margin: 0px auto;
        color: #ccc;
        margin-top: 80px;
      }

      .btn-large {
        margin-top: 40px;
        border: none;
        background: #000;
        margin-bottom: 20px;
      }

      .introduction {
        width: 460px;
        padding: 40px 120px;
        background: #000;
        margin: 0 auto;
        margin-top: 120px;
        position: relative;
      }

      .intro-item {
        padding: 40px 0;
        border-bottom: 1px solid #333;
      }

      .intro-item:nth-child(2n + 1) {
        text-align: left;
      }

      .intro-item:nth-child(2n) {
        text-align: right;
      }

      .intro-item:last-child {
        border-bottom: none;
      }

      .intro-img {
        width: 220px;
        position: absolute;
      }

      .intro-img-1 {
        top: -50px;
        left: -130px;
      }

      .intro-img-2 {
        bottom: -50px;
        right: -130px;
      }
    `}</style>
  </React.Fragment>
)
