import cssReset from "data-text:@unocss/reset/tailwind.css"
import cssUno from "data-text:~styles/uno.css"
import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}
export const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssReset + cssUno
  return style
}
export default function Content() {
  return (
    <div className="fixed left-2 top-2 bg-gray-200 p-2">
      Content
    </div>
  )
}
