import React from 'react';
import Header from '../../Components/Header';
import SingleEvent from '../../Components/event/SingleEvent';
import styles from '../../Styles/pages/event/Event.module.css';

const index = () => {
  const upcomingevents = [
    {
      id: 1,
      image: '/images/event/android-compose-camp-event.png',
      name: 'Android Compose Camp',
      paragraphs: [
        'Compose Camps are community-organized events that teach people how to create Android apps 📱 with Jetpack Compose. Join us now!! This is your time to shine! Get hands- on experience on technologies from Google and excel in your expertise with this event🎉✨',
        'By the end of this event you will have-',
        '👉 Discovered how actual Android applications work, as well as their architecture and flows.',
        '👉 An excellent addition to a resume',
        '👉 Google developer profile: obtain multiple badges as well as a final certificate of achievement',
        '👉 Received prizes for successful project submissions',
      ],
      schedule: {
        date: '28 September, 2022',
        time: '3:00 PM - 5:30 PM',
        venu: 'AIDS Seminar Hall',
      },
      register: true,
    },
  ];

  const pastevents = [
    {
      id: 1,
      image: '/images/andr-com-cmp.png',
      name: 'GDSC Orientation 2022',
      paragraphs: [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium et magni ipsam delectus, iste blanditiis. Possimus perferendis officia eaque maxime laudantium. Mollitia ducimus labore corrupti dolor nobis sunt debitis dolorem.',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error eveniet et sit. Pariatur autem amet obcaecati iure architecto optio consequatur atque adipisci vitae sint. Accusantium sed ad hic maiores qui dicta? Error accusamus quam facilis ratione reiciendis? Inventore, accusamus esse!',
      ],
      schedule: {
        date: '17 September, 2022',
        time: '12:30 PM - 1:30PM',
        venu: 'AIDS Seminar Hall',
      },
      register: false,
    },
  ];

  return (
    <div className={styles.container}>
      <Header>
        <h1>
          <span className={styles.blue}>Ev</span>
          <span className={styles.green}>en</span>
          <span className={styles.red}>ts</span>
        </h1>
        <p>
          The main motive behind each and every event of GDSC | PES MCOE is
          spreading knowledge and giving inspiration to developers.
        </p>
      </Header>

      <div className={styles.events_container}>
        <h2>Upcoming Events</h2>
        <div className={styles.horizontal_row}></div>
        {upcomingevents?.map((upcomingevent) => (
          <SingleEvent event={upcomingevent} key={upcomingevent.id} />
        ))}
      </div>

      <div className={styles.events_container}>
        <h2>Past Events</h2>
        <div className={styles.horizontal_row}></div>
        {pastevents?.map((pastevent) => (
          <SingleEvent event={pastevent} key={pastevent.id} />
        ))}
      </div>
    </div>
  );
};

export default index;
