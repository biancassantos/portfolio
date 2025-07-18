import { useLanguageContext } from "../../context/LanguageContext"
import Heading from "../Heading"
import ProjectCard from "./ProjectCard"
import projects from "../../data/projects"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function Projects() {
  const { content } = useLanguageContext()

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  }

  return (
    <section className="flex h-screen max-w-[1100px] flex-col items-center justify-center gap-10 bg-[url('../../../public/backgrounds/blob.png')] bg-no-repeat px-8 py-12">
      <Heading
        text={content.projects}
        before="before:content-['<']"
        after="after:content-['_/>']"
      />

      <Slider
        {...settings}
        className="w-full max-w-[300px] md:max-w-[650px] lg:max-w-[960px]"
      >
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              img={project.img}
              name={project.name}
              url={project.deploy}
              repository={project.repository}
            />
          )
        })}
      </Slider>
    </section>
  )
}

export default Projects
