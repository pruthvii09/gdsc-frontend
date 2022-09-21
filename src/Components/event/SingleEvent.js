import React from 'react';
import styles from '../../Styles/pages/event/Event.module.css';

const SingleEvent = ({ event }) => {
  return (
    <div className={styles.event}>
      <div className={styles.left_container}>
        <img src={event?.image} alt={event?.name} />
      </div>

      <div className={styles.right_container}>
        <h3>{event?.name}</h3>

        {event?.paragraphs?.map((para) => (
          <p>{para}</p>
        ))}

        <div className={styles.divider}></div>

        <div className={styles.schedule}>
          <h4>Schedule</h4>
          <span>
            <i class="uil uil-notes"></i>
            Date: {event?.schedule?.date}
          </span>
          <span>
            <i class="uil uil-clock"></i>Time: {event?.schedule?.time}
          </span>
          <span>
            <i class="uil uil-map-pin"></i>Venue: {event?.schedule?.venu}
          </span>
        </div>
        {event?.register && <button>Register For Event</button>}
      </div>
    </div>
  );
};

export default SingleEvent;
