/**
 * Mock Members Data
 * Temporary data for development and testing
 */

export const mockMembers = [
  {
    id: 1,
    name: 'Alice Chen',
    role: 'Full Stack Developer',
    branch: 'Computer Science',
    year: 4,
    email: 'alice@kle.edu',
    skills: ['React', 'Node.js', 'MongoDB'],
    joinDate: '2022-08-15',
    bio: 'Passionate about building scalable web applications',
    image: null,
  },
  {
    id: 2,
    name: 'Bob Martinez',
    role: 'Backend Engineer',
    branch: 'Computer Science',
    year: 3,
    email: 'bob@kle.edu',
    skills: ['Python', 'Django', 'PostgreSQL'],
    joinDate: '2023-01-20',
    bio: 'Experienced in microservices architecture',
    image: null,
  },
  {
    id: 3,
    name: 'Carol Singh',
    role: 'Frontend Developer',
    branch: 'Information Technology',
    year: 2,
    email: 'carol@kle.edu',
    skills: ['Vue.js', 'CSS', 'JavaScript'],
    joinDate: '2023-09-10',
    bio: 'UI/UX enthusiast with eye for design',
    image: null,
  },
  {
    id: 4,
    name: 'David Lee',
    role: 'DevOps Engineer',
    branch: 'Computer Science',
    year: 4,
    email: 'david@kle.edu',
    skills: ['Docker', 'Kubernetes', 'AWS'],
    joinDate: '2022-06-15',
    bio: 'Cloud infrastructure specialist',
    image: null,
  },
  {
    id: 5,
    name: 'Emma Wilson',
    role: 'Data Scientist',
    branch: 'Data Science',
    year: 3,
    email: 'emma@kle.edu',
    skills: ['Python', 'Machine Learning', 'TensorFlow'],
    joinDate: '2023-02-01',
    bio: 'ML enthusiast and data analyst',
    image: null,
  },
  {
    id: 6,
    name: 'Frank Johnson',
    role: 'Mobile Developer',
    branch: 'Computer Science',
    year: 2,
    email: 'frank@kle.edu',
    skills: ['Flutter', 'React Native', 'Dart'],
    joinDate: '2023-08-20',
    bio: 'Cross-platform mobile app developer',
    image: null,
  },
  {
    id: 7,
    name: 'Grace Park',
    role: 'Full Stack Developer',
    branch: 'Information Technology',
    year: 3,
    email: 'grace@kle.edu',
    skills: ['MERN Stack', 'GraphQL', 'Firebase'],
    joinDate: '2023-05-10',
    bio: 'Fullstack enthusiast with startup experience',
    image: null,
  },
  {
    id: 8,
    name: 'Henry Zhang',
    role: 'DevOps Engineer',
    branch: 'Computer Science',
    year: 4,
    email: 'henry@kle.edu',
    skills: ['Jenkins', 'GitLab CI', 'Terraform'],
    joinDate: '2022-03-05',
    bio: 'Infrastructure automation expert',
    image: null,
  },
  {
    id: 9,
    name: 'Iris Brown',
    role: 'Frontend Developer',
    branch: 'Data Science',
    year: 2,
    email: 'iris@kle.edu',
    skills: ['React', 'TypeScript', 'Next.js'],
    joinDate: '2023-10-15',
    bio: 'Modern web development specialist',
    image: null,
  },
  {
    id: 10,
    name: 'Jack Davis',
    role: 'Backend Engineer',
    branch: 'Information Technology',
    year: 3,
    email: 'jack@kle.edu',
    skills: ['Node.js', 'Express', 'MySQL'],
    joinDate: '2023-04-12',
    bio: 'REST API and database design expert',
    image: null,
  },
  {
    id: 11,
    name: 'Karen White',
    role: 'Full Stack Developer',
    branch: 'Computer Science',
    year: 4,
    email: 'karen@kle.edu',
    skills: ['React', 'Python', 'AWS'],
    joinDate: '2022-07-20',
    bio: 'Fullstack architect with 2+ years experience',
    image: null,
  },
  {
    id: 12,
    name: 'Leo Garcia',
    role: 'Data Scientist',
    branch: 'Data Science',
    year: 2,
    email: 'leo@kle.edu',
    skills: ['Python', 'Data Analysis', 'Visualization'],
    joinDate: '2023-09-01',
    bio: 'Data enthusiast and AI researcher',
    image: null,
  },
  {
    id: 13,
    name: 'Maya Patel',
    role: 'Mobile Developer',
    branch: 'Computer Science',
    year: 3,
    email: 'maya@kle.edu',
    skills: ['Swift', 'Kotlin', 'iOS Development'],
    joinDate: '2023-03-10',
    bio: 'Native app development specialist',
    image: null,
  },
  {
    id: 14,
    name: 'Nathan Scott',
    role: 'Backend Engineer',
    branch: 'Information Technology',
    year: 4,
    email: 'nathan@kle.edu',
    skills: ['Java', 'Spring Boot', 'MongoDB'],
    joinDate: '2022-05-15',
    bio: 'Enterprise backend systems expert',
    image: null,
  },
  {
    id: 15,
    name: 'Olivia Harris',
    role: 'Frontend Developer',
    branch: 'Computer Science',
    year: 2,
    email: 'olivia@kle.edu',
    skills: ['Angular', 'RxJS', 'Material Design'],
    joinDate: '2023-08-25',
    bio: 'Angular expert and component library maintainer',
    image: null,
  },
];

/**
 * Get all unique roles
 * @returns {Array} Array of unique roles
 */
export function getAllRoles() {
  const roles = mockMembers.map((member) => member.role);
  return [...new Set(roles)].sort();
}

/**
 * Get all unique branches
 * @returns {Array} Array of unique branches
 */
export function getAllBranches() {
  const branches = mockMembers.map((member) => member.branch);
  return [...new Set(branches)].sort();
}

/**
 * Get all unique years
 * @returns {Array} Array of unique years
 */
export function getAllYears() {
  const years = mockMembers.map((member) => member.year);
  return [...new Set(years)].sort((a, b) => a - b);
}

/**
 * Get member by ID
 * @param {number} id - Member ID
 * @returns {Object} Member object or null
 */
export function getMemberById(id) {
  return mockMembers.find((member) => member.id === id) || null;
}

/**
 * Filter members by criteria
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered members
 */
export function filterMembers(filters) {
  return mockMembers.filter((member) => {
    if (filters.role && member.role !== filters.role) return false;
    if (filters.branch && member.branch !== filters.branch) return false;
    if (filters.year && member.year !== parseInt(filters.year)) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        member.name.toLowerCase().includes(searchLower) ||
        member.role.toLowerCase().includes(searchLower) ||
        member.branch.toLowerCase().includes(searchLower) ||
        member.skills.some((skill) => skill.toLowerCase().includes(searchLower))
      );
    }
    return true;
  });
}
