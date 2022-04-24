
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot ,faMobileScreenButton ,faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
  return (
    <div className="contact-info py-5">
      <div className="container">
        <h2 className="text-uppercase fw-bold contact-info__title">
          Contact Info
        </h2>
        <div className="row">
          {/* Start Col */}
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="contact-info__box  p-3 border text-center">
              <span className="contact-info__icon">
              <FontAwesomeIcon icon={faLocationDot} className="address_icon" />
              </span>
              <h3 className="text-uppercase contact-info__box-sup">
                the address
              </h3>
              <p className="contact-info__box-pr address">
                .XXX.XXXX.XXX.XXXX.XXX.XXXX XXX.XXXX.XXX.XXXX.
              </p>
            </div>
          </div>
          {/* End Col */}
          {/* Start Col */}
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="contact-info__box  p-3 border text-center">
              <span className="contact-info__icon">
              <FontAwesomeIcon icon={faMobileScreenButton} className="envelope_icon"/>
              </span>
              <h3 className="text-uppercase contact-info__box-sup">CALL FOR</h3>
              <p className="contact-info__box-pr">604.XXX.XXXX</p>
            </div>
          </div>
          {/* End Col */}
          {/* Start Col */}
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="contact-info__box  p-3 border text-center">
              <span className="contact-info__icon">
              <FontAwesomeIcon icon={faEnvelopeOpenText} className="mobile_icon"/>
              </span>
              <h3 className="text-uppercase contact-info__box-sup">
                EMAIL ADDRESS
              </h3>
              <p className="contact-info__box-pr">info@company.com</p>
            </div>
          </div>
          {/* End Col */}
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
