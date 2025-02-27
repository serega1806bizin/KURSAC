/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import "./Robota.scss"
import { useNavigate } from "react-router-dom";
 
export const Robota = ({ roboti }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/testAnswers/${roboti.id}`); // Переход на страницу с деталями работы
  };

  return (
    <motion.div
      className="main-block"
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onClick={handleClick}
    >
      <span className="main-block-number">{roboti.nomer}</span>
      <span className="main-block-title">{roboti.nazwa}</span>
      <span className="main-block-progress">Робіт здано</span>
      <span className="main-block-progress-value">{roboti.progress}</span>
    </motion.div>
  );
};