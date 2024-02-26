import React from "react";
import Sidebar from "./partials/Sidebar";
export default function Component() {
  return (
    <div className="flex items-center gap-[20vw] w-screen h-screen border-zinc-600">
      <Sidebar />
      <div className="space-y-8 h-screen py-12 md:py-24 lg:py-32">
        <div className="space-y-2">
          <h1 className="text-3xl text-white font-bold">Contact Us</h1>
          <p className="text-white ">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div className="space-y-2 flex flex-col text-white">
              <label htmlFor="first-name">First name</label>
              <input
                required
                className="rounded-md py-2 px-1 bg-[#1F1E24] border-zinc-300 border-[1px] focus:outline-[#6556CD] text-zinc-200"
                id="first-name"
                placeholder="Enter your first name"
              />
            </div>
            <div className="space-y-2 flex flex-col text-white">
              <label htmlFor="last-name">Last name</label>
              <input
                required
                className="rounded-md py-2 px-1 bg-[#1F1E24] border-zinc-300 border-[1px] focus:outline-[#6556CD] text-zinc-200"
                id="last-name"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="space-y-2 text-white">
            <label htmlFor="email">Email</label>
            <input
              required
              className="rounded-md py-2 px-1 w-full bg-[#1F1E24] border-zinc-300 border-[1px] focus:outline-[#6556CD] text-zinc-200"
              id="email"
              placeholder="Enter your email"
              type="email"
            />
          </div>
          <div className="space-y-2 flex flex-col text-white">
            <label htmlFor="message">Message</label>
            <textarea
              className="min-h-[100px] rounded-md py-2 px-1 bg-[#1F1E24] border-zinc-300 border-[1px] focus:outline-[#6556CD] text-zinc-200"
              id="message"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="text-white bg-[#6556CD] w-fit px-3 py-2 rounded-md hover:bg-[#473f7c]">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
