import { useEffect, useState } from 'react';
import { skillsProps } from './skills.types';

export const Skills = (props: skillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInTextShown, setIsLoggedInTextShown] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
      setIsLoggedInTextShown(true);
    }, 1001);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedInTextShown(false);
    }, 4000);
  }, []);

  return (
    <>
      {isLoggedInTextShown && <div>Logged in success!</div>}
      <ul>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      {isLoggedIn ? <button>Start learning</button> : <button onClick={() => setIsLoggedIn(true)}>Login</button>}
    </>
  );
};
