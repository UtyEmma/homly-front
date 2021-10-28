import React from "react";
import Slider from "react-slick";

export const AgentsList = (pioneer_agents) => {
  let pioneerAgents = pioneer_agents.pioneer_agents.agents;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: false,
          dors: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dors: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <section className="pt-7 pb-10 pb-xl-6">
      <div className="container container-xxl">
        <p className="text-primary letter-spacing-263 text-uppercase lh-186 text-center mb-0">
          Meet the pioneer agents
        </p>
        <h2 className="text-center text-dark lh-1625 mxw-940 mb-1">
          Meet the verified visionary agents that got started with us, on this
          revolution.
        </h2>
        <Slider {...settings}>
          {pioneerAgents && pioneerAgents.length > 0 ? (
            <div>
              {pioneerAgents.map((pioneer_agents, index) => {
                <div class="py-8" key={index}>
                  <div
                    class="card border-lg-0 shadow-hover-xs-4 hover-change-image"
                    data-animate="flipInX"
                  >
                    <div class="card-body text-center pt-6 pb-3 px-3">
                      <a
                        href="agent-details-1.html"
                        class="d-inline-block mb-2"
                      >
                        <img src="images/agent-6.jpg" alt="Darrell Knight" />
                      </a>
                      <a
                        href="agent-details-1.html"
                        class="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary"
                      >
                        Darrell Knight
                      </a>
                      <p class="mb-2">Sales Excutive</p>
                      <ul class="list-inline mb-0 hover-image opacity-10 opacity-lg-0">
                        <li class="list-inline-item mb-2">
                          <a
                            href="#"
                            class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"
                          >
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li class="list-inline-item mb-2">
                          <a
                            href="#"
                            class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li class="list-inline-item mb-2">
                          <a
                            href="#"
                            class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"
                          >
                            <i class="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li class="list-inline-item mb-2">
                          <a
                            href="#"
                            class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"
                          >
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="card-footer px-0 text-center hover-image border-0 opacity-10 opacity-lg-0">
                      <a
                        href="listing-with-left-sidebar.html"
                        class="d-flex align-items-center justify-content-center text-heading hover-primary"
                      >
                        <span class="badge badge-circle border fs-13 font-weight-bold mr-2">
                          5
                        </span>
                        <span class="font-weight-500 mr-2">
                          Listed Properties
                        </span>
                        <span class="text-primary fs-16">
                          <i class="far fa-long-arrow-right"></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>;
              })}
            </div>
          ) : null}
          {/* <div class="py-8">
              <div class="card border-lg-0 shadow-hover-xs-4 hover-change-image" data-animate="flipInX">
                <div class="card-body text-center pt-6 pb-3 px-3">
                  <a href="agent-details-1.html" class="d-inline-block mb-2">
                    <img src="images/agent-7.jpg" alt="Dollie Horton" />
                  </a>
                  <a href="agent-details-1.html"
						   class="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Dollie Horton</a>
                  <p class="mb-2">Sales Excutive</p>
                  <ul class="list-inline mb-0 hover-image opacity-10 opacity-lg-0">
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
										class="fab fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
										class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center">
                        <i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
										class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="card-footer px-0 text-center hover-image border-0 opacity-10 opacity-lg-0">
                  <a href="listing-with-left-sidebar.html"
						   class="d-flex align-items-center justify-content-center text-heading hover-primary">
                    <span class="badge badge-circle border fs-13 font-weight-bold mr-2">6</span>
                    <span class="font-weight-500 mr-2">Listed Properties</span>
                    <span class="text-primary fs-16"><i class="far fa-long-arrow-right"></i></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="py-8">
              <div class="card border-lg-0 shadow-hover-xs-4 hover-change-image" data-animate="flipInX">
                <div class="card-body text-center pt-6 pb-3 px-3">
                  <a href="agent-details-1.html" class="d-inline-block mb-2">
                    <img src="images/agent-8.jpg" alt="Fatma Ghaly" />
                  </a>
                  <a href="agent-details-1.html"
						   class="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Fatma Ghaly</a>
                  <p class="mb-2">Sales Excutive</p>
                  <ul class="list-inline mb-0 hover-image opacity-10 opacity-lg-0">
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
										class="fab fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
										class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center">
                        <i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
										class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="card-footer px-0 text-center hover-image border-0 opacity-10 opacity-lg-0">
                  <a href="listing-with-left-sidebar.html"
						   class="d-flex align-items-center justify-content-center text-heading hover-primary">
                    <span class="badge badge-circle border fs-13 font-weight-bold mr-2">8</span>
                    <span class="font-weight-500 mr-2">Listed Properties</span>
                    <span class="text-primary fs-16"><i class="far fa-long-arrow-right"></i></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="py-8">
              <div class="card border-lg-0 shadow-hover-xs-4 hover-change-image" data-animate="flipInX">
                <div class="card-body text-center pt-6 pb-3 px-3">
                  <a href="agent-details-1.html" class="d-inline-block mb-2">
                    <img src="images/agent-9.jpg" alt="Abody Swedey" />
                  </a>
                  <a href="agent-details-1.html"
						   class="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Abody Swedey</a>
                  <p class="mb-2">Sales Excutive</p>
                  <ul class="list-inline mb-0 hover-image opacity-10 opacity-lg-0">
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
										class="fab fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
										class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center">
                        <i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
										class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="card-footer px-0 text-center hover-image border-0 opacity-10 opacity-lg-0">
                  <a href="listing-with-left-sidebar.html"
						   class="d-flex align-items-center justify-content-center text-heading hover-primary">
                    <span class="badge badge-circle border fs-13 font-weight-bold mr-2">7</span>
                    <span class="font-weight-500 mr-2">Listed Properties</span>
                    <span class="text-primary fs-16"><i class="far fa-long-arrow-right"></i></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="py-8">
              <div class="card border-lg-0 shadow-hover-xs-4 hover-change-image" data-animate="flipInX">
                <div class="card-body text-center pt-6 pb-3 px-3">
                  <a href="agent-details-1.html" class="d-inline-block mb-2">
                    <img src="images/agent-10.jpg" alt="Magdy Aya" />
                  </a>
                  <a href="agent-details-1.html"
						   class="d-block fs-16 lh-2 text-dark mb-0 font-weight-500 hover-primary">Magdy Aya</a>
                  <p class="mb-2">Sales Excutive</p>
                  <ul class="list-inline mb-0 hover-image opacity-10 opacity-lg-0">
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
										class="fab fa-twitter"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
										class="fab fa-facebook-f"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center">
                        <i class="fab fa-instagram"></i></a>
                    </li>
                    <li class="list-inline-item mb-2">
                      <a href="#"
								   class="w-40px h-40 rounded-circle border text-body bg-hover-primary hover-white border-hover-primary d-flex align-items-center justify-content-center"><i
										class="fab fa-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
                <div class="card-footer px-0 text-center hover-image border-0 opacity-10 opacity-lg-0">
                  <a href="listing-with-left-sidebar.html"
						   class="d-flex align-items-center justify-content-center text-heading hover-primary">
                    <span class="badge badge-circle border fs-13 font-weight-bold mr-2">5</span>
                    <span class="font-weight-500 mr-2">Listed Properties</span>
                    <span class="text-primary fs-16"><i class="far fa-long-arrow-right"></i></span>
                  </a>
                </div>
              </div>
            </div> */}
        </Slider>
      </div>
    </section>
  );
};
