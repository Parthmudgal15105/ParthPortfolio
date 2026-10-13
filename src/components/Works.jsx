import { styles } from "../styles";
 import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { SectionWrapper } from "../components/hoc";
import {projects} from '../constants';
import {fadeIn,textVariant} from '../utils/motion';



const ProjectCard = ({
  index,
  name,
  description,
  tags,
  category,
  live_link,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="flex h-[150px] flex-col justify-between rounded-xl border border-[#915eff]/30 bg-gradient-to-br from-[#291b50] to-primary p-6">
          <span className="text-xs tracking-widest text-secondary">{category}</span>
          <span aria-hidden="true" className="font-mono text-3xl text-[#b79aff]">{index === 0 ? '{ agent → action }' : '< code />'}</span>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className="mt-5 flex gap-5">
          <a href={source_code_link} target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4" aria-label={`View ${name} source on GitHub`}>GitHub ↗</a>
          {live_link && <a href={live_link} target="_blank" rel="noopener noreferrer" className="text-[#b79aff] underline underline-offset-4" aria-label={`Open ${name} live site`}>Live site ↗</a>}
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Selected work in AI operations and backend engineering: controlled tool use,
          retrieval-augmented generation, asynchronous evaluation, and isolated code execution.
          Explore the repositories for implementation details and try CodeDuel live.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");