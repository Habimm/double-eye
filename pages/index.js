import Head from 'next/head';
import Header from '@components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DoubleEye - Compute Cloud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img src="/logo.png" alt="DoubleEye Logo" className="img-fluid" style={{ maxWidth: '90%', height: 'auto' }} />
              <br />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <p>Entdecken Sie den innovativen Marktplatz für gemeinsam genutzte Rechenleistung!</p>
              <p>Präsentation: DoubleEye - Die leistungsstarke Plattform für den Zugriff auf GPUs und CPUs von der Community, für die Community.</p>
              <ul>
                <li>🌐 Online-Plattform: Keine Installation erforderlich, greifen Sie einfach über Ihren Browser auf die Ressourcen zu.</li>
                <li>🖥️ GPU- und CPU-Management: Finden und bieten Sie GPUs und CPUs nach Ihren individuellen Anforderungen.</li>
                <li>💡 Vielfältige Anwendungsfälle: Ideal für Maschinelles Lernen, Softwaretests, App-Entwicklung und vieles mehr.</li>
                <li>🔧 Maßgeschneiderte Lösungen: Wählen Sie aus einer Vielzahl von Konfigurationen, um Ihre spezifischen Anforderungen zu erfüllen.</li>
                <li>🌱 Nachhaltig: Nutzen Sie ungenutzte Ressourcen und tragen Sie zu einer umweltfreundlichen Informatik bei.</li>
                <li>👥 Peer-Support: Profitieren Sie von einer Community aus gleichgesinnten Nutzern, die Ihre Interessen und Herausforderungen teilen.</li>
              </ul>
              <p>Interessiert? Unterstützen Sie DoubleEye, indem Sie Ihre E-Mail-Adresse hinterlassen! Wir halten Sie über alle Neuigkeiten auf dem Laufenden und informieren Sie, sobald neue Ressourcen verfügbar sind.</p>
              <p>Werden Sie Teil der DoubleEye Bewegung! 🌐 Geben Sie Ihre E-Mail-Adresse in das unten stehende Feld ein und schicken Sie das Formular ab. Freuen Sie sich darauf, die Zukunft der gemeinsam genutzten Rechenleistung zu gestalten!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-8 offset-md-3">
              <form action="https://formsubmit.co/30d7723477fe072ad2d0a1be80d15cfa" method="POST" className="email-form">
            <div className="form-group">
              <label htmlFor="email">E-Mail-Adresse:</label>
              <input type="email" name="email" id="email" className="form-control" required />
            </div>
            <div className="submit-button-container">
              <button type="submit" className="btn btn-primary">Informiert mich!</button>
            </div>
            <style jsx>{`
  .form-control {
    width: 150%;
    max-width: 900px;
  }
        .submit-button-container {
          display: flex;
          justify-content: center;
          margin-top: 1rem;
        }
      `}</style>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
