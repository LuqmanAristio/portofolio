"use client"
import About from "./about/page"
import Contact from "./contact/page"
import Home from "./home/page"
import Service from "./service/page"

export default function Main() {

  return (
    <div>
        <Home />
        <About />
        <Service />
        <Contact />
    </div>
  )
}