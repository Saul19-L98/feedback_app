import React, { useState, useEffect } from "react";
import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const url = "https://feedback-api-4m56.onrender.com/feedback";
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);

  const [FeedbackEdit, setFeedbackEdit] = useState({
    item: {
      item: {},
      edit: false,
    },
  });

  useEffect(() => {
    FetchFeedback();
  }, []);

  //Fetch feedback
  const FetchFeedback = async () => {
    const response = await fetch(`${url}?_sort=id&_order=desc`);
    const data = await response.json();
    // console.log(data);
    setFeedback(data);
    setIsLoading(false);
  };

  //Delete Feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      //Delete method from json-server
      await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Add Feedback
  const addFeedback = async (newFeedback) => {
    //Old method, before adding json-server
    // newFeedback.id = uuidv4();
    // setFeedback([newFeedback, ...feedback]);

    //New method with json-server
    const response = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  //Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  //Update freedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        FeedbackEdit,
        updateFeedback,
        isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
