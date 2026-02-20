"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ZohoChat() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isAdminRoute = pathname.startsWith("/admin");

  useEffect(() => {
    if (isAdminRoute) {
      // hide widget if already loaded
      const zohoWidget = document.getElementById("zsiq_float");
      if (zohoWidget) zohoWidget.style.display = "none";

      return;
    }

    // if coming back from admin to normal routes, re-show widget
    const zohoWidget = document.getElementById("zsiq_float");
    if (zohoWidget) zohoWidget.style.display = "block";
  }, [isAdminRoute, pathname, searchParams]);

  // don't load scripts at all in admin
  if (isAdminRoute) return null;

  return (
    <>
      <Script
        id="zoho-salesiq-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.$zoho = window.$zoho || {};
            $zoho.salesiq = $zoho.salesiq || { ready: function(){} };
          `,
        }}
      />

      <Script
        id="zsiqscript"
        src="https://salesiq.zohopublic.com/widget?wc=siq3e7aec1f9842a124f73b41a5b9ded796ed0ac73a4fbe6e3d5d7e37cd3b8f57a6"
        strategy="lazyOnload"
      />

      <style
        dangerouslySetInnerHTML={{
          __html: `


            @media (max-width: 1500px) {
              .chat-iframe-wrap, .chat-iframe-wrap iframe, .chat-loader-cont {
                min-height: 390px !important;
                height: auto !important;
              }
            }
          `,
        }}
      />
    </>
  );
}
