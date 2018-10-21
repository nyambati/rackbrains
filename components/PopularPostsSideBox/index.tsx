import { IArticle } from '../../models/Article';

interface ArticleProps {
  article: IArticle;
}

interface PopularPostsProps {
  articles: Array<IArticle>;
}

const Article = (props: ArticleProps) => {
  return (
    <li>
      <a href="">
        <img
          src={props.article.imageUrl}
          alt="Image placeholder"
          className="mr-4"
        />
        <div className="text">
          <h4>{props.article.title}</h4>
          <div className="post-meta">
            <span className="mr-2">{props.article.publishedAt}</span> &bullet;
            <span className="ml-2">
              <span className="fa fa-comments" /> {props.article.commentsCount}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
};

const PopularPostsSideBox = (props: PopularPostsProps) => {
  return (
    <div className="sidebar-box">
      <h3 className="heading">Popular Posts</h3>
      <div className="post-entry-sidebar">
        <ul>
          {props.articles.map(article => {
            return <Article article={article} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default PopularPostsSideBox;
