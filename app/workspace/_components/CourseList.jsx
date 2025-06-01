"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect } from 'react'
import { useState } from 'react'
import AddNewCourseDialog from './AddNewCourseDialog'
import axios from 'axios'
import { useUser } from '@clerk/nextjs'
import CourseCard from './CourseCard'
function CourseList() {
    const [CourseList, setCourseList] = useState([]);
    const {user}=useUser();
  useEffect(() => { 
    user&&GetCourseList();
  },[user]);
    const GetCourseList = async()=>{
      const result = await axios.get('/api/courses');
      console.log(result.data);
      setCourseList(result.data)
    }
  return (
    <div className='mt-10'>
      <h2 className='font-bold text-xl'>AI Generated Course List</h2>

      {CourseList?.length==0?
      <div className='flex flex-col items-center justify-center p-7 border rounded-xl bg-secondary mt-2'>
        <img src="first-learning.png" alt="edu"  width={88} height={88}/>
        <h2 className='my-2 font-bold text-xl'>Look like you haven't created any courses yet</h2>
            <AddNewCourseDialog>
            <Button>+Create your first course</Button>

            </AddNewCourseDialog>
      </div>:
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5'>
        {CourseList.map((course, index) => (
          <CourseCard course={course} key={index}/>
          ))}
        </div>}
    </div>
  )
}

export default CourseList
