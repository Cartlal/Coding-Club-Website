import { useState, useMemo } from 'react';
import { SearchBar, Button } from '@/components/ui';
import EventCard from '@/components/event/EventCard';
import { mockEvents, getAllCategories } from '@/utils/mockData';

export default function Events() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const categories = ['All', ...getAllCategories()];

  // Filter and search events
  const filteredEvents = useMemo(() => {
    return mockEvents.filter((event) => {
      const matchesSearch =
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === 'All' || event.category === activeCategory;

      const matchesStatus =
        statusFilter === 'all' || event.status === statusFilter;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, activeCategory, statusFilter]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Discover and participate in our upcoming workshops, competitions, and learning events. Find the perfect opportunity to grow your skills.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filters */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="max-w-2xl">
              <SearchBar
                placeholder="Search events by name, description, or category..."
                onSearch={setSearchQuery}
                suggestions={mockEvents.map((e) => e.title).slice(0, 5)}
                size="lg"
              />
            </div>

            {/* Filter Controls */}
            <div className="space-y-4">
              {/* Status Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Status
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all', label: 'All Events' },
                    { value: 'upcoming', label: '📅 Upcoming' },
                    { value: 'ongoing', label: '⚡ Ongoing' },
                    { value: 'completed', label: '✓ Completed' },
                  ].map((filter) => (
                    <button
                      key={filter.value}
                      onClick={() => setStatusFilter(filter.value)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        statusFilter === filter.value
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Category
                </h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        activeCategory === category
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex items-center gap-2 pt-4">
                <span className="text-sm font-medium text-gray-700">
                  View:
                </span>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  title="Grid view"
                  aria-label="Switch to grid view"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'list'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  title="List view"
                  aria-label="Switch to list view"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-8">
            <p className="text-gray-600 font-medium">
              Showing <span className="text-primary font-bold">{filteredEvents.length}</span> event{filteredEvents.length !== 1 ? 's' : ''}
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>

          {/* Events Grid/List */}
          {filteredEvents.length > 0 ? (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  description={event.description}
                  status={event.status}
                  category={event.category}
                  attendees={event.attendees}
                  location={event.location}
                  image={event.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No Events Found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Sorry, we couldn't find any events matching your search criteria.
                Try adjusting your filters or search query.
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                  setStatusFilter('all');
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      {filteredEvents.length > 0 && (
        <section className="bg-gray-50 py-12 px-4 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {filteredEvents.filter((e) => e.status === 'upcoming').length}
                </div>
                <p className="text-gray-600">Upcoming Events</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {filteredEvents.reduce((sum, e) => sum + e.attendees, 0)}+
                </div>
                <p className="text-gray-600">Total Registrations</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {filteredEvents.filter((e) => e.status === 'completed').length}
                </div>
                <p className="text-gray-600">Completed Events</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
