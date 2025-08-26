import React, { Suspense } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import Typewriter from "typewriter-effect";
import { introdata } from "../../content_option";
import LogoLoop from './Logoloop.jsx';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiCss3 } from 'react-icons/si';
import { GoMoveToBottom } from "react-icons/go";
import ModelViewer from "../ModelViewer/ModelViewer.jsx";

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/docs/Web/CSS" },
];

const Header = () => {
  return (
    <header>
      <div style={{ height: '90px', position: 'relative', overflow: 'hidden' }}>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          ariaLabel="Technology partners"
        />
      </div>

      <div className="header__container">
        {/* Bên trái */}
        <div className="header__content">
          <h5>Xin chào, tôi là</h5>
          <h1>
            <Typewriter
              options={{
                strings: [introdata.animated.first],
                autoStart: true,
                loop: true,
                deleteSpeed: 10
              }}
            />
          </h1>
          <h5 className="text-light">Frontend Developer</h5>
          <p>
            Tôi là một kỹ sư phần mềm với niềm đam mê xây dựng giao diện web đẹp
            và hiệu quả. Yêu thích ReactJS, Next.js, và các công nghệ hiện đại.
          </p>

          <div className="cta"><CTA /></div>
          <HeaderSocials />

          <div className="scroll__left">
            <a href="#contact" className="scroll__link">
              <GoMoveToBottom className="scroll__icon" />
            </a>
          </div>
        </div>

        {/* Bên phải */}
        <div className="header__image">
          <Suspense fallback={<p>Đang tải mô hình...</p>}>
            <ModelViewer
              url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
              width={1000}
              height={1000}
            />

          </Suspense>
        </div>
      </div>
    </header>
  );
};

export default Header;
