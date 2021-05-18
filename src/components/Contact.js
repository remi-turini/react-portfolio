import React from 'react'

const Contact = () => {
    return (
        <div className="container contact">
            <div className="mt-5 row align-items">
                <div className="col-6 d-flex flex-column justify-content-between leftText">
                    <div className="text-uppercase title"><span className="orange-span">c</span>ontact<span className="orange-span">.</span></div>
                    <div>06 82 84 43 71</div>
                    <div>remi.turini13@gmail.com</div>
                    <div className="d-flex flex-row">
                        <div className="mr-4">logo</div>
                        <div>logo</div> 
                    </div>
                </div>
                <div className="col-6 flex">
                    <form>
                        <div class="w-25">
                            <input type="text" class="form-control" id="formControlInput1" placeholder="Nom*"/>
                        </div>
                        <div class="w-25">
                            <input type="email" class="form-control" id="formControlInput2" placeholder="Email*"/>
                        </div>
                        <div class="">
                            <input type="tel" class="form-control" id="formControlInput3" placeholder="Telephone*"/>
                        </div>
                        <div class="">
                            <textarea class="form-control" id="formControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
