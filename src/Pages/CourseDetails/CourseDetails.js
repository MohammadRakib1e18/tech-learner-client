import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const singleCourse = useLoaderData();
  const { author, title, rating, image_url, details, category_name, _id } =
    singleCourse;
  const { name, img } = author;
  return (
    <div className="d-flex justify-content-center ">
      <Card className="w-50">
        <Card.Img variant="top" src={image_url} className='w-100 img-thumbnail  mx-auto'/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <p className="d-flex justify-content-between">
            <small>category: {category_name}</small>{" "}
            <small>rating: {rating}</small>
          </p>
          <p>
            <img
              style={{ width: "30px", borderRadius: "50%" }}
              src={img}
              alt=""
            />{" "}
            {name}
          </p>
          <Card.Text className="fs-5 text-muted">{details}</Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted text-center p-0">
          <Link to={`/courses/premium`}>
            <Button variant="primary w-100  card-button">Get Premium Access</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CourseDetails;
