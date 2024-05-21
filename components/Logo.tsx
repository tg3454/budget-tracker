import { PiggyBank } from "lucide-react";
import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Image height={44} width={44} src="/logo.png" alt="Logo"/>
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        BudgetTracker
      </p>
    </a>
  );
}

export default Logo;
