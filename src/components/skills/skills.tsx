import { skillsProps } from './skills.types';

export const Skills = (props: skillsProps) => {
  const { skills } = props;

  return (
    <ul>
      {skills.map(skill => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
};
