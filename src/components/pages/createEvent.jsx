/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

function CreateEvent() {
  const [summary, setSummary] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(summary, description, start, end);
  };
  const { gapi } = window;
  const clientId = '65367275187-2rtntb1b7th5nm03c83a2hgio2dt0oom.apps.googleusercontent.com';
  const apiKey = 'AIzaSyAoek7oNspIoqyyRTv1GQBrX7zGrTfKaWo';
  const discoveryDocs = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
  const Scopes = 'https://www.googleapis.com/auth/calendar.events';

  const addEvent = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client');

      gapi.client.init({
        apiKey,
        clientId,
        discoveryDocs,
        scope: Scopes,
      });
      gapi.client.load('calendar', 'v3', () => console.log('bam!'));

      gapi.auth2.getAuthInstance().signIn()
        .then(() => {
          const event = {
            summary,
            location,
            description,
            start: {
              dateTime: `${start}:03-08:00`,
              timeZone: 'America/Los_Angeles',
            },
            end: {
              dateTime: `${end}:03-08:00`,
              timeZone: 'America/Los_Angeles',
            },
            recurrence: [
              'RRULE:FREQ=DAILY;COUNT=2',
            ],
            attendees: [
              { email: 'lpage@example.com' },
              { email: 'sbrin@example.com' },
            ],
            reminders: {
              useDefault: false,
              overrides: [
                { method: 'email', minutes: 24 * 60 },
                { method: 'popup', minutes: 10 },
              ],
            },

          };

          const request = gapi.client.calendar.events.insert({
            calendarId: 'primary',
            resource: event,
          });

          request.execute((eventa) => {
            console.log(eventa);
            window.open(eventa.htmlLink);
          });
        });
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="summary">Summary</label>
        <input type="text" id="summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
        <br />

        <label htmlFor="description">Description</label>
        <textarea type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <br />

        <label htmlFor="location">Location</label>
        <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        <br />

        <label htmlFor="startDateTime">Start Date Time</label>
        <input type="datetime-local" id="startDateTime" value={start} onChange={(e) => setStart(e.target.value)} />
        <br />

        <label htmlFor="endDateTime">End Date Time</label>
        <input type="datetime-local" id="endDateTime" value={end} onChange={(e) => setEnd(e.target.value)} />
        <br />
        <br />
        <div>
          <Button onClick={addEvent} style={{ color: 'red', backgroundColor: 'blue' }}>Add events</Button>
        </div>
        <br />
      </form>
    </div>
  );
}

export default CreateEvent;
