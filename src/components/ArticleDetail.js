import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

function ArticleDetail({ link }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://cors-anywhere.herokuapp.com/${link}`);
                const html = response.data;
                const $ = cheerio.load(html);

                // Phân tích cú pháp HTML và trích xuất tiêu đề và nội dung bài báo
                const articleTitle = $('h1').text();
                const articleContent = $('.detail_article').html();

                setTitle(articleTitle);
                setContent(articleContent);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [link]);

    return (
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}

export default ArticleDetail;
