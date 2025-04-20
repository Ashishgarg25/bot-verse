'use client';

import Link from 'next/link';
// import Facebook from "../../../public/socials/fb.svg";
// import Pinterest from "../../../public/socials/pinterest.svg";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t py-8" style={{ borderColor: "#efefef" }}>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="flex flex-col flex-wrap items-center justify-center gap-4 lg:flex-row lg:justify-between lg:gap-0">

          {/* Copyright */}
          <div>
            <p className="text-custom-sm">© 2025 BotVerse. All rights reserved</p>
          </div>

          {/* Links */}
          {/* <div>
            <ul className="flex flex-wrap items-center gap-2.5">
              {[
                { href: '/privacy-policy', label: 'Privacy' },
                { href: '/privacy-policy', label: 'Terms' },
                { href: '/auth/signup', label: 'Contact' },
              ].map((link, index, arr) => (
                <li key={link.label} className="flex items-center">
                  <Link
                    href={link.href}
                    className="group flex text-custom-sm leading-none duration-200 ease-in hover:text-dark"
                  >
                    <span className="bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
                      {link.label}
                    </span>
                  </Link>
                  {index !== arr.length - 1 && (
                    <span className="mx-2 flex h-[3px] w-[3px] rounded-full bg-dark-2" />
                  )}
                </li>
              ))}
            </ul>
          </div> */}

          {/* Socials */}
          {/* <div>
            <div className="flex items-center gap-3">
              <p className="text-custom-sm font-medium text-dark">Follow Us:</p>
              <div className="flex items-center gap-1.5">
                <a href="#" aria-label="social link" className="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark lg:transition-all lg:duration-200">
                  <Image src={Facebook} alt="Facebook" width={18} height={18} color='#5c6a78' />
                </a>
                <a href="#" aria-label="social link" className="flex h-7.5 w-7.5 items-center justify-center rounded-full hover:bg-gray-2 hover:text-dark lg:transition-all lg:duration-200">
                  <Image src={Pinterest} alt="Facebook" width={18} height={18} />
                </a>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </footer>
  );
}
