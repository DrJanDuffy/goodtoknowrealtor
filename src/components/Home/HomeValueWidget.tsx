'use client';

export function HomeValueWidget() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <style dangerouslySetInnerHTML={{__html: `
        realscout-home-value {
          --rs-hvw-background-color: #ffffff;
          --rs-hvw-title-color: #000000;
          --rs-hvw-subtitle-color: rgba(28, 30, 38, 0.5);
          --rs-hvw-primary-button-text-color: #ffffff;
          --rs-hvw-primary-button-color: rgb(35, 93, 137);
          --rs-hvw-secondary-button-text-color: rgb(35, 93, 137);
          --rs-hvw-secondary-button-color: #ffffff;
          --rs-hvw-widget-width: auto;
        }
        realscout-home-value img {
          max-width: 100%;
          height: auto;
        }
      `}} />
      <realscout-home-value agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-home-value>
    </div>
  );
}