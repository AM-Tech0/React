import React from 'react';
import IMG1 from '../../assets/portfolio.png';
import IMG2 from '../../assets/Bagisto.png';
import IMG3 from '../../assets/Wedding.png';
import IMG4 from '../../assets/Landwind.png';
import IMG5 from '../../assets/Web.png';
import IMG6 from '../../assets/mug.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Portfolio',
      img: IMG1,
      description:
        'This portfolio website was built to showcase my skills, projects, and experience as a B.Tech CSE student. Designed with a clean, responsive layout using React and modern web technologies, it serves as a digital resume to connect with potential recruiters and collaborators, while highlighting my passion for development and continuous learning.',
      technologies: 'React | Tailwind CSS',
      link: 'https://adventistlearningcenter-257375ab1970.herokuapp.com/',
      github: 'https://github.com/Meri-MG/school',
    },
    {
      id: 2,
      title: 'Bagisto',
      img: IMG2,
      description:
        'This modern eCommerce website was developed using React and Tailwind CSS to deliver a sleek, responsive user interface for online shopping. Inspired by real-world platforms like Bagisto, it features intuitive navigation, product categorization, a search bar, and promotional banners. The design focuses on improving user engagement and accessibility, while showcasing frontend development skills in building real-time interactive web applications.',
      technologies: 'React | Tailwind CSS',
      link: 'https://fakestore-metrics.netlify.app/',
      github: 'https://github.com/Meri-MG/Fakestore---react',
    },
    {
      id: 3,
      title: 'Wedding Website',
      img: IMG3,
      description: 'This elegant wedding-themed website was built using React and Tailwind CSS, focusing on aesthetic design and smooth user navigation. With sections like Services, Gallery, and Stories, the site offers a professional and emotional experience for couples planning their special day. Featuring modern layout techniques and responsive design, the project showcases my ability to blend functionality with creativity in frontend development.',
      technologies: 'Tailwind CSS',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/Meri-MG/To-Do-List',
    },
    {
      id: 4,
      title: 'Website',
      img: IMG4,
      description:
        'This professional landing page was created using React and Tailwind CSS to demonstrate responsive UI design and component-based development. Inspired by modern SaaS templates like Landwind, it features a clean layout with sections for product highlights, navigation, CTAs, and trusted brand logos. The project emphasizes performance, accessibility, and design consistency—ideal for marketing digital products or startups.',
      technologies: 'Tailwind CSS',
      link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
      github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 5,
      title: '',
      img: IMG5,
      description:
        'This visually engaging landing page was built using pure HTML and CSS to demonstrate responsive layout design without external frameworks. Featuring a full-width background image, smooth content sections, and call-to-action elements, the site highlights essential UI principles. It showcases strong command over CSS styling, layout techniques, and clean semantic HTML—ideal for quick-loading, performance-optimized web interfaces.',
      technologies: 'HTML | CSS',
      link: 'https://meri-mg.github.io/Unilab-world-news/',
      github: 'https://github.com/Meri-MG/Unilab-world-news',
    },
    {
      id: 6,
      title: 'Small Project',
      img: IMG6,
      description:
        'This compact eCommerce product card was developed using HTML and CSS to demonstrate a clean, component-level UI structure. ',
      technologies: 'HTML | Css ',
      link: 'https://lukinoo.github.io/math-resource/',
      github: 'https://github.com/lukinoo/math-resource',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            {/* <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div> */}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
