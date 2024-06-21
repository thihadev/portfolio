// components/DeveloperSkills.js
import React from 'react';
import { SiJavascript, SiReact, SiNextdotjs, SiNodedotjs, SiHtml5, SiCss3, SiTypescript, SiGraphql, SiTailwindcss, SiLaravel, SiPhp } from 'react-icons/si';

const skills = [
  { name: 'Laravel',  icon: <SiLaravel /> },
  { name: 'PHP',  icon: <SiPhp /> },
  { name: 'JavaScript',  icon: <SiJavascript /> },
  { name: 'React', icon: <SiReact /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Node.js', icon: <SiNodedotjs /> },
  { name: 'HTML & CSS', icon: <SiHtml5 /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
//   { name: 'GraphQL', icon: <SiGraphql /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  // Add more skills as needed
];

const Skills = () => {
  return (
    <section className='flex justify-center items-center'>
    <div className="mx-auto">
      <ul className="grid grid-cols-4 lg:grid-cols-4 gap-16 justify-center items-center">
        {skills.map((skill, index) => (
          <li key={index} className='flex flex-col items-center'>
            <div className='text-4xl mb-2'>
              {skill.icon}
            </div>
            <p className='text-center text-sm'>{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
  );
};

export default Skills;
