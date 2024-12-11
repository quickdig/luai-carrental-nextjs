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

{/* <>
<div className="relative flex flex-col md:flex-row max-w-screen-lg w-full gap-5 mt-5 mx-auto">
                <div className={scrollbar w-[90%] mx-auto sticky top-0 ${isExpanded ? 'h-[calc(100vh-2rem)]' : 'h-full'} bg-[#1C1C1C] lg:w-4/12 rounded-md p-5 overflow-y-auto}>
                    <div className="flex flex-row justify-between items-center mb-5 px-1 text-white" onClick={() => setIsExpanded(!isExpanded)}>
                        <span className="text-md font-normal">{languageData[langValue]["Filters"]}</span>
                        {isExpanded ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
                    </div>
                    {
                        isExpanded && (
                            <div className="filters_Options">
                                {/* Type of Cars Section */}
{/* <div className="grid grid-cols-1 space-y-2">
  <span className="text-left text-sm text-white">{languageData[lang]["Type of Cars"]}</span>

  {
    Array.isArray(filterData?.types) && filterData?.types?.map((item, idx) => {
      return (
        <div className="inline-flex items-center" key={idx} >
          <label className="relative flex items-center cursor-pointer" htmlFor={type_of_car_ + item.id}>
            <input
              name="type_of_car"
              type="radio"
              value={item.id}
              onClick={handleFilter}
              className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
              id={type_of_car_ + item.id}
            />
            <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
              <IoCheckmarkCircle />
            </span>
          </label>
          <label className="ml-2 text-white cursor-pointer text-sm" htmlFor={type_of_car_ + item.id}>
            &nbsp;{item.name} <span className="text-[#90A3BF]">({item.count})</span>
          </label>
        </div>
      )
    })
  }
</div> */}

{/* Availability Section */ }
{/* <div className="grid grid-cols-1 space-y-2 mt-5">
  <span className="text-left text-sm text-white">{languageData[lang]["Availability"]}</span>
  <div className="flex flex-row items-center justify-start gap-5">
    <div className="inline-flex items-center">
      <label className="relative flex items-center cursor-pointer" htmlFor="in_stock">
        <input
          name="availability"
          type="radio"
          value="1"
          onClick={handleFilter}
          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
          id="in_stock"
        />
        <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
          <IoCheckmarkCircle />
        </span>
      </label>
      <label className="ml-2 text-white cursor-pointer text-sm" htmlFor="in_stock">
        &nbsp;{languageData[lang]["In Stock"]}
      </label>
    </div>

    <div className="inline-flex items-center">
      <label className="relative flex items-center cursor-pointer" htmlFor="out_of_stock">
        <input
          name="availability"
          type="radio"
          value="0"
          onClick={handleFilter}
          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-primary transition-all"
          id="out_of_stock"
        />
        <span className="absolute w-3 h-3 rounded-full text-primary opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-2 left-2 transform -translate-x-1/2 -translate-y-1/2">
          <IoCheckmarkCircle />
        </span>
      </label>
      <label className="ml-2 text-white cursor-pointer text-sm" htmlFor="out_of_stock">
        &nbsp;{languageData[lang]["Out of Stock"]}
      </label>
    </div>
  </div>
</div> */}

