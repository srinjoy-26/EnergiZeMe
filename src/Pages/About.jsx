import * as React from "react";

const About = () => {


  const styles = `
      .about-page {
        padding: 20px;
        background-color: #f7f7f7;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        position: relative;
      }
      .about-content {
        max-width: 800px;
        margin: 0 auto;
      }

      .about-content h2 {
        color: #333;
        font-size: 2rem;
        margin-bottom: 20px;
      }

      .about-content p {
        color: #555;
        font-size: 1.2rem;
        line-height: 1.6;
        margin-bottom: 10px;
      }
`;


  return (
    <div className="about-page">
      <style>{styles}</style>
      <div className="about-content">
        <h2>
          <strong>EnergiZeMe 🏋🏽🔥💪🏼🎧</strong>
        </h2>
        <p>
          Welcome to our virtual gym! We are dedicated to providing you with the
          best online fitness experience.
        </p>
        <p>
          At <em>EnergiZeMe</em>, we believe that everyone deserves access to
          personalized fitness solutions, regardless of their location or
          schedule. Our virtual gym platform is designed to empower individuals
          to achieve their fitness goals from the comfort of their own homes, at
          any time that suits them best.
        </p>
        <p>
          You have the opportunity to explore a diverse selection of workout
          routines and exercises tailored to your preferences.
        </p>
        <p>
          Whether you are a beginner or an experienced athlete, we have
          something for everyone.
        </p>
        <p>
          Join our community today and start your journey to a healthier, fitter
          you!
        </p>
        <p>
          <strong>What sets us apart:</strong>
        </p>
        <p>
          Innovative Workouts: Experience the latest trends and innovations in
          the fitness industry with our diverse selection of virtual workout
          classes and routines. From high-intensity interval training (HIIT) to
          yoga and meditation sessions, we have something for everyone.
        </p>
        <p>
          Personalized Training Programs: Tailored to your unique fitness level,
          preferences, and goals, our personalized training programs ensure that
          you get the most out of your workout sessions. Our team of certified
          trainers and fitness experts is here to guide you every step of the
          way.
        </p>
        <p>
          Flexible Scheduling: Say goodbye to rigid gym schedules and crowded
          workout spaces. With <em>EnergiZeMe</em>, you have the flexibility to
          exercise whenever and wherever it suits you best. Whether you prefer
          to sweat it out in the morning or unwind with an evening yoga session,
          the choice is yours.
        </p>
        <p style={{padding:'15px'}}>
          <strong>
            At <em>EnergiZeMe</em>, your journey to a healthier, happier you
            begins today. Join us and discover the transformative power of
            virtual fitness!
          </strong>
        </p>
      </div>
    </div>
  );
};

export default About;
