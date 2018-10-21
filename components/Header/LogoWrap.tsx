import React from 'react';
import Link from 'next/link';

interface Props {
  content: string;
}
const LogoWrap: React.SFC<Props> = (props: Props) => {
  return (
    <div className="container logo-wrap">
      <div className="row pt-5">
        <div className="col-12 text-center">
          <a
            className="absolute-toggle d-block d-md-none"
            data-toggle="collapse"
            href="#navbarMenu"
            role="button"
            aria-expanded="false"
            aria-controls="navbarMenu"
          >
            <span className="burger-lines" />
          </a>
          <h1 className="site-logo">
            <Link href="/">
              <a>{props.content}</a>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};
export default LogoWrap;
