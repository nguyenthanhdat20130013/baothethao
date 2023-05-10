import React, { useState, useEffect } from "react";

function RssToJson() {
    const [rssData, setRssData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://api.allorigins.win/get?url=" +
                encodeURIComponent("https://thethao247.vn/trang-chu.rss")
            );
            const data = await response.json();
            const parser = new DOMParser();
            const xml = parser.parseFromString(data.contents, "application/xml");
            const items = xml.querySelectorAll("item");
            const rssItems = [];
            items.forEach((item) => {
                rssItems.push({
                    title: item.querySelector("title").textContent,
                    description: item.querySelector("description").textContent,
                    link: item.querySelector("link").textContent,
                    pubDate: item.querySelector("pubDate").textContent,
                });
            });
            setRssData(rssItems);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>RSS to JSON</h2>
            {rssData.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                    {item.description}
                    <a href={item.link} target="_blank" rel="noreferrer">
                        {item.link}
                    </a>
                    <p>{item.pubDate}</p>
                </div>
            ))}
        </div>
    );
}

export default RssToJson;

