import React from 'react';

const Mesprojets = () => {
    return (
        <>
        <div className="mt-4 container">
            <div className="row">
                <div className="col-2 text-uppercase mainTitle">Projets</div>
                <div className="col-12 border-bottom"></div>
            </div>
        </div>

        <div className="mt-5 divProjects">
            <div className="d-flex text-center flex-column flex-lg-row">
                <div className="mr-lg-1 m-lg-0 mb-1">
                    <div className="pb-5"><i class="fas fa-shopping-cart fa-5x"></i></div>
                    <div className="text-uppercase">e-commerce</div>
                    <span class="badge bg-secondary">Symfony 4</span>
                    <span class="badge bg-secondary">Ansible</span>
                    <div>Le but du projet a été de créer une API pour les sites marchand e-commerce sous Symfony avec un maximum de fonctionnalités. L'API respecte la norme REST et utilise le format JSON pour représenter les données </div>
                    <a href="https://github.com/remi-turini/E-commerce-API-Symfony" class="btn btn-light">Voir le projet</a>    
                </div>
                <div className="ml-lg-1 m-lg-0 mt-1 mb-1">
                    <div className="pb-5"><i class="fas fa-comment-dots fa-5x"></i></div>
                    <div className="text-uppercase">chat en ligne</div>
                    <span class="badge bg-secondary">JS Frameworks</span>
                    <div>Dans ce projet nous avons crée un serveur en NodeJS, ExpressJS, et un client en ReactJS. Ce serveur accepte plusieurs connexions simultanées et implémente la notion de channels. Mise en place de socket.</div>        
                    <a href="https://github.com/remi-turini/JS-Chat-node-express-react" class="btn btn-light">Voir le projet</a>
                </div>
            </div>
            <div className="d-flex text-center flex-column flex-lg-row mt-lg-4">
                <div className="mr-lg-1 m-lg-0 mb-1 mt-1">
                    <div className="pb-5"><i class="fas fa-briefcase fa-5x"></i></div>
                    <div className="text-uppercase">job board</div>
                    <span class="badge bg-secondary">PHP</span>
                    <div>L'objectif de ce projet est la réalisation d'une bdd pour stocker les offres d'emplois. Un front-end en Javascript pour afficher les offres d'emplois ainsi qu'une page d'administration pour les admins, ainsi qu'une api pour les utilisateurs et admins</div>
                    <a href="https://github.com/remi-turini/JobBoard" class="btn btn-light">Voir le projet</a>    
                </div>
                <div className="ml-lg-1 m-lg-0 mt-1 mb-1">
                    <div className="pb-5"><i class="fas fa-tachometer-alt fa-5x"></i></div>
                    <div className="text-uppercase">dashboard</div>
                    <span class="badge bg-secondary">Java</span>
                    <div>L'utilisateur peut s'authentifier et composer son tableau de bord en insérant des widgets pré-configuré. Il peut s'abonner à différents services et chaque service propose des widgets. Un timer actualise réguliérement les informations affichées</div>        
                    <a href="https://github.com/remi-turini/dashboard-spring" class="btn btn-light">Voir le projet</a>
                </div>
            </div>
            <div className="mt-3 text-center text-uppercase lowerLink">
                <a href="https://github.com/remi-turini?tab=repositories" className="text-reset ">Découvrir tout les projets <span className="orange-span"> > </span></a>
            </div>
        </div>
        </>
    )
}

export default Mesprojets
