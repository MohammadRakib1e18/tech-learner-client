import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaEye, FaShoppingCart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const singleCourse = useLoaderData();
  const {
    author,
    title,
    rating,
    image_url,
    details,
    category_name,
    total_view,
  } = singleCourse;
  const { name, img } = author;
  return (
    <div className="d-flex justify-content-center mb-4">
      <Card className="w-50">
        <Card.Title className="fw-semibold fs-2 text-info text-center">
          {title}
        </Card.Title>
        <p className="text-center text-muted">
          <img
            style={{ width: "40px", marginRight:'10px', borderRadius: "20%" }}
            src={img}
            alt=""
          />{" "}
          {name}
        </p>
        <Card.Img
          variant="top"
          src={image_url}
          className="w-100 img-thumbnail  mx-auto"
        />
        <Card.Body>
          <p className="d-flex justify-content-between">
            <small>category: {category_name}</small>{" "}
            <small>
              <FaEye /> {total_view}K
            </small>
            <small>rating: {rating}</small>
          </p>

          <Card.Text className="fs-5 text-muted">{details}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted text-center p-0">
          <Link to={`/courses/premium`}>
            <Button variant="info w-100 text-light fs-4 fw-semibold card-button">
              <FaShoppingCart/> Get Premium Access
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CourseDetails;
