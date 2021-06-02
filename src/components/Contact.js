import React from 'react'

const Contact = () => {
    return (
        <div className="contact-page-background">
            <section className="container contact-page">
                <div className="mt-5 row">
                    <div className="col-lg-7 col-12 d-flex align-items-lg-start align-items-center flex-column justify-content-center leftText">
                        <h1 className="mb-5 text-uppercase title"><span className="orange-span">c</span>ontact<span className="orange-span">.</span></h1>
                        <p className="mb-5">06 82 84 43 71</p>
                        <p className="mb-5">remi.turini13@gmail.com</p>
                        <div className="d-flex flex-row">
                            <div className="mr-4"><a href="https://github.com/remi-turini"><i class="fab fa-github fa-2x"></i></a></div>
                            <div><a href="https://www.linkedin.com/in/remi-turini-658a1b1b7/"><i class="fab fa-linkedin fa-2x"></i></a></div> 
                        </div>
                    </div>
                        <form className="col-lg-5 col-12 d-flex flex-column justify-content-center">
                            <div className="row mb-4">
                                <div className="col">
                                    <input type="text" class="form-control" id="formControlInput1" placeholder="Nom*"/>
                                </div>
                                <div className="col">
                                    <input type="email" class="form-control" id="formControlInput2" placeholder="Email*"/>
                                </div>
                            </div>
                            <div class="mb-4">
                                <input type="tel" class="form-control" id="formControlInput3" placeholder="Telephone*"/>
                            </div>
                            <div class="mb-4">
                                <textarea class="form-control" id="formControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" disabled className="text-uppercase btn btn-secondary rounded-pill">Envoyer</button>
                        </form>
                </div>
            </section>
        </div>
    )
}

export default Contact
