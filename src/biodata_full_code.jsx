import './App.css'
import foto from './assets/VINA.png'
import moment1 from './assets/1.jpg'
import moment2 from './assets/moment.3.jpeg'
import moment3 from './assets/download.jpg'

function App() {
  return (
    <div className="portfolio">

      <header className="navbar">
        <div className="logo">
          AV
        </div>

        <nav>
          <a href="#about">Tentang</a>
          <a href="#moments">Moments</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>


      <main>

        <section className="hero">

          <div className="hero-text">
            <p className="small-title">
              HALO, SAYA
            </p>

            <h1>
              Alvina<br />
              Nuraeni.
            </h1>

            <p className="description">
              Mahasiswa Pendidikan Ilmu Komputer
              yang senang belajar hal baru,
              mencoba berbagai pengalaman,
              dan menghabiskan waktu bersama
              orang-orang terdekat.
            </p>

            <a
              href="#about"
              className="main-button"
            >
              Kenal lebih jauh ↓
            </a>
          </div>

          <div className="hero-photo">
            <div className="photo-decoration"></div>

            <img
              src={foto}
              alt="Foto Alvina Nuraeni"
            />
          </div>

        </section>


        <section
          id="about"
          className="section"
        >

          <div className="section-title">
            <span>01</span>

            <div>
              <p>TENTANG</p>
              <h2>Tentang Saya</h2>
            </div>
          </div>

          <div className="about-content">

            <div className="about-text">
              <p>
                Halo! Saya Alvina Nuraeni,
                mahasiswa Pendidikan Ilmu Komputer
                di Universitas Pendidikan Indonesia.
              </p>

              <p>
                Saya suka belajar hal-hal baru dan
                mencoba berbagai pengalaman. Saya juga
                senang menghabiskan waktu bersama
                teman-teman dan membuat momen baru.
              </p>
            </div>

            <div className="about-info">

              <div className="info-item">
                <span>Nama</span>
                <strong>Alvina Nuraeni</strong>
              </div>

              <div className="info-item">
                <span>Program Studi</span>
                <strong>
                  Pendidikan Ilmu Komputer
                </strong>
              </div>

              <div className="info-item">
                <span>Universitas</span>
                <strong>
                  Universitas Pendidikan Indonesia
                </strong>
              </div>

            </div>

          </div>

        </section>


        <section
          id="moments"
          className="section moments-section"
        >

          <div className="section-title">
            <span>02</span>

            <div>
              <p>MOMENTS</p>
              <h2>My Moments</h2>
            </div>
          </div>

          <p className="section-description">
            Beberapa momen yang ingin saya simpan
            dan ceritakan kembali.
          </p>

          <div className="moments-grid">

            <div className="moment-card large">
              <img
                src={moment1}
                alt="Moment Alvina 1"
              />

              <div className="moment-caption">
                <span>01</span>
                <p>A little moment</p>
              </div>
            </div>


            <div className="moment-card">
              <img
                src={moment2}
                alt="Moment Alvina 2"
              />

              <div className="moment-caption">
                <span>02</span>
                <p>Good memories</p>
              </div>
            </div>


            <div className="moment-card">
              <img
                src={moment3}
                alt="Moment Alvina 3"
              />

              <div className="moment-caption">
                <span>03</span>
                <p>Another story</p>
              </div>
            </div>

          </div>

        </section>


        <section
          id="contact"
          className="section contact-section"
        >

          <div className="section-title">
            <span>03</span>

            <div>
              <p>CONTACT</p>
              <h2>Let's Connect</h2>
            </div>
          </div>

          <p className="section-description">
            Kamu bisa menemukan saya melalui
            beberapa platform berikut.
          </p>

          <div className="contact-list">

            <a
              href="mailto:alvinaaaaa00@gmail.com"
              className="contact-item"
            >
              <div>
                <span>Email</span>
                <p>alvinaaaaa00@gmail.com</p>
              </div>

              <strong>↗</strong>
            </a>


            <a
              href="https://www.instagram.com/alvinnuraeni?igsi=MWM3Nzl5aGlxemc3Yg=="
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <div>
                <span>Instagram</span>
                <p>@alvinnuraeni</p>
              </div>

              <strong>↗</strong>
            </a>


            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <div>
                <span>LinkedIn</span>
                <p>Alvina Nuraeni</p>
              </div>

              <strong>↗</strong>
            </a>

          </div>

        </section>

      </main>


      <footer>
        <p>© 2026 Alvina Nuraeni</p>
        <p>Pendidikan Ilmu Komputer</p>
      </footer>

    </div>
  )
}

export default App