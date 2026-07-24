import React from 'react';
import { useParams } from 'react-router-dom';
import trainersMock from './TrainersMock';

function TrainerDetails() {
  const { id } = useParams();
  const trainer = trainersMock.find((t) => t.trainerId === id);

  if (!trainer) {
    return <h3>Trainer not found!</h3>;
  }

  return (
    <div>
      <h3>Trainers Details</h3>
      <p><b>{trainer.name} ({trainer.technology})</b></p>
      <p>{trainer.email}</p>
      <p>{trainer.phone}</p>
      <ul>
        {trainer.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrainerDetails;