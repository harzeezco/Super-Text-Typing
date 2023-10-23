import TextTypingAnimation from "./component/SuperTextTyping"

const NAV_LINKS = ["About", "Project", "Contact"]

function App() {

  return (
    <div className="container">
      <nav className="flex">
        <h1>Logo</h1>
        <ul className="flex gap">
          {NAV_LINKS.map((link, idx) => <li key={idx}>{link}</li>)}
        </ul>
      </nav>
      
      <TextTypingAnimation />
    </div>
  )
}

export default App
