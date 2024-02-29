import { useState } from "react";
import { Desktop } from "./components/Desktop";
import { Header } from "./components/Header";
import { LoginWindow } from "./components/Window/LoginWindow";

function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  setTimeout(() => setIsSignIn(false), 1750);

  return (
    <main className="fixed inset-0 overscroll-none">
      {isSignIn && <LoginWindow />}
      {!isSignIn && (
        <div className="desktop h-full">
          <Desktop>
            <Header />
          </Desktop>
        </div>
      )}
    </main>
  );
}

export default App;
