/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  Grid, Paper, Button, Avatar,
} from '@material-ui/core';
import AddOutlined from '@material-ui/icons/AddOutlined';
import bg from '../../dark-bg.jpg';
import { REACT_APP_CLIENT_ID, REACT_APP_API_KEY } from '../../config';

function CreateEvent() {
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { gapi } = window;
  const discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
  const Scopes = 'https://www.googleapis.com/auth/calendar.events';

  const addEvent = () => {
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
          const event = {
            summary,
            location,
            description,
            start: {
              dateTime: `${start}:03-08:00`,
              timeZone: 'Asia/Kolkata',
            },
            end: {
              dateTime: `${end}:03-08:00`,
              timeZone: 'Asia/Kolkata',
            },

          };

          const request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event,
          });

          request.execute((eventa) => {
            window.open(eventa.htmlLink);
          });
        });
    });
  };
  const paperStyle = {
    padding: '2% 5% 2% 5%', width: '50%', margin: ' auto', boxSizing: 'border-box',
  };
  return (
    <div>
      <Grid style={{
        minHeight: '100vh', backgroundSize: 'cover', backgroundImage: `url(${bg})`, paddingTop: '4rem', paddingBottom: '4rem',
      }}
      >
        <Paper elevation={100} style={paperStyle}>
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <Grid align="center">
                <Avatar style={{ backgroundColor: 'green' }}><AddOutlined /></Avatar>
                <h2>Create Event</h2>
              </Grid>
              <label htmlFor="summary" style={{ margin: '1%' }}>Summary</label>
              <input type="text" style={{ padding: '2%' }} id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
              <br />

              <label htmlFor="description" style={{ margin: '1%' }}>Description</label>
              <textarea type="text" style={{ padding: '3%' }} id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
              <br />

              <label htmlFor="location" style={{ margin: '1%' }}>Location</label>
              <input type="text" id="location" style={{ padding: '2%' }} value={location} onChange={(e) => setLocation(e.target.value)} />
              <br />

              <label htmlFor="startDateTime" style={{ margin: '1%' }}>Start Date Time</label>
              <input type="datetime-local" id="startDateTime" style={{ padding: '2%' }} value={start} onChange={(e) => setStart(e.target.value)} />
              <br />

              <label htmlFor="endDateTime" style={{ margin: '1%' }}>End Date Time</label>
              <input type="datetime-local" id="endDateTime" style={{ padding: '2%' }} value={end} onChange={(e) => setEnd(e.target.value)} />
              <br />
              <br />
              <div align="center">
                <Button color="primary" variant="contained" onClick={addEvent}>Confirm</Button>
              </div>
              <br />
            </div>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default CreateEvent;
