'use client';

// Declare RealScout custom elements
declare global {
  interface HTMLElementTagNameMap {
    'realscout-simple-search': HTMLElement & {
      'agent-encoded-id': string;
    };
  }
}

interface SimpleSearchProps {
  className?: string;
  agentEncodedId?: string;
}

export function SimpleSearch({ 
  className = '', 
  agentEncodedId = 'QWdlbnQtMjI1MDUw' 
}: SimpleSearchProps) {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className='w-full max-w-2xl'>
        <realscout-simple-search 
          agent-encoded-id={agentEncodedId}
        ></realscout-simple-search>
      </div>
    </div>
  );
}

