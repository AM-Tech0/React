import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'https://www.linkedin.com/in/kumar-sujal/',
      name: 'Kumar Sujal',
      role: 'Full-Stack Web Developer. JavaScript | Rails | React | Redux. Improving open-source projects, one commit at a time.',
      test: 'As a developer and a problem solver, I think Meri is a great collaborative partner to have. I met Meri in some basic javascript & react projects and since then she has drastically progressed in her understanding of the development process. She always has a professional environment and has good audio and video quality which makes it easier to communicate with her.',
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/shahil-siddhant-04484621a/',
      name: 'Shahil Siddhant',
      role: 'Full Stack Developer| Ruby on Rails | PostgreSQL | JavaScript | React | Redux | Html&Css | Python.',
      test: 'I worked with Meri in the same team and her communication skills are very strong. Her programming skill is one of the bests, given the time frame in the field. She is a good team player.  She will probably fit in most of the companies not only because she\'s a good team worker, but also because she has very good skills and I know she has much more potential to be shown.',
    },
    // {
    //   id: 3,
    //   link: 'https://www.linkedin.com/in/yishak-wesego/',
    //   name: 'Yishak Wesego',
    //   role: 'Full-stack developer | Technical Support Engineer at Microverse',
    //   test: "It was a pleasure collaborating with Meri on different projects. One of the things that I think is special about her is that she never settles, even after completing the projects she finds other resources and strengthens her knowledge. Collaborating with her is easy and comfortable, it's like working with someone you've known for a long period of time.",
    // },
  ];

  return (
    <section id="testimonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {testimonials.map((test) => (
          <SwiperSlide key={test.id}>
            <div className="testimonial">
              <div className="client__avatar">
                <a href={test.link} target="_blank" rel="noopener noreferrer">
                  <BsLinkedin />
                </a>
              </div>
              <h5 className='client__name'>{test.name}</h5>
              <p className="client__role">{test.role}</p>
              <small className="client__review">{test.test}</small>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
