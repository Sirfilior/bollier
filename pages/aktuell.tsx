import Image from 'next/image'
import ausstellungImage from '/assets/ausstellung_2022.jpg'

export default function Aktuell() {
  return (
    <main className="py-8">
      <div className="mb-32">
        <h1 className="md:text-center text-6xl text-orange-400">
          Ausstellung «Aufbruch»
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center gap-8">
          <div className="flex gap-4 items-start">
            <div>
              <h2 className="text-4xl">
                Rothushalle Solothurn, 18. bis 28. August 2022
              </h2>
              <div>
                <p className="text-xl">
                  <span className="text-3xl">Vernissage:</span>
                  <br />
                  <br />
                  Donnerstag 18. August 2022 18 Uhr
                  <br />
                  Musikalische Begleitung Bluedög / MGM
                </p>
                <p className="mt-6 text-xl">
                  <span className="text-3xl">Öffnungszeiten:</span>
                  <br />
                  <br />
                  Freitag, 19. / 26. 14 - 19 Uhr
                  <br />
                  Samstag, 20. / 27. 12 - 18 Uhr
                  <br />
                  Sonntag, 21. / 28. 12 - 18 Uhr
                  <br />
                  Oder nach Vereinbarung (079 629 70 88)
                  <br />
                  <br />
                  Sie und Ihre Freunde sind herzlich eingeladen
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[45rem] overflow-hidden sm:w-auto lg:w-[67.8125rem]">
          <Image src={ausstellungImage} alt="Ausstellung" />
        </div>
      </div>
      <div>
        <h2 className="mt-32 text-center text-4xl text-orange-400">
          Weitere Infos & Anfahrt
        </h2>
      </div>
      <div className="mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <iframe
              className="w-full h-[500px]"
              src="https://maps.google.com/maps?q=Sch%C3%B6ngr%C3%BCnstrasse+2%2C+Solothurn%2C+Schweiz&amp;z=15&amp;output=embed&amp;iwloc=near"
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
          <div className="flex gap-20 flex-col justify-center">
            <div className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>

              <a
                className="text-4xl underline underline-offset-4"
                href="http://www.rothushalle.ch/"
              >
                Rothushalle Solothurn
              </a>
            </div>
            <div className="flex gap-4 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>

              <h2 className="text-4xl">Schöngrünstrasse 2, 4500 Solothurn</h2>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
