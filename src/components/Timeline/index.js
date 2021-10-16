import React, { useState, useEffect } from "react";
// Import styles
import { Wrapper, Content, Box, Year, Title } from "./Timeline.styles";
// Import api service
import EventDataService from "../../services/event";

const Timeline = () => {
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
    <Wrapper>
      <Title>My journey</Title>
      {events.map((event, index) => {
        var dateFrom = new Date(event.date_from);
        const dateFromYear = dateFrom.getFullYear();

        return (
          <div key={index}>
            <Year position={index % 2 === 0 ? "0" : "50"}>
              <h1>{dateFromYear}</h1>
            </Year>
            <Box position={index % 2 === 0 ? "0" : "50"}>
              <Content>
                <h2>{event.name}</h2>
                <h4>{event.role}</h4>
                {event.description.map((description, index2) => {
                  return <li key={index2}>{description}</li>;
                })}
              </Content>
            </Box>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Timeline;
