import { IArticle } from '../../models/Article';

interface HProps {
  data: IArticle;
}

interface MProps {
  data: Array<IArticle>;
}

const HorizontalArticle = (props: HProps) => {
  return (
    <div className="post-entry-horzontal">
      <a href="blog-single.html">
        <div // className="image element-animate"
          className="image"
          data-animate-effect="fadeIn"
          style={{ backgroundImage: `url('${props.data.imageUrl}')` }}
        />
        <span className="text">
          <div className="post-meta">
            <span className="category">{props.data.category}</span>
            <span className="mr-2">{props.data.publishedAt}</span> .
            <span className="ml-2">
              <span className="fa fa-comments" /> {props.data.commentsCount}
            </span>
          </div>
          <h2>{props.data.title}</h2>
        </span>
      </a>
    </div>
  );
};

export default (props: MProps) => {
  return (
    <div className="row mb-5 mt-5">
      <div className="col-md-12">
        <h2 className="mb-4">More Blog Posts</h2>
      </div>

      <div className="col-md-12">
        {props.data.map((article, index) => {
          return <HorizontalArticle key={index} data={article} />;
        })}
      </div>
    </div>
  );
};
