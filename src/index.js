import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let Tasks = [
  {
    id: 1,
    title: 'My First Task',
    description: 'this is the description of the task',
    responsible: 'Fazt',
    priority: 'High'
  },
  {
    id: 2,
    title: 'My First Task',
    description: 'this is the description of the task',
    responsible: 'Fazt',
    priority: 'High'
  },
  {
    id: 3,
    title: 'My First Task',
    description: 'this is the description of the task',
    responsible: 'Fazt',
    priority: 'High'
  },
  {
    id: 4,
    title: 'My First Task',
    description: 'this is the description of the task',
    responsible: 'Fazt',
    priority: 'High'
  },
  {
    id: 5,
    title: 'My First Task',
    description: 'this is the description of the task',
    responsible: 'Fazt',
    priority: 'High'
  },
  {
    id: 6,
    title: 'My First Task',
    description: 'this is the description of the task',
    responsible: 'Fazt',
    priority: 'High'
  },
  {
    id: 7,
    title: 'My First Task',
    description: 'this is the description of the task',
    responsible: 'Fazt',
    priority: 'High'
  },
  {
    id: 8,
    title: 'My First Task',
    description: 'this is the description of the task',
    responsible: 'Fazt',
    priority: 'High'
  },
  {
    id: 9,
    title: 'My First Task',
    description: 'this is the description of the task',
    responsible: 'Fazt',
    priority: 'High'
  }
];


ReactDOM.render(
  <App title="RTasks" tasks={Tasks}/>,
  document.getElementById('root')
);
