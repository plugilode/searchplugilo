import { SearchInterface } from '@/components/search/SearchInterface';
import { Database } from 'lucide-react';

function App() {
  return (
    <div className="relative min-h-screen bg-background p-8">
      <div className="scan-line fixed inset-0 pointer-events-none"></div>
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center space-y-2">
          <div className="flex items-center justify-center gap-3">
            <Database className="h-8 w-8 text-primary terminal-effect" />
            <h1 className="text-3xl font-bold tracking-wider text-primary terminal-effect">
              PLUGILO INC.
            </h1>
          </div>
          <p className="text-sm text-muted-foreground tracking-widest">
            CORPORATE INTELLIGENCE DATABASE - AUTHORIZED ACCESS ONLY
          </p>
          <div className="text-xs text-muted-foreground">
            SYSTEM ID: PLG-{Math.floor(Math.random() * 9000 + 1000)}
          </div>
        </div>
        <SearchInterface />
      </div>
    </div>
  );
}

export default App;