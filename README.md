// "use client"
// import Navbar from "@/components/navbar";
// import { FaCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { useState, useRef, useEffect } from "react";

// export default function Home() {
//   const films = [
//     "Euphoria",
//     "THE OA : S2",
//     "SPIDER-MAN: NO WAY HOME",
//     "Dune : P1",
//     "Space Jam : A New Legacy",
//     "Malcolm & Marie",
//     "Spider-Man : Far From Home",
//     "SMALLFOOT",
//     "SPIDER-MAN : HOMECOMING",
//     "THE GREATEST SHOWMAN",
//     "SHAKE IT UP!",
//     "K.C. UNDERCOVER",
//   ];

//   // Press images data
//   const pressImages = [
//     { id: 1, src: "./hero-image.jpg", alt: "Press Image 1", title: "Press Feature 1" },
//     { id: 2, src: "./hero-image.jpg", alt: "Press Image 2", title: "Press Feature 2" },
//     { id: 3, src: "./hero-image.jpg", alt: "Press Image 3", title: "Press Feature 3" },
//     { id: 4, src: "./hero-image.jpg", alt: "Press Image 4", title: "Press Feature 4" },
//     { id: 5, src: "./hero-image.jpg", alt: "Press Image 5", title: "Press Feature 5" },
//     { id: 6, src: "./hero-image.jpg", alt: "Press Image 6", title: "Press Feature 6" },
//     { id: 7, src: "./hero-image.jpg", alt: "Press Image 7", title: "Press Feature 7" },
//     { id: 8, src: "./hero-image.jpg", alt: "Press Image 8", title: "Press Feature 8" },
//   ];

//   // Biography content divided into 4 sections
//   const biographyContent = [
//     {
//       title: "Early Career & Disney",
//       content: "Emmy Award winning actor Zendaya is one of the most prominent and influential names in the entertainment industry today. Born and raised in Oakland, California, Zendaya grew up performing having spent much of her childhood at the local theater where her mother worked. Zendaya launched her career as an actress on Disney Channel starring in the hit series \"Shake It Up!\" for three seasons and \"K.C. Undercover\" for three seasons, which she also helped produce."
//     },
//     {
//       title: "Spider-Man Universe & Recent Films",
//       content: "Most recently, Zendaya can be seen in Jon Watts' \"Spider-Man: No Way Home,\" the newest film from the Spider-Man series. In 2017, Zendaya joined the Spider-Man Universe in \"Spider-Man: Homecoming\" followed by \"Spider-Man: Far From Home.\" Zendaya can also recently be seen as Chani in Denis Villeneuve's film \"Dune\" opposite Timothee Chalamet and Oscar Isaac. The second installment of \"Dune\" is expected out in 2023."
//     },
//     {
//       title: "Euphoria & Recent Projects",
//       content: "Zendaya currently stars in HBO and A24's second season of \"Euphoria.\" Her performance as Rue earned her an Emmy Award in 2020 for the first season, making Zendaya the youngest woman to win an Emmy for Lead Drama Actress. Zendaya can also be seen as titular character Marie in Netflix's 2021 film \"Malcolm and Marie.\" Zendaya helped create and produce the film in the beginning of the pandemic."
//     },
//     {
//       title: "Other Works & Fashion",
//       content: "Other credits include \"Space Jam: A New Legacy\" with Lebron James, \"The Greatest Showman\" opposite Hugh Jackman and Zac Efron and the animated film \"Smallfoot.\" Outside of acting, Zendaya is a leading fashion icon. In Spring 2019, Zendaya launched her first fashion collaboration with Tommy Hilfiger, titled Tommy X Zendaya. In 2021, Zendaya received the CFDA's Fashion Icon Award, making her the youngest recipient of this award in history. Currently, Zendaya is the face of Lancome, Bulgari, and Valentino."
//     }
//   ];

//   const scrollContainerRef = useRef(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);
//   const [email, setEmail] = useState("");
//   const [isVisible, setIsVisible] = useState({});

//   // Intersection Observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
//           }
//         });
//       },
//       { threshold: 0.1, rootMargin: '50px' }
//     );

//     // Observe all animated elements
//     const elements = document.querySelectorAll('.animate-on-scroll');
//     elements.forEach((el) => observer.observe(el));

//     return () => observer.disconnect();
//   }, []);

//   const checkScrollButtons = () => {
//     if (scrollContainerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
//       setCanScrollLeft(scrollLeft > 0);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
//     }
//   };

