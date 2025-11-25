import { useState, useMemo } from 'react';
import { SearchBar, Button } from '@/components/ui';
import MemberCard from '@/components/member/MemberCard';
import {
  mockMembers,
  getAllRoles,
  getAllBranches,
  getAllYears,
  filterMembers,
} from '@/utils/mockMemberData';

export default function Members() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [branchFilter, setBranchFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const roles = getAllRoles();
  const branches = getAllBranches();
  const years = getAllYears();

  // Filter and search members
  const filteredMembers = useMemo(() => {
    return filterMembers({
      search: searchQuery,
      role: roleFilter || undefined,
      branch: branchFilter || undefined,
      year: yearFilter || undefined,
    });
  }, [searchQuery, roleFilter, branchFilter, yearFilter]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setRoleFilter('');
    setBranchFilter('');
    setYearFilter('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Members</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Meet our talented developers, designers, and tech enthusiasts. Connect with fellow members and explore their expertise.
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
                placeholder="Search members by name, role, or skills..."
                onSearch={setSearchQuery}
                suggestions={mockMembers
                  .map((m) => m.name)
                  .slice(0, 5)}
                size="lg"
              />
            </div>

            {/* Filter Controls */}
            <div className="space-y-4">
              {/* Role Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Role
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setRoleFilter('')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      roleFilter === ''
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Roles
                  </button>
                  {roles.map((role) => (
                    <button
                      key={role}
                      onClick={() => setRoleFilter(role)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                        roleFilter === role
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Branch Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Branch
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setBranchFilter('')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      branchFilter === ''
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Branches
                  </button>
                  {branches.map((branch) => (
                    <button
                      key={branch}
                      onClick={() => setBranchFilter(branch)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
                        branchFilter === branch
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {branch}
                    </button>
                  ))}
                </div>
              </div>

              {/* Year Filter */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Year
                </h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setYearFilter('')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      yearFilter === ''
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Years
                  </button>
                  {years.map((year) => (
                    <button
                      key={year}
                      onClick={() => setYearFilter(String(year))}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        yearFilter === String(year)
                          ? 'bg-primary text-white shadow-md'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Year {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* View Toggle and Clear Button */}
              <div className="flex items-center gap-2 justify-between pt-4 flex-wrap">
                <div className="flex items-center gap-2">
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

                {(searchQuery || roleFilter || branchFilter || yearFilter) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearFilters}
                  >
                    Clear Filters
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mb-8">
            <p className="text-gray-600 font-medium">
              Showing <span className="text-primary font-bold">{filteredMembers.length}</span> member{filteredMembers.length !== 1 ? 's' : ''}
              {searchQuery && ` for "${searchQuery}"`}
              {roleFilter && ` in "${roleFilter}"`}
              {branchFilter && ` from "${branchFilter}"`}
              {yearFilter && ` Year ${yearFilter}`}
            </p>
          </div>

          {/* Members Grid/List */}
          {filteredMembers.length > 0 ? (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredMembers.map((member) => (
                <MemberCard
                  key={member.id}
                  id={member.id}
                  name={member.name}
                  role={member.role}
                  branch={member.branch}
                  year={member.year}
                  email={member.email}
                  skills={member.skills}
                  bio={member.bio}
                  image={member.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                No Members Found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Sorry, we couldn't find any members matching your search criteria. Try adjusting your filters.
              </p>
              <Button
                variant="primary"
                onClick={handleClearFilters}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      {filteredMembers.length > 0 && (
        <section className="bg-gray-50 py-12 px-4 border-t border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {filteredMembers.length}
                </div>
                <p className="text-gray-600">Total Members</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {new Set(filteredMembers.map((m) => m.role)).size}
                </div>
                <p className="text-gray-600">Unique Roles</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {new Set(filteredMembers.map((m) => m.branch)).size}
                </div>
                <p className="text-gray-600">Branches</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {filteredMembers.reduce((sum, m) => sum + m.skills.length, 0)}+
                </div>
                <p className="text-gray-600">Total Skills</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
