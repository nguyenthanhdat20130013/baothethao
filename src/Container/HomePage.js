import React, { useEffect, useState } from "react";
import { useRssItems } from "./useRssItems";

function HomePage() {
    const rssData = useRssItems();

    return (
        <div className="row">
            {rssData.map((item, index) => (
                <HomeList key={index} item={item} />
            ))}
        </div>
    );
}

function HomeList(props) {
    const { item } = props;

    return (
        <div className="col-lg-3">
            <div className="card">
                <img className="card-img-top" src={item.img} alt="Card image cap" />
                <div className="card-body">
                    <h4 className="card-title">
                        <a>{item.title}</a>
                    </h4>
                    <p className="card-text">{item.description}</p>
                    <a>{item.pubDate}</a>
                    <a href={item.link} className="btn btn-primary">Xem bài viết</a>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
