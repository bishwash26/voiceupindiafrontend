import Link from "next/link";
export default function Public() {
    return (
        <>
        <div id="root">
          <nav
            id="Navbar"
            className="fixed top-0 left-0 right-0 bg-white shadow-md z-50"
          >
            <div className="container mx-auto px-4"> 
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link href="/" className="flex items-center">
                    <img
                      src="https://speakupnepal.org/icon.svg"
                      alt="Logo"
                      className="h-8 w-8"
                    />
                    <span className="ml-2 text-xl font-bold text-[#00A674]">
                      SpeakUp India
                    </span>
                  </Link>
                </div>
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link
                    href="#trending"
                    className="text-gray-600 hover:text-[#00A674] transition-colors"
                  >
                    Trending
                  </Link>
                  <Link
                    href="#categories"
                    className="text-gray-600 hover:text-[#00A674] transition-colors"
                  >
                    Categories
                  </Link>
                  <Link
                    href="#about"
                    className="text-gray-600 hover:text-[#00A674] transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#contact"
                    className="text-gray-600 hover:text-[#00A674] transition-colors"
                  >
                    Contact
                  </Link>
                </div>
                {/* Auth Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                  <Link href = 'http://localhost:7010/auth/google' className="px-4 py-2 text-[#00A674] hover:text-[#008c61] transition-colors">
                    Log In
                  </Link>
                  <Link href = 'http://localhost:7010/auth/google' className="px-4 py-2 bg-[#00A674] text-white rounded-md hover:bg-[#008c61] transition-colors">
                    Sign Up
                  </Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button className="p-2 rounded-md text-gray-600 hover:text-[#00A674] hover:bg-gray-100 transition-colors">
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Mobile Navigation Menu */}
              <div className="hidden md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <Link
                    href="#trending"
                    className="block px-3 py-2 text-gray-600 hover:text-[#00A674] hover:bg-gray-100 rounded-md transition-colors"
                  >
                    Trending
                  </Link>
                  <Link
                    href="#categories"
                    className="block px-3 py-2 text-gray-600 hover:text-[#00A674] hover:bg-gray-100 rounded-md transition-colors"
                  >
                    Categories
                  </Link>
                  <Link
                    href="#about"
                    className="block px-3 py-2 text-gray-600 hover:text-[#00A674] hover:bg-gray-100 rounded-md transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#contact"
                    className="block px-3 py-2 text-gray-600 hover:text-[#00A674] hover:bg-gray-100 rounded-md transition-colors"
                  >
                    Contact
                  </Link>
                  <div className="pt-4 space-y-2">
                    <button className="w-full px-4 py-2 text-[#00A674] hover:text-[#008c61] transition-colors">
                      Log In
                    </button>
                    <button className="w-full px-4 py-2 bg-[#00A674] text-white rounded-md hover:bg-[#008c61] transition-colors">
                      Sign Up
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
          <div id="root">
            <section
              id="Hero"
              className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#00A674] via-[#008c61] to-[#006647] overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                  }}
                />
              </div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="text-center">
                  {/* Main Heading */}
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                    <span className="block">Raise Your Voice,</span>
                    <span className="block mt-2">Begin the Change</span>
                  </h1>
                  {/* Subheading */}
                  <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-up delay-200">
                    Join millions of Indians in creating positive change through
                    online petitions and campaigns.
                  </p>
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-300">
                    <button className="px-8 py-4 bg-white text-[#00A674] rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                      Start a Petition
                    </button>
                    <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                      Browse Issues
                    </button>
                  </div>
                  {/* Stats */}
                  <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-white max-w-4xl mx-auto">
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold">1M+</div>
                      <div className="text-sm md:text-base opacity-80">
                        Active Users
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold">50K+</div>
                      <div className="text-sm md:text-base opacity-80">
                        Successful Campaigns
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold">100K+</div>
                      <div className="text-sm md:text-base opacity-80">
                        Active Petitions
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl md:text-4xl font-bold">28</div>
                      <div className="text-sm md:text-base opacity-80">
                        States Covered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Scroll Indicator */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </section>
          </div>
          <div id="root">
            <section id="TrendingIssues" className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Trending Issues
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Join these important campaigns and make your voice heard
                  </p>
                </div>
                {/* Issues Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Issue Card 1 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                          Urgent
                        </span>
                        <span className="ml-auto text-gray-500 text-sm">
                          2 days left
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Save City Parks from Commercial Development
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Protect our green spaces from being converted into commercial
                        complexes. Stand with us to preserve nature.
                      </p>
                      <div className="flex items-center mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-[#00A674] h-2.5 rounded-full"
                            style={{ width: "75%" }}
                          />
                        </div>
                        <span className="ml-4 text-gray-600 font-medium">75%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">15,000 supporters</span>
                        <button className="text-[#00A674] hover:text-[#008c61] font-medium">
                          Sign Now →
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Issue Card 2 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                        <span className="ml-auto text-gray-500 text-sm">
                          5 days left
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Clean Water Access in Rural Areas
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Support the initiative to provide clean drinking water to
                        rural communities facing severe water crisis.
                      </p>
                      <div className="flex items-center mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-[#00A674] h-2.5 rounded-full"
                            style={{ width: "60%" }}
                          />
                        </div>
                        <span className="ml-4 text-gray-600 font-medium">60%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">12,500 supporters</span>
                        <button className="text-[#00A674] hover:text-[#008c61] font-medium">
                          Sign Now →
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Issue Card 3 */}
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                          Education
                        </span>
                        <span className="ml-auto text-gray-500 text-sm">
                          1 week left
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        Digital Education for All
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        Support the movement to provide digital devices and internet
                        access to underprivileged students.
                      </p>
                      <div className="flex items-center mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-[#00A674] h-2.5 rounded-full"
                            style={{ width: "45%" }}
                          />
                        </div>
                        <span className="ml-4 text-gray-600 font-medium">45%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">8,750 supporters</span>
                        <button className="text-[#00A674] hover:text-[#008c61] font-medium">
                          Sign Now →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* View More Button */}
                <div className="text-center mt-12">
                  <button className="px-8 py-3 bg-[#00A674] text-white rounded-full hover:bg-[#008c61] transition-colors shadow-md hover:shadow-lg">
                    View More Issues
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div id="root">
            <section id="FeaturedCampaigns" className="py-16 bg-white">
              <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Featured Campaigns
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">
                    Discover the campaigns that are making a significant impact across
                    India
                  </p>
                </div>
                {/* Featured Campaigns Carousel */}
                <div className="relative">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Campaign 1 */}
                    <div className="flex-1 bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-medium">
                            Environmental
                          </span>
                          <span className="text-gray-500">
                            3,500 signatures needed
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                          Save Western Ghats Biodiversity
                        </h3>
                        <div className="space-y-4">
                          <p className="text-gray-600">
                            A crucial campaign to protect the rich biodiversity of
                            Western Ghats from mining activities.
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-[#00A674] h-2 rounded-full"
                                style={{ width: "85%" }}
                              />
                            </div>
                            <span className="font-semibold">85%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-600">Target: 50,000</span>
                              <span className="text-gray-400">|</span>
                              <span className="text-[#00A674]">42,500 signed</span>
                            </div>
                            <button className="text-[#00A674] font-medium hover:text-[#008c61]">
                              Learn More →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Campaign 2 */}
                    <div className="flex-1 bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium">
                            Healthcare
                          </span>
                          <span className="text-gray-500">
                            1,200 signatures needed
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                          Mental Health Support in Schools
                        </h3>
                        <div className="space-y-4">
                          <p className="text-gray-600">
                            Advocating for mandatory mental health counselors in all
                            secondary schools.
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-[#00A674] h-2 rounded-full"
                                style={{ width: "92%" }}
                              />
                            </div>
                            <span className="font-semibold">92%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-600">Target: 25,000</span>
                              <span className="text-gray-400">|</span>
                              <span className="text-[#00A674]">23,800 signed</span>
                            </div>
                            <button className="text-[#00A674] font-medium hover:text-[#008c61]">
                              Learn More →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Campaign 3 */}
                    <div className="flex-1 bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
                            Education
                          </span>
                          <span className="text-gray-500">
                            2,800 signatures needed
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">
                          Free Coding Education Initiative
                        </h3>
                        <div className="space-y-4">
                          <p className="text-gray-600">
                            Supporting free coding education for underprivileged
                            students across rural India.
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-[#00A674] h-2 rounded-full"
                                style={{ width: "72%" }}
                              />
                            </div>
                            <span className="font-semibold">72%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="text-gray-600">Target: 30,000</span>
                              <span className="text-gray-400">|</span>
                              <span className="text-[#00A674]">21,600 signed</span>
                            </div>
                            <button className="text-[#00A674] font-medium hover:text-[#008c61]">
                              Learn More →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Navigation Arrows */}
                  <button className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow hidden lg:block">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow hidden lg:block">
                    <svg
                      className="w-6 h-6 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
                {/* View All Button */}
                <div className="text-center mt-12">
                  <button className="px-8 py-3 bg-[#00A674] text-white rounded-full hover:bg-[#008c61] transition-colors shadow-md hover:shadow-lg">
                    View All Campaigns
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div id="root">
            <section
              id="AboutUs"
              className="py-20 bg-gradient-to-b from-white to-gray-50"
            >
              <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                  {/* Section Header */}
                  <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      About SpeakUp India
                    </h2>
                    <p className="text-xl text-gray-600">
                      Empowering voices, catalyzing change across India
                    </p>
                  </div>
                  {/* Main Content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Mission */}
                    <div className="space-y-8">
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-[#00A674] mb-4">
                          Our Mission
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          To create a powerful platform where every Indian citizen can
                          raise their voice against social injustice, environmental
                          concerns, and civic issues. We believe in the power of
                          collective action to drive meaningful change in society.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-[#00A674] mb-4">
                          Our Impact
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4">
                            <div className="text-3xl font-bold text-gray-800">
                              50K+
                            </div>
                            <div className="text-gray-600">Successful Campaigns</div>
                          </div>
                          <div className="text-center p-4">
                            <div className="text-3xl font-bold text-gray-800">
                              1M+
                            </div>
                            <div className="text-gray-600">Active Users</div>
                          </div>
                          <div className="text-center p-4">
                            <div className="text-3xl font-bold text-gray-800">28</div>
                            <div className="text-gray-600">States Covered</div>
                          </div>
                          <div className="text-center p-4">
                            <div className="text-3xl font-bold text-gray-800">
                              100K+
                            </div>
                            <div className="text-gray-600">Issues Resolved</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Right Column - Values */}
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                        <h3 className="text-2xl font-bold text-[#00A674] mb-6">
                          Our Core Values
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-start space-x-4">
                            <div className="bg-[#00A674] p-2 rounded-lg">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Transparency
                              </h4>
                              <p className="text-gray-600">
                                Clear and honest communication in all our campaigns
                                and processes
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="bg-[#00A674] p-2 rounded-lg">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Empowerment
                              </h4>
                              <p className="text-gray-600">
                                Giving voice to every citizen regardless of their
                                background
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <div className="bg-[#00A674] p-2 rounded-lg">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800">
                                Action-Oriented
                              </h4>
                              <p className="text-gray-600">
                                Focused on achieving concrete results and positive
                                change
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Join Us CTA */}
                      <div className="bg-[#00A674] p-8 rounded-xl text-white text-center">
                        <h3 className="text-2xl font-bold mb-4">Join Our Movement</h3>
                        <p className="mb-6">
                          Be part of India&apos;s largest platform for social change
                        </p>
                        <button className="bg-white text-[#00A674] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                          Start a Campaign
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="root">
            <section id="HowItWorks" className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    How SpeakUp India Works
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Making change happen in three simple steps
                  </p>
                </div>
                {/* Steps Container */}
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                      <div className="absolute -top-6 left-8 bg-[#00A674] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                        1
                      </div>
                      <div className="pt-4">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          Start Your Campaign
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Create your petition in minutes. Describe the change you
                          want to make and explain why it matters.
                        </p>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-center">
                            <svg
                              className="w-5 h-5 text-[#00A674] mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Choose your cause
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="w-5 h-5 text-[#00A674] mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Tell your story
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="w-5 h-5 text-[#00A674] mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Set your goal
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Step 2 */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                      <div className="absolute -top-6 left-8 bg-[#00A674] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                        2
                      </div>
                      <div className="pt-4">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          Build Support
                        </h3>
                        <p className="text-gray-600 mb-6">
                          Share your petition with friends, family, and community.
                          Watch your support grow.
                        </p>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-center">
                            <svg
                              className="w-5 h-5 text-[#00A674] mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Share on social media
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="w-5 h-5 text-[#00A674] mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Email supporters
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="w-5 h-5 text-[#00A674] mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Engage community
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Step 3 */}
                    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow relative">
                      <div className="absolute -top-6 left-8 bg-[#00A674] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
                        3
                      </div>
                      <div className="pt-4">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                          Create Change
                        </h3>
                        <p className="text-gray-600 mb-6">
                          When your petition reaches its goal, we&apos;ll help you deliver
                          it to decision-makers.
                        </p>
                        <ul className="space-y-3 text-gray-600">
                          <li className="flex items-center">
                            <svg
                              className="w-5 h-5 text-[#00A674] mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Reach decision makers
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="w-5 h-5 text-[#00A674] mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Get media attention
                          </li>
                          <li className="flex items-center">
                            <svg
                              className="w-5 h-5 text-[#00A674] mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            Make impact
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* CTA Button */}
                  <div className="text-center mt-16">
                    <button className="bg-[#00A674] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#008c61] transition-colors shadow-lg hover:shadow-xl">
                      Start Your Campaign Now
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="root">
            <section id="ImpactStories" className="py-20 bg-white">
              <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Success Stories
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Real changes achieved through collective action
                  </p>
                </div>
                {/* Stories Grid */}
                <div className="max-w-7xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Story 1 */}
                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="p-6">
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-green-100 text-green-600 mb-4">
                          Environment
                        </span>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          Save Mumbai Mangroves
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Successfully protected 50 acres of mangrove forest from
                          illegal construction.
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[#00A674] font-semibold">
                            15,000 supporters
                          </span>
                          <span className="text-gray-500">Achieved in 45 days</span>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <svg
                                className="w-8 h-8 text-[#00A674]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm text-gray-600">
                              Government ordered immediate stop to construction
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Story 2 */}
                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="p-6">
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-600 mb-4">
                          Education
                        </span>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          Digital Education Access
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Provided tablets and internet access to 1000+
                          underprivileged students.
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[#00A674] font-semibold">
                            25,000 supporters
                          </span>
                          <span className="text-gray-500">Achieved in 60 days</span>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <svg
                                className="w-8 h-8 text-[#00A674]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm text-gray-600">
                              Corporate sponsorship secured for digital devices
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Story 3 */}
                    <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                      <div className="p-6">
                        <span className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-600 mb-4">
                          Healthcare
                        </span>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          Rural Health Camp Initiative
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Established monthly health camps in 20 remote villages.
                        </p>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[#00A674] font-semibold">
                            12,000 supporters
                          </span>
                          <span className="text-gray-500">Achieved in 30 days</span>
                        </div>
                        <div className="border-t border-gray-200 pt-4">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <svg
                                className="w-8 h-8 text-[#00A674]"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <p className="ml-3 text-sm text-gray-600">
                              Local government allocated healthcare budget
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Impact Counter */}
                  <div className="mt-16 bg-[#00A674] rounded-xl p-8 text-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                      <div>
                        <div className="text-4xl font-bold mb-2">100+</div>
                        <div className="text-sm opacity-90">Successful Campaigns</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold mb-2">₹50M+</div>
                        <div className="text-sm opacity-90">Funds Raised</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold mb-2">500K+</div>
                        <div className="text-sm opacity-90">Lives Impacted</div>
                      </div>
                      <div>
                        <div className="text-4xl font-bold mb-2">28</div>
                        <div className="text-sm opacity-90">States Reached</div>
                      </div>
                    </div>
                  </div>
                  {/* CTA */}
                  <div className="text-center mt-16">
                    <button className="bg-[#00A674] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#008c61] transition-colors shadow-lg hover:shadow-xl">
                      Start Your Success Story
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="root">
            <section
              id="JoinMovement"
              className="py-20 bg-gradient-to-br from-[#00A674] to-[#008c61] relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")'
                  }}
                />
              </div>
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center text-white">
                  {/* Main Content */}
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Join the Movement for Change
                  </h2>
                  <p className="text-xl mb-12 opacity-90">
                    Be part of India&apos;s largest community working towards positive
                    social change
                  </p>
                  {/* Features Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                      <div className="text-3xl mb-4">🗣️</div>
                      <h3 className="text-xl font-bold mb-2">Raise Your Voice</h3>
                      <p className="opacity-90">
                        Start petitions for causes you care about
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                      <div className="text-3xl mb-4">👥</div>
                      <h3 className="text-xl font-bold mb-2">Build Community</h3>
                      <p className="opacity-90">
                        Connect with like-minded change makers
                      </p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all">
                      <div className="text-3xl mb-4">✨</div>
                      <h3 className="text-xl font-bold mb-2">Create Impact</h3>
                      <p className="opacity-90">Drive real change in society</p>
                    </div>
                  </div>
                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    <button className="bg-white text-[#00A674] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-block">
                      Start Your Campaign
                    </button>
                    <div className="text-sm opacity-90">
                      Already have an account?
                      <Link href="#" className="underline hover:text-white">
                        Sign in
                      </Link>
                    </div>
                  </div>
                  {/* Stats */}
                  <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold">1M+</div>
                      <div className="text-sm opacity-80">Active Members</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">50K+</div>
                      <div className="text-sm opacity-80">Campaigns</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">28</div>
                      <div className="text-sm opacity-80">States</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold">100K+</div>
                      <div className="text-sm opacity-80">Success Stories</div>
                    </div>
                  </div>
                  {/* Newsletter Signup */}
                  <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8">
                    <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                    <p className="mb-6 opacity-90">
                      Get weekly updates about impactful campaigns and success stories
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                      />
                      <button
                        type="submit"
                        className="bg-[#00A674] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#008c61] transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="text-xs mt-4 opacity-70">
                      By subscribing, you agree to our privacy policy and terms of
                      service
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div id="root">
            <section id="Categories" className="py-20 bg-gray-50">
              <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Browse by Categories
                  </h2>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Explore issues that matter to you
                  </p>
                </div>
                {/* Categories Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                  {/* Environment */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                        <svg
                          className="w-6 h-6 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Environment</h3>
                        <p className="text-sm text-gray-500">1.2K issues</p>
                      </div>
                    </div>
                  </div>
                  {/* Education */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                        <svg
                          className="w-6 h-6 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Education</h3>
                        <p className="text-sm text-gray-500">850 issues</p>
                      </div>
                    </div>
                  </div>
                  {/* Healthcare */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                        <svg
                          className="w-6 h-6 text-red-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Healthcare</h3>
                        <p className="text-sm text-gray-500">960 issues</p>
                      </div>
                    </div>
                  </div>
                  {/* Women's Rights */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                        <svg
                          className="w-6 h-6 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Women&apos;s Rights
                        </h3>
                        <p className="text-sm text-gray-500">750 issues</p>
                      </div>
                    </div>
                  </div>
                  {/* Infrastructure */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                        <svg
                          className="w-6 h-6 text-yellow-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          Infrastructure
                        </h3>
                        <p className="text-sm text-gray-500">620 issues</p>
                      </div>
                    </div>
                  </div>
                  {/* Animal Rights */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                        <svg
                          className="w-6 h-6 text-orange-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Animal Rights</h3>
                        <p className="text-sm text-gray-500">480 issues</p>
                      </div>
                    </div>
                  </div>
                  {/* Human Rights */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                        <svg
                          className="w-6 h-6 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Human Rights</h3>
                        <p className="text-sm text-gray-500">890 issues</p>
                      </div>
                    </div>
                  </div>
                  {/* Others */}
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                        <svg
                          className="w-6 h-6 text-gray-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">Others</h3>
                        <p className="text-sm text-gray-500">340 issues</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* View All Button */}
                <div className="text-center mt-12">
                  <button className="bg-[#00A674] text-white px-8 py-3 rounded-full hover:bg-[#008c61] transition-colors shadow-md hover:shadow-lg">
                    View All Categories
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div id="root">
            <footer id="Footer" className="bg-gray-900 text-gray-300">
              {/* Main Footer Content */}
              <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                  {/* Company Info */}
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <img
                        src="https://speakupnepal.org/icon.svg"
                        alt="SpeakUp India Logo"
                        className="h-8 w-8"
                      />
                      <span className="ml-2 text-xl font-bold text-white">
                        SpeakUp India
                      </span>
                    </div>
                    <p className="text-sm">
                      The platform for India to express issues in their day to day
                      life and see it change.
                    </p>
                    <div className="flex space-x-4">
                      <Link href="#" className="hover:text-white transition-colors">
                        <span className="sr-only">Facebook</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </Link>
                      <Link href="#" className="hover:text-white transition-colors">
                        <span className="sr-only">Twitter</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </Link>
                      <Link href="#" className="hover:text-white transition-colors">
                        <span className="sr-only">Instagram</span>
                        <svg
                          className="h-6 w-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  {/* Quick Links */}
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-4">
                      Quick Links
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Start a Petition
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Browse Issues
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Success Stories
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Categories */}
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-4">
                      Categories
                    </h3>
                    <ul className="space-y-3">
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Environment
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Education
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Healthcare
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Human Rights
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-white transition-colors">
                          Women&apos;s Rights
                        </Link>
                      </li>
                    </ul>
                  </div>
                  {/* Newsletter */}
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-4">
                      Stay Updated
                    </h3>
                    <p className="text-sm mb-4">
                      Subscribe to our newsletter for updates on important causes
                    </p>
                    <form className="space-y-4">
                      <div>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:border-[#00A674] text-white"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#00A674] text-white py-2 px-4 rounded-md hover:bg-[#008c61] transition-colors"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* Bottom Bar */}
              <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-6">
                  <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm mb-4 md:mb-0">
                      © 2024 SpeakUp India. All rights reserved.
                    </div>
                    <div className="flex space-x-6 text-sm">
                      <Link href="#" className="hover:text-white transition-colors">
                        Privacy Policy
                      </Link>
                      <Link href="#" className="hover:text-white transition-colors">
                        Terms of Service
                      </Link>
                      <Link href="#" className="hover:text-white transition-colors">
                        Cookie Policy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </footer>
          </div>
      </>
    )
}