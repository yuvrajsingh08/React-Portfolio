import React from "react";
import { FaUserGraduate } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EduCard = ({ course }) => {
  // Hook to track if card is in view
  const [ref, inView] = useInView({
    // triggerOnce: true,      // animate only once
    threshold: 0.2,         // 20% of card visible triggers animation
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-6 py-4 bg-[#f9f5f5] shadow-md text-start text-gray-500 flex gap-6 items-center rounded-lg sm:w-[600px] sm:h-[150px] w-full"
    >
      <div className="hidden sm:flex">
        <FaUserGraduate size={60} />
      </div>
      <div>
        <p className="text-black font-semibold mb-2 sm:text-base text-xs">
          {course.duration}
        </p>

        <h1 className="text-black font-medium sm:text-lg text-base">
          {course.institute}
        </h1>
        <h1 className="sm:text-sm text-xs">{course.course}</h1>
        <div className="flex justify-between mt-1 sm:text-base text-sm">
          <span>{course.grade}</span> {course.place}
        </div>
      </div>
    </motion.div>
  );
};

export default EduCard;
