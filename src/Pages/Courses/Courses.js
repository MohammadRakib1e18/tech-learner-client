import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const allCourses = useLoaderData();
    return (
      <div className="">
        <div className="category-container">
          {allCourses.map((category) => (
            <Course key={category._id} category={category}></Course>
          ))}
        </div>
      </div>
    );
};

export default Courses;