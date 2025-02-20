import React from 'react'
import EduCard from './EduCard';

const Education = () => {
    const course01 = {
      id: "01",
      institute:
        "Bundelkhand Institute of Engineering and Technology",
      course: "Bachelor of Technology in Information Technoloogy",
      grade: "8.33 CGPA",
      place: "Jhansi, UP",
      duration: "2022 - 2026"
    };
    const course02 = {
      id: "02",
      institute: "Kendriya Vidyalaya Sangathan",
      course: "Senior Secondary Education",
      grade: "Percentage: 91.2",
      place: "Unnao, UP",
      duration: "2021 - 2022",
    };
  return (
    <div className="xl:px-24 lg:px-20 md:px-16 sm:px-6 px-6 py-4 mt-16">
      <h1 className="px-6 sm:text-4xl text-2xl font-semibold mx-auto md:px-4 mb-6 sm:mb-16">
        Education
      </h1>
      <div className="flex gap-8 sm:flex-row flex-col justify-center items-center flex-wrap px-4">
        <EduCard course={course01} />
        <EduCard course={course02} />
      </div>
    </div>
  );
}

export default Education