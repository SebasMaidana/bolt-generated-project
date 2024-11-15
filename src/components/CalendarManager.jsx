import React, { useState, useEffect } from 'react';
    import axios from 'axios';
    import FullCalendar from '@fullcalendar/react';
    import dayGridPlugin from '@fullcalendar/daygrid';
    import { Button, TextField } from '@mui/material';

    const CalendarManager = () => {
      const [events, setEvents] = useState([]);
      const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

      useEffect(() => {
        const fetchEvents = async () => {
          try {
            const response = await axios.get('/api/calendar/events');
            setEvents(response.data);
          } catch (error) {
            console.error(error);
          }
        };

        fetchEvents();
      }, []);

      const handleAddEvent = async () => {
        try {
          const response = await axios.post('/api/calendar/create', newEvent);
          setEvents([...events, response.data]);
          setNewEvent({ title: '', start: '', end: '' });
        } catch (error) {
          console.error(error);
        }
      };

      return (
        <div>
          <h2>Calendar Manager</h2>
          <TextField label="Event Title" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
          <TextField label="Start Date" type="datetime-local" value={newEvent.start} onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })} />
          <TextField label="End Date" type="datetime-local" value={newEvent.end} onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })} />
          <Button variant="contained" onClick={handleAddEvent}>Add Event</Button>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
          />
        </div>
      );
    };

    export default CalendarManager;
