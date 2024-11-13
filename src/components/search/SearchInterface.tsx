import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { FilterChips, type Filter } from './FilterChips';
import { AdvancedSearch } from './AdvancedSearch';
import { SearchTips } from './SearchTips';
import { SearchResults } from './SearchResults';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function SearchInterface() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<Filter[]>([]);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();
  const [documentType, setDocumentType] = useState('all');

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    const operatorRegex = /(\w+):(\S+)/g;
    const matches = Array.from(value.matchAll(operatorRegex));
    
    const newFilters: Filter[] = matches.map((match, index) => ({
      id: `${match[1]}-${index}`,
      type: match[1],
      value: match[2],
    }));

    setFilters(newFilters);
  };

  const removeFilter = (id: string) => {
    setFilters(filters.filter((filter) => filter.id !== id));
    const filter = filters.find((f) => f.id === id);
    if (filter) {
      const newQuery = searchQuery.replace(
        `${filter.type}:${filter.value}`,
        ''
      ).trim();
      setSearchQuery(newQuery);
    }
  };

  return (
    <div className="space-y-4">
      <Card className="border-primary/20 bg-card/80 backdrop-blur">
        <div className="p-1 border-b border-primary/20 bg-primary/5">
          <div className="px-3 py-1.5 text-xs text-primary tracking-widest">
            CORPORATE SEARCH TERMINAL
          </div>
        </div>
        <div className="p-6 space-y-4">
          <SearchBar
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full"
          />
          
          <FilterChips filters={filters} onRemove={removeFilter} />
          
          <Separator className="bg-primary/20" />
          
          <div className="space-y-2">
            <AdvancedSearch
              startDate={startDate}
              endDate={endDate}
              documentType={documentType}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}
              onDocumentTypeChange={setDocumentType}
            />
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="text-xs text-muted-foreground">
              EXECUTIVE CLEARANCE REQUIRED FOR RESTRICTED CONTENT
            </div>
            <SearchTips />
          </div>
        </div>
      </Card>
      
      <SearchResults />
    </div>
  );
}