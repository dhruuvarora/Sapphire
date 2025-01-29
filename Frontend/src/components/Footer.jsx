import React from "react";
import { assets } from "./../assets/assets";

const Footer = () => {
  const companyLinks = [
    { title: "About Us", href: "#" },
    { title: "Company Info", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Referral Programme", href: "#" },
    { title: "Become a Partner", href: "#" },
    { title: "Careers", href: "#" },
  ];

  const supportLinks = [
    { title: "Contact Us", href: "#" },
    { title: "Support Portal", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Charges & Pricing", href: "#" },
    { title: "Downloads", href: "#" },
    { title: "Videos", href: "#" },
    { title: "How to raise a Complaint?", href: "#" },
    { title: "How to raise a Complaint?", href: "#" },
  ];

  const accountLinks = [
    { title: "Open an Account", href: "#" },
    { title: "Bank Details", href: "#" },
    { title: "Account Closure", href: "#" },
    { title: "Collateral Haircut", href: "#" },
    { title: "Risk Disclosure", href: "#" },
  ];

  return (
    <div className="bg-[#064D51] text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className=" flex mb-4">
              <img src={assets.wlogo} alt="Logo" className="mb-2" />
              <h3 className="font-bold mt-4">Sapphire</h3>
            </div>
            <p className="text-sm">
              Plot No. 33, Kotwal Nagar,
              <br />
              Khamla, Nagpur (MH)
              <br />
              Pincode : 440025
              <br />
              info@sapphirebroking.com
              <br />
              www.sapphirebroking.com
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-sm hover:text-gray-300">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-sm hover:text-gray-300">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account & Social Links */}
          <div>
            <h3 className="font-bold mb-4">Account</h3>
            <ul className="space-y-2 mb-6">
              {accountLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="text-sm hover:text-gray-300">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <h3 className="font-bold mb-4">Follow us:</h3>
            <div className="flex gap-4 mb-6">
              <div className="social-link">
                <a href="#" className="">
                  <img
                    src={assets.wp} 
                    alt="WhatsApp"
                  />
                </a>
              </div>

              <div className="social-link">
                <a href="#" className="hover:opacity-80">
                  <img
                    src={assets.f}
                    alt="Facebook"
                  />
                </a>
              </div>

              <div className="social-link">
                <a href="#" className="hover:opacity-80">
                  <img
                    src={assets.li}
                    alt="LinkedIn"
                  />
                </a>
              </div>

              <div className="social-link">
                <a href="#" className="hover:opacity-80">
                  <img
                    src={assets.tel}
                    alt="Telegram"
                  />
                </a>
              </div>

              <div className="social-link">
                <a href="#" className="hover:opacity-80">
                  <img
                    src={assets.ig}
                    alt="Instagram"
                  />
                </a>
              </div>

              <div className="social-link">
                <a href="#" className="hover:opacity-80">
                  <img
                    src={assets.yt} 
                    alt="YouTube"
                  />
                </a>
              </div>

              <div className="social-link">
                <a href="#" className="hover:opacity-80">
                  <img
                    src={assets.x} 
                    alt="Twitter"
                  />
                </a>
              </div>
            </div>

            <h3 className="font-bold mb-4">Download Our App</h3>
            <div className="flex gap-4">
              <img src={assets.apple} alt="App Store" />
              <img className="w-[40%]" src={assets.google} alt="Google Play" />
            </div>
          </div>
        </div>

        {/* Legal Information */}
        <div className="text-sm space-y-4 border-t border-teal-700 pt-6">
          <p>
            <strong>[Legal Name](Trading as Sapphire Broking):</strong>{" "}
            Registered Office: [Registered Address], CIN: [CIN], SEBI
            Registration No.: [SEBI Registration No.] – Member of NSE, BSE, MCX,
            and NCDEX. Depository Participant: CDSL Registration No.: [DP
            Registration No.]. Compliance Officer: [Name of Compliance Officer],
            Tel: [Phone Number], Email: compliance@sapphirebroking.com.
          </p>

          <p>
            <strong>Grievance Redressal:</strong> For complaints related to
            broking services, email us at support@sapphirebroking.com. For
            depository-related issues, email dpo@sapphirebroking.com. To
            escalate unresolved issues, contact our Grievance Redressal Officer:
            [Name], Mobile: [Mobile Number]. Alternatively, file complaints on
            the SEBI SCORES portal by registering with mandatory details like
            Name, PAN, Address, Mobile Number, and Email ID.
          </p>

          <p>
            <strong>Cybersecurity Issues:</strong> Report cybersecurity concerns
            to support@sapphirebroking.com or call us at [Cybersecurity Contact
            Number].
          </p>

          <p>
            <strong>Regulatory Compliance:</strong> Investments in the
            securities market are subject to market risks. Please read all
            related documents carefully before investing. Brokerage will not
            exceed the SEBI-prescribed limit.
          </p>

          <p>
            <strong>Communication Policy:</strong> By sharing your contact
            details, you consent to receive communication from us via
            Call/SMS/Email for a period of 12 months, even if registered under
            DND. We use your information for legitimate business purposes only
            and do not sell or rent your contact details to third parties.
          </p>

          <div>
            <strong>Attention Investors:</strong>
            <ol className="list-decimal pl-8 mt-2">
              <li>
                Always update your mobile number and email ID with your broker
                and depository participant to receive OTPs and alerts directly
                from the depository.
              </li>
              <li>
                Check your securities/mutual funds/bonds in the monthly
                Consolidated Account Statement issued by CDSL.
              </li>
              <li>
                Prevent unauthorized transactions in your trading and demat
                accounts by safeguarding your credentials and being vigilant
                against unsolicited tips or schemes.
              </li>
              <li>
                For IPO applications, use ASBA for payment, eliminating the need
                for cheques.
              </li>
            </ol>
          </div>

          <p>
            <strong>ODR Portal:</strong> Resolve disputes efficiently using
            SEBI's Online Dispute Resolution Portal:
            [https://smartodr.in/login].
          </p>

          {/* Exchange Links */}
          <div className="flex justify-center gap-5 py-4">
            {["NSE", "BSE", "MCX", "NCDEX"].map((exchange, index, array) => (
              <a
                key={exchange}
                href="#"
                className={`text-gray-400 ${
                  index !== array.length - 1 ? "border-r border-white pr-4" : ""
                }`}
              >
                {exchange}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
