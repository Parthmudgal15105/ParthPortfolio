import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from './hoc'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
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
      <h2 className={styles.sectionHeadText} >Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn(",",0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">

As a passionate frontend developer, I specialize in crafting dynamic and visually appealing web experiences. <br />
 My expertise lies in utilizing technologies such as React, JavaScript, <br />
  and Tailwind CSS to build intuitive user interfaces that engage and delight users. <br />
   I thrive on the creative challenges of bringing designs to life, <br />
   ensuring seamless functionality while maintaining an elegant aesthetic. <br />

Driven by a curiosity for pushing boundaries, I'm particularly excited about delving into the world of Three.js, where I can explore the realms of 3D graphics and interactive animations to further elevate user engagement.
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