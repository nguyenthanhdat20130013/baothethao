import React, { useState } from 'react';
import ArticleDetail from './ArticleDetail';
import RssToJson from "../Container/RssToJson";

function HomePage() {
    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleArticleClick = (link) => {
        setSelectedArticle(link);
    };

    return (
        <div>
            <h1>Home Page</h1>
            {selectedArticle ? (
                <ArticleDetail link={selectedArticle} />
            ) : (
                <RssToJson onArticleClick={handleArticleClick}/>
            )}
        </div>
    );
}

export default HomePage;
