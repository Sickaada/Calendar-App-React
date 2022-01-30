import React, { useEffect, useState } from 'react';
import CardComponent from '../cards';
import bg from '../../bg.jpg';
import { REACT_APP_CLIENT_ID, REACT_APP_API_KEY } from '../../config';

function ShowEvents() {
  const { gapi } = window;

  const discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
  const Scopes = 'https://www.googleapis.com/auth/calendar.events';

  const [events, setEvents] = useState([]);
  const handleClick = () => {
    const clientId = REACT_APP_CLIENT_ID;
    const apiKey = REACT_APP_API_KEY;
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey,
        clientId,
        discoveryDocs,
        scope: Scopes,
      });

      gapi.client.load('calendar', 'v3', () => console.log('Loading!'));
      gapi.auth2.getAuthInstance().signIn()

        .then(() => {
          // get events
          gapi.client.calendar.events.list({
            calendarId: 'primary',
            timeMin: (new Date()).toISOString(),
            showDeleted: false,
            singleEvents: true,
            maxResults: 100,
            orderBy: 'startTime',
          }).then((response) => {
            const eventP = response.result.items;

            setEvents(eventP.map((event) => ({
              start: event.start,
              end: event.end,
              description: event.description,
            })));
          });
        });
    });
  };
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <>
      <div style={{
        backgroundImage: `url(${bg})`, minHeight: '100vh', backgroundSize: 'cover', paddingTop: '4rem', paddingBottom: '4rem', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',
      }}
      >
        <CardComponent events={events} />
      </div>
      <br />
    </>

  );
}

export default ShowEvents;
