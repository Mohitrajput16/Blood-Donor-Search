import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const skillList = [
  { name: "HTML", icon: faHtml5, color: "text-orange-500" },
  { name: "CSS", icon: faCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: faJs, color: "text-yellow-400" },
  { name: "React", icon: faReact, color: "text-cyan-400" },
  { name: "Node.js", icon: faNodeJs, color: "text-green-500" },
  { name: "Python", icon: faPython, color: "text-yellow-300" },
  { name: "MongoDB", icon: faDatabase, color: "text-green-400" },
  { name: "Express.js", icon: faServer, color: "text-gray-400" },
];

const Skills = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        My Skills
      </h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {skillList.map((skill, index) => (
          <motion.li
            key={index}
            className="group relative flex flex-col items-center justify-center space-y-3 p-6 rounded-2xl 
                       bg-black backdrop-blur-lg shadow-lg border border-white/20 cursor-pointer
                       hover:shadow-blue-500/40 transition duration-300"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className={`text-5xl ${skill.color} transition-transform group-hover:scale-125`}
            />
            <p className="text-lg font-medium text-white">{skill.name}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
