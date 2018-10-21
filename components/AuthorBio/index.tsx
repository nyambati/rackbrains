const image = require('../../api/images/person_1.jpg');
export default () => {
  return (
    <div className="sidebar-box">
      <div className="bio text-center">
        <img src={image} alt="Image Placeholder" className="img-fluid" />
        <div className="bio-body">
          <h2>Meagan Smith</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem facilis sunt repellendus excepturi beatae porro
            debitis voluptate nulla quo veniam fuga sit molestias minus.
          </p>
          <p>
            <a href="#" className="btn btn-primary btn-sm">
              Read my bio
            </a>
          </p>
          <p className="social">
            <a href="#" className="p-2">
              <span className="fa fa-facebook" />
            </a>
            <a href="#" className="p-2">
              <span className="fa fa-twitter" />
            </a>
            <a href="#" className="p-2">
              <span className="fa fa-instagram" />
            </a>
            <a href="#" className="p-2">
              <span className="fa fa-youtube-play" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
