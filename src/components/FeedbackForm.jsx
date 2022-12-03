import React, { useState, useContext, useEffect } from "react";
import Card from "./shared/Card.jsx";
import Button from "./shared/Button.jsx";
import RatingSelect from "./RatingSelect.jsx";
import FeedbackContext from "../context/FeedbackContext.jsx";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const { addFeedback, FeedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (FeedbackEdit.edit === true) {
        updateFeedback(FeedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setText("");

      // NOTE: reset to default state after submission
      setBtnDisabled(true); // 👈  add this line to reset disabled
      setRating(10); //👈 add this line to set rating back to 10
    }
  };

  useEffect(() => {
    if (FeedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(FeedbackEdit.item.text);
      setRating(FeedbackEdit.item.rating);
    }
  }, [FeedbackEdit]);

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={setRating} selected={rating} />
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            value={text}
            placeholder="Write a review"
          />
          <Button type="submit" version="secondary" isDisable={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
