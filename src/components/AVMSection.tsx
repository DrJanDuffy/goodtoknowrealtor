export default function AVMSection() {
  const features = [
    {
      icon: 'calculator',
      title: 'Our ProValue Estimate',
      description: 'Get the most accurate estimate, powered by the same technology used by lenders.'
    },
    {
      icon: 'price-tags',
      title: 'Comparable Sales',
      description: 'See what other homes are being sold for in and around your neighborhood.'
    },
    {
      icon: 'trend',
      title: 'Price History',
      description: 'See sale dates and prices from years past.'
    },
    {
      icon: 'line-graph-arrow',
      title: 'Local market Snapshots',
      description: 'Get the scoop on sale prices within your ZIP code.'
    }
  ];

  return (
    <section className="cmp-avm" id="avm_64914586">
      <div className="cmp-avm__content">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-12 avm-input-wrapper text-center">
              <h2>Sell Smarter.</h2>
              <p>Sell your home smarter with more data and insight with our free home value report.</p>
              <h4 className="mb-3 mt-5">Get Your Free Home Value Report</h4>
            </div>
            <div className="col-md-10 offset-md-1 col-lg-12 avm-input-wrapper">
              <div className="cmp-avm__buyside-widget" id="buyside-widget-container">
                <form className="home-value-form">
                  <div className="form-group">
                    <input 
                      type="text" 
                      id="avmaddress" 
                      placeholder="Enter your home address"
                      className="form-control"
                    />
                    <button type="submit" className="btn btn-primary">
                      Get My Home Value
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Mobile Features */}
          <div className="row cmp-avm__icon-items--mobile">
            <div className="col-12">
              <div className="owl-carousel-wrapper">
                <div className="owl-carousel">
                  {features.map((feature, index) => (
                    <div key={index} className="cmp-avm__icon-item">
                      <svg>
                        <use href={`#${feature.icon}`}></use>
                      </svg>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Features */}
          <div className="row cmp-avm__icon-items--desktop offset-lg-3">
            <div className="col-md-5 col-lg-6 cmp-avm__icon-item-col">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="cmp-avm__icon-item">
                  <svg>
                    <use href={`#${feature.icon}`}></use>
                  </svg>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="col-md-5 col-lg-6 cmp-avm__icon-item-col">
              {features.slice(2, 4).map((feature, index) => (
                <div key={index} className="cmp-avm__icon-item">
                  <svg>
                    <use href={`#${feature.icon}`}></use>
                  </svg>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
