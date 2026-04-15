import React from "react";

const FilmTV = () => {
  const films = [
    {
      title: "Cleverman : S2 Episode 6",
      link: "https://m.imdb.com/title/tt4649420/?ref_=ext_shr_lnk",
    },
    {
      title: "Deadly Women : S5 6 & 7",
      link: "https://www.imdb.com/title/tt1319260/?ref_=ext_shr_lnk",
    },
    {
      title: "OpenShop Shopping Network",
      link: "https://share.google/HIRgSeIcYUE3xyQ74",
    },
    {
      title: "Behind Mansion Walls : S1 2 & 3",
      link: "https://www.imdb.com/title/tt1961967/?ref_=ext_shr_lnk",
    },
    {
      title: "Outlook TV & Out TV Canada",
      link: "https://m.youtube.com/@OutLookTVSHAW",
    },
    {
      title: "The Navigator",
      link: "https://www.imdb.com/title/tt2389290/?ref_=ext_shr_lnk",
    },
    {
      title: "Bent Television & 94.9JoyFM",
      link: "https://m.youtube.com/@benttvinc/videos",
    },
    {
      title: "Crownies : S1 Episodes 11 & 12",
      link: "https://www.imdb.com/title/tt1822469/?ref_=ext_shr_lnk",
    },
    {
      title: "Satisfaction : S1 Episode 9",
      link: "https://www.imdb.com/title/tt2546024/?ref_=ext_shr_lnk",
    },
    {
      title: "The Wedge : S2 Episode 6",
      link: "https://www.imdb.com/title/tt1156280/?ref_=ext_shr_lnk",
    },
    {
      title: "The Librarians : S1 Episode 2",
      link: "https://www.imdb.com/title/tt0934744/?ref_=ext_shr_lnk",
    },
  ];

  return (
    <div className="w-full px-6 pt-3">
      <div 
        className="text-left flex sm:mt-14 lg:mt-16 lg:pt-20 text-[29vw] md:text-[13.5em] font-druk-xcond leading-none"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <h1 className="flex items-center gap-2 font-extrabold leading-none">
          FILM <span className="text-[27vw] md:text-[1.05em]">&</span> TV
        </h1>
      </div>

      <div className="space-y-0">
        {films.map((film, index) => (
          <div 
            key={index} 
            className="group"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={index * 50}
          >
            <a
              href={film.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-green-800 w-full transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="border-b border-current py-2 transition-colors duration-300">
                <h2
                  className="text-[5vw] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold transition-colors duration-300 leading-tight"
                  // style={{lineHeight: "5.9vw"}}
                >
                  {film.title.toUpperCase()}
                </h2>
              </div>
            </a>
          </div>
        ))}
      </div>
      <a
        href="/cv"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block  rounded-md bg-[#0B3D2E] text-white py-2 px-4 text-sm hover:opacity-90"
        data-aos="fade-left"
        data-aos-duration="700"
        data-aos-delay="200"
      >
        View CV
      </a>

      {/* Social Media Links */}
      <div className="mt-8 pt-6">
        <div 
          className="flex gap-4"
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          {/* Instagram */}
          <a
            href="https://www.instagram.com/chadmathew/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://au.linkedin.com/in/chad-mathew-62084823a"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-[#0077B5] rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/chad.mathew.1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-[#1877F2] rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/channel/UCjkDhiUBLLM6ApQ2_eNoxjA"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-[#FF0000] rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FilmTV;
