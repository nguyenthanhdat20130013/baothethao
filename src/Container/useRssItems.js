import {useEffect, useState} from "react";

export function useRssItems() {
    const [rssData, setRssData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://api.allorigins.win/get?url=" +
                encodeURIComponent("https://www.bongda.com.vn/feed.rss")
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
                    img: item.querySelector("image").textContent,
                });
            });
            setRssData(rssItems);
        };
        fetchData();
    }, []);


    return rssData;
}
