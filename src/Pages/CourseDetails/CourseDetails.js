import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaDownload, FaEye, FaShoppingCart } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetails.css";
import jsPDF from 'jspdf';

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
    _id,
  } = singleCourse;
  const { name, img } = author;

  const generatePdf = () => {
    let doc = jsPDF('p', 'pt');
    doc.text(20, 20, 'Course Description');
    doc.text(20, 40, '-----------------------------------');
    doc.text(20, 70, `Course: ${title}`);
    doc.text(20, 90, `Category: ${category_name}`);
    doc.text(20, 110, `By: ${name}`);
    doc.text(20, 130, `Enroll: ${total_view}`);
    doc.text(20, 150, `Rating: ${rating}`);
    doc.text(20, 170, `Description: ${details.slice(0, 60)}...`);
    doc.save('tech-learner-course.pdf');
  };

  return (
    <div className="d-flex justify-content-center mb-4">
      <Card className="w-50">
        <Card.Title className="fw-semibold fs-2 text-info text-center">
          {title}
        </Card.Title>
        <p className="text-center text-muted course-details">
          <img
            style={{ width: "40px", marginRight: "10px", borderRadius: "20%" }}
            src={img}
            alt=""
          />{" "}
          {name}
          <span
            onClick={generatePdf}
            title="download details(PDF) "
            className="download-icon"
          >
            <FaDownload />
          </span>
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
          <Link to={`/courses/premium/${_id}`}>
            <Button variant="info w-100 text-light fs-4 fw-semibold card-button">
              <FaShoppingCart /> Get Premium Access
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default CourseDetails;
