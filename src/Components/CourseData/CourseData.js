import React from 'react';
import './CourseData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const CourseData = (props) => {
    const {course_name, lnstructor, price, image} = props.coursee
    return (
        <div className = 'container'>
            
            <div className = "image">
                <img src={image} alt="" srcset=""/>
            </div>

            <div>
                <h3 className = "name">{course_name}</h3>
                <h5 className = "instructor">Instructor: {lnstructor}</h5>
                <h5 className = "price">Price: ${price}</h5>
                <button className = "main-button" 
                onClick = {()=>props.handleAddCourse(props.coursee)}> 
                
                <FontAwesomeIcon icon = {faBook} />
                Add Course
                
                </button>
            
        </div>


        </div>
    );
};

export default CourseData;