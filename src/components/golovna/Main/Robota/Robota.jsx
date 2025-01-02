/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./Robota.scss"
 
export const Robota = ({ roboti }) => {
  return (
    <motion.div
      className="main-block"
      initial={{ x: "-100%", opacity: 0 }} 
      whileInView={{ x: 0, opacity: 1 }}  
      transition={{ duration: 0.5 }}      
      viewport={{ once: true }}          
    >
      <span className="main-block-number">{roboti.nomer}</span>
      <span className="main-block-title">{roboti.nazwa}</span>
      <span className="main-block-progress">Робіт здано</span>
      <span className="main-block-progress-value">{roboti.progress}</span>
    </motion.div>
  );
};