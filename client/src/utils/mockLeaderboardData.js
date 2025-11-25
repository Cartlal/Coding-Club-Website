/**
 * Mock Leaderboard Data
 * Temporary data for development and testing
 */

export const mockStudentRankings = [
  {
    id: 1,
    rank: 1,
    name: 'Alice Chen',
    branch: 'Computer Science',
    year: 4,
    points: 2450,
    achievements: 15,
    contests: 12,
    level: 'Expert',
  },
  {
    id: 2,
    rank: 2,
    name: 'Bob Martinez',
    branch: 'Computer Science',
    year: 3,
    points: 2180,
    achievements: 12,
    contests: 10,
    level: 'Advanced',
  },
  {
    id: 3,
    rank: 3,
    name: 'Carol Singh',
    branch: 'Information Technology',
    year: 2,
    points: 1950,
    achievements: 11,
    contests: 9,
    level: 'Advanced',
  },
  {
    id: 4,
    rank: 4,
    name: 'David Lee',
    branch: 'Computer Science',
    year: 4,
    points: 1720,
    achievements: 9,
    contests: 8,
    level: 'Intermediate',
  },
  {
    id: 5,
    rank: 5,
    name: 'Emma Wilson',
    branch: 'Data Science',
    year: 3,
    points: 1520,
    achievements: 8,
    contests: 7,
    level: 'Intermediate',
  },
  {
    id: 6,
    rank: 6,
    name: 'Frank Johnson',
    branch: 'Computer Science',
    year: 2,
    points: 1380,
    achievements: 7,
    contests: 6,
    level: 'Intermediate',
  },
  {
    id: 7,
    rank: 7,
    name: 'Grace Park',
    branch: 'Information Technology',
    year: 3,
    points: 1290,
    achievements: 6,
    contests: 6,
    level: 'Beginner',
  },
  {
    id: 8,
    rank: 8,
    name: 'Henry Zhang',
    branch: 'Computer Science',
    year: 4,
    points: 1150,
    achievements: 5,
    contests: 5,
    level: 'Beginner',
  },
  {
    id: 9,
    rank: 9,
    name: 'Iris Brown',
    branch: 'Data Science',
    year: 2,
    points: 980,
    achievements: 4,
    contests: 4,
    level: 'Beginner',
  },
  {
    id: 10,
    rank: 10,
    name: 'Jack Davis',
    branch: 'Information Technology',
    year: 3,
    points: 850,
    achievements: 3,
    contests: 3,
    level: 'Beginner',
  },
];

export const mockBranchRankings = [
  {
    id: 1,
    rank: 1,
    branch: 'Computer Science',
    totalMembers: 45,
    totalPoints: 28500,
    averagePoints: 633,
    achievements: 120,
    contests: 95,
    level: 'Expert',
  },
  {
    id: 2,
    rank: 2,
    branch: 'Information Technology',
    totalMembers: 38,
    totalPoints: 22100,
    averagePoints: 582,
    achievements: 95,
    contests: 75,
    level: 'Advanced',
  },
  {
    id: 3,
    rank: 3,
    branch: 'Data Science',
    totalMembers: 28,
    totalPoints: 18200,
    averagePoints: 650,
    achievements: 85,
    contests: 62,
    level: 'Advanced',
  },
];

export const mockYearWiseRankings = [
  {
    id: 1,
    rank: 1,
    year: 4,
    totalMembers: 52,
    totalPoints: 25800,
    averagePoints: 496,
    achievements: 105,
    contests: 82,
    level: 'Expert',
  },
  {
    id: 2,
    rank: 2,
    year: 3,
    totalMembers: 48,
    totalPoints: 23400,
    averagePoints: 488,
    achievements: 98,
    contests: 78,
    level: 'Advanced',
  },
  {
    id: 3,
    rank: 3,
    year: 2,
    totalMembers: 45,
    totalPoints: 19600,
    averagePoints: 436,
    achievements: 82,
    contests: 65,
    level: 'Intermediate',
  },
];

/**
 * Get top students
 * @param {number} limit - Number of top students to return
 * @returns {Array} Top students sorted by points
 */
export function getTopStudents(limit = 10) {
  return mockStudentRankings.slice(0, limit);
}

/**
 * Get branch rankings
 * @returns {Array} Branch rankings sorted by points
 */
export function getBranchRankings() {
  return mockBranchRankings;
}

/**
 * Get year-wise rankings
 * @returns {Array} Year rankings sorted by points
 */
export function getYearWiseRankings() {
  return mockYearWiseRankings;
}

/**
 * Search student by name or rank
 * @param {string} query - Search query
 * @returns {Array} Matching students
 */
export function searchStudent(query) {
  const lowerQuery = query.toLowerCase();
  return mockStudentRankings.filter(
    (student) =>
      student.name.toLowerCase().includes(lowerQuery) ||
      student.branch.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get student by ID
 * @param {number} id - Student ID
 * @returns {Object} Student object or null
 */
export function getStudentById(id) {
  return mockStudentRankings.find((student) => student.id === id) || null;
}
