import React, { useEffect, useState } from 'react';
import CardComponent from '../cards';
import bg from '../../bg.jpg';

function ShowEvents() {
  const { gapi } = window;
  const clientId = '65367275187-2rtntb1b7th5nm03c83a2hgio2dt0oom.apps.googleusercontent.com';
  const apiKey = 'AIzaSyAoek7oNspIoqyyRTv1GQBrX7zGrTfKaWo';
  const discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
  const Scopes = 'https://www.googleapis.com/auth/calendar.events';

  const [events, setEvents] = useState([]);
  const handleClick = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded');

      gapi.client.init({
        apiKey,
        clientId,
        discoveryDocs,
        scope: Scopes,
      });

      gapi.client.load('calendar', 'v3', () => console.log('asd'));
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
