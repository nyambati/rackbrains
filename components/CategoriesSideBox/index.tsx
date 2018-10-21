const CategoriesSideBox = props => {
  return (
    <div className="sidebar-box">
      <h3 className="heading">Categories</h3>
      <ul className="categories">
        <li>
          <a href="#">
            Courses <span>(12)</span>
          </a>
        </li>
        <li>
          <a href="#">
            News <span>(22)</span>
          </a>
        </li>
        <li>
          <a href="#">
            Design <span>(37)</span>
          </a>
        </li>
        <li>
          <a href="#">
            HTML <span>(42)</span>
          </a>
        </li>
        <li>
          <a href="#">
            Web Development <span>(14)</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CategoriesSideBox;
