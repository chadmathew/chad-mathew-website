<div className="lg:hidden">
          <div className="px-4 h-11 flex items-center justify-between">
            <span className="text-[12px] lg:text-[19px] font-bold">
              CHAD MATHEW
            </span>

            <button
              ref={buttonRef}
              onClick={toggleMobileMenu}
              className="relative flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200 w-10 h-10"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 relative">
                <span
                  className={`absolute left-0 top-0 w-5 h-0.5 bg-current transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-45 top-2" : "top-1"
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 w-5 h-0.5 bg-current transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 w-5 h-0.5 bg-current transition-transform duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 top-2" : "top-3.5"
                  }`}
                />
              </div>
            </button>
          </div>

          <div
            ref={menuRef}
            className={`absolute top-full left-0 right-0 transition-all duration-300 transform ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="bg-white/98 backdrop-blur-xl shadow-xl border-t border-gray-200">
              <div className="px-4 py-3 space-y-1">
                {navLinks.map((link) => {
                  const isActive =
                    link.id === "contact"
                      ? pathname === "/contact"
                      : activeSection === link.id;
                  if (link.id === "contact") {
                    return (
                      <Link
                        key={link.id}
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-[#0B3D2E] text-white shadow-md"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  }

                  return (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      onClick={(e) => handleLinkClick(e, link.id)}
                      className={`flex px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-[#0B3D2E] text-white shadow-md"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>



         {/* {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )} */}