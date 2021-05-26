import React from 'react';

const header = () => {
    return (
        <>
            <div className="mb-5 header-wraper shadow-sm">
                <div className="container h-100 main">
                    <div className="d-flex h-100 flex-column justify-content-center">
                        <h1 className="w-50 text-uppercase">Rémi turini</h1>
                        <h2 className="w-50">Developpeur Web</h2>
                        <button className="p-3 btn btn-secondary text-uppercase CVButton">découvrir mon cv</button>
                    </div>
                </div>
            </div>
            <div className="container last">
                <div className="row text-center flex-column align-items-center">
                    <div className="mt-5 mb-4 text-uppercase title">développeur web <span className="orange-span-2">back end</span></div>
                    <div className="titleText">
                        Développeur depuis maintenant environ 1 an, le développement back-end m'interesse plus particuliérement. J'ai travaillé sur de nombreux projets dans différents language tel que PHP, Java, NodeJS, ou encore PHP/Symfony.
                        Je souhaite aujourd'hui apprendre encore d'avantage sur ces languages web et apporter mes connaissances sur des projets concrets.
                    </div>
                </div>
            </div>
        </>
    )
}

export default header
