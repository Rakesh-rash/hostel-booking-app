import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Kota,LandmarkCity,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://content3.jdmagicbox.com/comp/kota-rajasthan/i1/9999px744.x744.210928170236.z4i1/catalogue/shiv-jyoti-group-of-hostel-indra-vihar-kota-rajasthan-hostels-6k3pefw3hz.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>IndraVihar</h1>
              <h2>{data[0]} hostels</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://spaces.indiapropertydekho.com/featuredProjects/banner-8-1637991289.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Landmark City</h1>
              <h2>{data[1]} hostels</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://d2nlyei8v64kfj.cloudfront.net/uploads/c/2017/3/c-allen-career-institute-kota-2330.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Rajiv Gandhi Nagar</h1>
              <h2>{8} hostels</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
