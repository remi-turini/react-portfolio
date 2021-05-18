import React from 'react';

const header = () => {
    return (
        <>
            <div className="mb-5 header-wraper shadow">
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi scelerisque consequat malesuada.
                        Suspendisse porttitor auctor metus, et rutrum massa tempor nec. Nam porta blandit nibh, ac feugiat dolor vulputate a.
                        Maecenas nec interdum mi. Sed varius ex at mollis ullamcorper. Nulla facilisi. Sed consequat venenatis volutpat.
                    </div>
                </div>
            </div>
        </>
    )
}

export default header
