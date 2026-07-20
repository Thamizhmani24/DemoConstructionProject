import { FaWhatsapp, FaTwitter, FaFacebookF } from "react-icons/fa";
import bgImage from "../assets/FooterImage/footer-bg.png";
import workerImg from "../assets/FooterImage/worker.png";
import logo from "../assets/FooterImage/logo.png";

import thumb1 from "../assets/FooterImage/thumb1.png";
import thumb2 from "../assets/FooterImage/thumb2.png";
import thumb3 from "../assets/FooterImage/thumb3.png";
import thumb4 from "../assets/FooterImage/thumb4.png";
import thumb5 from "../assets/FooterImage/thumb5.png";
import thumb6 from "../assets/FooterImage/thumb6.png";

const Footer = () => {
  const thumbs = [thumb1, thumb2, thumb3, thumb4, thumb5, thumb6];

  return (
    <footer
      className="relative bg-white text-gray-800 text-xs"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top",
      }}
    >

      <div className="max-w-7xl mx-12  py-12 grid grid-cols-1 md:grid-cols-5 gap-8 justify-items-center">

        <div className="text-sm text-yellow-500">
          <h3 className="font-bold mb-2 text-lg">ABC Constructions</h3>
          <p>
            XXXXXXXXXXXXXXX <br />
            Chennai, Tamil Nadu - XXXXXX, <br />
            Chennai, India
          </p>
          <p className="mt-2">Mobile: +91 XXXXX XXXXX</p>
          <p>Email: www.ABCXXXXXXXX.com</p>
          <div className="mt-3">
            <p className="font-bold mb-2 text-lg">For Partnerships</p>
            <p>Mobile: +91 XXXXX XXXXX</p>
          </div>
          <div className="mt-3">
            <p className="font-bold mb-2 text-lg">For Job</p>
            <p>Mobile: +91 XXXXX XXXXX</p>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2 text-lg text-yellow-500">QUICK LINKS</h3>
          <ul className="space-y-1 text-sm cursor-pointer text-yellow-500">
            <li>&gt; OUR WORK</li>
            <li >&gt; PACKAGES</li>
            <li >&gt; ABOUT US</li>
            <li >&gt; CONTACT</li>
            <li >&gt; CONSTRUCTION GUIDE
            </li>
          </ul>
        </div>

        <div className="md:col-span-2 text-center text-yellow-500">
          <h3 className="font-bold mb-2 text-lg text-bold">How it works?</h3>
          <p className=" mb-6 text-bold">
            Our house construction steps are simple and easy to understand
          </p>


          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6 place-items-center">
            {[
              "Raise a Request",
              "Meet our Expert",
              "Book with us",
              "Receive Plans",
              "Track & Transact",
              "Settle In",
            ].map((step, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-yellow-500 text-yellow-600 text-s font-bold">
                  {idx + 1}
                </div>
                <p className=" mt-1 text-center leading-tight ">
                  {step}
                </p>
              </div>
            ))}
          </div>


          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1.5 rounded text-xs mb-2">
            INSTALL NOW
          </button>
          <div>
            <img src={logo} alt="ABC" className="h-32 mx-auto" />
          </div>
        </div>


        <div className="relative flex-col items-end justify-between hidden lg:flex">

          <div className="grid grid-cols-3 gap-1 mb-6">
            {thumbs.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className="w-14 h-14 object-cover rounded"
              />
            ))}
          </div>


          <div className="relative right-0">
            <img src={workerImg} alt="worker" className="h-48 opacity-100" />
          </div>
        </div>
      </div>

      <div className="bg-black text-gray-300 text-[11px] py-2 px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        <p className="text-center md:text-left">
          COPYRIGHT © 20XX-2025 ABC CONSTRUCTIONS PRIVATE LIMITED | ALL RIGHTS
          RESERVED |{" "}
          <span className="text-yellow-500 cursor-pointer">Privacy Policy</span>{" "}
          |{" "}
          <span className="text-yellow-500 cursor-pointer">
            Terms and Conditions
          </span>
        </p>


        <div className="flex space-x-4 mt-2 md:mt-0 text-yellow-500 text-lg">
          <FaWhatsapp className="cursor-pointer hover:text-green-500" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaFacebookF className="cursor-pointer hover:text-blue-600" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
