import { data } from "../assests/index";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SkillItem = ({ item }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-4 items-center"
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      dragSnapToOrigin={true}
      dragElastic={0.3}
    >
      <img
        src={item.image}
        alt={item.name}
        className="sm:h-36 h-24 hover:scale-110 transition"
      />
      <h3 className="tracking-wider opacity-75 sm:text-lg text-sm uppercase">
        {item.name}
      </h3>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <div className="xl:px-24 lg:px-20 md:px-16 sm:px-6 px-12 py-20 mt-16">
      <h1 className="sm:text-4xl text-2xl font-semibold mx-auto md:px-4 mb-12 sm:mb-24">
        Skills
      </h1>
      <div className="flex xl:gap-40 lg:gap-28 md:gap-24 sm:gap-12 gap-4 px-4 sm:justify-start items-center justify-between flex-wrap xl:px-28">
        {data.map((item) => (
          <SkillItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