{/* Sort By Pricing */ }
{/* <div className="grid grid-cols-1 space-y-2 mt-5">
  <div className="flex flex-row justify-between items-center">
    <span className="text-left text-sm text-white">{languageData[lang]["Pricing"]}</span>
  </div>

  <div className="flex flex-row justify-between space-x-2 items-center">
    <div className="w-full">
      <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg" id="price_high_low">
        <input
          type="radio"
          name="price_high_low"
          className="hidden peer"
          id="low_to_high"
          value="low_to_high"
          onClick={handleFilter}
        />
        <div className="w-full h-full py-2 flex text-center text-white items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-primary">
          <label htmlFor="low_to_high text-white">{languageData[lang]["Low to High"]}</label>
        </div>
      </label>
    </div>
    <div className="w-full">
      <label className="relative h-[5rem] sm:h-[5rem] md:h-[5rem] bg-secondary rounded-lg" id="price_high_low">
        <input
          type="radio"
          name="price_high_low"
          className="hidden peer"
          id="high_to_low"
          value="high_to_low"
          onClick={handleFilter}
        />
        <div className="w-full h-full py-2 flex text-center text-white items-center justify-center text-sm border border-gray-400 rounded-lg cursor-pointer peer-checked:border-white peer-checked:text-white peer-checked:bg-primary">
          <label htmlFor="high_to_low text-white">{languageData[lang]["High to Low"]}</label>
        </div>
      </label>
    </div>
  </div>
  <div className="flex flex-row text-white justify-between items-center">
    <span>{languageData[lang]["From"]} AED {minPrice}</span>
    <span>{languageData[lang]["To"]} AED {maxPrice}</span>
  </div>
  <div className="flex flex-row items-center justify-center">
    <input
      type="range"
      min={filterData?.pricing?.min}
      max={filterData?.pricing?.max}
      value={maxPrice}
      onChange={handleSliderChange}
      className="w-full cursor-pointer accent-primary"
    />
  </div>

  <div className="flex flex-row items-center gap-2 justify-between">
    <input
      type="number"
      placeholder="From"
      name="from_value"
      value={minPrice}
      className="py-2 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
    />
    <input
      type="number"
      placeholder="To"
      name="to_value"
      value={maxPrice}
      className="py-2 text-sm text-black rounded bg-white border border-gray-400 w-full outline-[#333]"
    />
  </div>
</div> */}

{/* Sort By Brands Section */ }
{/* <div className="grid grid-cols-1 space-y-2 mt-5">
  <div className="flex flex-row justify-between items-center">
    <span className="text-left text-sm text-white">{languageData[lang]["Sort By Brands"]}</span>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2"> */}
{/* Brand 1 */ }
//       Array.isArray(filterData?.brands) && filterData?.brands?.map((item, idx) => {
//         return (
//           <label className="relative h-[5rem] items-center sm:h-[5rem] md:h-[5rem] bg-white rounded-lg" key={idx}>
//             <input
//               type="radio"
//               name="car_brands"
//               className="hidden peer"
//               value={item.id}
//               onClick={handleFilter}
//             />
//             <div className="w-full h-full bg-cover bg-center cursor-pointer rounded-lg border-[2px] border-transparent peer-checked:border-primary peer-checked:rounded-lg relative">
//               <img
//                 src={item.image}
//                 alt="brand_back_img"
//                 className="rounded-lg p-2 object-contain object-center w-full h-full"
//               />
//             </div>
//           </label>
//         )
//       })
//     }
//   </div>
// </div>
//             </div >
//         )
//     }
// </div >

//   // <div className="w-full h-full right-0 flex flex-col lg:flex-row mx-auto lg:w-8/12 justify-center">
//   //   {/* Data Card Area */}
//   //   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-2">
//   //     {
//   //       Array.isArray(carData?.data) && carData?.data?.length > 0 ? (
//   //         carData?.data?.map((item, idx) => {
//   //           return (
//   //             <CarSingleCard key={idx} car_id={item.id} lang={lang} slug={item.slug} image={item.image} title={item.name} price_daily={item.price_daily}
//   //               price_weekly={item.price_weekly} price_monthly={item.price_monthly} bluetooth={item.bluetooth}
//   //               cruise_control={item.cruise} model={item.model}
//   //               engine={item.engine} luggage={item.luggage} btnText={languageData[langValue]["Book Ride"]} />
//   //           )
//   //         })
//   //       ) :
//   //         (
//   //           <p className="flex flex-row justify-center text-xl text-secondary text-center">No Data Available</p>
//   //         )

//   //     }
//   //   </div>
//   // </div>
//   //           </div >
// </> 