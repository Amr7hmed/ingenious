function ServiceItem() {
  return (
    <div className="service-item text-center border py-4 px-4 service__item">
      <span className="service__item__icon">
                  <i className="fa fa-500px" aria-hidden="true"></i>
      </span>
      <h3 className="text-uppercase">intellectual property</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <button className="main-btn">Service request</button>
    </div>
  );
}

export default ServiceItem;
