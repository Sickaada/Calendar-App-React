import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Logout from '../Logout';
import bg from '../../assets/bg.jpg';
import parseDate from '../../utils/parsedDate';
import { REACT_APP_CLIENT_ID, REACT_APP_API_KEY } from '../../config';
import '../../styles/dashboard.css';

function Dashboard({ setisLoggedIn }) {
  const { gapi } = window;
  const navigate = useNavigate();

  const [events, setEvents] = useState([]);

  const createEvent = () => navigate('/events/create');

  const showEvent = () => {
    const clientId = REACT_APP_CLIENT_ID;
    const apiKey = REACT_APP_API_KEY;
    gapi.load('client:auth2', () => {
      gapi.client.init({
        apiKey,
        clientId,
        discoveryDocs: [
          'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
        ],
        scope: 'https://www.googleapis.com/auth/calendar.events',
      });

      gapi.client.load('calendar', 'v3');
      gapi.auth2
        .getAuthInstance()
        .signIn()
        .then(() => {
          // get events
          gapi.client.calendar.events
            .list({
              calendarId: 'primary',
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 100,
              orderBy: 'startTime',
            })
            .then((response) => {
              const eventP = response.result.items;

              setEvents(
                eventP
                  .filter((e) => {
                    const startTime = new Date(e.start.dateTime);
                    const endTime = new Date(e.end.dateTime);
                    const now = new Date(Date.now());
                    const twoWeeks = new Date(
                      Date.now() + 14 * 24 * 60 * 60 * 1000,
                    );
                    return (
                      (startTime <= twoWeeks && startTime >= now)
                      || (endTime <= twoWeeks && endTime >= now)
                    );
                  })
                  .map((event) => ({
                    start: event.start,
                    end: event.end,
                    description: event.description,
                    summary: event.summary,
                  })),
              );
            });
        });
    });
  };

  return (
      <div
        style={{
        backgroundImage: `url(${bg})`,
        minHeight: '100vh',
        backgroundSize: 'cover',
      }}
      >
          <div className="dashboard-container">
              <div className="dashboard-left">
                  <h1 className="dashboard-title">Meeting Scheduler</h1>
                  <button
                    type="button"
                    className="dashboard-button"
                    onClick={createEvent}
                  >
                      Create event
                  </button>
                  <button
                    type="button"
                    className="dashboard-button"
                    onClick={showEvent}
                  >
                      Show events
                  </button>
                  <Logout setisLoggedIn={setisLoggedIn} />
              </div>
              <div className="dashboard-right">
                  {events.length !== 0
            && events.map((event) => (
                <div className="event" key={nanoid()}>
                    <div className="event-title">{event.summary}</div>
                    <div className="event-startDate">
                        {parseDate(event.start.dateTime)}
                    </div>
                    <div className="event-to">To</div>
                    <div className="event-endDate">
                        {parseDate(event.end.dateTime)}
                    </div>
                </div>
            ))}
              </div>
          </div>
      </div>
  );
}
Dashboard.propTypes = {
  setisLoggedIn: PropTypes.func.isRequired,
};

export default Dashboard;
