import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from './hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt options={{ max: 45, scale: 1, speed: 450 }} className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      I’m a B.Tech CSE student at Maharaja Agrasen Institute of Technology, Delhi,
      and a Codeforces Specialist focused on backend systems and AI applications.
      I build AI agents, retrieval-augmented generation workflows, asynchronous job
      pipelines, real-time systems, and Docker-based code execution on self-hosted infrastructure.
      <br /><br />
      My recent work includes HomeServerAI, a bounded operations agent using local LLMs
      and operational runbooks, and CodeDuel, an online judge running on my personal Linux server.
      At Wings2Aspirations, I tested software and AI outputs and researched product opportunities.
      <br /><br />
      Languages: C++, JavaScript, TypeScript, Python.<br />
      Frameworks: React, Next.js, Node.js, Express.js, FastAPI, Socket.io.<br />
      Data &amp; tools: MongoDB, PostgreSQL, Redis, Qdrant, Docker, BullMQ, Linux, Git.<br />
      AI &amp; backend: AI agents, RAG, LLM tool calling.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");