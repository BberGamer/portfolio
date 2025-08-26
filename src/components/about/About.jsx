import React from "react";
import "./about.css";
import ME from "../../assets/me7.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { GrDocumentPdf } from "react-icons/gr";
import PDF from "../../assets/cv.pdf";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>11 Months Learning</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Client</h5>
              <small>++ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>Completed</small>
            </article>
          </div>
          <p>
            Xin chào, tôi là <strong>Đỗ Văn Bình</strong>, 21 tuổi, hiện đang là sinh viên tại Đại học FPT chuyên ngành Kỹ thuật phần mềm.
            Tôi là một Intern Frontend & Mobile Developer với những phẩm chất cá nhân nổi bật như khả năng hoàn thành mục tiêu,
            lập kế hoạch thời gian hiệu quả, sự kiên trì, cũng như khả năng dễ dàng duy trì các mối quan hệ trong công việc và học tập.
            Tôi luôn có tinh thần ham học hỏi và mong muốn phát triển bản thân không ngừng trong lĩnh vực công nghệ thông tin.
            <br></br>
            <br></br>
            Mặc dù hiện tại tôi chưa có nhiều kinh nghiệm làm việc thực tế trong ngành IT, nhưng với tinh thần chủ động,
            thái độ nghiêm túc và sự quyết tâm, tôi tin rằng mình sẽ trở thành một nhân sự tiềm năng, sẵn sàng học hỏi và hợp tác để cùng đạt được thành công trong tương lai.
          </p>
          <a href={PDF} className="btn btn-primary">
            Download PDF <GrDocumentPdf />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
