import React from 'react';

const footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 ">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO</p>
  </aside>
</footer>
  );
};

export default footer;
