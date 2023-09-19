import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links-container">
        <div className="flex flex-col gap-6">
          <Image src="/logo.svg" alt="logo cars" width={118} height={18} />
          <p className="text-lg text-gray-700">
            Car Rental &copy; 2023
            <br />
            All right reserved
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((link) => (
            <div className="footer__link" key={link.title}>
              <h3 className="font-bold text-lg">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="footer__copyrights">
        <p className="text-sm text-gray-700 md:text-base">
          Car Rental &copy; 2023. All right reserved
        </p>
        <p className="text-sm text-gray-700 md:text-base">
          Privacy PolicyTerm of Use
        </p>
      </div>
    </footer>
  );
};

export default Footer;
