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

const FeatureArticle = (props: Props) => {
  return (
    <Link href="/article/">
      <a
        className="a-block d-flex align-items-center height-lg"
        style={{ backgroundImage: `url('${props.data.imageUrl}')` }}
      >
        <div className="text half-to-full">
          <div className="post-meta">
            <span className="category">{props.data.category}</span>
            <span className="mr-2">{props.data.publishedAt} </span> .
            <span className="ml-2">
              <span className="fa fa-comments" /> {props.data.commentsCount}
            </span>
          </div>
          <h3>{props.data.title}</h3>
          <p>{props.data.upsert}</p>
        </div>
      </a>
    </Link>
  );
};

export default FeatureArticle;
