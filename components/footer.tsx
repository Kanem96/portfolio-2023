import React from "react";

const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-slate-500">
      <small className="mb-2 block text-xs">
        &copy; 2030 Kane. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email, Resend and Vercel Hosting.
      </p>
    </footer>
  );
};

export default Footer;
