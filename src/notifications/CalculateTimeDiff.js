/* eslint-disable prettier/prettier */

export default function CalculateTimeDiff({item}) {
  function calculateTimeDifference(notificationTime) {
    const notificationDate = new Date(notificationTime);
    const now = new Date();

    const difference = now.getTime() - notificationDate.getTime();
    const secondsDifference = Math.floor(difference / 1000);

    if (secondsDifference < 60) {
      return `${secondsDifference} second${
        secondsDifference !== 1 ? 's' : ''
      } ago`;
    } else if (secondsDifference < 3600) {
      const minutesDifference = Math.floor(secondsDifference / 60);
      return `${minutesDifference} min${
        minutesDifference !== 1 ? 's' : ''
      } ago`;
    } else if (secondsDifference < 86400) {
      const hoursDifference = Math.floor(secondsDifference / 3600);
      return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
    } else {
      const daysDifference = Math.floor(secondsDifference / 86400);
      return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
    }
  }

  return calculateTimeDifference(item);
}
