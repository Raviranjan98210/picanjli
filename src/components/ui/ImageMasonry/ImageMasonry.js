import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useHistory } from "react-router-dom";
import classes from "./ImageMasonry.module.css";
import { animateScroll as scroll } from "react-scroll";

const MasonaryCustom = ({ images, colsXs = 1, colsSm = 2, colsMd = 4 }) => {
  const history = useHistory();
  const cols = {
    350: colsXs,
    750: colsSm,
    900: colsMd,
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ ...cols }}>
        <Masonry gutter="20px">
          {images.map((image) => (
            <div key={image.id}>
              <figure className={`${classes.image_container} `}>
                <img
                  onClick={() => history.push(`/images/${image.id}`)}
                  key={image.id}
                  src={image.largeImageURL}
                  style={{ width: "100%", display: "block" }}
                  alt=""
                  className={`object-scale-down md:rounded-lg cursor-pointer  ${classes.img} `}
                />
                <div
                  className={`text-lg rounded-b-lg w-full   ${classes.image_info} flex justify-evenly`}
                >
                  <div>
                    <i className="far fa-thumbs-up mr-1"></i>
                    <span>{image.likes}</span>
                  </div>
                  <div>
                    <i className="far fa-heart mr-1"></i>
                    <span>{image.favorites}</span>
                  </div>
                  <div>
                    <i className="fas fa-download mr-1"></i>
                    <span>{image.downloads}</span>
                  </div>
                </div>
              </figure>
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>

      <button
        onClick={scrollToTop}
        className="outline-none focus:outline-none fixed bottom-6 right-1  rounded-full h-8 w-8 p-2 flex justify-center items-center"
        style={{ backgroundColor: "#ff7db8" }}
      >
        <i className="fas fa-arrow-up" style={{ color: "white" }}></i>
      </button>
    </div>
  );
};

export default MasonaryCustom;
