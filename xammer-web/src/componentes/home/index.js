import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NewsCard from '../cards/NewsCard';

const Home = () => {
    const apiKey="fb6804faa55b44589f1758dcb7b06226"
    const newsApi = "https://newsapi.org/v2/everything?q=india&from=2023-01-11&sortBy=publishedAt&apiKey=" + apiKey
    const [newsdata, setNewsData] = useState([])

    useEffect(() => {
      axios
        .get(newsApi)
        .then((response) => {
            setNewsData(response.data.articles)
          // console.log(response.data.articles);
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(() => {
          // always executed
        });
    }, [newsApi]);

    return (
      <>
        {newsdata.map((item, index) => {
          return (
            <NewsCard key={index} news={item} />
          );
        })}
      </>
    );
}

export default Home