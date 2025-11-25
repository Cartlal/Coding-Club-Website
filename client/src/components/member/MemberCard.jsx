import { Card, Badge } from '@/components/ui';

/**
 * MemberCard Component
 * Displays member information in a card format
 * 
 * @component
 * @example
 * <MemberCard
 *   id={1}
 *   name="Alice Chen"
 *   role="Full Stack Developer"
 *   branch="Computer Science"
 *   year={4}
 *   email="alice@kle.edu"
 *   skills={['React', 'Node.js']}
 *   bio="Passionate about building scalable web applications"
 * />
 * 
 * @param {number} id - Member ID
 * @param {string} name - Member name
 * @param {string} role - Job role/position
 * @param {string} branch - Academic branch
 * @param {number} year - Year of study (1-4)
 * @param {string} email - Email address
 * @param {Array} skills - Array of skill names
 * @param {string} bio - Short biography
 * @param {string} image - Profile image URL (optional)
 * @returns {JSX.Element}
 */
export default function MemberCard({
  id,
  name,
  role,
  branch,
  year,
  email,
  skills = [],
  bio = '',
  image = null,
}) {
  const yearLabel = `Year ${year}`;
  const branchShort = branch
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  const getRoleColor = (role) => {
    if (role.includes('Frontend')) return 'primary';
    if (role.includes('Backend')) return 'secondary';
    if (role.includes('Full Stack')) return 'info';
    if (role.includes('Mobile')) return 'success';
    if (role.includes('DevOps')) return 'warning';
    if (role.includes('Data')) return 'danger';
    return 'primary';
  };

  return (
    <Card variant="elevated" interactive className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      {/* Avatar Section */}
      <div className="h-32 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl font-bold text-white relative">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-5xl">👤</span>
        )}

        {/* Badge - Year */}
        <div className="absolute top-3 right-3 bg-white text-primary font-bold px-3 py-1 rounded-full text-xs">
          {yearLabel}
        </div>
      </div>

      {/* Content Section */}
      <Card.Body className="flex-grow flex flex-col">
        {/* Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>

        {/* Role */}
        <Badge
          variant={getRoleColor(role)}
          size="sm"
          className="w-fit mb-3"
        >
          {role}
        </Badge>

        {/* Branch and Year Info */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-primary font-bold text-xs">
            {branchShort}
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
              {branch}
            </p>
          </div>
        </div>

        {/* Bio */}
        {bio && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
            {bio}
          </p>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-700 mb-2 uppercase">
              Skills
            </p>
            <div className="flex flex-wrap gap-1">
              {skills.slice(0, 3).map((skill, index) => (
                <Badge
                  key={index}
                  variant="primary"
                  size="sm"
                  outlined
                  className="text-xs"
                >
                  {skill}
                </Badge>
              ))}
              {skills.length > 3 && (
                <Badge variant="primary" size="sm" outlined className="text-xs">
                  +{skills.length - 3}
                </Badge>
              )}
            </div>
          </div>
        )}

        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="text-primary text-sm font-medium hover:underline mt-auto"
        >
          {email}
        </a>
      </Card.Body>
    </Card>
  );
}
