import { useState } from 'react';
import { Card, Badge, SearchBar } from '@/components/ui';
import LeaderboardTable from '@/components/leaderboard/LeaderboardTable';
import {
  getTopStudents,
  getBranchRankings,
  getYearWiseRankings,
  searchStudent,
} from '@/utils/mockLeaderboardData';

export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState('student'); // 'student', 'branch', 'year'
  const [searchQuery, setSearchQuery] = useState('');

  const studentData = searchQuery ? searchStudent(searchQuery) : getTopStudents(10);
  const branchData = getBranchRankings();
  const yearData = getYearWiseRankings();

  const tabs = [
    { id: 'student', label: '👤 Student Rankings', icon: '🏅' },
    { id: 'branch', label: '🏢 Branch Rankings', icon: '📊' },
    { id: 'year', label: '📚 Year-wise Rankings', icon: '📈' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Leaderboard</h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Track top performers, achievements, and competitive rankings across our community. Celebrate excellence and inspire others.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="mb-10 flex flex-wrap gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSearchQuery('');
                }}
                className={`px-4 md:px-6 py-3 font-semibold rounded-lg transition-all duration-200 text-sm md:text-base ${
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Bar (Only for Student Rankings) */}
          {activeTab === 'student' && (
            <div className="mb-8 max-w-2xl">
              <SearchBar
                placeholder="Search students by name or branch..."
                onSearch={setSearchQuery}
                suggestions={getTopStudents(5).map((s) => s.name)}
                size="lg"
              />
            </div>
          )}

          {/* Leaderboard Cards Summary */}
          {activeTab === 'student' && (
            <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {getTopStudents(3).map((student, index) => (
                <Card
                  key={student.id}
                  variant={index === 0 ? 'elevated' : 'default'}
                  className={`transform transition-all duration-300 ${
                    index === 0 ? 'md:scale-105' : ''
                  }`}
                >
                  <Card.Body className="text-center">
                    <div className="text-5xl mb-3">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {student.name}
                    </h3>
                    <Badge variant="primary" size="sm" className="inline-block mb-3">
                      {student.branch}
                    </Badge>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between px-4">
                        <span className="text-gray-600">Points:</span>
                        <span className="font-bold text-primary">{student.points}</span>
                      </div>
                      <div className="flex justify-between px-4">
                        <span className="text-gray-600">Achievements:</span>
                        <span className="font-bold">🏆 {student.achievements}</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          )}

          {/* Statistics Section */}
          <div className="mb-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {activeTab === 'student' && (
              <>
                <Card>
                  <Card.Body className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {studentData.length}
                    </div>
                    <p className="text-sm text-gray-600">Ranked Students</p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">
                      {studentData[0]?.points || 0}
                    </div>
                    <p className="text-sm text-gray-600">Top Points</p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {studentData.reduce((sum, s) => sum + s.contests, 0)}
                    </div>
                    <p className="text-sm text-gray-600">Total Contests</p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {studentData.reduce((sum, s) => sum + s.achievements, 0)}
                    </div>
                    <p className="text-sm text-gray-600">Total Badges</p>
                  </Card.Body>
                </Card>
              </>
            )}

            {activeTab === 'branch' && (
              <>
                <Card>
                  <Card.Body className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {branchData.length}
                    </div>
                    <p className="text-sm text-gray-600">Branches</p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">
                      {branchData.reduce((sum, b) => sum + b.totalMembers, 0)}
                    </div>
                    <p className="text-sm text-gray-600">Total Members</p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {branchData.reduce((sum, b) => sum + b.totalPoints, 0)}
                    </div>
                    <p className="text-sm text-gray-600">Total Points</p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {Math.round(
                        branchData.reduce((sum, b) => sum + b.totalPoints, 0) /
                          branchData.length
                      )}
                    </div>
                    <p className="text-sm text-gray-600">Avg Points</p>
                  </Card.Body>
                </Card>
              </>
            )}

            {activeTab === 'year' && (
              <>
                <Card>
                  <Card.Body className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">
                      {yearData.length}
                    </div>
                    <p className="text-sm text-gray-600">Year Groups</p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">
                      {yearData.reduce((sum, y) => sum + y.totalMembers, 0)}
                    </div>
                    <p className="text-sm text-gray-600">Total Members</p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {yearData.reduce((sum, y) => sum + y.totalPoints, 0)}
                    </div>
                    <p className="text-sm text-gray-600">Total Points</p>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Body className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      {Math.round(
                        yearData.reduce((sum, y) => sum + y.totalPoints, 0) /
                          yearData.length
                      )}
                    </div>
                    <p className="text-sm text-gray-600">Avg Points</p>
                  </Card.Body>
                </Card>
              </>
            )}
          </div>

          {/* Leaderboard Table */}
          <Card variant="elevated">
            <Card.Body>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {activeTab === 'student' && 'Top Student Rankings'}
                {activeTab === 'branch' && 'Branch Competition Rankings'}
                {activeTab === 'year' && 'Year-wise Leaderboard'}
              </h2>

              {studentData.length === 0 && activeTab === 'student' ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-3">🔍</div>
                  <p className="text-gray-600 mb-4">
                    No students found matching your search.
                  </p>
                </div>
              ) : (
                <LeaderboardTable
                  type={activeTab}
                  data={
                    activeTab === 'student'
                      ? studentData
                      : activeTab === 'branch'
                      ? branchData
                      : yearData
                  }
                />
              )}
            </Card.Body>
          </Card>

          {/* Legend Section */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <Card.Body>
                <h3 className="font-bold text-gray-900 mb-4">Level Definitions</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="danger" size="sm">Expert</Badge>
                    <span className="text-sm text-gray-600">2000+ points, highly experienced</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="warning" size="sm">Advanced</Badge>
                    <span className="text-sm text-gray-600">1200-2000 points, proven skills</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="primary" size="sm">Intermediate</Badge>
                    <span className="text-sm text-gray-600">600-1200 points, developing skills</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="info" size="sm">Beginner</Badge>
                    <span className="text-sm text-gray-600">Less than 600 points, new to coding</span>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body>
                <h3 className="font-bold text-gray-900 mb-4">How Points Are Earned</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>🏆 <strong>Contests:</strong> 50-500 points per contest</p>
                  <p>🎖️ <strong>Achievements:</strong> 100-300 points per achievement</p>
                  <p>📝 <strong>Projects:</strong> 50-200 points per completed project</p>
                  <p>👥 <strong>Mentoring:</strong> 25-75 points per mentee helped</p>
                  <p>📚 <strong>Workshops:</strong> 50-150 points per workshop attended</p>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
