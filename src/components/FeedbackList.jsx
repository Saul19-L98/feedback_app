import React from "react";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext.jsx";
import FeedbackItem from "./FeedbackItem.jsx";
// import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import Spinner from "./shared/Spinner.jsx";

function FeedbackList() {
  // Object from feedbackData.js
  // console.log(feedback);
  const { feedback, isLoading } = useContext(FeedbackContext);
  if ((!isLoading && !feedback) || feedback.length === 0) {
    return <p>No Feedback Yet 😉</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={index}
              id={item.id}
              rating={item.rating}
              text={item.text}
              item={item}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //|==> feedbacks without animations
  // return (
  //   <div className="feedback-list">
  //     {feedback.map((item, index) => {
  //       return (
  //         <FeedbackItem
  //           key={index}
  //           id={item.id}
  //           rating={item.rating}
  //           text={item.text}
  //           handleFeedback={handleFeedback}
  //         />
  //       );
  //     })}
  //   </div>
  // );
}

// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
