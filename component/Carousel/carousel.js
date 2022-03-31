import logo from "../../public/FileTransfer.jpg";
import Image from "next/image";
import CarouselStyles from "../../styles/Carousel.module.css";

function Carousel() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className={CarouselStyles.test}>Convert your Image into Text</p>
            <p
              style={{
                fontSize: "1.15rem",
              }}
            >
              Welcome to Web Converter, a toolkit for converting images into
              text and can change the font also
            </p>
            <button className="btn btn-lg btn-primary fw-500 me-3">
              Get Started
            </button>
          </div>
          <div className={`${CarouselStyles.imgFront} col-md-6`}>
            <Image
              src={logo}
              alt="Picture of the author"
              width="620px"
              height="350px"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
