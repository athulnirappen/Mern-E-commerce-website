import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const FooterPart = () => {
    return (
      <>
        <Footer className="bg-gradient-to-r from-pink-500 to-violet-600 mt-[10%]">
          <div className="w-full">
            <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
              <div>
                <Footer.Title title="Company" className="text-white" />
                <Footer.LinkGroup col className="text-white">
                  <Footer.Link href="#">About</Footer.Link>
                  <Footer.Link href="#">Careers</Footer.Link>
                  <Footer.Link href="#">Brand Center</Footer.Link>
                  <Footer.Link href="#">Blog</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="help center" className="text-white" />
                <Footer.LinkGroup col className="text-white">
                  <Footer.Link href="#">Discord Server</Footer.Link>
                  <Footer.Link href="#">Twitter</Footer.Link>
                  <Footer.Link href="#">Facebook</Footer.Link>
                  <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="legal" className="text-white" />
                <Footer.LinkGroup col className="text-white">
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Licensing</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="download" className="text-white" />
                <Footer.LinkGroup col className="text-white">
                  <Footer.Link href="#">iOS</Footer.Link>
                  <Footer.Link href="#">Android</Footer.Link>
                  <Footer.Link href="#">Windows</Footer.Link>
                  <Footer.Link href="#">MacOS</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
            <div className="w-full bg-pink-400 px-4 py-6 sm:flex sm:items-center sm:justify-between text-white">
              <Footer.Copyright
                href="#"
                by="Anon"
                year={2024}
                className="text-white"
              />
              <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center ">
                <Footer.Icon
                  href="#"
                  icon={BsFacebook}
                  className="text-white"
                />
                <Footer.Icon
                  href="#"
                  icon={BsInstagram}
                  className="text-white"
                />
                <Footer.Icon href="#" icon={BsTwitter} className="text-white" />
                <Footer.Icon href="#" icon={BsGithub} className="text-white" />
                <Footer.Icon
                  href="#"
                  icon={BsDribbble}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        </Footer>
      </>
    );
};

export default FooterPart;
