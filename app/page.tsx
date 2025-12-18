const CheckIcon = () => (
  <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
)

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <div className="logo">Petty<span>Life</span></div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#products">Products</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="header-cta">
            <a href="tel:770-525-1471" className="phone-link">770-525-1471</a>
            <a href="#quote" className="btn btn-primary">Get a Quote</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-content">
            <div className="hero-badge">Licensed Insurance Agent</div>
            <h1>Protect What <span>Matters Most</span></h1>
            <p className="hero-desc">
              No medical exam required. Living benefits included. Cash-back options available.
              Get the coverage your family deserves.
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <CheckIcon />
                <span>No Medical Exam</span>
              </div>
              <div className="hero-feature">
                <CheckIcon />
                <span>Living Benefits</span>
              </div>
              <div className="hero-feature">
                <CheckIcon />
                <span>Cash-Back Options</span>
              </div>
            </div>
            <div className="hero-cta">
              <a href="#quote" className="btn btn-primary">Request a Free Quote</a>
              <a href="tel:770-525-1471" className="btn btn-outline">Call Now</a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/images/01b18481-93b2-42ea-ba6c-9f8c341e33a5.jpeg"
              alt="Happy family protected by life insurance"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container about-inner">
          <div className="about-image">
            <img
              src="/images/c657fd2d-098e-4bb4-99f9-39c3d70d3648.jpeg"
              alt="Crea Petty - Insurance Agent"
            />
            <div className="about-card">
              <div className="about-card-number">30+</div>
              <div className="about-card-label">Insurance Carriers</div>
            </div>
          </div>
          <div className="about-content">
            <h2>Meet Crea Petty</h2>
            <p>
              As a Key Leader with Symmetry Financial Group, I help families across Georgia
              and beyond protect their most valuable assets. My mission is to ensure that
              no family is left vulnerable when the unexpected happens.
            </p>
            <p>
              I specialize in finding the right coverage at the right price, working with
              over 30 top insurance carriers to provide options that fit your unique needs
              and budget.
            </p>
            <div className="about-contact">
              <div className="about-contact-item">
                <span>Petty Family Agency</span>
              </div>
              <div className="about-contact-item">
                <span>Smyrna, GA</span>
              </div>
              <div className="about-contact-item">
                <a href="tel:770-525-1471">770-525-1471</a>
              </div>
              <div className="about-contact-item">
                <a href="mailto:crealynn.sfg@gmail.com">crealynn.sfg@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="products">
        <div className="container">
          <div className="section-header">
            <h2>Insurance Solutions</h2>
            <p>Explore a range of products supported by the top 30 insurance carriers</p>
          </div>
          <div className="products-grid">
            <div className="product-card">
              <div className="product-icon">🏠</div>
              <h4>Mortgage Protection</h4>
              <p>Ensures your mortgage payments are always met, even in the face of unexpected tragedy.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">🛡️</div>
              <h4>Universal Life</h4>
              <p>Flexible and permanent coverage with tax-deferred benefits and living benefits included.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">📋</div>
              <h4>Term Life</h4>
              <p>Affordable protection covering 10-30 years with long-term clarity and security.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">🕊️</div>
              <h4>Final Expense</h4>
              <p>Peace of mind knowing funeral, cremation, and burial expenses will be covered.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">💼</div>
              <h4>Disability</h4>
              <p>Protects your income if you or your spouse are injured and unable to work.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">❤️</div>
              <h4>Critical Illness</h4>
              <p>Protects the funds needed to support you in the event of prolonged illnesses.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">🌴</div>
              <h4>Retirement</h4>
              <p>Enjoy the retirement you deserve with annuities and IUL solutions.</p>
            </div>
            <div className="product-card">
              <div className="product-icon">🌱</div>
              <h4>SmartStart</h4>
              <p>Build long-term financial security and fund your children&apos;s education.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Clients Say</h2>
            <p>Real experiences from families we&apos;ve helped protect</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <h4>Extremely Knowledgeable</h4>
              <p>&ldquo;The agent was extremely knowledgeable and helpful. They were able to get me coverage at an affordable price.&rdquo;</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <h4>Easy & Affordable</h4>
              <p>&ldquo;It was easy, affordable and understandable. I love that I know my family will have additional coverage.&rdquo;</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <h4>Caring & Concerned</h4>
              <p>&ldquo;My Agent did a great job explaining my options. They were very caring and concerned for my family&apos;s well-being. Would definitely recommend!&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="faq">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Mortgage Protection Basics</p>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How does mortgage protection insurance work?</h4>
              <p>Once you qualify, you pay premiums based on your coverage amount. If you pass away while the policy is in force, the insurance company provides funds to pay off your mortgage.</p>
            </div>
            <div className="faq-item">
              <h4>Why do I need mortgage protection insurance?</h4>
              <p>Mortgage protection provides funds to cover an outstanding mortgage balance in the event of your death, protecting your family from losing their home.</p>
            </div>
            <div className="faq-item">
              <h4>What are the advantages?</h4>
              <p>Easy to purchase, no physical exam typically required, affordable rates, and certain policies offer a return of premium feature.</p>
            </div>
            <div className="faq-item">
              <h4>Can I afford it?</h4>
              <p>Yes! Since so many companies offer this coverage, pricing is competitive and therefore affordable for most families.</p>
            </div>
            <div className="faq-item">
              <h4>Do I qualify?</h4>
              <p>Most plans are offered with simplified underwriting, so you don&apos;t always have to pass a medical exam to qualify.</p>
            </div>
            <div className="faq-item">
              <h4>When should I buy?</h4>
              <p>If you plan to purchase a home or are already paying a mortgage, you should have this insurance to ensure you&apos;re protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="quote" className="cta">
        <div className="container">
          <h2>Ready to Protect Your Family?</h2>
          <p>Fill out the short form so we can provide you with the policy options to best match your coverage and financial needs.</p>
          <a href="mailto:crealynn.sfg@gmail.com?subject=Quote Request" className="btn">Request a Free Quote</a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-inner">
            <div className="footer-brand">
              <div className="logo">Petty<span>Life</span></div>
              <p>Petty Family Agency<br/>Symmetry Financial Group<br/>Smyrna, GA</p>
            </div>
            <div>
              <h5>Products</h5>
              <ul>
                <li><a href="#products">Mortgage Protection</a></li>
                <li><a href="#products">Life Insurance</a></li>
                <li><a href="#products">Disability</a></li>
                <li><a href="#products">Critical Illness</a></li>
              </ul>
            </div>
            <div>
              <h5>Company</h5>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#quote">Get a Quote</a></li>
              </ul>
            </div>
            <div>
              <h5>Contact</h5>
              <ul>
                <li><a href="tel:770-525-1471">770-525-1471</a></li>
                <li><a href="mailto:crealynn.sfg@gmail.com">crealynn.sfg@gmail.com</a></li>
                <li>Smyrna, GA</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Petty Family Agency. Symmetry Financial Group. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
