import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Meet Florence!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/diagnosis.jpg'
              text='Get AI-powered insights, empower your healthcare journey'
              label='Diagnosis'
              path='/products'
            />
            <CardItem
              src='images/symptoms.jpg'
              text='Get symptom insights, understand your options, then talk to a doctor'
              label='Insights'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/ptsd1.jpg'
              text='From PTSD support to general health inquiries, talk to AI, get informed'
              label='Inquiries'
              path='/products'
            />
            <CardItem
              src='images/app.jpg'
              text=' Get informed, find resources, book appointments with Florence.'
              label='Appointment'
              path='/products'
            />
            <CardItem
              src='images/access.jpg'
              text='No matter your location, get informed, find resources, and navigate your health'
              label='Access'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
