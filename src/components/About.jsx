import { Link } from "react-router-dom";
import Sidebar from "./partials/Sidebar";

export default function Component() {
  return (
    <>
      <Sidebar />
      <div className="w-[80%]">
        <div className="flex flex-col  gap-4 min-h-screen ">
          <div className="bg-[#1F1E24] py-6">
            <div className="container flex flex-col items-center justify-center text-center px-4 md:px-6">
              <div className="space-y-2 text-white">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
                  Welcome to Movie Mania!
                </h1>
                <p className="max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  Discover and explore your favorite movies with Movie Mania. We
                  are your gateway to the world of cinema, bringing you closer
                  to the films you love and introducing you to hidden gems.
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-8 items-center justify-center py-12 px-12">
            <div className="flex flex-col items-center justify-center space-y-2 text-center bg-[#6556CD] h-[15vw] rounded-md px-2">
              <SearchIcon className="h-8 w-8 text-white" />
              <h3 className="text-lg font-bold text-white">Search Movies</h3>
              <p className="text-sm text-white">
                Easily find any movie you want to watch by searching through a
                vast collection of films.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center bg-[#6556CD] h-[15vw] rounded-md px-2">
              <ThumbsUpIcon className="h-8 w-8 text-white" />
              <h3 className="text-lg font-bold text-white">
                Movie Recommendations
              </h3>
              <p className="text-sm text-white">
                Get personalized movie recommendations based on your preferences
                and viewing history.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 text-center bg-[#6556CD] h-[15vw] rounded-md px-2">
              <TicketIcon className="h-8 w-8 text-white" />
              <h3 className="text-lg font-bold text-white">
                Movie Details and Reviews
              </h3>
              <p className="text-sm text-white">
                Access detailed information about movies, including ratings,
                reviews, cast, and crew.
              </p>
            </div>
          </div>
          <div className="container flex flex-col items-center justify-center space-y-4 text-center">
            <p className="max-w-[800px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
              At Movie Mania, we are passionate about movies. Our mission is to
              make the magic of cinema accessible to everyone. We believe that
              great stories deserve to be told, and we're here to help you
              discover the films that inspire, entertain, and touch your heart.
            </p>
          </div>
          <div className="container flex flex-col items-center justify-center space-y-4 text-center">
            <h3 className="text-2xl font-bold text-white tracking-tighter sm:text-4xl">
              Experience Movie Mania for yourself
            </h3>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#6556CD] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-[#4d467a] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                href="#"
              >
                Go To Github
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200  bg-[#6556CD] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Go To LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ThumbsUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  );
}

function TicketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 17v2" />
      <path d="M13 11v2" />
    </svg>
  );
}
