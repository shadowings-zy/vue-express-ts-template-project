import { getData } from '../db';

export class HomepageService {
  private data = getData();

  getHomepageData = () => {
    const output = this.data.find((item) => item.href === 'homepage');
    return output ? output : 'empty data';
  };
}
