'use client'

import { useState, useEffect } from 'react'
import { 
  Home, 
  Sparkles, 
  ShoppingBag, 
  Target, 
  Search, 
  X, 
  Menu,
  ChevronRight,
  ArrowRight
} from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false) // Added to prevent SSR issues

  const menuItems = {
    Home: { id: "home", icon: Home, color: "text-blue-600", underlineColor: "bg-blue-600" },
    About: { id: "about", icon: Sparkles, color: "text-yellow-500", underlineColor: "bg-yellow-500" },
    Products: { id: "products", icon: ShoppingBag, color: "text-yellow-500", underlineColor: "bg-yellow-500" },
    Activities: { id: "activities", icon: Target, color: "text-red-500", underlineColor: "bg-red-500" }
  }

  // Handle mounting and scroll effect
  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 20)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollTo = (id) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return
    
    const element = document.getElementById(id)
    if (element) {
      const startY = window.pageYOffset
      const targetY = element.getBoundingClientRect().top + window.pageYOffset - 100
      const distance = targetY - startY
      const duration = 800
      let startTime = null

      function step(currentTime) {
        if (startTime === null) startTime = currentTime
        const elapsedTime = currentTime - startTime
        const progress = Math.min(elapsedTime / duration, 1)
        
        // Easing function for smoother animation
        const easeInOutCubic = progress => 
          progress < 0.5 ? 4 * progress * progress * progress : (progress - 1) * (2 * progress - 2) * (2 * progress - 2) + 1
        
        window.scrollTo(0, startY + distance * easeInOutCubic(progress))
        
        if (elapsedTime < duration) {
          window.requestAnimationFrame(step)
        }
      }

      window.requestAnimationFrame(step)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent body scroll when menu is open
    if (typeof document !== 'undefined') {
      if (!isMenuOpen) {
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = 'unset'
      }
    }
  }

  const handleSearch = (value) => {
    setSearchQuery(value)
    const inputValue = value.toLowerCase()
    let matches = Object.keys(menuItems).filter(item =>
      item.toLowerCase().includes(inputValue)
    )

    if (inputValue === "") {
      matches = []
    }

    setSearchResults(matches)
  }

  const handleSearchItemClick = (selectedItem) => {
    const targetId = menuItems[selectedItem].id
    scrollTo(targetId)
    setSearchQuery('')
    setSearchResults([])
    setIsMenuOpen(false)
    setIsSearchFocused(false)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset'
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset'
    }
  }

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) return null

  return (
    <>
      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-xl border-b border-gray-200/60' 
          : 'bg-white/95 backdrop-blur-sm shadow-lg'
      }`}>
        {/* Rest of your navbar JSX remains exactly the same */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-2 sm:space-x-3 group cursor-pointer"
                 onClick={() => scrollTo('home')}>
              <div className="relative">
                <img
                  src="/images/Steady-Logo-Small.png"
                  alt="Steady Logo"
                  className="h-7 sm:h-8 md:h-10 lg:h-11 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg -z-10"></div>
              </div>
              <div className="hidden xs:block">
                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-red-500 transition-all duration-500">
                  Steady
                </h1>
                <p className="text-xs md:text-sm text-gray-600 -mt-1 group-hover:text-gray-700 transition-colors duration-500">Stembayo</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-3">
              {Object.entries(menuItems).map(([name, item]) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={name}
                    onClick={() => scrollTo(item.id)}
                    className={`group relative flex items-center space-x-2 xl:space-x-3 px-3 xl:px-4 py-2.5 rounded-lg transition-all duration-500 active:scale-95`}
                  >
                    <div className={`w-7 h-7 xl:w-8 xl:h-8 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-all duration-500`}>
                      <IconComponent className={`w-4 h-4 ${item.color} group-hover:scale-125 transition-all duration-500`} />
                    </div>
                    <span className="font-semibold text-gray-700 group-hover:text-gray-900 transition-all duration-500 text-sm xl:text-base">
                      {name}
                    </span>
                    {/* Underline effect */}
                    <div className={`absolute bottom-1 left-1/2 w-0 h-0.5 ${item.underlineColor} transform -translate-x-1/2 group-hover:w-4/5 transition-all duration-500 rounded-full`}></div>
                  </button>
                )
              })}
            </div>

            {/* Search Bar Desktop */}
            <div className="hidden md:block relative">
              <div className={`relative transition-all duration-500 ${
                isSearchFocused ? 'transform scale-105' : ''
              }`}>
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className={`w-4 h-4 transition-all duration-500 ${
                    isSearchFocused ? 'text-blue-600 scale-110' : 'text-gray-500'
                  }`} />
                </div>
                <input
                  type="text"
                  className="w-48 lg:w-64 xl:w-72 pl-11 pr-10 py-3 bg-gray-50/90 border border-gray-200/70 rounded-xl focus:outline-none focus:border-blue-600 focus:bg-white focus:shadow-xl focus:ring-2 focus:ring-blue-600/10 transition-all duration-500 placeholder-gray-500 text-sm font-medium"
                  placeholder="Search sections..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setSearchResults([])
                    }}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-red-500 hover:scale-110 transition-all duration-300"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              
              {/* Search Results */}
              {searchResults.length > 0 && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in slide-in-from-top-2 duration-300">
                  {searchResults.map((item, index) => {
                    const menuItem = menuItems[item]
                    const IconComponent = menuItem.icon
                    return (
                      <button
                        key={index}
                        className="w-full flex items-center space-x-3 px-4 py-3 transition-all duration-300 group border-b border-gray-50 last:border-b-0 relative overflow-hidden"
                        onClick={() => handleSearchItemClick(item)}
                      >
                        {/* Underline effect */}
                        <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${menuItem.underlineColor} group-hover:w-full transition-all duration-500`}></div>
                        <div className={`w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-all duration-300`}>
                          <IconComponent className={`w-3.5 h-3.5 ${menuItem.color} group-hover:scale-110 transition-all duration-300`} />
                        </div>
                        <span className="font-semibold text-gray-700 text-sm flex-1 text-left group-hover:text-gray-900 transition-colors duration-300">
                          {item}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 transform group-hover:translate-x-1" />
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:lg:hidden relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/90 border border-gray-200/70 shadow-lg hover:shadow-xl hover:border-gray-300 transition-all duration-500 active:scale-90 flex items-center justify-center backdrop-blur-sm"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700 transition-all duration-500 rotate-90" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700 transition-all duration-500" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - rest of JSX remains same */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
        isMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-all duration-500 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
        ></div>

        {/* Menu Content */}
        <div className={`absolute top-0 right-0 w-full max-w-xs sm:max-w-sm h-full bg-white/95 backdrop-blur-xl transform transition-all duration-700 ease-out shadow-2xl ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 pt-16 sm:pt-20 border-b border-gray-100 bg-gradient-to-br from-gray-50/90 via-white/80 to-blue-50/30 backdrop-blur-sm">
            <div className="flex items-center space-x-3 group">
              <div>
                <h2 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-all duration-500">Navigation</h2>
                <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-all duration-500">Jump to sections</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-3 sm:p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-320px)] pt-6">
            {Object.entries(menuItems).map(([name, item], index) => {
              const IconComponent = item.icon
              return (
                <button
                  key={name}
                  onClick={() => {
                    scrollTo(item.id)
                    closeMenu()
                  }}
                  className={`w-full flex items-center space-x-3 sm:space-x-4 p-4 sm:p-5 rounded-2xl transition-all duration-500 group transform hover:scale-[1.03] active:scale-95 relative overflow-hidden border-2 border-transparent hover:border-gray-100/50 shadow-sm hover:shadow-xl`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {/* Animated gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-full group-hover:translate-x-full"></div>
                  
                  {/* Underline effect */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 ${item.underlineColor} group-hover:w-full transition-all duration-700 rounded-full`}></div>
                  
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 relative z-10`}>
                    <IconComponent className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color} group-hover:scale-125 group-hover:-rotate-6 transition-all duration-700 filter group-hover:drop-shadow-lg`} />
                    {/* Icon glow effect */}
                    <div className={`absolute inset-0 ${item.color.replace('text-', 'bg-')}/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm`}></div>
                  </div>
                  <div className="flex-1 text-left relative z-10">
                    <span className="font-bold text-gray-900 block group-hover:text-gray-800 transition-all duration-500 text-base sm:text-lg group-hover:translate-x-1 transform">
                      {name}
                    </span>
                    <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-700 transition-all duration-500 group-hover:translate-x-1 transform">
                      {name === 'Home' ? 'Back to homepage' :
                       name === 'About' ? 'Learn about Steady' :
                       name === 'Products' ? 'View our products' :
                       'See our activities'}
                    </p>
                  </div>
                  <div className="relative z-10">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-2 group-hover:scale-125 transition-all duration-700" />
                    {/* Arrow trail effect */}
                    <ChevronRight className="absolute inset-0 w-5 h-5 text-gray-300 opacity-0 group-hover:opacity-50 transform translate-x-1 group-hover:translate-x-3 transition-all duration-700" />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Mobile Search */}
          <div className="p-3 sm:p-4 border-t border-gray-100 bg-gradient-to-br from-gray-50/90 via-white/60 to-blue-50/20 backdrop-blur-sm">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-4 h-4 text-gray-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-500" />
              </div>
              {/* Search input with enhanced styling */}
              <input
                type="text"
                className="w-full pl-11 pr-4 py-4 bg-white/90 border-2 border-gray-200/70 rounded-2xl focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all duration-500 text-sm font-semibold backdrop-blur-sm shadow-lg focus:shadow-xl hover:shadow-xl group-hover:scale-[1.01] transform placeholder-gray-400 focus:placeholder-gray-300"
                placeholder="Search sections..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {/* Search input glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-sm"></div>
            </div>
            
            {/* Mobile Search Results */}
            {searchResults.length > 0 && (
              <div className="mt-4 space-y-2 max-h-40 overflow-y-auto">
                {searchResults.map((item, index) => {
                  const menuItem = menuItems[item]
                  const IconComponent = menuItem.icon
                  return (
                    <button
                      key={index}
                      className="w-full flex items-center space-x-3 p-3 sm:p-4 rounded-xl transition-all duration-500 group border-2 border-transparent hover:border-gray-100/50 relative overflow-hidden bg-white/80 backdrop-blur-sm shadow-md hover:shadow-xl transform hover:scale-[1.02] active:scale-95"
                      onClick={() => handleSearchItemClick(item)}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      {/* Animated gradient sweep */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 transform -translate-x-full group-hover:translate-x-full"></div>
                      
                      {/* Underline effect */}
                      <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${menuItem.underlineColor} group-hover:w-full transition-all duration-700 rounded-full`}></div>
                      
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm group-hover:shadow-md relative z-10`}>
                        <IconComponent className={`w-4 h-4 ${menuItem.color} group-hover:scale-125 group-hover:-rotate-3 transition-all duration-500`} />
                      </div>
                      <span className="font-semibold text-gray-700 text-sm flex-1 text-left group-hover:text-gray-900 transition-all duration-500 group-hover:translate-x-1 transform relative z-10">
                        {item}
                      </span>
                      <div className="relative z-10">
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:scale-125 transition-all duration-500 transform group-hover:translate-x-1" />
                        <ArrowRight className="absolute inset-0 w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-30 transform translate-x-0.5 group-hover:translate-x-2 transition-all duration-700" />
                      </div>
                    </button>
                  )
                })}
              </div>
            )}
          </div>

          {/* Menu Footer */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-r from-gray-50/95 to-white/95 border-t border-gray-100 backdrop-blur-sm">
            <div className="text-center group">
              <p className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-700 transition-all duration-500">
                Made with <span className="inline-block group-hover:scale-125 group-hover:animate-pulse transition-all duration-500">❤️</span> by{' '}
                <span className="font-bold text-red-500 group-hover:text-red-600 group-hover:scale-105 inline-block transition-all duration-500">Steady Team</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}