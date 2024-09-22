import EmailBox from "./EmailBox";

const Hero = () => {
  return (
    <main className="max-w-7xl mx-auto mt-10 lg:mt-16">
      <div className="grid mx-auto max-w-lg grid-cols-1 gap-8 md:grid-cols-2 md:max-w-full">
        <section className="flex flex-col gap-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold">
            Speak English Confidently! <br />
            Your journey to English fluency starts here.
          </h1>
          <p className="max-w-full w-[90%]">
            I'm creating an English course designed to answer your most pressing
            questions and help you speak English naturally confidently. Be the
            first to get exclusive access, early launch invites, and special
            bonuses!
          </p>
          <EmailBox />
        </section>

        <section className=" flex justify-center items-center">
          <img
            src="/programming.svg"
            alt="hero image"
            className="w-[250px] h-[250px] md:w-[350px] md:h-[350px]"
          />
        </section>
      </div>
    </main>
  );
};

export default Hero;
