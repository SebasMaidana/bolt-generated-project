import React from 'react';
    import { Container, Typography } from '@mui/material';
    import MeetingManager from './components/MeetingManager';
    import TaskManager from './components/TaskManager';
    import CalendarManager from './components/CalendarManager';
    import NoteManager from './components/NoteManager';
    import './App.css';

    function App() {
      return (
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Intelligent Web Assistant
          </Typography>
          <MeetingManager />
          <TaskManager />
          <CalendarManager />
          <NoteManager />
        </Container>
      );
    }

    export default App;
