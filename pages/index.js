import Head from 'next/head';
import Header from '@components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Pragmatic Timetabling</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <img src="/logo.png" alt="Pragmatic Timetabling Logo" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
              <br />
              <br />
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <p>Entdecken Sie die bahnbrechende Stundenplan-Revolution mit unserer innovativen Software! 🚀</p>
              <p>Präsentation: Pragmatic Timetabling – Die atemberaubende All-in-One-Lösung für die Erstellung von Stundenplänen für Ihre gesamte Schule: von der Oberstufe bis zur Unterstufe!</p>
              <ul>
                <li>🖥️ Web-basiert: Vergessen Sie mühselige Installationen, starten Sie direkt im Browser und erleben Sie die Zukunft der Stundenplanerstellung!</li>
                <li>👩‍🏫 Lehrer-Management: Organisieren Sie Ihr Lehrpersonal effizient mit individuellen Profilen und einer Liste der unterrichteten Fächer</li>
                <li>👨‍🎓 Schüler-Management: Behalten Sie den Überblick über die Schüler und deren Wahlfächer, um jedem gerecht zu werden</li>
                <li>🏫 Raum-Management: Optimieren Sie die Raumverteilung durch die Festlegung von verfügbaren Zeiten und Raum-Eigenschaften (z.B. Computer-Räume)</li>
                <li>🔮 Automatische Berechnung: Sparen Sie wertvolle Zeit und erstellen Sie alle Stundenpläne (für Schüler, Lehrer, Räume) auf Knopfdruck!</li>
                <li>✏️ Manuelle Anpassungen: Flexibilität bei Bedarf – wählen Sie Raum, Lehrer oder Schüler aus und passen Sie den Stundenplan individuell an</li>
                <li>📤 Export: Behalten Sie den Überblick und exportieren Sie Stundenpläne ganz einfach in Excel oder PDF</li>
              </ul>
              <p>Neugierig geworden? Unterstützen Sie die Entwicklung von Pragmatic Timetabling, indem Sie Ihre E-Mail-Adresse hinterlassen! Wir halten Sie über alle Neuigkeiten auf dem Laufenden und informieren Sie, sobald die Software verfügbar ist.</p>
              <p>Werden Sie Teil der Pragmatic Timetabling Revolution! 🌐 Geben Sie Ihre E-Mail-Adresse in das unten stehende Feld ein und schicken Sie das Formular ab. Freuen Sie sich darauf, die Stundenplanerstellung für immer zu verändern!</p>
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
