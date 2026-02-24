import "./App.css";
import profileFoto from "./assets/profile.jpeg";

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe geç
      </a>

      <header>
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
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <figure>
            <img
              src="/ototechstil.png"
              alt="Ototechstil Projesi Dashboard Ekranı"
            />
            <figcaption>Ototechstil Projesi</figcaption>
          </figure>
        </section>

        <section id="iletisim">
          <h2>Iletisim</h2>
          {/* Iletisim içeriği buraya gelecek */}
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Engin Saçan. Tum haklari saklidir.</p>
      </footer>
    </>
  );
}

export default App;
