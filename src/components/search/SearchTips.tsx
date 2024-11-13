import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { HelpCircle } from 'lucide-react';

export function SearchTips() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 text-primary hover:bg-primary/20">
          <HelpCircle className="h-4 w-4" />
          SEARCH PROTOCOLS
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 border-primary/20 bg-card/95 backdrop-blur font-mono">
        <div className="space-y-2">
          <h4 className="font-medium text-primary tracking-wide">SEARCH OPERATORS</h4>
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">AUTHORIZED QUERY FORMATS:</p>
            <ul className="space-y-1 list-none">
              <li className="font-mono">{'>'} in:title - TITLE SEARCH</li>
              <li className="font-mono">{'>'} from:2024 - YEAR FILTER</li>
              <li className="font-mono">{'>'} type:pdf - FORMAT FILTER</li>
              <li className="font-mono">{'>'} author:name - AGENT SEARCH</li>
            </ul>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}