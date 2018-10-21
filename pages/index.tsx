import '../components/Theme/';
import Header from '../components/Header/';
import FeatureArticle from '../components/FeatureArticle/';
import ArticleCard from '../components/ArticleCard/';
import articles from '../api/articles';
import tags from '../api/tags';
import TagsSideBox from '../components/TagsSideBox/';
import CategoriesSideBox from '../components/CategoriesSideBox/';
import PopularPostsSideBox from '../components/PopularPostsSideBox/';
import MoreArticles from '../components/MoreArticles/';
import AuthorBio from '../components/AuthorBio/';
import LatestArticleCard from '../components/LatesArticleCard';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div>
      <Header />
      <section className="site-section pt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="owl-carousel owl-theme home-slider">
                <FeatureArticle data={articles[0]} />
              </div>
            </div>
          </div>
          <div className="row">
            {articles.slice(0, 3).map((article, index) => {
              return <ArticleCard key={index} data={article} />;
            })}
          </div>
        </div>
      </section>
      <section className="site-section py-sm">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="mb-4">Lifestyle Category</h2>
            </div>
          </div>
          <div className="row blog-entries">
            <div className="col-md-12 col-lg-8 main-content">
              <div className="row">
                {articles.slice(5, 11).map((article, index) => (
                  <LatestArticleCard key={index} data={article} />
                ))}
              </div>

              <div className="row">
                <div className="col-md-12 text-center">
                  <nav aria-label="Page navigation" className="text-center">
                    <ul className="pagination">
                      <li className="page-item  active">
                        <a className="page-link" href="#">
                          Prev
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <MoreArticles data={articles.slice(0, 6)} />
            </div>

            <div className="col-md-12 col-lg-4 sidebar">
              <CategoriesSideBox categories={[]} />
              <TagsSideBox tags={tags} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
