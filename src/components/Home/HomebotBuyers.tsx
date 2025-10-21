'use client';

export function HomebotBuyers() {
  return (
    <>
      <div id="homebot_buyers"></div>
      <script dangerouslySetInnerHTML={{
        __html: `
          (function (h,b) { 
            var w = window, d = document, s = 'script', x, y; 
            w['__hb_namespace'] = h; 
            w[h] = w[h] || function () { (w[h].q=w[h].q||[]).push(arguments) }; 
            y = d.createElement(s); 
            x = d.getElementsByTagName(s)[0]; 
            y.async = 1; 
            y.src = b; 
            x.parentNode.insertBefore(y,x) 
          })('Homebot','https://embed.homebotapp.com/lgw/v1/widget.js'); 
          Homebot('#homebot_buyers', '35de8cf0a487cf0fec06278f2023805ea02eba0b58960a43',{'mode':'buyers-mode'})
        `
      }} />
    </>
  );
}

