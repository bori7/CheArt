import React,  { useContext, useEffect, useState } from "react";
import {MyContext} from '../store/context/myContext';
import { Card, Skeleton, message } from "antd";
import Questions from "./Questions";
import Choices from "../components/Choices";
import { getASNTSDetail } from "../store/actions/assignments";
import { createGradedASNT } from "../store/actions/gradedAssignments";
import Hoc from "../hoc/hoc";

const cardStyle = {
  marginTop: "20px",
  marginBottom: "20px"
};

const AssignmentDetail = (props) => {

  const {state, dispatch} = useContext(MyContext);
  const {token, currentAssignment, loading, username} = state 
  const [usersAnswers, setUsersAnswers] = useState({})


  useEffect(() => {
    if (token !== undefined && token !== null) {
       getASNTSDetail(token, props.match.params.id,dispatch);
    }
  }, [token])


  const onChange = (e, qId) => {
    usersAnswers[qId] = e.target.value;
    setUsersAnswers(usersAnswers)
  };

  const handleSubmit = () => {
    
    message.success("Submitting your assignment!");
    const asnt = {
      username: username,
      asntId: currentAssignment.id,
      answers: usersAnswers
    };
    createGradedASNT(token, asnt,dispatch)
  }

  
  const { title } = currentAssignment;
  

    return (
      <Hoc>
        {Object.keys(currentAssignment).length > 0 ? (
          <Hoc>
            {loading ? (
              <Skeleton active />
            ) : (
              <Card title={title}>
                <Questions
                  submit={handleSubmit}
                  questions={currentAssignment.questions.map(q => {
                    return (
                      <Card
                        style={cardStyle}
                        type="inner"
                        key={q.id}
                        title={`${q.order}. ${q.question}`}
                      >
                        <Choices
                          questionId={q.order}
                          choices={q.choices}
                          change={onChange}
                          usersAnswers={usersAnswers}
                        />
                      </Card>
                    );
                  })}
                />
              </Card>
            )}
          </Hoc>
        ) : null}
      </Hoc>
    );
};


export default AssignmentDetail;
