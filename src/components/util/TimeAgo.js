const TimeAgo = ({ createdAt }) => {
  const timeDifference = (new Date() - new Date(createdAt)) / 1000;

  const minutes = Math.floor(timeDifference / 60);
  const hours = Math.floor(timeDifference / 3600);
  const days = Math.floor(timeDifference / 86400);
  const months = Math.floor(timeDifference / 2628000);
  const years = Math.floor(timeDifference / 31536000);

  if (timeDifference < 120) {
    return "1 minute ago";
  } else if (minutes <= 59) {
    return `${minutes} minutes ago`;
  } else if (timeDifference < 3600) {
    return "1 hour ago";
  } else if (hours <= 23) {
    return `${hours} hours ago`;
  } else if (timeDifference < 86400) {
    return "1 day ago";
  } else if (days <= 30) {
    return `${days} days ago`;
  } else if (timeDifference < 2628000) {
    return "1 month ago";
  } else if (months <= 11) {
    return `${months} months ago`;
  } else if (timeDifference < 31536000) {
    return "1 year ago";
  } else {
    return `${years} years ago`;
  }
};

export default TimeAgo;