//   const scroll = (direction) => {
//     if (scrollContainerRef.current) {
//       const cardWidth = scrollContainerRef.current.querySelector('.press-card').offsetWidth;
//       const gap = 16;
//       const scrollAmount = cardWidth + gap;
      
//       const newScrollLeft = direction === 'left' 
//         ? scrollContainerRef.current.scrollLeft - scrollAmount
//         : scrollContainerRef.current.scrollLeft + scrollAmount;
      
//       scrollContainerRef.current.scrollTo({
//         left: newScrollLeft,
//         behavior: 'smooth'
//       });
      
//       setTimeout(checkScrollButtons, 300);
//     }
//   };

//   const handleEmailSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email submitted:", email);
//     setEmail("");
//     alert("Thank you for subscribing!");
//   };

//   return (
//     <div>
//       <Navbar />
      
//       {/* Hero Section */}
//       <section className="relative">
//         <div
//           className="w-full h-[70vh] bg-center bg-cover bg-no-repeat relative"
//           style={{ backgroundImage: "url('/hero-image.jpg')" }}
//         >
//           <img
//             src="/hero-image.jpg"
//             alt="hero"
//             className="w-full h-full object-cover opacity-0"
//           />
//         </div>
//         <div className="w-full h-40 md:h-96 lg:h-[20rem]" />
//         <div className="pointer-events-none">
//           <div className="absolute left-1/2 top-[68vh] -translate-x-1/2 -translate-y-1/2">
//             <div
//               className="w-52 md:w-64 lg:w-80 aspect-[5/6] rounded-4xl md:rounded-5xl overflow-hidden relative z-20"
//               style={{ transform: "scale(1.8)" }}
//             >
//               <img
//                 src="/hero-image.jpg"
//                 alt="foreground"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Films Section */}
//       <section className="mt-20 px-4">
//         <h2 
//           id="films-title"
//           className={`animate-on-scroll text-3xl md:text-4xl font-extrabold mb-8 font-kaffeesatz transition-all duration-1000 ${
//             isVisible['films-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//         >
//           Zeydana
//         </h2>
//         <ul className="space-y-4">
//           {films.map((film, index) => (
//             <li
//               key={index}
//               id={`film-${index}`}
//               className={`animate-on-scroll flex items-center group cursor-pointer border-b transition-all duration-700 ${
//                 isVisible[`film-${index}`] 
//                   ? 'opacity-100 translate-x-0' 
//                   : 'opacity-0 -translate-x-8'
//               }`}
//               style={{ transitionDelay: `${index * 100}ms` }}
//             >
//               <FaCircle
//                 className="text-black mr-4 transition-colors duration-300 group-hover:text-[#7E4B33]"
//                 size={15}
//               />
//               <span className="text-3xl md:text-3xl lg:text-4xl">{film.toUpperCase()}</span>
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Press Section */}
//       <section className="mt-20">
//         <div 
//           id="press-hero"
//           className={`animate-on-scroll w-full transition-all duration-1000 ${
//             isVisible['press-hero'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
//           }`}
//         >
//           <img
//             src="./hero-image.jpg"
//             alt="Press Section Hero"
//             className="w-full h-auto object-cover"
//           />
//         </div>
        
//         <div className="px-4 mt-12">
//           <div className="flex items-center justify-between mb-8">
//             <h2 
//               id="press-title"
//               className={`animate-on-scroll text-3xl md:text-4xl font-extrabold font-kaffeesatz transition-all duration-1000 ${
//                 isVisible['press-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//               }`}
//             >
//               Press
//             </h2>
            
//             <div 
//               id="press-buttons"
//               className={`animate-on-scroll flex gap-2 transition-all duration-1000 ${
//                 isVisible['press-buttons'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
//               }`}
//             >
//               <button
//                 onClick={() => scroll('left')}
//                 disabled={!canScrollLeft}
//                 className={`p-2 rounded-full border transition-all duration-300 ${
//                   canScrollLeft 
//                     ? 'bg-black text-white hover:bg-gray-800 border-black' 
//                     : 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed'
//                 }`}
//               >
//                 <FaChevronLeft size={16} />
//               </button>
//               <button
//                 onClick={() => scroll('right')}
//                 disabled={!canScrollRight}
//                 className={`p-2 rounded-full border transition-all duration-300 ${
//                   canScrollRight 
//                     ? 'bg-black text-white hover:bg-gray-800 border-black' 
//                     : 'bg-gray-100 text-gray-400 border-gray-300 cursor-not-allowed'
//                 }`}
//               >
//                 <FaChevronRight size={16} />
//               </button>
//             </div>
//           </div>

