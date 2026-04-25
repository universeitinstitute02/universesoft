import CEO from "./CEO";

const OurTeam = () => {
  return (
    <section>
      <div>
        <h1 className="text-3xl font-medium text-slate-800 text-center">
          Meet Our Team
        </h1>
        <p className="text-slate-500 text-center">
          The people behind the product, passionate about what they do.
        </p>
      </div>
      {/* CEO card  */}

      <div className="flex justify-center py-8">
      <CEO />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-6">
        <div className="max-w-80 bg-black text-white rounded-2xl">
          <div className="relative -mt-px overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600"
              alt=""
              className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
            />
            <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
          </div>
          <div className="px-4 pb-6 text-center">
            <p className="mt-4 text-lg">John Doe</p>
            <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">
              Content Marketing
            </p>
          </div>
        </div>
        <div className="max-w-80 bg-black text-white rounded-2xl">
          <div className="relative -mt-px overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600"
              alt=""
              className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
            />
            <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
          </div>
          <div className="px-4 pb-6 text-center">
            <p className="mt-4 text-lg">John Doe</p>
            <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">
              Content Marketing
            </p>
          </div>
        </div>
        <div className="max-w-80 bg-black text-white rounded-2xl">
          <div className="relative -mt-px overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop"
              alt=""
              className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
            />
            <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
          </div>
          <div className="px-4 pb-6 text-center">
            <p className="mt-4 text-lg">John Doe</p>
            <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent bg-clip-text">
              Content Marketing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
