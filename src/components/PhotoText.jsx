import { Col, Container, Row } from "react-bootstrap";
import "./PhotoText.css";
import { useState, useLayoutEffect, useRef } from "react";

/*
variant: "normal" | "reverse"
  - normal: image on the left, text on the right
  - reverse: image on the right, text on the left
*/
export function PhotoText({
  photoURL,
  title = "Default Title",
  text = "Default text",
  variant = "normal",
}) {
  // Setting the column size based on the variant || 3 for portrait and 7 for landscape
  const [height, setHeight] = useState(0);
  const refContainer = useRef();
  useLayoutEffect(() => {
    function updateHeight() {
      setHeight(refContainer.current.offsetHeight);
    }
    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  const imgColSize = 7;

  return (
    // Do not ask me why only if its in portrait mode it needs to have w-100, If it has it in landscape mode it uncenters the entire thing
    // but in portrait mode without w-100 it squishes the entire thing into the center. I literally have no idea why.
    <Row
      className={`flex-row-${variant} mb-3 justify-content-center align-content-center`}
    >
      <Col
        xs={12}
        sm={9}
        lg={imgColSize}
        className="p-0 photo align-items-center"
        style={{
          height: height,
          backgroundImage: `${photoURL ? `url(${photoURL})` : ""}`,
        }}
      >
        {!photoURL && (
          <h2 className="text-center text-white ">Replace with Image</h2>
        )}
      </Col>
      <Col
        ref={refContainer}
        className="shadow-lg text-background text-col"
        xs={12}
        sm={9}
        lg={12 - imgColSize}
      >
        <Row className={`flex-row-${variant} mb-3 `}>
          <Col xs={12} lg={11} xl={10} className={"pt-5 ps-4 text-start"}>
            <h2 className={"title fs-1 fw-bold text-primary"}>{title}</h2>
            <p className="text fs-5">{text}</p>
          </Col>
          <Col xs={0} lg={1} xl={2}></Col>
        </Row>
      </Col>
    </Row>
  );
}
