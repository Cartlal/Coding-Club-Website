import { Link } from 'react-router-dom';
import { Card, Badge, Button } from '@/components/ui';

/**
 * EventCard Component
 * Displays event information in a card format
 * 
 * @component
 * @example
 * <EventCard
 *   id={1}
 *   title="Web Development Workshop"
 *   date="2025-12-05"
 *   time="4:00 PM"
 *   description="Master modern web development..."
 *   status="upcoming"
 *   category="Workshop"
 *   attendees={45}
 * />
 * 
 * @param {number} id - Event ID
 * @param {string} title - Event title
 * @param {string} date - Event date (YYYY-MM-DD format)
 * @param {string} time - Event time
 * @param {string} description - Event description
 * @param {string} status - 'upcoming' | 'ongoing' | 'completed'
 * @param {string} category - Event category/type
 * @param {number} attendees - Number of attendees/registrations
 * @param {string} location - Event location
 * @param {string} image - Event image URL (optional)
 * @returns {JSX.Element}
 */
export default function EventCard({
  id,
  title,
  date,
  time,
  description,
  status = 'upcoming',
  category = 'Event',
  attendees = 0,
  location = 'KLE Campus',
  image = null,
}) {
  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const statusVariants = {
    upcoming: { badge: 'warning', icon: '📅', label: 'Upcoming' },
    ongoing: { badge: 'info', icon: '⚡', label: 'Ongoing' },
    completed: { badge: 'success', icon: '✓', label: 'Completed' },
  };

  const currentStatus = statusVariants[status] || statusVariants.upcoming;

  return (
    <Card variant="default" interactive className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      {/* Image Section */}
      {image && (
        <div className="h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}

      {!image && (
        <div className="h-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-5xl">
          🎯
        </div>
      )}

      {/* Content Section */}
      <Card.Body className="flex-grow flex flex-col">
        {/* Header with Badge */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight">
              {title}
            </h3>
          </div>
          <Badge variant={currentStatus.badge} size="sm" className="flex-shrink-0">
            {currentStatus.icon} {currentStatus.label}
          </Badge>
        </div>

        {/* Category */}
        <Badge variant="primary" size="sm" outlined className="w-fit mb-3">
          {category}
        </Badge>

        {/* Date and Time */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-base">📅</span>
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-base">🕐</span>
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <span className="text-base">📍</span>
            <span>{location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Attendees */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex -space-x-2">
            {[...Array(Math.min(3, attendees))].map((_, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white flex items-center justify-center text-xs text-white font-semibold"
              >
                {i + 1}
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {attendees}+ registered
          </span>
        </div>
      </Card.Body>

      {/* Footer with CTA */}
      <Card.Footer className="bg-gray-50 border-t">
        <Button
          variant="primary"
          size="sm"
          fullWidth
          as={Link}
          to={`/events/${id}`}
        >
          Learn More
        </Button>
      </Card.Footer>
    </Card>
  );
}
