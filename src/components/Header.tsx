import React from 'react'
import { Link, NavLink } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
  return (
    <div>

      <div>
        {/* main nav */}
        <div className="container-fluid fluid-nav">
          <div className="container cnt-tnar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light tjnav-bar">
              {/* <a class="navbar-brand" href="#">Navbar</a> */}
              <a href="#" className="nav-logo">
                <img src="img/techjobs_bgb.png" />
              </a>
              <button className="navbar-toggler tnavbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span class="navbar-toggler-icon"></span> */}
                <i className="fa fa-bars icn-res" aria-hidden="true" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto tnav-left tn-nav">
                  <li className="nav-item">
                    <a className="nav-link" href=""> <NavLink to="/search">Việc Làm IT</NavLink> </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Tin Tức</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Dropdown
                    </a>
                    <div className="dropdown-menu tdropdown" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Action</a>
                      <a className="dropdown-item" href="#">Another action</a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav mr-auto my-2 my-lg-0 tnav-right tn-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#"><i className="fa fa-search" aria-hidden="true" /> <span className="hidden-text">Tìm
                      kiếm</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#modal">Đăng Ký</a>
                  </li>
                  <div className='bodymodal'>
                    <div id="modal" className="overlay">
                      <div className="popup">
                        <h2>Chào bạn, </h2>
                        <a className="close" href="#">&times;</a>
                        <span>bạn hãy dành vài giây để xác nhận thông tin này nhé</span>
                        <div className="content">
                          <div>Để tối ưu tốt nhất cho trải nghiệm của bạn với Website,
                            vui lòng lựa chọn nhóm phù hợp nhất với bạn.</div>
                          <div className='bodyntd'>
                            <div className='contenrmodal'>
                              <img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1662714590/news2_pgluai.jpg" alt="" width="400px" height="300px" />
                              <div>
                                <a href="" className="btn btn-primary"> <NavLink to="/login/signupempoly">Nhà tuyển dụng</NavLink></a>
                              </div>
                            </div>
                            <div className='contenrmodal'>
                              <img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1662714590/news2_pgluai.jpg" alt="" width="400px" height="300px" />
                              <div>
                                <a href="" className="btn btn-primary"> <Link to="/login/signupcandidate">Ứng viên</Link></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <li className="nav-item">
                    <a className="nav-link" href="login-employees.html"> <NavLink to="/login"> Đăng Nhập</NavLink></a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      VI
                    </a>
                    <div className="dropdown-menu tdropdown" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">English</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link btn-employers" href="#" tabIndex={-1} aria-disabled="true">Nhà Tuyển Dụng</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* (end) main nav */}
        <div className="clearfix" />
        {/* main banner */}
        <div className="container-fluid clear-left clear-right">
          <div className="main-banner">
            <div className="banner-image">
              <img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1662714588/banner2_j8zpnj.jpg" alt="banner-image" />
            </div>
          </div>
          <div className="banner-content">
            <h3>1000+ Jobs For Developers</h3>
            <div className="banner-tags">
              <ul>
                <li><a href="#">Java</a></li>
                <li><a href="#">Python</a></li>
                <li><a href="#">Tester</a></li>
                <li><a href="#">QA QC</a></li>
                <li><a href="#">.NET</a></li>
                <li><a href="#">Javascript</a></li>
                <li><a href="#">Business Analyst</a></li>
                <li><a href="#">Designer</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* (end) main banner */}
        {/* search section */}
        <div className="container-fluid search-fluid">
          <div className="container">
            <div className="search-wrapper" style={{ marginTop: '-11rem' }}>
              <ul className="nav nav-tabs search-nav-tabs" id="myTab" role="tablist">
                <li className="nav-item search-nav-item">
                  <a className="nav-link snav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tìm việc làm</a>
                </li>
                <li className="nav-item search-nav-item">
                  <a className="nav-link snav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tìm công ty</a>
                </li>
              </ul>
              <div className="tab-content search-tab-content" id="myTabContent">
                {/* content tab 1 */}
                <div className="tab-pane stab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <form className="bn-search-form">
                    <div className="row">
                      <div className="col-md-10 col-sm-12">
                        <div className="row">
                          <div className="col-md-5">
                            <div className="input-group s-input-group">
                              <input type="text" className="form-control sinput" placeholder="Nhập kỹ năng, công việc,..." />
                              <span><i className="fa fa-search" /></span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <select id="computer-languages">
                              <option value="" selected hidden>Tất cả ngôn ngữ</option>
                              <option>Java</option>
                              <option>.NET</option>
                              <option>Javascript</option>
                              <option>Php</option>
                              <option>Python</option>
                              <option>QC QC</option>
                              <option>Business Analyst</option>
                              <option>Tester</option>
                              <option>Ruby</option>
                            </select>
                            <i className="fa fa-code sfa" aria-hidden="true" />
                          </div>
                          <div className="col-md-3">
                            <select id="s-provinces">
                              <option value="" selected hidden>Tất cả địa điểm</option>
                              <option>Đà Nẵng</option>
                              <option>Hà Nội</option>
                              <option>Hồ Chí Minh</option>
                              <option>Buôn Ma Thuột</option>
                              <option>Quy Nhơn</option>
                              <option>Nha Trang</option>
                            </select>
                            <i className="fa fa-map-marker sfa" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-12">
                        <button type="submit" className="btn btn-primary btn-search col-sm-12">Tìm kiếm</button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* (end) content tab 1 */}
                {/* content tab 2 */}
                <div className="tab-pane stab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <form className="bn-search-form">
                    <div className="row">
                      <div className="col-md-10 col-sm-12">
                        <div className="input-group s-input-group w-100">
                          <input type="text" className="form-control sinput" placeholder="Nhập kỹ năng, công việc,..." />
                          <span><i className="fa fa-search" /></span>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-12">
                        <button type="submit" className="btn btn-primary btn-search col-sm-12">Tìm kiếm</button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* (end) content tab 2 */}
              </div>
            </div>
          </div>
        </div>
        {/* (end) search section */}
      </div>
      {/* modal click chọn bên đăng ký */}

    </div>
  )
}

export default Header