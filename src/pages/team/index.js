import React from 'react';
import Header from '../../Components/Header';
import TeamMember from '../../Components/team/TeamMember';
import styles from '../../Styles/pages/team/Team.module.css';

const index = () => {
  const lead = [
    {
      image: '/images/team/1.png',
      name: 'Snehal Nair',
      position: 'GDSC Lead',
      linkedin: 'https://www.linkedin.com/in/snehal-nair-2980b41b9',
      github: 'https://github.com/Snehalnair88',
      twitter: '',
      class: 'card5',
    },
  ];

  const coreteam = [
    {
      image: '/images/team/2.png',
      name: 'Parth Shete',
      position: 'Web Development Lead',
      linkedin: 'https://www.linkedin.com/in/parthshete/',
      github: 'https://github.com/Parth-Shete',
      twitter: 'https://twitter.com/parthshete02',
      class: 'card1',
    },
    {
      image: '/images/team/3.jpg',
      name: 'Kartik Bade',
      position: 'Cyber Security Lead',
      linkedin: 'https://www.linkedin.com/in/kartik-bade',
      github: 'https://github.com/KartikBade',
      twitter: 'https://twitter.com/kartik_bade?t=O8eqvzHGacWNErJ00SUejg&s=08',
      class: 'card2',
    },
    {
      image: '/images/team/4.png',
      name: 'Parth Joshi',
      position: 'Android Lead',
      linkedin: 'https://www.linkedin.com/in/parth-joshi-48041b21a',
      github: 'https://github.com/RotenKiwi',
      twitter: '',
      class: 'card3',
    },
    {
      image: '/images/team/5.png',
      name: 'Tanay Dubey',
      position: 'Google Cloud Lead',
      linkedin: 'https://www.linkedin.com/in/tanay-dubey-ab5145227/',
      github: 'https://github.com/Tanay-Dubey',
      twitter: '',
      class: 'card4',
    },
    {
      image: '/images/team/6.png',
      name: 'Alekhya Siddi',
      position: 'Event Lead',
      linkedin: 'https://www.linkedin.com/in/alekhya-siddi',
      github: 'https://github.com/Alekhya193',
      twitter: '',
      class: 'card1',
    },
    {
      image: '/images/team/7.png',
      name: 'Shruti Satpute',
      position: 'Design Lead',
      linkedin: '',
      github: '',
      twitter: '',
      class: 'card2',
    },
    {
      image: '/images/team/8.png',
      name: 'Pooja Sanap',
      position: 'Blockchain Lead',
      linkedin: 'https://www.linkedin.com/in/poojasanap53',
      github: 'https://github.com/pooja-sanap-53',
      twitter: '',
      class: 'card3',
    },
    {
      image: '/images/team/9.png',
      name: 'Ishani Deshmukh',
      position: 'Content Lead',
      linkedin: 'https://www.linkedin.com/in/ishani-deshmukh-21b3311a6',
      github: 'https://github.com/deathmukh',
      twitter: 'https://twitter.com/ishewwww?t=GOjmJO8MAr7YvM_MbwVw0g&s=09',
      class: 'card4',
    },
    {
      image: '/images/team/10.png',
      name: 'Anvesh Samrit',
      position: 'UI/UX Lead',
      linkedin: 'https://www.linkedin.com/in/anvesh-samrit-2b4b3a216',
      github: 'https://github.com/WHOanvesh',
      twitter: 'https://twitter.com/MiniSpeaker3?t=4EJZeukXa6fcx5VW5ET2QQ&s=09',
      class: 'card1',
    },
    {
      image: '/images/team/11.png',
      name: 'Harshwardhan Wandeshkhar',
      position: 'AI/ML Lead',
      linkedin: '',
      github: '',
      twitter: '',
      class: 'card2',
    },
  ];

  const webdevteam = [
    {
      image: '/images/team/13.png',
      name: 'Dhananjay Kuber',
      position: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/dhananjaykuber/',
      github: 'https://github.com/dhananjaykuber',
      twitter: 'https://twitter.com/dhananjaykuber_',
      class: 'card1',
    },
    {
      image: '/images/team/14.png',
      name: 'Pruthviraj Auti',
      position: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/pruthviraj-auti-1b90ab231',
      github: 'https://github.com/pruthvii09',
      twitter:
        'https://twitter.com/AutiPruthviraj?t=yDxgrw5HxRQExzb_V368Sw&s=09',
      class: 'card2',
    },
    {
      image: '/images/team/15.png',
      name: 'Sarvesh Joshi',
      position: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/sarvesh-s-joshi',
      github: 'https://github.com/SarveshJoshi25',
      twitter: 'https://twitter.com/_SarveshJoshi',
      class: 'card3',
    },
    {
      image: '/images/team/5.png',
      name: 'Tanay Dubey',
      position: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/tanay-dubey-ab5145227/',
      github: 'https://github.com/Tanay-Dubey',
      twitter: '',
      class: 'card4',
    },
    {
      image: '/images/team/16.png',
      name: 'Shubham Pawar',
      position: 'Web Developer',
      linkedin: 'https://www.linkedin.com/in/shubhampawar99',
      github: 'https://github.com/Shubham5250',
      twitter:
        'https://twitter.com/ShubhamPawar93?t=FaW5MCQTVpki3LXGv7kAHQ&s=09',
      class: 'card1',
    },
  ];

  return (
    <div className={styles.container}>
      <Header>
        <h1>
          <span className={styles.blue}>Meet</span>{' '}
          <span className={styles.green}>The</span>{' '}
          <span className={styles.red}>Team</span>
        </h1>
        <p>
          Coming together is a beginning. Keeping together is progress. Working
          together is success. Meet the core team of GDSC | PES MCOE 2022
        </p>
      </Header>

      <div className={styles.team_container}>
        <h2>GDSC Lead 2022</h2>
        <div className={styles.team_members}>
          {lead?.map((ld) => (
            <TeamMember member={ld} key={ld.name} />
          ))}
        </div>

        <div className={styles.horizontal_row}></div>

        <h2>GDSC Core Team 2022</h2>
        <div className={styles.team_members}>
          {coreteam?.map((ld) => (
            <TeamMember member={ld} key={ld.name} />
          ))}
        </div>

        <div className={styles.horizontal_row}></div>

        <h2>GDSC Web Dev Team 2022</h2>
        <div className={styles.team_members}>
          {webdevteam?.map((ld) => (
            <TeamMember member={ld} key={ld.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
