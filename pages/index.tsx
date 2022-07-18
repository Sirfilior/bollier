import type {NextPage} from 'next'
import Gallery from '../components/Gallery'
const images = [
  '/assets/8.jpg',
  '/assets/43.jpg',
  '/assets/21.jpg',
  '/assets/23.jpg',
  '/assets/18.jpg',
  '/assets/10.jpg',
  '/assets/30.jpg',
  '/assets/31.jpg',
  '/assets/bild01.jpg',
  '/assets/bild02.jpg',
  '/assets/bild03.jpg',
  '/assets/bild04.jpg',
  '/assets/bild05.jpg',
  '/assets/bild06.jpg',
  '/assets/bild07.jpg',
  '/assets/bild08.jpg',
]

const Home: NextPage = () => {
  return (
    <main className="mx-12 mt-20">
      <Gallery images={images}>
        <div>
          <h1 className="text-6xl md:text-[9rem]">
            Eddie
            <span className="text-orange-400">Bollier</span>
          </h1>
          <h2 className="text-5xl">Solothurn</h2>
          <p className="mt-2">
            Ich bin ständig auf der Suche nach Neuem, nach Veränderung und nach
            Eigenständigkeit und setze meine Arbeit vielschichtig auf Leinwänden
            um. Mein Hauptaugenmerk gilt der abstrakten Acrylmalerei und dem
            Spiel von Proportionen, Formen; der Auseinandersetzung zwischen
            Unbändigkeit und Ruhe; zwischen Grafik und fliessenden Flächen.
          </p>
          <div className="text-right">
            <a
              href="/kontakt"
              className="justify-end flex gap-2 hover:text-orange-500 transition duration-150 ease-in-out"
            >
              <span>Mehr</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </Gallery>
      <div className="mt-32">
        <div className="mb-8 text-center">
          <p className="text-base text-orange-500 font-semibold tracking-wide uppercase">
            Einblicke
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4">
            Atelier
          </h2>
          <p className="max-w-3xl mx-auto text-center">
            Meine Bilder entstehen grösstenteils im Atelier der Kunstmalschule
            A-13 in Altreu (Selzach). Hier habe ich ein geeignetes Umfeld und
            einen inspirierenden Malort gefunden, in dem ich meinen kreativen
            Prozessen freien Lauf lassen kann.
          </p>
          <p className="mt-2">
            Atelier-13 Acryl Kunstmalschule Rolf Wullimann Selzacherstrasse 32
            2545 Selzach
          </p>
          <p className="mt-2">
            <a className="text-orange-500 mr-3" href="www.atelier-13.ch">
              www.atelier-13.ch
            </a>
            <a className="text-orange-500" href="mailto:info@atelier-13.ch">
              info@atelier-13.ch
            </a>
          </p>
        </div>
      </div>
      <div className="mt-4 mb-4 md:mb-44 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        <img
          src="/assets/s1.jpeg"
          loading="lazy"
          className="w-full md:w-auto"
          decoding="async"
        />
        <img
          src="/assets/s3.jpeg"
          loading="lazy"
          className="w-full md:w-auto"
          decoding="async"
        />
        <img
          src="/assets/s2.jpeg"
          loading="lazy"
          className="w-full md:w-auto"
          decoding="async"
        />
      </div>
    </main>
  )
}

export default Home
