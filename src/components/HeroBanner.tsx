import Image from 'next/image';
import HeroSearch from './HeroSearch';

export default function HeroBanner() {
  return (
    <section className="hero-banner-search cmp-hero-banner-search-narrow d-flex align-items-center text-white bottom-32 visible">
      <style jsx>{`
        @media only screen and (max-width: 991px) {
          .hero-banner-search {
            background-image: url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80");
          }
        }
        
        @media only screen and (min-width: 992px) {
          .hero-banner-search {
            background-image: url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80");
          }
        }
      `}</style>

      <div className="image-group">
        <div className="hero-banner__image-data" data-image-urls="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80" style={{ display: 'none' }}>
        </div>
      </div>
      
      <div className="text-overlay d-flex">
        <div className="align-items-center cmp-banner--align-left cmp-banner-text-cta container-full">
          <div className="flex-align-center col-md-9 col-xs-12">
            <div className="cmp-text text-block countWidthWrapperRef">
              <h1 className="heading heading_font">
                Our network knows great homes.
              </h1>
              <div className="countWidthWrapper">
                <div className="countWrapper d-none">
                  <div className="subWrapper">
                    <div id="heroSearchHomeCountWrapper" className="item">
                      <div id="heroSearchHomeCount" className="count"></div>
                      <div className="label">Homes for Sale</div>
                    </div>
                    <div id="heroSearchNewListingCountWrapper" className="item">
                      <div id="heroSearchNewListingCount" className="count"></div>
                      <div className="label">New Listings</div>
                    </div>
                    <div id="heroSearchAgentCountWrapper" className="item">
                      <div id="heroSearchAgentCount" className="count">0</div>
                      <div className="label">Agents</div>
                    </div>
                    <div id="heroSearchOfficeCountWrapper" className="item">
                      <div id="heroSearchOfficeCount" className="count">0</div>
                      <div className="label">Offices</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <HeroSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
