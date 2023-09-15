import Facebook from "../static/images/Facebook.svg"
import Twitter from "../static/images/Twitter.svg"
import Instagram from "../static/images/Instagram.svg"
import Youtube from "../static/images/Youtube.svg"

const Footer = () => {
  return <div className="m-auto w-100vw p-5">
    <div className="d-flex flex-row justify-content-center gap-4" >
      <img src={Facebook.src} alt="" />
      <img src={Twitter.src} alt="" />
      <img src={Instagram.src} alt="" />
      <img src={Youtube.src} alt="" />
    </div>
    <div className="d-flex flex-row justify-content-center gap-4 mt-3 fw-bold" style={{ color: "#111827" }}>
      <p>Conditions of Use</p>
      <p>Privacy & Policy</p>
      <p>Press Room</p>
    </div>
    <div className="d-flex flex-row justify-content-center gap-4">
      <p className="fw-500 text-gray" style={{ color: "#6B7280" }}>© 2021 MovieBox by Adriana Eka Prayudha  </p>
    </div>

  </div>;
};

export default Footer;
