import React from 'react'
import "../assets/css/footer.css"

function Footer() {


    return (
        <>




            <div className="container-fluid">
                <div className="container">
                    <div className="row content-item">
                        <div className="col-sm-12 col-md-12 col-lg-7  ">
                            <div className="row">
                                <div className=" col-xs-12 col-sm-12 col-md-3" >
                                    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" className="logo-footer" alt="Logo" />
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-3  item5" >
                                    <ul className="nav flex-column mt-3">
                                        <li className="nav-item mb-2 title"> Company</li>
                                        <li className="nav-item mb-2"><a href="#">About</a></li>
                                        <li className="nav-item mb-2"><a href="#">About</a></li>
                                        <li className="nav-item mb-2"><a href="#">For the record</a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-3  item5" >
                                    <ul className="nav flex-column mt-3">
                                        <li className="nav-item mb-2 title">Communities</li>
                                        <li className="nav-item mb-2"><a href="#">For Artists</a></li>
                                        <li className="nav-item mb-2"><a href="#">Developers</a></li>
                                        <li className="nav-item mb-2"><a href="#">Advertising</a></li>
                                        <li className="nav-item mb-2"><a href="#">Investors</a></li>
                                        <li className="nav-item mb-2"><a href="#">Vendors</a></li>
                                    </ul>
                                </div>
                                <div className="col-xs-12 col-sm-12 col-md-3 item5" >
                                    <ul className="nav flex-column mt-3">
                                        <li className="nav-item mb-2 title">Useful Links</li>
                                        <li className="nav-item mb-2"><a href="#">Support</a></li>
                                        <li className="nav-item mb-2"><a href="#">Web Player</a></li>
                                        <li className="nav-item mb-2"><a href="#">Free Mobile App</a></li>
                                        <li className="nav-item mb-2"><a href="#">Car Thing</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className=" col-sm-12 col-md-12 col-lg-5 item5" > <div className="social text-sm-center">
                            <ul className="list-unstyled  d-flex float-end ">
                                <li className="ms-3"><a className="link-dark" href="#"><span className='social-radius'>
                                    <i className="fab fa-instagram  me-2" /></span></a></li>

                                <li className="ms-3"><a className="link-dark" href="#"> <span className='social-radius'><i className="fab fa-twitter   ms-md-0" /></span></a></li>
                                <li className="ms-3"><a className="link-dark" href="#"><span className='social-radius'><i className="fab fa-facebook me-2 " /></span></a></li>
                            </ul></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="d-flex copyright">
                            <div className="ms-auto p-2 "><svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.70312 0.577148C8.77567 0.577148 10.6062 1.63354 11.6846 3.23612L11.6856 3.23751C11.706 3.26311 11.724 3.2899 11.7394 3.31759C12.3484 4.25665 12.7031 5.37628 12.7031 6.57715C12.7031 9.87578 10.0275 12.561 6.73275 12.5771C6.73045 12.5772 6.72808 12.5772 6.72571 12.5772L6.70312 12.5771C3.39461 12.5771 0.703125 9.88566 0.703125 6.57715C0.703125 3.26884 3.39461 0.577148 6.70312 0.577148ZM6.70312 1.73841C6.50724 1.73841 6.31401 1.75011 6.12415 1.77285C6.10068 1.86688 6.05209 1.95543 5.97963 2.02954L4.45469 3.59027C4.34336 3.70416 4.1929 3.76513 4.03928 3.76513C3.97064 3.76513 3.9016 3.75293 3.83492 3.72796C3.61935 3.64672 3.47203 3.4459 3.45965 3.21578L3.44757 3.00038C2.47541 3.88602 1.86437 5.16157 1.86437 6.57715C1.86437 6.85826 1.88848 7.13383 1.93471 7.40194L2.82222 8.13851C2.83126 8.14579 2.84011 8.15366 2.84876 8.16172L3.62294 8.8875C3.69316 8.95319 3.74587 9.03541 3.77636 9.12687L4.07945 10.0324L4.53656 10.2547H5.56446C5.71827 10.2547 5.86597 10.3156 5.97495 10.4246L6.95933 11.4092C9.50879 11.2755 11.5418 9.1593 11.5418 6.57715C11.5418 5.82573 11.3697 5.11376 11.0627 4.47862L10.1603 5.19929L10.3277 5.56533C10.3627 5.64125 10.3804 5.72366 10.3804 5.80706V6.56097C10.3804 6.73327 10.3039 6.89671 10.1717 7.00706C10.0393 7.1172 9.86467 7.16343 9.69532 7.13215L8.75869 6.96064L9.22956 8.24168C9.2866 8.39667 9.2748 8.56856 9.1973 8.71451L8.37474 10.2628C8.28523 10.4314 8.11941 10.5438 7.93282 10.5667L7.86178 10.571C7.647 10.571 7.44972 10.4522 7.34902 10.2624L6.95543 9.52055C6.94875 9.50756 6.94226 9.49438 6.93636 9.481L6.6134 8.74146L6.22533 8.20725L4.85755 8.39431C4.75822 8.40788 4.65692 8.39568 4.56369 8.35831L3.39124 7.89078C3.16839 7.80168 3.02322 7.58513 3.02556 7.34517L3.04191 5.80096C3.04408 5.60348 3.14616 5.42076 3.31334 5.31553L5.27867 4.07954C5.51371 3.93182 5.82094 3.97096 6.01114 4.17375L6.66218 4.86708L7.48492 5.18375L7.75616 5.08678L6.60494 3.44246C6.48162 3.26623 6.46568 3.0363 6.56363 2.84492L7.12044 1.75624C6.98288 1.74443 6.8437 1.73841 6.70312 1.73841Z" fill="#8F8F8F" />
                            </svg>
                                India (English)</div>
                        </div>
                    </div>

                    <div className="row copyright mb-5 " style={{ color: "#919496" }}>
                        <div className=" col-xs-12 col-sm-12 col-md-6 text-center text-md-start">
                            <div className="d-inline-block me-md-3">Legal</div>
                            <div className="d-inline-block me-md-3">Privacy Center</div>
                            <div className="d-inline-block me-md-3">Privacy Policy</div>
                            <div className="d-inline-block me-md-3">Cookies</div>
                            <div className="d-inline-block me-md-3">About Ads</div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 text-center text-md-end  mt-2 mt-md-0">
                            <div className="d-inline-block me-md-3">© 2023 Spotify AB</div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer