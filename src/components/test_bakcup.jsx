// Header component

{/* <header className="bg-white shadow-md z-20">
      <div className="flex flex-col max-w-screen-xl sm:flex-col md:flex-col lg:flex-row items-center mx-auto px-4 py-4">

        <Link href={`/${basePath}`} className="flex items-center ml-0 lg:pl-0 md:pl-4 sm:pl-0 pl-0">
          <Image src={off_logo} className="object-contain h-10 md:h-12" alt="Logo" />
        </Link>


        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          htmlFor="navbar-open"
          className="absolute top-5 right-7 cursor-pointer md:hidden"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>


        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 text-center peer-checked:max-h-[33rem] flex max-h-0 w-full flex-col items-center justify-end gap-6 transition-all md:ml-32 md:max-h-full md:flex-row"
        >

          <ul className="flex flex-col items-center space-y-4 justify-end md:space-y-0 md:flex-row  text-sm gap-7">
            <li className="group transition duration-300 uppercase font-medium hover:text-primary ">
              <Link
                href={`/${basePath}`}
                className={`relative ${isActive(`/${basePath}`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {languageData[langValue]["Home"]}
              </Link>
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary ">
              <Link
                href={`/${basePath}about`}
                className={`relative ${isActive(`/${basePath}about`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {languageData[langValue]["About us"]}
              </Link>
            </li>

            <li
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-black font-medium bg-transparent uppercase">
                {languageData[langValue]["Brand"]}
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 bg-[#f1f4f8] w-64 border border-gray-200 rounded-md shadow-lg z-[999] grid grid-cols-2">
                  {brands?.map((item, idx) => (
                    <Link
                      href={`/${basePath}brand/${item.slug}`}
                      key={idx}
                      className="px-4 py-2 text-sm text-black hover:bg-[#e9ecef] cursor-pointer text-start"
                    >
                      {item.name}
                    </Link>
                  ))}
                </ul>
              )}
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary ">
              <Link
                href={`/${basePath}cars`}
                className={`relative ${isActive(`/${basePath}cars`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {languageData[langValue]["Cars"]}
              </Link>
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary ">
              <Link
                href={`/${basePath}faq`}
                className={`relative ${isActive(`/${basePath}faq`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {languageData[langValue]["Faq"]}
              </Link>
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary ">
              <Link
                href={`/${basePath}contact-us`}
                className={`relative ${isActive(`/${basePath}contact-us`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {languageData[langValue]["Contact Us"]}
              </Link>
            </li>
            <li className="group transition duration-300 uppercase font-medium hover:text-primary ">
              <Link
                href={`/${basePath}blog`}
                className={`relative ${isActive(`/${basePath}blog`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
              >
                {languageData[langValue]["Blog"]}
              </Link>
            </li>


          </ul>
          <ul className="flex flex-col items-center mt-4 space-y-4 text-xs gap-3 md:mt-0 md:flex-row md:space-y-0 md:space-x-4">
            <li>
              <button onClick={() => toggleLanguage(language)} className="bg-secondary hover:bg-primary text-white font-medium py-2 px-4 rounded inline-flex items-center">
                <FaEarthAmericas className="en_icon mr-2" />
                {languageData[langValue]["English"]}
              </button>
            </li>
            <li>
              <Link href={`/${basePath}cars`}>
                <button className="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded inline-flex items-center">
                  <FaPhone className="ar_icon mr-2" />
                  {languageData[langValue]["Book Ride"]}
                </button>
              </Link>
            </li>
          </ul>

        </nav>
      </div>
    </header> */}

// Header com 2 backup
{/* <header className="bg-white shadow-md z-20">
  <div className="flex flex-col max-w-screen-xl sm:flex-col md:flex-col lg:flex-row items-center mx-auto px-4 py-4 relative"> */}
{/* Logo */ }
{/* <Link href={`/${basePath}`} className="flex items-center ml-0 lg:pl-0 md:pl-4 sm:pl-0 pl-0 w-full sm:w-auto">
      <Image src={off_logo} className="object-contain h-8 sm:h-10 md:h-12" alt="Logo" />
    </Link> */}

{/* Toggle Button for mobile/tablet view */ }
{/* <input type="checkbox" className="peer hidden" id="navbar-open" />
    <label
      htmlFor="navbar-open"
      className="absolute top-5 right-7 cursor-pointer md:hidden"
    >
      <span className="sr-only">Toggle Navigation</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </label> */}

{/* Navigation Menu */ }
{/* <nav
      aria-label="Header Navigation"
      className="peer-checked:mt-8 text-center peer-checked:max-h-[33rem] flex max-h-0 w-full flex-col items-center justify-end gap-6 transition-all md:ml-32 md:max-h-full md:flex-row"
    >
      <ul className="flex flex-col items-center space-y-4 justify-end md:space-y-0 md:flex-row text-sm gap-7">
        <li className="group transition duration-300 uppercase font-medium hover:text-primary">
          <Link
            href={`/${basePath}`}
            className={`relative ${isActive(`/${basePath}`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
          >
            {languageData[langValue]["Home"]}
          </Link>
        </li>
        <li className="group transition duration-300 uppercase font-medium hover:text-primary">
          <Link
            href={`/${basePath}about`}
            className={`relative ${isActive(`/${basePath}about`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
          >
            {languageData[langValue]["About us"]}
          </Link>
        </li>

        {/* Brand Dropdown */}
//   <li
//     className="relative"
//     onMouseEnter={() => setIsDropdownOpen(true)}
//     onMouseLeave={() => setIsDropdownOpen(false)}
//   >
//     <button className="text-black font-medium bg-transparent uppercase">
//       {languageData[langValue]["Brand"]}
//     </button>
//     {isDropdownOpen && (
//       <ul className="absolute left-0 bg-[#f1f4f8] w-64 border border-gray-200 rounded-md shadow-lg z-[999] grid grid-cols-2">
//         {brands?.map((item, idx) => (
//           <Link
//             href={`/${basePath}brand/${item.slug}`}
//             key={idx}
//             className="px-4 py-2 text-sm text-black hover:bg-[#e9ecef] cursor-pointer text-start"
//           >
//             {item.name}
//           </Link>
//         ))}
//       </ul>
//     )}
//   </li>
//   <li className="group transition duration-300 uppercase font-medium hover:text-primary">
//     <Link
//       href={`/${basePath}cars`}
//       className={`relative ${isActive(`/${basePath}cars`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
//     >
//       {languageData[langValue]["Cars"]}
//     </Link>
//   </li>
//   <li className="group transition duration-300 uppercase font-medium hover:text-primary">
//     <Link
//       href={`/${basePath}faq`}
//       className={`relative ${isActive(`/${basePath}faq`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
//     >
//       {languageData[langValue]["Faq"]}
//     </Link>
//   </li>
//   <li className="group transition duration-300 uppercase font-medium hover:text-primary">
//     <Link
//       href={`/${basePath}contact-us`}
//       className={`relative ${isActive(`/${basePath}contact-us`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
//     >
//       {languageData[langValue]["Contact Us"]}
//     </Link>
//   </li>
//   <li className="group transition duration-300 uppercase font-medium hover:text-primary">
//     <Link
//       href={`/${basePath}blog`}
//       className={`relative ${isActive(`/${basePath}blog`) ? 'border-b-[3px] border-primary text-primary link_active' : 'not_active'}`}
//     >
//       {languageData[langValue]["Blog"]}
//     </Link>
//   </li>
// </ul >

{/* Action Buttons */ }
// < ul className = "flex flex-col items-center mt-4 space-y-4 text-xs gap-3 md:mt-0 md:flex-row md:space-y-0 md:space-x-4" >
//       <li>
//         <button onClick={() => toggleLanguage(language)} className="bg-secondary hover:bg-primary text-white font-medium py-2 px-4 rounded inline-flex items-center">
//           <FaEarthAmericas className="en_icon mr-2" />
//           {languageData[langValue]["English"]}
//         </button>
//       </li>
//       <li>
//         <Link href={`/${basePath}cars`}>
//           <button className="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded inline-flex items-center">
//             <FaPhone className="ar_icon mr-2" />
//             {languageData[langValue]["Book Ride"]}
//           </button>
//         </Link>
//       </li>
//     </ul >
//   </nav >
// </div >
// </header >