import { File, FileText, Image, FileSpreadsheet, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card } from '@/components/ui/card';

interface DatabaseEntry {
  id: string;
  title: string;
  type: 'pdf' | 'doc' | 'xls' | 'img';
  date: string;
  classification: 'RESTRICTED' | 'CONFIDENTIAL' | 'INTERNAL';
  projectCode: string;
  summary: string;
}

const sampleData: DatabaseEntry[] = [
  {
    id: 'PLG-0742',
    title: 'PROJECT QUANTUM LEAP',
    type: 'pdf',
    date: '1970-03-15',
    classification: 'RESTRICTED',
    projectCode: 'QL-0742-1970',
    summary: 'BREAKTHROUGH IN QUANTUM COMPUTING ARCHITECTURE. PROTOTYPE TESTING PHASE INITIATED. LOCATION: [REDACTED]',
  },
  {
    id: 'PLG-0743',
    title: 'MARKET ANALYSIS: ASIA PACIFIC',
    type: 'xls',
    date: '1970-02-28',
    classification: 'CONFIDENTIAL',
    projectCode: 'MA-0743-1970',
    summary: 'COMPETITIVE ANALYSIS AND MARKET PENETRATION STRATEGY FOR EMERGING MARKETS. PROJECTIONS: [CLASSIFIED]',
  },
  {
    id: 'PLG-0744',
    title: 'FACILITY EXPANSION PLANS',
    type: 'doc',
    date: '1970-03-01',
    classification: 'RESTRICTED',
    projectCode: 'FE-0744-1970',
    summary: 'DETAILED BLUEPRINTS AND SECURITY PROTOCOLS FOR NEW R&D FACILITY. LOCATION: [REDACTED]',
  },
  {
    id: 'PLG-0745',
    title: 'PROTOTYPE SCHEMATICS',
    type: 'img',
    date: '1970-03-10',
    classification: 'INTERNAL',
    projectCode: 'PS-0745-1970',
    summary: 'TECHNICAL SPECIFICATIONS AND DESIGN DOCUMENTS FOR PROJECT NEXUS. VERSION: ALPHA',
  },
];

const getTypeIcon = (type: DatabaseEntry['type']) => {
  switch (type) {
    case 'pdf':
      return <File className="h-4 w-4" />;
    case 'doc':
      return <FileText className="h-4 w-4" />;
    case 'xls':
      return <FileSpreadsheet className="h-4 w-4" />;
    case 'img':
      return <Image className="h-4 w-4" />;
  }
};

export function SearchResults() {
  return (
    <Card className="mt-4 border-primary/20">
      <div className="p-1 border-b border-primary/20 bg-primary/5">
        <div className="px-3 py-1.5 text-xs text-primary tracking-widest flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
          CORPORATE DOCUMENTS - AUTHORIZED PERSONNEL ONLY
        </div>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="p-4 space-y-4">
          {sampleData.map((entry) => (
            <div
              key={entry.id}
              className="p-4 border border-primary/20 bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-primary text-sm font-bold">{entry.id}</span>
                    <Badge
                      variant="outline"
                      className={`
                        ${entry.classification === 'RESTRICTED' ? 'border-destructive/50 text-destructive' : ''}
                        ${entry.classification === 'CONFIDENTIAL' ? 'border-yellow-500/50 text-yellow-500' : ''}
                        ${entry.classification === 'INTERNAL' ? 'border-primary/50 text-primary' : ''}
                      `}
                    >
                      {entry.classification}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight">{entry.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      {getTypeIcon(entry.type)}
                      {entry.type.toUpperCase()}
                    </span>
                    <span>{entry.date}</span>
                    <span>{entry.projectCode}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 font-mono">
                    {entry.summary}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}