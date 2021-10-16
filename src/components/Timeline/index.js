import React, { useState, useEffect } from "react";
// Styles
import { Wrapper, Content, Box, Year, Title } from "./Timeline.styles";
// Api service
import EventDataService from "../../services/event";

const Timeline = ({ darkMode }) => {
  const [events, setEvents] = useState([]);

  const retrieveEvents = () => {
    EventDataService.getAll()
      .then((response) => {
        setEvents(response.data.events);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveEvents();
  }, []);

  return (
    <Wrapper darkMode={darkMode}>
      <Title>My journey</Title>
      {events.map((event, index) => {
        var dateFrom = new Date(event.date_from);
        const dateFromYear = dateFrom.getFullYear();

        return (
          <div key={index}>
            <Year position={index % 2 === 0 ? "0" : "50"}>
              <h1>{dateFromYear}</h1>
            </Year>
            <Box position={index % 2 === 0 ? "0" : "50"} darkMode={darkMode}>
              <Content darkMode={darkMode}>
                <h2>{event.name}</h2>
                <h4>{event.role}</h4>
                <ul>
                  {event.description.map((description, index2) => {
                    return <li key={index2}>{description}</li>;
                  })}
                </ul>
              </Content>
            </Box>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Timeline;
