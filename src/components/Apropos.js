import React from 'react'
import photo from '../img/Photo-nb.png'
import epitechLogo from '../img/1.jpg'
import BTSLogo from '../img/2.jpg'
import BacLogo from '../img/3.jpg'
import SymfonyLogo from '../img/symfonyLogo.svg'
import Atom from '../img/atom.svg'
import NodeLogo from '../img/nodeLogo.svg'
import MysqlLogo from '../img/MysqlLogo.png'
import DockerLogo from '../img/docker.svg'

const apropos = () => {
    return (
        <>
        <div className="container">
            <div className="row flex-column flex-lg-row aPropos">
                <div className="col-6">
                    <img src={photo} alt="remi turini"></img>
                </div>
                <div className="col-lg-6 col-12 shortDescription">
                    <h1 className="text-uppercase title">à propos de moi</h1>
                    <h2 className="name">Remi Turini</h2>
                    <div className="text-wrap">
                        J'ai 23 ans, je suis actuellement étudiant, je partage mon temps entre mes études et mes loisirs avec la pratique du VTT et du motocross.
                        Après mon baccalauréat scientifique je me suis inscris à l'université en informatique. Le cursus proposé ne m'a pas convenu,
                        j'ai donc décidé de découvrir le monde de l'entreprise en effectuant de nombreuses missions dintérim.
                        J'ai ensuite repris mes études en BTS Système Numériques, et prépare aujourd'hui un diplôme en Master
                    </div>
                </div>
            </div>
        </div>
        <div className="container formation">
                <section class="page-section" id="about">
                <div class="container">
                    <div class="mb-5 text-center">
                        <h2 class="section-heading text-uppercase">Diplôme et Formations</h2>
                        <h3 class="section-subheading text-muted"></h3>
                    </div>
                    <ul class="timeline">
                        <li>
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src={epitechLogo} alt="Epitech" /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2020-2023</h4>
                                    <h4 class="subheading">MSc-Pro</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Epitech Marseille</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src={BTSLogo} alt="Brevet technicien supérieur" /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2018-2020</h4>
                                    <h4 class="subheading">BTS Systèmes Numériques option A informatique et
                                        réseaux (SN IR)</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lycée Saint-Eloi Aix-en-Provence, France</p></div>
                            </div>
                        </li>
                        <li>
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src={BacLogo} alt="Baccalauréat" /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2013-2016</h4>
                                    <h4 class="subheading">Baccalauréat scientifique, option écologie agronomie territoires</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Lycée LEGTA Aix Valabre Gardanne, France</p></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        <section className="container competences">
            <div className="row">
                <div className="col-6 main-col-left">
                    <h1 className="text-uppercase">Compétences</h1>
                    <p className="">Ces langages sont ceux sur lesquels je travaille le plus et que je connais le mieux, que ce soit en front ou en back. Car mon projet à terme serait de devenir développeur full stack</p>   
                    <p>PHP/Symfony</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>Node.js/Express</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>MySQL</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p>React, HTML, CSS, JAVASCRIPT</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemax="100"></div>
                    </div>
                    <p>Docker, Jenkins, Kubernetes</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{width: "35%"}} aria-valuenow="35" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="col-6 row main-col-right">
                    <div className="col-6 image-col-left">
                        <img src={SymfonyLogo}></img>
                        <img src={MysqlLogo}></img>
                        <img src={DockerLogo}></img>
                    </div>
                    <div className="col-6 image-col-right">
                        <img src={NodeLogo}></img>
                        <img src={Atom}></img>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default apropos
