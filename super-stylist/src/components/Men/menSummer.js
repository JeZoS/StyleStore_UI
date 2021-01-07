import React from "react";
import { Link } from "react-router-dom";
import MainPage from "../Main/mainpage";

const SummerMen = () => {
  const data = [
    "https://i.pinimg.com/originals/c9/78/5f/c9785fca88ffbab4b90a19fe5cfaaf44.jpg",
    "https://effortlessgent.com/wp-content/uploads/2017/06/light-colors.jpg",
    "https://cdn.famousoutfits.com/wp-content/uploads/2015/collections/summer-outfits/summer-outfits-03.jpg",
    "https://nextluxury.com/wp-content/uploads/excellent-summer-outfits-styles-for-men-with-red-shorts-and-scarf.jpg",
    "https://effortlessgent.com/wp-content/uploads/2017/06/looser-clothes.jpg",
    "https://i.styleoholic.com/cool-and-relaxed-beach-men-outfits-1-500x750.jpg",
    "https://cdn.famousoutfits.com/wp-content/uploads/2015/collections/summer-outfits/summer-outfits-10.jpg",
    "https://i.pinimg.com/originals/2c/03/26/2c032608d0c75cc67b0db23cdacb0c95.jpg",
    "https://i.pinimg.com/originals/f6/07/99/f6079978a03513a5c6d4c9d238a633be.jpg",
    "https://i.pinimg.com/originals/68/a4/57/68a4573f5235fb38ded6f97c435498dc.jpg",
  ];
  return (
    <div style={{ position: "relative" }}>
      <MainPage />
      <div className="filter_bar">
        <div className="sidebar">
          <div>
            <h3 style={{ color: "crimson" }}>Filters</h3>
            <h4>Skin Tone</h4>
            <input type="radio" id="fair" name="skin_tone" value="fair"></input>
            <label for="fair">Fair-Medium</label>
            <br />
            <input
              type="radio"
              id="dark"
              name="skin_tone"
              value="brown"
            ></input>
            <label for="dark">Medium-dark</label>
          </div>
          <div>
            <h4>Body Type</h4>
            <input type="radio" id="slim" name="body_type" value="slim"></input>
            <label for="slim">Slim-Fit</label>
            <br />
            <input type="radio" id="fat" name="body_type" value="fat"></input>
            <label for="fat">Fit-Heavy</label>
          </div>
          <button className="btn">Clear All</button>
          <button className="btn">Apply</button>
        </div>
      </div>
      <div className="summers" style={{ paddingTop: "100px" }}>
        {data.map((el, idx) => (
          <div key={idx}>
            <Link to="#">
              <div className="heart">
                <i className="fas fa-heart"></i>
              </div>
            </Link>
            <img src={data[idx]} alt="f"></img>
            <Link
              to={{
                pathname: `/product/${idx}`,
                state: { url: data[idx], season: "summer" },
              }}
            >
              <h4>Explore</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummerMen;
