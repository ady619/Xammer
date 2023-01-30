import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Home = () => {
    const newsApi = "https://newsapi.org/v2/everything?q=tesla&from=2022-12-30&sortBy=publishedAt&apiKey=fb6804faa55b44589f1758dcb7b06226"
    const [newsdata, setNewsData] = useState([])

    useEffect(() => {
      axios
        .get(newsApi)
        .then((response) => {
            setNewsData(response.data.articles)
          console.log(response.data.articles);
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
      <ul>
        {newsdata.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.title}</p>
            </li>
          );
        })}
      </ul>
    );
}

export default Home