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
                <div className="mr-lg-1 mb-lg-0 mb-1">
                    <div className="pb-5"><i class="fas fa-shopping-cart fa-5x"></i></div>
                    <div className="text-uppercase">e-commerce</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nesciunt eaque saepe impedit ut consectetur ex esse quasi et! Molestiae dolores distinctio impedit est voluptates ipsum totam quaerat, dolore velit!</div>
                    <a href="https://github.com/remi-turini/E-commerce-API-Symfony" class="btn btn-light">Voir le projet</a>    
                </div>
                <div className="ml-lg-1 mt-lg-0 mt-1">
                    <div className="pb-5"><i class="fas fa-comment-dots fa-5x"></i></div>
                    <div className="text-uppercase">chat en ligne</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident nesciunt eaque saepe impedit ut consectetur ex esse quasi et! Molestiae dolores distinctio impedit est voluptates ipsum totam quaerat, dolore velit!</div>        
                    <a href="https://github.com/remi-turini/JS-Chat-node-express-react" class="btn btn-light">Voir le projet</a>
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
