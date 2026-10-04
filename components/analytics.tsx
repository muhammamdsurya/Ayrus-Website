import Script from "next/script";

const id = "G-GT06TEGP3P";

/**
 * GA4. Every tap on a wa.me link fires
 * `whatsapp_click` with the page path — mark it as a key event in GA4 to see
 * which pages (and so which keywords) produce chats.
 *
 * The inline part runs early so clicks are queued in dataLayer even before
 * gtag.js itself finishes loading lazily.
 */
export function Analytics() {
  return (
    <>
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('js',new Date());gtag('config','${id}');
document.addEventListener('click',function(e){
  var a=e.target instanceof Element&&e.target.closest('a[href^="https://wa.me/"]');
  if(a)gtag('event','whatsapp_click',{page_path:location.pathname,link_text:(a.textContent||a.getAttribute('aria-label')||'').trim().slice(0,80)});
},true);`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="lazyOnload" />
    </>
  );
}
