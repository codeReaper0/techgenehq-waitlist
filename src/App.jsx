import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import {useEffect, useRef, useState} from "react";
import {Dialog} from "primereact/dialog";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";

import Avatar from "/images/avatar.png";
import Logo from "/images/logo.jpeg";
import hero from "/images/hero.png";
import {Swiper, SwiperSlide} from "swiper/react";
// import Swiper and modules styles
import "swiper/css";
import {Autoplay} from "swiper/modules";
function App() {
  const [visible, setVisible] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    scrollRef.current = scroll;

    return () => {
      scroll.destroy();
    };
  }, []);

  const scrollToWaitlist = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo("#waitlist");
    }
  };

  return (
    <main className="" data-scroll-container>
      {/* Hero Section */}

      <section
        data-scroll-section
        className="relative max-w-screen h-screen overflow-hidden border-b-4 border-b-[#024BBC]"
      >
        <header className="px-[5%] py-3 2xl:py-6 flex items-center justify-between z-30 absolute top-0 inset-x-0 ">
          <img src={Logo} alt="" width={60} />
          <button
            onClick={scrollToWaitlist}
            className="py-2 md:py-3 px-6 text-sm rounded bg-[#024BBC] hover:bg-[#023685] text-white transition-colors duration-300 ease-out font-semibold"
          >
            Join waitlist
          </button>
        </header>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{delay: 4000, disableOnInteraction: false}}
          loop
          modules={[Autoplay]}
          className="h-full"
        >
          <SwiperSlide>
            <div className="h-full flex items-center justify-center text-white text-left p-8 bg-[#030711]">
              <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 mt-12 lg:mt-0">
                <div className="lg:w-1/2 mb-4 lg:mb-0">
                  <h1 className="text-[6vw] lg:text-[60px] font-bold mb-4 uppercase font-inter text-center lg:text-left">
                    Be part of what&apos;s next
                  </h1>
                  <p className="text-sm lg:text-lg text-center lg:text-left">
                    Discover how artificial intelligence and machine learning
                    are transforming industries, enhancing efficiency, and
                    paving the way for innovative solutions in the tech world.
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <img
                    src={hero}
                    alt="Tech Illustration"
                    className="w-full max-w-xs lg:max-w-md"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="h-full flex items-center justify-center text-white text-left p-8 bg-[#030711]">
              <div className="max-w-5xl mx-auto">
                <p className="text-[#024BBC] font-bold text-center mb-2">
                  COMING SOON! STAY TUNED!
                </p>
                <h1 className="text-[4vw] md:text-[35px] font-bold mb-4 text-center">
                  Services with Expertise, Not Experiments
                </h1>
                <p className="text-sm md:text-lg text-gray-400 text-center">
                  At TechGeneHQ our mission is to bring unparalleled technical
                  knowledge to the world.
                  <br />
                  Stay connected with us, we are launching soon.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      {/* Waitlist Section */}
      <section
        data-scroll-section
        className="relative h-screen overflow-hidden"
        id="waitlist"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-[#024BBC02] to-[#024BBC20]"></div>
        {/* Form */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="w-[439px] h-max bg-white border border-[#F7E3FF] p-7 -mt-32 rounded-3xl m-4 lg:m-0">
            <div className="flex items-end justify-center gap-2 mb-5">
              <img src={Avatar} alt="" />
              <p className="text-sm">
                Join over <b>700</b> People on the <b>Waitlist</b>
              </p>
            </div>
            <p className="text-center text-[26px] font-medium text-[#024BBC] mb-3">
              GET A NOTIFICATION
            </p>
            <p className="mx-auto text-center text-sm text-[#8E8E8E] max-w-[305px]">
              Want to be the first to know when we launch? <b>Signup</b> to join
              the waitlist
            </p>

            <form action="" className="mt-9">
              <input
                type="email"
                placeholder="Email address"
                className="w-full h-12 p-4 mb-3 text-sm bg-[#F8F8F9] border border-[#E9E9E9] rounded-lg"
              />

              <button
                className="w-full h-12 text-sm text-white bg-[#024BBC] hover:bg-[#023685] rounded-lg flex items-center justify-center font-semibold transition-colors duration-300 ease-out"
                type="button"
                onClick={() => setVisible(true)}
              >
                Join the waitlist
              </button>
            </form>

            <Dialog
              header="Success"
              visible={visible}
              className="w-[90vw] lg:w-[30vw]"
              onHide={() => setVisible(false)}
            >
              <div className="flex flex-col items-center text-center pt-4">
                <i className="pi pi-check-circle text-green-500 text-5xl mb-4"></i>
                <p className="m-0 text-sm">
                  Thank you for joining the waitlist! We will notify you once we
                  launch. Stay tuned!
                </p>
              </div>
            </Dialog>
          </div>
        </div>
        <div className="absolute bottom-0 left-28">
          {/* <img src={sabi} alt="" /> */}
        </div>
        <div className="absolute top-28 left-0">
          <div className="relative">
            <p className="text-[76px] lg:text-[129px] font-semibold text-[#C2C2C21F]">
              GET
            </p>
          </div>
        </div>

        <div className="absolute bottom-7 right-0">
          <div className="relative">
            <p className="text-[76px] lg:text-[129px] font-semibold text-[#C2C2C21F]">
              NOTIFIED
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
