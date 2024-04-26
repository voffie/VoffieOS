"use client";
import dynamic from "next/dynamic";

import { LoginScreen } from "@/components/Screen/LoginScreen";
const Desktop = dynamic(() => import("@/components/Desktop"));
import { useState } from "react";

export default function Home() {
  const [isSignIn, setIsSignIn] = useState(true);

  setTimeout(() => setIsSignIn(false), 1750);
  return (
    <main className="fixed inset-0 overscroll-none">
      {isSignIn && <LoginScreen />}
      {!isSignIn && (
        <div className="desktop h-full">
          <Desktop />
        </div>
      )}
    </main>
  );
}
