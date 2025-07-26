import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

interface BrandLogo {
  name: string;
  logo: string;
}

const CustomPage: React.FC = () => {
  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "New Arrivals", href: "/category" },
    // { label: 'Packages', href: '/packages' },
  ];

  const brands: BrandLogo[] = [
    { name: "CHANEL", logo: "/images/chanel.png" },
    { name: "LOUIS VUITTON", logo: "/images/louisv.png" },
    { name: "PRADA", logo: "/images/prada.png" },
    { name: "Calvin Klein", logo: "/images/calvink.png" },
    { name: "DENIM", logo: "/images/denim.png" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20"> */}
      {/* Logo */}
      {/* <div className="flex-shrink-0">
              <Link href="/" className="text-2xl sm:text-3xl font-serif text-gray-900">
                Logo
              </Link>
            </div> */}

      {/* Mobile menu button */}
      {/* <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-900 p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div> */}

      {/* Navigation - Desktop */}
      <div className="hidden md:block">
        <div className="flex items-center justify-center space-x-8 lg:space-x-12">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${
                index === 0 ? "text-[#f9b3a7] font-medium" : "text-gray-500"
              } text-sm lg:text-base hover:text-gray-900 transition-colors`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Auth Buttons - Desktop */}
      {/* <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <Link
                href="/signin"
                className="text-gray-500 hover:text-gray-900 text-sm lg:text-base"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="bg-black text-white px-4 py-2 lg:px-8 lg:py-3 rounded-full text-sm lg:text-base font-medium hover:bg-gray-800 transition-colors"
              >
                Sign Up
              </Link>
            </div> */}
      {/* </div>
        </nav>
      </header> */}

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 min-h-[600px] lg:h-[700px]">
          {/* Left Image - Man sitting on box */}
          <div className="lg:col-span-4 order-1 lg:order-1">
            <div className="bg-[#D4D4D8] rounded-2xl lg:rounded-3xl h-64 sm:h-80 lg:h-full relative overflow-hidden">
              <Image
                src="/images/man-sitting.png"
                alt="Man in casual wear sitting thoughtfully"
                width={400}
                height={100}
                className="object-contain pt-16 sm:pt-24 lg:pt-36 w-full h-full"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Center Column */}
          <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-6 lg:gap-8 order-3 lg:order-2">
            {/* Top Image - Four women */}
            <div className="bg-[#E5E7EB] rounded-2xl lg:rounded-3xl h-32 sm:h-40 lg:h-[180px] relative overflow-hidden">
              <Image
                src="/images/4women.png"
                alt="Group of four women together"
                width={400}
                height={100}
                className="object-contain pt-4 sm:pt-6 lg:pt-11 w-full h-full"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Sale Text Section */}
            <div className="text-center flex-1 flex flex-col justify-center py-6 lg:py-0">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-none mb-1 lg:mb-2 tracking-tight">
                ULTIMATE
              </h1>
              <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black leading-none mb-4 lg:mb-6 tracking-tight">
                <span
                  className="text-transparent"
                  style={{
                    WebkitTextStroke: "1px black",
                    // WebkitTextFillColor: "transparent",
                  }}
                >
                  SALE
                </span>
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm font-medium tracking-[0.2em] sm:tracking-[0.3em] mb-4 sm:mb-6 lg:mb-8 uppercase">
                New Collection
              </p>
              <Link href="/category" className="mx-auto w-fit">
                <button className="bg-black text-white px-6 py-3 sm:px-8 sm:py-3 lg:px-10 lg:py-4 rounded-lg lg:rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#f9b3a7] hover:transform hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 uppercase tracking-wider">
                  Shop Now
                </button>
              </Link>
            </div>

            {/* Bottom Image - Two women laughing */}
            <div className="bg-[#F87171] rounded-2xl lg:rounded-3xl h-32 sm:h-40 lg:h-[180px] relative overflow-hidden">
              <Image
                src="/images/2women.png"
                alt="Two women laughing together"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>

          {/* Right Image - Pink Nike Backpack */}
          <div className="lg:col-span-4 order-2 lg:order-3">
            <div className="bg-[#F3F4F6] rounded-2xl lg:rounded-3xl h-64 sm:h-80 lg:h-full relative overflow-hidden">
              <Image
                src="/images/pinkbag.png"
                alt="Pink backpack"
                width={400}
                height={250}
                className="object-contain pt-8 sm:pt-16 lg:pt-[160px] w-full h-full"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </div>
        </div>

        {/* Brand Logos */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 lg:pt-12 border-t border-gray-100">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:flex-wrap lg:justify-between items-center max-w-5xl mx-auto gap-4 sm:gap-6 lg:gap-4">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className={`${
                  brand.name === "Calvin Klein"
                    ? "font-light text-base sm:text-lg lg:text-2xl"
                    : "font-bold text-base sm:text-lg lg:text-2xl"
                } text-gray-800 tracking-wider hover:text-gray-600 transition-colors cursor-pointer text-center lg:text-left`}
              >
                <Image src={brand.logo} alt={brand.name} width={100} height={30}/>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu (Hidden by default) */}
        {/* <div className="md:hidden fixed inset-0 bg-white z-50 transform translate-x-full transition-transform duration-300" id="mobile-menu">
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" className="text-2xl font-serif text-gray-900">Logo</Link>
            <button className="text-gray-500 hover:text-gray-900 p-2" onclick="closeMobileMenu()">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block text-gray-900 text-lg font-medium py-2"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t space-y-3">
              <Link href="/signin" className="block text-gray-500 text-lg py-2">
                Sign in
              </Link>
              <Link href="/signup" className="block bg-black text-white px-6 py-3 rounded-full text-center font-medium">
                Sign Up
              </Link>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
};

export default CustomPage;
