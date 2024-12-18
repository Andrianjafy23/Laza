import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { TbBrandJavascript } from "react-icons/tb";
import { FaPhp } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoBootstrap } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { FaLaravel } from "react-icons/fa";
import { TbJson } from "react-icons/tb";
import { TbApi } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { IoLogoWindows } from "react-icons/io5";
import { FaFigma } from "react-icons/fa";

import {
  dataabout,
  meta,
  worktimeline,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="mb-4">À propos de moi</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Formations</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody >
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i} >
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Compétences</h3>
          </Col>
          <Col lg="7">
          <div>
    <h4>Frontend</h4>
    <div style={{display:"flex", flexDirection:"row", gap:"30px", marginTop:"25px", marginBottom:"40px"}}>
      <TbBrandJavascript class="js-icon" />
      <IoLogoHtml5 class="html-icon" />
      <RiReactjsFill class="react-icon" />
      <FaCss3Alt class="css-icon" />
      <BiLogoBootstrap class="bootstrap-icon" />
      <RiTailwindCssFill class="tailwind-icon" />
    </div>
  </div>
  <div>
    <h4>Backend</h4>
    <div style={{display:"flex", flexDirection:"row", gap:"30px", marginTop:"25px", marginBottom:"40px"}}>
      <FaPhp class="php-icon" />
      <DiNodejs class="node-icon" />
      <FaLaravel class="laravel-icon" />
    </div>
  </div>
  <div>
    <h4>Base de données</h4>
    <div style={{display:"flex", flexDirection:"row", gap:"30px", marginTop:"25px", marginBottom:"40px"}}>
      <SiMysql class="mysql-icon" />
      <BiLogoPostgresql class="postgres-icon" />
      <SiMongodb class="mongodb-icon" />
    </div>
  </div>
  <div>
    <h4>Outils</h4>
    <div style={{display:"flex", flexDirection:"row", gap:"30px", marginTop:"25px", marginBottom:"40px"}}>
      <FaGitAlt class="git-icon" />
      <FaGithub class="github-icon" />
      <TbJson class="json-icon" />
      <TbApi class="api-icon" />
      <FaFigma  class="figma-icon"/>
    </div>
  </div>
  <div>
    <h4>Système d'exploitation</h4>
    <div style={{display:"flex", flexDirection:"row", gap:"30px", marginTop:"25px", marginBottom:"40px"}}>
      <FaLinux class="linux-icon" />
      <IoLogoWindows class="windows-icon" />
    </div>
  </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Expériences</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
