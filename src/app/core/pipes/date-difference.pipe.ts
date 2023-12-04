import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateDifference'
})
export class DateDifferencePipe implements PipeTransform {

  transform(value: string): string {
    const timestamp = new Date(value).getTime();
    const now = new Date().getTime();
    let differenceInSeconds: number = Math.floor((now - timestamp) / 1000);

    if (differenceInSeconds < 60) {
      if (differenceInSeconds === 1)
        return 'منذ ثانية';
      if (differenceInSeconds === 2)
        return 'منذ ثانيتين';
      if (differenceInSeconds <= 10)
        return `منذ ${differenceInSeconds} ثواني`;
      else
        return `منذ ${differenceInSeconds} ثانية`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      if (minutes === 1)
        return 'منذ دقيقة';
      if (minutes === 2)
        return 'منذ دقيقتين';
      if (minutes <= 10)
        return `منذ ${minutes} دقائق`;
      else
        return `منذ ${minutes} دقيقة`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      if (hours === 1)
        return 'منذ ساعة';
      if (hours === 2)
        return 'منذ ساعتين';
      if (hours <= 10)
        return `منذ ${hours} ساعات`;
      else
        return `منذ ${hours} ساعة`;
    } else if (differenceInSeconds < 604800) { // 1 week = 7 days = 604800 seconds
      const days = Math.floor(differenceInSeconds / 86400);
      if (days === 1)
        return 'منذ يوم';
      if (days === 2)
        return 'منذ يومين';
      if (days <= 10)
        return `منذ ${days} أيام`;
      else
        return `منذ ${days} يوم`;
    } else if (differenceInSeconds < 2629746) { // 1 month = 30.44 days = 2629746 seconds
      const weeks = Math.floor(differenceInSeconds / 604800);
      if (weeks === 1)
        return 'منذ أسبوع';
      if (weeks === 2)
        return 'منذ أسبوعين';
      if (weeks <= 10)
        return `منذ ${weeks} أسابيع`;
      else
        return `منذ ${weeks} أسبوع`;
    } else if (differenceInSeconds < 31556952) { // 1 year = 365.25 days = 31556952 seconds
      const months = Math.floor(differenceInSeconds / 2629746);
      if (months === 1)
        return 'منذ شهر';
      if (months === 2)
        return 'منذ شهرين';
      if (months <= 10)
        return `منذ ${months} أشهر`;
      else
        return `منذ ${months} شهر`;
    } else {
      const years = Math.floor(differenceInSeconds / 31556952);
      if (years === 1)
        return 'منذ عام';
      if (years === 2)
        return 'منذ عامين';
      if (years <= 10)
        return `منذ ${years} أعوام`;
      else
        return `منذ ${years} عام`;
    }
    /* ENGLISH */
    // if (differenceInSeconds < 60) {
    //   return `${differenceInSeconds} second${differenceInSeconds !== 1 ? 's' : ''} ago`;
    // } else if (differenceInSeconds < 3600) {
    //   const minutes = Math.floor(differenceInSeconds / 60);
    //   return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    // } else if (differenceInSeconds < 86400) {
    //   const hours = Math.floor(differenceInSeconds / 3600);
    //   return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    // } else if (differenceInSeconds < 604800) { // 1 week = 7 days = 604800 seconds
    //   const days = Math.floor(differenceInSeconds / 86400);
    //   return `${days} day${days !== 1 ? 's' : ''} ago`;
    // } else if (differenceInSeconds < 2629746) { // 1 month = 30.44 days = 2629746 seconds
    //   const weeks = Math.floor(differenceInSeconds / 604800);
    //   return `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    // } else if (differenceInSeconds < 31556952) { // 1 year = 365.25 days = 31556952 seconds
    //   const months = Math.floor(differenceInSeconds / 2629746);
    //   return `${months} month${months !== 1 ? 's' : ''} ago`;
    // } else {
    //   const years = Math.floor(differenceInSeconds / 31556952);
    //   return `${years} year${years !== 1 ? 's' : ''} ago`;
    // }
  }
}
