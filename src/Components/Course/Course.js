import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart'
import CourseData from '../CourseData/CourseData';
import fakeData from '../fakeData/fakeData.json';
import './Course.css'

const Course = () => {
    const[courses,setCourses] = useState([])
    useEffect(() => {
        setCourses(fakeData)
    },[])

    const[addCourses,setAddCourses] = useState([])
    
    const handleAddCourse = (course) =>{
        console.log('course added',course)
        const newCourse = [...addCourses,course]
        setAddCourses(newCourse)
    }
    return (
        <div class = "container">

            <div class = "course">
            {
                courses.map(course => 
                <CourseData 
                    coursee = {course}
                    handleAddCourse = {handleAddCourse}
                >
                    
                </CourseData>)
            }
            </div>

            <div className = 'cart'>
               <Cart cart = {addCourses}></Cart>
            </div>

        </div>
    );
};
            
export default Course;