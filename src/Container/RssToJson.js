// import React, { useState, useEffect } from "react";
//
//  function RssToJson() {
//     const [rssData, setRssData] = useState([]);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             const response = await fetch(
//                 "https://api.allorigins.win/get?url=" +
//                 encodeURIComponent("https://www.bongda.com.vn/feed.rss")
//             );
//             const data = await response.json();
//             const parser = new DOMParser();
//             const xml = parser.parseFromString(data.contents, "application/xml");
//             const items = xml.querySelectorAll("item");
//             const rssItems = [];
//             items.forEach((item) => {
//                 rssItems.push({
//                     title: item.querySelector("title").textContent,
//                     description: item.querySelector("description").textContent,
//                     link: item.querySelector("link").textContent,
//                     pubDate: item.querySelector("pubDate").textContent,
//                     img: item.querySelector("image").textContent,
//                 });
//             });
//             setRssData(rssItems);
//         };
//         fetchData();
//     }, []);
//
//     return (
//
//
//             // <div className="col col-xs-12 col-sm-6 col-md-4 col-lg-3">
//             //     {rssData.map((item, index) => (
//             //     <div className="card">
//             //         <img className="card-img-top" src={item.img}
//             //              alt="Card image cap"/>
//             //         <div className="card-body">
//             //             <h4 className="card-title"><a>{item.name}</a></h4>
//             //             <p className="card-text">{item.des}</p>
//             //             <a className="btn btn-primary" href="{`product/${product.id}`}">Button</a>
//             //         </div>
//             //     </div>
//             //     ))}
//             // </div>
//         <div className={"row"}>
//             {rssData.map((item, index) => (
//             <div className="col col-xs-12 col-sm-6 col-md-4 col-lg-3">
//                 <div className="card">
//                     <img className="card-img-top" src={item.img}
//                          alt="Card image cap"/>
//                     <div className="card-body">
//                         <h4 className="card-title"><a>{item.title}</a></h4>
//                         <p className="card-text">{item.description}</p>
//                         <a href={item.link} className="btn btn-primary">Button</a>
//                     </div>
//                 </div>
//
//             </div>))}
//         </div>
//
//
//     );
// }
//
// export default RssToJson;
//
