import { lazy, Suspense, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../styles";
import useNearViewport from '../utils/useNearViewport';

const EarthCanvas = lazy(() => import('./canvas/Earth'));

const Contact = () => {
  const formRef = useRef();
  const [canvasRef, showEarth] = useNearViewport();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setFeedback("");
    try {
      await emailjs.send('service_h11kf2h', 'template_0ky3bxk', {
        from_name: form.name,
        to_name: 'Parth',
        from_email: form.email,
        to_email: 'parthmudgal15105@gmail.com',
        message: form.message,
      }, 'GZJ796B9yjOjGluWj');
      setForm({
        name: "",
        email: "",
        message: "",
      });
      setFeedback("Thank you. I will get back to you as soon as possible.");
    } catch {
      setFeedback("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              autoComplete='name'
              maxLength={120}
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              autoComplete='email'
              maxLength={254}
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows="7"
              name='message'
              maxLength={4000}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <p className="text-secondary" role="status" aria-live="polite">{feedback}</p>

          <button type="submit" disabled={loading}
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div ref={canvasRef} variants={slideIn('right', "tween", 0.2,1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        {showEarth && <Suspense fallback={null}><EarthCanvas/></Suspense>}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
