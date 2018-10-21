import Link from 'next/link';
interface Article {
  imageUrl: string;
  category: string;
  publishedAt: string;
  commentsCount: number;
  title: string;
  upsert: string;
}

interface Props {
  data: Article;
}

const ArticleCard = (props: Props) => {
  return (
    <div className="col-md-6 col-lg-4">
      <Link href="/article">
        <a
          className="a-block d-flex align-items-center height-md"
          style={{ backgroundImage: `url('${props.data.imageUrl}')` }}
        >
          <div className="text">
            <div className="post-meta">
              <span className="category">{props.data.category}</span>
              <span className="mr-2">{props.data.publishedAt}</span> .
              <span className="ml-2">
                <span className="fa fa-comments" /> {props.data.commentsCount}
              </span>
            </div>
            <h3>{props.data.title}</h3>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ArticleCard;
