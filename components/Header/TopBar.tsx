import React from 'react';

const TopBar: React.SFC = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-9 social">
            <a href="#">
              <span className="fa fa-twitter" />
            </a>
            <a href="#">
              <span className="fa fa-facebook" />
            </a>
            <a href="#">
              <span className="fa fa-instagram" />
            </a>
            <a href="#">
              <span className="fa fa-youtube-play" />
            </a>
            <a href="#">
              <span className="fa fa-vimeo" />
            </a>
            <a href="#">
              <span className="fa fa-snapchat" />
            </a>
          </div>
          <div className="col-3 search-top">
            <form action="#" className="search-top-form">
              <span className="icon fa fa-search" />
              <input
                type="text"
                id="s"
                placeholder="Type keyword to search..."
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
