'use client';

import { FallbackSearch } from './FallbackSearch';

export function RealScoutSimpleSearch() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <style dangerouslySetInnerHTML={{__html: `
        realscout-simple-search {
          --rs-ss-font-primary-color: #6a6d72;
          --rs-ss-searchbar-border-color: hsl(0, 0%, 80%);
          --rs-ss-box-shadow: 0 10px 15px -3px #0000001a;
          --rs-ss-widget-width: 100% !important;
        }
        realscout-simple-search img {
          max-width: 100%;
          height: auto;
        }
      `}} />
      <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
    </div>
  );
}