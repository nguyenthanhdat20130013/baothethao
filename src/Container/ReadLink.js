import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

function ReadLink() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://cors-anywhere.herokuapp.com/https://thethao247.vn/432-hlv-tung-du-world-cup-tre-chi-ra-diem-manh-nhat-cua-cau-thu-viet-nam-d286882.html');
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
    }, []);

    return (
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}

export default ReadLink;
