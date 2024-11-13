import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function SearchBar({ value, onChange, className }: SearchBarProps) {
  return (
    <div className={cn('relative group', className)}>
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-primary" />
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-9 pr-12 bg-secondary/50 border-primary/20 text-foreground placeholder:text-muted-foreground focus:ring-primary/50 font-mono"
        placeholder="ENTER SEARCH QUERY... (FORMAT: in:title, from:2024, type:pdf)"
      />
      {value && (
        <Button
          variant="ghost"
          size="sm"
          className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0 hover:bg-primary/20 text-primary"
          onClick={() => onChange('')}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}