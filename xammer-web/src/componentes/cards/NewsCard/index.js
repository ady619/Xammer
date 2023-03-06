import React from "react";

const NewsCard = ({news}) => {
    const {author, content, description, publishedAt, title, url, urlToImage} = news
    console.log(news)
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default NewsCard