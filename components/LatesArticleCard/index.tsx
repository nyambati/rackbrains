import { IArticle } from '../../models/Article';

interface Props {
  data: IArticle;
}

export default (props: Props) => {
  return (
    <div className="col-md-6">
      <a
        href="blog-single.html"
        // className="blog-entry element-animate"
        className="blog-entry"
        data-animate-effect="fadeIn"
      >
        <img src={props.data.imageUrl} alt="Image placeholder" />
        <div className="blog-content-body">
          <div className="post-meta">
            <span className="category">{props.data.category}</span>
            <span className="mr-2">{props.data.publishedAt}</span> &bullet;
            <span className="ml-2">
              <span className="fa fa-comments" /> {props.data.commentsCount}
            </span>
          </div>
          <h2>{props.data.title}</h2>
        </div>
      </a>
    </div>
  );
};
