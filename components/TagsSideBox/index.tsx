import { SFC } from 'react';

interface Tag {
  name: string;
  link: string;
}

interface Props {
  tags: Array<Tag>;
}

const TagsSideBox: React.SFC<Props> = (props: Props) => {
  return (
    <div className="sidebar-box">
      <h3 className="heading">Tags</h3>
      <ul className="tags">
        {props.tags.map((tag, index) => {
          return (
            <li key={index}>
              <a href={tag.link}>{tag.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TagsSideBox;
