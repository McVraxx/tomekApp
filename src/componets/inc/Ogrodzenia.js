import tom03 from "../images/ogrodzenie1.jpg";
import tom02 from "../images/ogrodzenie2.jpg";
import tom01 from "../images/ogrodzenie4.jpg";
import tom04 from "../images/ogrodzenie5.jpg";
import tom05 from "../images/ogrodzenie6.jpg";
import tom06 from "../images/ogrodzenie7.jpg";
import tom07 from "../images/ogrodzenie8.jpg";
import tom08 from "../images/ogrodzenie9.jpg";
import tom09 from "../images/ogrodzenie10.jpg";
import Modal from "./Modal";
import React, { useState } from "react";

const data = [tom01, tom02, tom03, tom04, tom05, tom06, tom07, tom08, tom09];

function Ogrodzenia() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item);
  };

  const handelRotationRight = () => {
    const totalLength = data.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data[0];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.filter((item) => {
      return data.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="wrapper-images">
        <div className="container">
          <div className="row">
            {data.map((item, index) => (
              <div className="col-lg-6 mb-3" key={item.toString()}>
                <div key={index}>
                  <img
                    key={item.toString()}
                    className="img-fluid"
                    src={item}
                    alt={item.text}
                    onClick={() => handleClick(item, index)}
                  />
                </div>
              </div>
            ))}
            <div>
              {clickedImg && (
                <Modal
                  clickedImg={clickedImg}
                  handelRotationRight={handelRotationRight}
                  setClickedImg={setClickedImg}
                  handelRotationLeft={handelRotationLeft}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ogrodzenia;
