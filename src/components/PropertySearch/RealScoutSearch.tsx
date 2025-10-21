'use client';

export function RealScoutSearch() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <style dangerouslySetInnerHTML={{__html: `
        realscout-advanced-search {
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #ffffff;
          --rs-as-button-color: rgb(35, 93, 137);
          --rs-as-widget-width: 100% !important;
        }
        realscout-advanced-search img {
          max-width: 100%;
          height: auto;
        }
      `}} />
      <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
    </div>
  );
}