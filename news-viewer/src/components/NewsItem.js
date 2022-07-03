import React from "react";
import styled from "styled-components";

const NewItemBlock = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 100px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  /* 이 div 안의 요소와 요소사이 */
  & + & {
    margin-top: 3rem;
  }
`;

// 실제 컴포넌트

export default function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;
  return (
    <NewItemBlock>
      {/* upToImage가 있으면 이미지를 출력하는 요소를 보여줌 */}
      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blink" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blink" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewItemBlock>
  );
}
