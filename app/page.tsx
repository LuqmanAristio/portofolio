"use client"
import About from "./about/page"
import Contact from "./contact/page"
import Home from "./home/page"
import Portfolio from "./portfolio/page"
import Service from "./service/page"

export default function Main() {

  return (
    <div>
        <Home />
        <About />
        <Service />
        <Portfolio />
        <Contact />
    </div>
  )
}