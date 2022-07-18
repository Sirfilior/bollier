import Link from 'next/link'
import {useRouter} from 'next/router'
import {useState} from 'react'

type Route = {
  url: string
  name: string
}

const routes: Route[] = [
  {url: '/', name: 'Home'},
  {url: '/aktuell', name: 'Aktuell'},
  {url: '/portrait', name: 'Portrait'},
  {url: 'gallerie', name: 'Gallerie'},
  {url: '/contact', name: 'Kontakt'},
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <header className="relative z-40 flex-none mx-auto w-full border-b bg-slate-800">
      <div className="py-2 px-3 mx-auto w-full lg:flex lg:justify-end max-w-6xl lg:px-4">
        <div className="flex justify-end">
          <div className="flex items-center lg:hidden">
            <button
              className="ml-1 text-slate-100 rounded-lg text-sm p-2.5 inline-flex items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.75"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <line x1="4" y1="8" x2="20" y2="8"></line>
                <line x1="4" y1="16" x2="20" y2="16"></line>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`items-center w-full lg:w-auto lg:flex text-slate-100 ${
            !isOpen ? 'hidden' : ''
          }`}
          id="menu"
        >
          <ul className="flex flex-col py-2 lg:py-0 lg:flex-row lg:self-center collapse w-full lg:w-auto collapsed">
            {routes.map(route => (
              <li key={route.url}>
                <Link href={route.url}>
                  <a
                    className={`font-medium uppercase hover:text-orange-500 px-4 py-2 flex items-center transition duration-150 ease-in-out ${
                      router.asPath === route.url ? 'text-orange-500' : ''
                    }`}
                  >
                    {route.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
