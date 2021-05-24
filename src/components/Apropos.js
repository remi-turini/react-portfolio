import React from 'react'
import photo from '../Photo-nb.png'
import epitechLogo from '../1.jpg'
import BTSLogo from '../2.jpg'
import BacLogo from '../3.jpg'

const apropos = () => {
    return (
        <>
        <div className="container-fluid shadow p-5">
        <div className="container">
            <div className="row aPropos">
                <div className="col-6">
                    <img src={photo} alt="remi turini"></img>
                </div>
                <div className="col-6 shortDescription">
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
        </div>
        {/* <div className="container formation">
                <section class="page-section" id="about">
                <div class="container">
                    <div class="mb-5 text-center">
                        <h2 class="section-heading text-uppercase">Diplôme et Formations</h2>
                        <h3 class="section-subheading text-muted"></h3>
                    </div>
                    <ul class="timeline">
                        <li>
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src={epitechLogo} alt="" /></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4>2020-2023</h4>
                                    <h4 class="subheading">MSc-Pro</h4>
                                </div>
                                <div class="timeline-body"><p class="text-muted">Epitech Marseille</p></div>
                            </div>
                        </li>
                        <li class="timeline-inverted">
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src={BTSLogo} alt="" /></div>
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
                            <div class="timeline-image"><img class="rounded-circle img-fluid" src={BacLogo} alt="" /></div>
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
        </div> */}
        </>
    )
}

export default apropos
