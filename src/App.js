import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

function App() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('https://thethao247.vn/sea-games/438-truc-tiep-sea-games-32-hom-nay-10-5-them-mua-vang-cho-dttvn-d286343.html')
        .then(response => {
          const html = response.data;
          const $ = cheerio.load(html);

          // select the HTML element that contains the desired data
          const element = $('div.shadow_main').first();

          // extract the information from the element
          const title = element.find('h1').text();
          const content = element.find('div.txt_content').text();

          setTitle(title);
          setContent(content);
        })
        .catch(error => {
          console.log(error);
        });
  }, []);

  return (
      <div>
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
  );
}

export default App;
