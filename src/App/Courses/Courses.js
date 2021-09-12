import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Course from '../../assets/course.jpg';

const Courses = (props) => {
  const { content, lang } = props;

  const courseImg = (img) => {
    switch (img) {
      case 'classes':
        return <img src={Course} />;
      case 'practices':
        return <img src={Course} />;
      case 'tournaments':
        return <img src={Course} />;
      case 'polo_week':
        return <img src={Course} />;
      default:
        break;
    }
  };

  return (
    <div id="courses">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        itemClass=""
        keyBoardControl={false}
        minimumTouchDrag={80}
        partialVisible
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {content.carousel.map((course) => {
          const { img, title, description } = course;
          const textLink = lang === 'en' ? 'Consult' : 'Consultar';
          return (
            <div key={course.title} className="card">
              <div>{courseImg(img)}</div>
              <div className="detail">
                <h2>{title[lang]}</h2>
                <p>{description[lang]}</p>
                <a>{textLink}</a>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Courses;
