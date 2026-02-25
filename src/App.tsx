import "./App.css";
import profileFoto from "./assets/profile.jpeg";

function App() {
  return (
    <>
      <header>
        <a href="#main-content" className="skip-link">
          Ana içeriğe geç
        </a>
        <h1>Engin Saçan Kişisel Portfolyo Sitesi</h1>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li>
              <a href="#hakkimda">Hakkimda</a>
            </li>
            <li>
              <a href="#projeler">Projeler</a>
            </li>
            <li>
              <a href="#iletisim">Iletisim</a>
            </li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkimda</h2>

          <figure>
            <img src={profileFoto} alt="Engin Saçan'ın profil resmi" />
            <figcaption>Engin Saçan</figcaption>
          </figure>

          <p>
            Merhaba! Ben Engin Saçan, Fırat Üniversitesi'nde 3.sınıf bir yazılım
            mühendisi öğrencisiyim.
          </p>

          <h3>Kullandığım Teknolojiler</h3>
          <ul>
            <li>React</li>
            <li>TypeScript</li>
            <li>Vite</li>
          </ul>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <article>
            <h3>Ototechstil</h3>
            <figure>
              <img
                src="/ototechstil.png"
                alt="Ototechstil projesi dashboard ekranı"
              />
              <figcaption>Uygulama Kontrol Paneli</figcaption>
            </figure>

            <p>Yapay Zeka Kalite Kontrolü ile Akıllı Tekstil Otomasyonu</p>

            <h3>Kullandığım Teknolojiler</h3>
            <ul>
              <li>.NET</li>
              <li>SQLite</li>
              <li>Entity Framework Core</li>
              <li>ML.NET</li>
              <li>DevExpress WinForms</li>
            </ul>
          </article>

          <article>
            <h3>Voulance</h3>
            <figure>
              <img src="/voulance.png" alt="Voulance projesi ana sayfa" />
              <figcaption>Voulance Ana Sayfa</figcaption>
            </figure>

            <p>
              Stellar blockchain tabanlı, güvenli ve şeffaf freelance ödeme
              dApp'i.
            </p>

            <h3>Kullandığım Teknolojiler</h3>
            <ul>
              <li>Next.js</li>
              <li>Stellar SDK</li>
              <li>Tailwind CSS</li>
              <li>Supabase</li>
            </ul>
          </article>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>Iletisim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />

                <small
                  id="name-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />

                <small
                  id="email-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>

                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seciniz--</option>
                  <option value="is">Is Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Oneri</option>
                </select>

                <small
                  id="subject-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajiniz:</label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>

                <small
                  id="message-error"
                  className="error-msg"
                  role="alert"
                ></small>
              </div>

              <button type="submit">Gonder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Engin Saçan. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;
