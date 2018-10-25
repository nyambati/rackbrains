export default props => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-4">
            <h3>Paragraph</h3>
            <p>
              <img
                src="images/img_1.jpg"
                alt="Image placeholder"
                className="img-fluid"
              />
            </p>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi,
              accusantium optio unde perferendis eum illum voluptatibus dolore
              tempora, consequatur minus asperiores temporibus reprehenderit.
            </p>
          </div>
          <div className="col-md-6 ml-auto">
            <div className="row">
              <div className="col-md-7">
                <h3>Latest Post</h3>
                <div className="post-entry-sidebar">
                  <ul>
                    <li>
                      <a href="">
                        <img
                          src="images/img_6.jpg"
                          alt="Image placeholder"
                          className="mr-4"
                        />
                        <div className="text">
                          <h4>
                            There’s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>{' '}
                            &bullet;
                            <span className="ml-2">
                              <span className="fa fa-comments" /> 3
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="images/img_3.jpg"
                          alt="Image placeholder"
                          className="mr-4"
                        />
                        <div className="text">
                          <h4>
                            There’s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>{' '}
                            &bullet;
                            <span className="ml-2">
                              <span className="fa fa-comments" /> 3
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="images/img_4.jpg"
                          alt="Image placeholder"
                          className="mr-4"
                        />
                        <div className="text">
                          <h4>
                            There’s a Cool New Way for Men to Wear Socks and
                            Sandals
                          </h4>
                          <div className="post-meta">
                            <span className="mr-2">March 15, 2018 </span>{' '}
                            &bullet;
                            <span className="ml-2">
                              <span className="fa fa-comments" /> 3
                            </span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-1" />

              <div className="col-md-4">
                <div className="mb-5">
                  <h3>Quick Links</h3>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Travel</a>
                    </li>
                    <li>
                      <a href="#">Adventure</a>
                    </li>
                    <li>
                      <a href="#">Courses</a>
                    </li>
                    <li>
                      <a href="#">Categories</a>
                    </li>
                  </ul>
                </div>

                <div className="mb-5">
                  <h3>Social</h3>
                  <ul className="list-unstyled footer-social">
                    <li>
                      <a href="#">
                        <span className="fa fa-twitter" /> Twitter
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-facebook" /> Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-instagram" /> Instagram
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-vimeo" /> Vimeo
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-youtube-play" /> Youtube
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="fa fa-snapchat" /> Snapshot
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-12">
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | This template is made with{' '}
            <i className="fa fa-heart-o" aria-hidden="true" /> by{' '}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
          </div>
        </div> */}
      </div>
    </footer>
  );
};
