import { FaEdit, FaTimes } from "react-icons/fa";
import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useContext } from "react";
import Card from "./shared/Card.jsx";
import PropTypes from "prop-types";
import FeedbackContext from "../context/FeedbackContext.jsx";

function FeedbackItem({ id, rating, text, item }) {
  // const [rating, setRating] = useState(0);

  // const handleClick = () => {
  //   setRating((prev) => {
  //     console.log(prev);
  //     return prev + 1;
  //   });
  // };

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button className="close" onClick={() => deleteFeedback(id)}>
        <FaTimes color="purple" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default FeedbackItem;
