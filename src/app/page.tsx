import AccordionWrapper from "@/components/AccordionWrapper";
import BrandSlider from "@/components/BrandSlider";
import CounterUp from "@/components/CounterUp";
import CustomThumnailVideo from "@/components/CustomThumnailIframe";
import KeyFeatures from "@/components/KeyFeatures";
import MotionImageFallback from "@/components/MotionImage";
import SheduleButton from "@/components/SheduleButton";
import TabContainer from "@/components/TabContainer";
import VideoiFrame from "@/components/VideoiFrame";
import VideoModal from "@/components/VideoModal";
import WhyUsSlider from "@/components/WhyUsSlider";
import WorkingCardWrapper from "@/components/WorkingCardWrapper";
import DynamicIcon from "@/helpers/DynamicIcon";
import ImageFallback from "@/helpers/ImageFallback";
import Shape from "@/layouts/Icons/Shape";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { HomePageProps } from "@/types";

const Home = () => {
  const { frontmatter } = getListPage("_index.md");
  const {
    banner,
    brands,
    features,
    we_serve,
    about,
    how_it_works,
    schedule_meeting,
    market_values,
    opinion,
    why_us,
    backed_by,
    key_features,
    product_demo,
    faq,
  } = frontmatter as HomePageProps;

  return (
    <>
      <SeoMeta />

      <section className="lg:pt-12 pb-16 relative px-8 overflow-hidden">
        <div className="lg:flex max-w-[1600px] mx-auto banner-block relative z-10">
          <div
            data-aos
            data-aos-delay="400"
            data-aos-duration="500"
            className="xl:translate-x-1/3 2xl:translate-x-1/2 [&.aos-animate]:translate-x-0 lg:absolute z-20 text-center h-full flex flex-col justify-center lg:max-w-[780px] py-16"
          >
            <h1
              className="max-sm:text-[3rem] max-lg:text-[5rem] leading-[1.1]"
              dangerouslySetInnerHTML={markdownify(banner.title)}
              data-aos="fade-up"
            />
            <p
              className="text-light md:text-lg lg:text-2xl mt-2 lg:mt-5"
              dangerouslySetInnerHTML={markdownify(banner.content)}
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <div data-aos="fade--up" data-aos-delay="150">
              <Shape className="mx-auto mt-6 lg:mt-9" />
            </div>
          </div>
          <div
            data-aos="fade--right"
            data-aos-delay="500"
            data-aos-duration="600"
            className="relative banner-media lg:w-[70%] z-10 ml-auto rounded-[30px] md:rounded-[800px] overflow-hidden"
          >
            <ImageFallback
              src={banner.image}
              className="mx-auto w-full"
              width="1660"
              height="821"
              alt="banner image"
              quality={100}
            />

            {banner.video_id && <VideoiFrame video_id={banner.video_id} />}
          </div>

          <VideoModal video_id={banner.video_id} />
        </div>
        <div className="container" data-aos="fade-left" data-aos-delay="400">
          <p className="text-center mt-12 lg:mt-16 mb-7">
            Trusted by leading parking management and real estate companies:
          </p>
          <BrandSlider brands={brands} />
        </div>
      </section>

      <section id="our-story" className="section has-gradient overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="lg:col-9 xl:col-8 mx-auto text-center text-light">
              <h2 className="section-title" data-aos="fade--up">
                {features.title}
              </h2>
              <p
                className="text-[22px] md:max-w-lg lg:max-w-lg mx-auto"
                data-aos="fade--up"
                data-aos-delay="100"
              >
                {features.content}
              </p>
              <div data-aos="fade--up" data-aos-delay="150">
                <Shape className="mt-6 mx-auto" />
              </div>
            </div>
          </div>
          <TabContainer tabs={features.slider} />
        </div>
      </section>

      <section className="section">
        <div className="contianer">
          <div className="text-center sm:col-8 lg:col-4 mx-auto">
            <h2
              className="section-title"
              dangerouslySetInnerHTML={markdownify(we_serve.title)}
              data-aos="fade--up"
            />
            <p
              className="text-[22px] md:max-w-lg lg:max-w-md mx-auto"
              dangerouslySetInnerHTML={markdownify(we_serve.content)}
              data-aos="fade--up"
              data-aos-delay="100"
            />
            <div data-aos="fade--up" data-aos-delay="150">
              <Shape className="mt-6 mx-auto" />
            </div>
          </div>
        </div>
        <MotionImageFallback src={we_serve.image} />
      </section>

      <section id="how-it-works" className="section has-gradient">
        <div className="container">
          <div className="xl:col-4 lg:col-5 mx-auto text-center">
            <h2
              className="section-title"
              dangerouslySetInnerHTML={markdownify(how_it_works.title)}
              data-aos="fade--up"
            />
            <p
              className="text-[22px] md:max-w-lg lg:max-w-md mx-auto"
              dangerouslySetInnerHTML={markdownify(how_it_works.content)}
              data-aos="fade--up"
              data-aos-delay="100"
            />
            <div data-aos="fade--up" data-aos-delay="150">
              <Shape className="mt-6 mx-auto" />
            </div>
          </div>
          <div className="row [&>*:not(:last-child)]:mb-28 lg:[&>*:not(:last-child)]:mb-0 lg:gx-4 lg:gy-5 mt-24">
            <WorkingCardWrapper lists={how_it_works.lists} />
          </div>
          {how_it_works.button.enable && (
            <div className="text-center mt-10 md:-mt-6 lg:mt-6">
              <SheduleButton
                iframe_link={how_it_works.iframe_link}
                label={how_it_works.button.label}
              />
            </div>
          )}
        </div>
      </section>

      <section id="product-demo" className="section">
        <div className="container">
          <div className="xl:col-6 mx-auto text-center mb-12">
            <h2
              className="section-title"
              dangerouslySetInnerHTML={markdownify(product_demo.title)}
              data-aos="fade--up"
            />
            <div data-aos="fade--up" data-aos-delay="150">
              <Shape className="mt-6 mx-auto" />
            </div>
          </div>
          <CustomThumnailVideo
            videoId={product_demo.video_id}
            image={product_demo.image}
            alt={product_demo.alt}
          />
        </div>
      </section>

      <section id="parkquility-feature" className="section has-gradient">
        <div className="container">
          <div className="xl:col-7 lg:col-5 mx-auto text-center">
            <h2
              className="section-title"
              dangerouslySetInnerHTML={markdownify(key_features.title)}
              data-aos="fade--up"
            />
            <div data-aos="fade--up" data-aos-delay="150">
              <Shape className="mt-6 mx-auto" />
            </div>
          </div>
          <KeyFeatures features={key_features.list} />
        </div>
      </section>

      <section id="why-us" className="section overflow-hidden">
        <div className="max-w-[1490px] px-2 mx-auto">
          <div className="xl:col-4 lg:col-6 mx-auto text-center">
            <h2
              className="section-title"
              dangerouslySetInnerHTML={markdownify(why_us.title)}
              data-aos="fade--up"
            />
            <div data-aos="fade--up" data-aos-delay="100">
              <Shape className="mt-6 mx-auto" />
            </div>
          </div>
          <WhyUsSlider sliders={why_us.lists} />
        </div>
      </section>

      <section className="section has-gradient">
        <div className="container">
          <div className="xl:col-5 lg:col-6 mx-auto text-center">
            <h2
              className="section-title"
              dangerouslySetInnerHTML={markdownify(opinion.title)}
              data-aos="fade--up"
            />
            <div data-aos="fade--up" data-aos-delay="100">
              <Shape className="mt-6 mx-auto" />
            </div>
          </div>

          <div className="row g-4 mt-12">
            <div className="lg:col-4">
              <div
                className="h-full rounded-lg bg-gradient-primary p-px relative after:content-[''] after:absolute after:h-full after:w-full after:bg-body after:bottom-0 after:left-0 after:rounded-lg after:transition-all after:duration-[1500ms] [&.aos-animate]:after:h-0"
                data-aos
                data-aos-delay="1000"
              >
                <div className="flex space-y-5 sm:space-y-2 px-2 items-center justify-center flex-wrap bg-body rounded-lg h-full py-8 md:py-20 xl:py-32">
                  {opinion.brands.map((item, index) => {
                    return (
                      <div
                        className="flex-1 basis-full sm:basis-1/2"
                        key={index}
                      >
                        <ImageFallback
                          className="h-[45px] align-middle w-auto m-auto flex-1"
                          width={175}
                          height={75}
                          src={item}
                          alt="brand-img"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="lg:col-8">
              <div className="space-y-6">
                {opinion.lists.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-full rounded-lg bg-gradient-primary p-px relative"
                    >
                      <span
                        className="border-animation [&.aos-animate]:animate-this rounded-lg"
                        data-aos
                        data-aos-duration="800"
                      ></span>
                      <div className="bg-body text-center rounded-lg py-12 relative z-10">
                        <div className="max-w-xl mx-auto space-y-4">
                          <div className="text-center">
                            <ImageFallback
                              className="inline-block"
                              src={item.image}
                              alt="icon"
                              width={40}
                              height={40}
                            />
                          </div>
                          <h4
                            className="max-sm:text-h5-sm"
                            dangerouslySetInnerHTML={markdownify(item.title)}
                          />
                          <p
                            className="text-gray px-2"
                            dangerouslySetInnerHTML={markdownify(item.desc)}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="product-demo" className="section">
        <div className="max-w-[1375px] mx-auto px-4">
          <div className="xl:col-5 lg:col-6 mx-auto text-center">
            <h2
              className="section-title"
              dangerouslySetInnerHTML={markdownify(market_values.title)}
              data-aos="fade--up"
            />
            <div data-aos="fade--up" data-aos-delay="100">
              <Shape className="mt-6 mx-auto" />
            </div>
          </div>

          <div className="grid justify-center items-center place-content-center mt-4">
            <div className="gird-area xl:-translate-x-20 xl:-translate-y-5 my-auto flex flex-col justify-center space-y-1 lg:max-w-5xl w-full mx-auto relative z-10">
              <div className="row gy-5">
                {market_values.revenue_list.map((item, index) => {
                  return (
                    <div key={index} className="lg:col-4 md:col-6">
                      <div
                        className="bg-gradient-primary rounded-[800px] p-px relative"
                        data-aos="fade--up"
                        data-aos-delay={index * 50}
                      >
                        <span
                          className="border-animation [&.aos-animate]:animate-this rounded-[800px]"
                          data-aos
                          data-aos-delay={index * 50}
                          data-aos-duration="1000"
                        ></span>
                        <div className="bg-body rounded-[800px] px-10 py-8 text-center relative z-10">
                          <h3 className="mb-3">
                            {item.prefix}
                            <CounterUp count={item.revenue} />
                            {item.suffix}{" "}
                            <span className="text-gradient font-bold text-base uppercase">
                              {item.unit}
                            </span>
                          </h3>
                          <p
                            className="px-2"
                            dangerouslySetInnerHTML={markdownify(
                              item.estimated,
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="row justify-end gy-5">
                {market_values.growth_list.map((item, index) => {
                  return (
                    <div key={index} className="lg:col-4 md:col-6">
                      <div
                        className="bg-gradient-primary rounded-[800px] p-px relative"
                        data-aos="fade--up"
                        data-aos-delay={index * 50 + 100}
                      >
                        <span
                          className="border-animation [&.aos-animate]:animate-this rounded-[800px]"
                          data-aos
                          data-aos-delay={index * 50 + 100}
                          data-aos-duration="1000"
                        ></span>
                        <div className="bg-body rounded-[800px] p-10 text-center relative z-10">
                          <h3 className="mb-3">
                            {item.prefix}
                            <CounterUp count={item.revenue} />
                            {item.suffix}{" "}
                            <span className="text-gradient font-bold text-base uppercase">
                              {item.unit}
                            </span>
                          </h3>
                          <p
                            className="px-2"
                            dangerouslySetInnerHTML={markdownify(
                              item.estimated,
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="gird-area h-full">
              <ImageFallback
                className="mx-auto h-full"
                src={market_values.image}
                width={1375}
                height={791}
                alt="map"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section has-gradient">
        <div className="container">
          <div className="row items-center justify-between">
            <div className="lg:col-3 hidden lg:block">
              <div className="space-y-10">
                <div
                  className="rounded-full bg-gradient-primary p-px w-[100px] h-[100px]"
                  data-aos="fade-left"
                >
                  <ImageFallback
                    className="mx-auto"
                    src="/images/clients/1.png"
                    width={99}
                    height={99}
                    alt="client-img"
                  />
                </div>
                <div
                  className="rounded-full relative -left-5 ml-auto bg-gradient-primary p-px w-[68px] h-[68px]"
                  data-aos="fade-left"
                  data-aos-delay="50"
                >
                  <ImageFallback
                    className="mx-auto"
                    src="/images/clients/2.png"
                    width={67}
                    height={67}
                    alt="client-img"
                  />
                </div>
                <div
                  className="rounded-full relative -left-6 mr-auto bg-gradient-primary p-px w-[88px] h-[88px]"
                  data-aos="fade-left"
                  data-aos-delay="100"
                >
                  <ImageFallback
                    className="mx-auto"
                    src="/images/clients/3.png"
                    width={87}
                    height={87}
                    alt="client-img"
                  />
                </div>
              </div>
            </div>
            <div className="lg:col-6">
              <div className="text-center">
                <h2
                  className="section-title"
                  dangerouslySetInnerHTML={markdownify(schedule_meeting.title)}
                  data-aos="fade--up"
                />
                <div data-aos="fade--up" data-aos-delay="50">
                  <Shape className="inline-block mt-5" />
                </div>
                {schedule_meeting.button.enable && (
                  <SheduleButton
                    iframe_link={schedule_meeting.iframe_link}
                    label={schedule_meeting.button.label}
                  />
                )}
              </div>
            </div>
            <div className="lg:col-3 hidden lg:block">
              <div className="space-y-10">
                <div
                  className="rounded-full relative -left-6 ml-auto bg-gradient-primary p-px w-[88px] h-[88px]"
                  data-aos="fade-right"
                >
                  <ImageFallback
                    className="mx-auto"
                    src="/images/clients/4.png"
                    width={87}
                    height={87}
                    alt="client-img"
                  />
                </div>
                <div
                  className="rounded-full relative left-5 mr-auto bg-gradient-primary p-px w-[68px] h-[68px]"
                  data-aos="fade-right"
                  data-aos-delay="50"
                >
                  <ImageFallback
                    className="mx-auto"
                    src="/images/clients/5.png"
                    width={67}
                    height={67}
                    alt="client-img"
                  />
                </div>
                <div
                  className="rounded-full ml-auto bg-gradient-primary p-px w-[100px] h-[100px]"
                  data-aos="fade-right"
                  data-aos-delay="100"
                >
                  <ImageFallback
                    className="mx-auto"
                    src="/images/clients/6.png"
                    width={99}
                    height={99}
                    alt="client-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container">
          <div className="lg:col-4 mx-auto text-center">
            <h2 className="section-title" data-aos="fade--up">
              {about.title}
            </h2>
            <div data-aos="fade--up" data-aos-delay="100">
              <Shape className="mt-6 mx-auto" />
            </div>
          </div>
          <div className="row mt-32 justify-center [&>*:not(:last-child)]:mb-24 lg:[&>*:not(:last-child)]:mb-0">
            {about.profiles_list.map((profile, index) => {
              return (
                <div key={index} className="lg:col-4 sm:col-6">
                  <div className="bg-gradient-primary rounded p-px h-full">
                    <div className="bg-theme-dark text-center rounded h-full">
                      <div className="text-center -translate-y-[32%]">
                        <div
                          className={
                            "flex items-center justify-center rounded-full mx-auto w-[140px] h-[140px] bg-gradient-primary overflow-hidden"
                          }
                        >
                          <ImageFallback
                            width={140}
                            height={140}
                            className="mx-auto w-[calc(100%_-_2px)] h-[calc(100%_-_2px)] rounded-full"
                            src={profile.image}
                            alt="abhishek anand.png"
                          />
                        </div>
                        <h4
                          className="mt-7"
                          dangerouslySetInnerHTML={markdownify(profile.name)}
                        />
                        <p
                          className="text-xl font-bold uppercase"
                          dangerouslySetInnerHTML={markdownify(
                            profile.designation,
                          )}
                        />
                      </div>

                      <div className="relative -top-12">
                        <div className="flex space-x-1 py-4 mx-8 border-y border-dark/60 items-center justify-center">
                          <DynamicIcon icon="FaLocationDot" />
                          <p
                            dangerouslySetInnerHTML={markdownify(
                              profile.location,
                            )}
                          />
                        </div>
                        <p
                          className="mt-5 px-14 text-gray"
                          dangerouslySetInnerHTML={markdownify(profile.desc)}
                        />
                        <a
                          className="mt-12 inline-block text-gradient font-bold text-lg relative after:absolute after:bottom-1 after:left-0 after:w-full after:h-px after:bg-gradient-primary"
                          target="_blank"
                          href={profile.social.link}
                          dangerouslySetInnerHTML={markdownify(
                            profile.social.name,
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="faqs" className="section has-gradient">
        <div className="container">
          <div
            className="bg-gradient-primary rounded-lg p-px relative"
            data-aos="fade--up"
          >
            <span
              className="border-animation [&.aos-animate]:animate-this rounded-lg"
              data-aos
              data-aos-duration="800"
            ></span>
            <div className="bg-body p-8 lg:p-14 rounded-lg text-center relative z-10">
              <div className="row justify-between items-center gy-5 lg:gy-0">
                <div className="xl:col-4 lg:col-5 col-10">
                  <div className="text-center">
                    <h3
                      className="max-sm:text-h6"
                      dangerouslySetInnerHTML={markdownify(faq.title)}
                    />
                    <p
                      className="mt-4 text-gray"
                      dangerouslySetInnerHTML={markdownify(faq.desc)}
                    />
                  </div>
                </div>
                <div className="lg:col-7">
                  <div className="space-y-10">
                    <AccordionWrapper faqs={faq.questions} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="row g-4 items-center lg:col-9 mx-auto justify-between ">
          <div className="col-auto">
            <h2>{backed_by.title}</h2>
          </div>
          {backed_by.images?.map((image, index) => {
            return (
              <div key={index} className="col-auto">
                <ImageFallback
                  className="w-auto"
                  src={image.src}
                  width={256}
                  height={56}
                  alt={image.title}
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