//           <div className="relative">
//             <div
//               ref={scrollContainerRef}
//               onScroll={checkScrollButtons}
//               className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
//               style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//             >
//               {pressImages.map((image, index) => (
//                 <div
//                   key={image.id}
//                   id={`press-card-${index}`}
//                   className={`animate-on-scroll press-card flex-shrink-0 group cursor-pointer w-1/2 md:w-1/3 lg:w-1/4 transition-all duration-700 ${
//                     isVisible[`press-card-${index}`] 
//                       ? 'opacity-100 translate-y-0' 
//                       : 'opacity-0 translate-y-8'
//                   }`}
//                   style={{ transitionDelay: `${index * 150}ms` }}
//                 >
//                   <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
//                     <div className="aspect-[4/3] overflow-hidden">
//                       <img
//                         src={image.src}
//                         alt={image.alt}
//                         className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                       />
//                     </div>
//                     <div className="p-4">
//                       <h3 className="font-semibold text-lg mb-2 group-hover:text-[#7E4B33] transition-colors duration-300">
//                         {image.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Biography Section */}
//       <section className="mt-20 px-4">
//         <h2 
//           id="bio-title"
//           className={`animate-on-scroll text-4xl md:text-5xl font-extrabold mb-12 font-kaffeesatz text-center transition-all duration-1000 ${
//             isVisible['bio-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//           }`}
//         >
//           ZENDAYA
//         </h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
//           {biographyContent.map((section, index) => (
//             <div
//               key={index}
//               id={`bio-section-${index}`}
//               className={`animate-on-scroll transition-all duration-800 ${
//                 isVisible[`bio-section-${index}`] 
//                   ? 'opacity-100 translate-y-0' 
//                   : 'opacity-0 translate-y-12'
//               }`}
//               style={{ transitionDelay: `${index * 200}ms` }}
//             >
//               <h3 className="text-xl font-bold mb-4 text-[#7E4B33]">
//                 {section.title}
//               </h3>
//               <p className="text-gray-700 leading-relaxed text-justify">
//                 {section.content}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="mt-20 py-16">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {/* Film & TV Column */}
//             <div 
//               id="footer-films"
//               className={`animate-on-scroll transition-all duration-800 ${
//                 isVisible['footer-films'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
//               }`}
//             >
//               <h3 className="text-2xl font-bold mb-6 font-kaffeesatz">FILM & TV</h3>
//               <ul className="space-y-2">
//                 {films.map((film, index) => (
//                   <li key={index} className="text-gray-700 hover:text-[#7E4B33] transition-colors cursor-pointer">
//                     {film}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Press Column */}
//             <div 
//               id="footer-press"
//               className={`animate-on-scroll transition-all duration-800 ${
//                 isVisible['footer-press'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//               }`}
//             >
//               <h3 className="text-2xl font-bold mb-6 font-kaffeesatz">Press</h3>
//               <div className="space-y-4">
//                 <p className="text-gray-700">
//                   For press inquiries and media requests, please contact our publicity team.
//                 </p>
//                 <p className="text-gray-700">
//                   High-resolution photos and press materials available upon request.
//                 </p>
//               </div>
//             </div>

//             {/* Newsletter Column */}
//             <div 
//               id="footer-newsletter"
//               className={`animate-on-scroll transition-all duration-800 ${
//                 isVisible['footer-newsletter'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
//               }`}
//             >
//               <h3 className="text-2xl font-bold mb-6 font-kaffeesatz">Stay Updated</h3>
//               <p className="text-gray-700 mb-6">
//                 For news and updates sign up with your email address below.
//               </p>
//               <form onSubmit={handleEmailSubmit} className="space-y-4">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7E4B33] focus:border-transparent outline-none transition-all duration-300"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-[#7E4B33] transition-colors duration-300 font-semibold"
//                 >
//                   Subscribe
//                 </button>
//               </form>
//             </div>
//           </div>

//           {/* Copyright */}
//           <div className="border-t border-gray-200 mt-12 pt-8 text-center">
//             <p className="text-gray-500">
//               © 2024 Zendaya. All rights reserved.
//             </p>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         .scrollbar-hide {
//           -webkit-scrollbar: none;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//       `}</style>
//     </div>
//   );
// }

