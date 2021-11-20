import { formatDate, isDateExpired } from './index';

describe('Date Tools', () => {
  describe('formatDate', () => {
    it("should correctly format the date to 'MM/DD/YYYY'", () => {
      const date = new Date('2020-01-21');
      const formattedDate = formatDate(date, 'MM/DD/YYYY');
      expect(formattedDate).toEqual('01/21/2020');
    });

    it("should correctly format the date to 'DD-MM-YY'", () => {
      const date = new Date('2020-01-21');
      const formattedDate = formatDate(date, 'DD-MM-YY');
      expect(formattedDate).toEqual('21-01-20');
    });

    it("should correctly format the date to 'MMMM, Do YYYY'", () => {
      const date = new Date('2020-01-21');
      const formattedDate = formatDate(date, 'MMMM, Do YYYY');
      expect(formattedDate).toEqual('January, 21st 2020');
    });
  });
  describe('isDateExpired', () => {
    beforeEach(() => {
      jest
        .spyOn(global.Date, 'now')
        .mockImplementationOnce(() =>
          new Date('2021-09-01T11:01:58.135Z').valueOf()
        );
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return true for date object earlier than today', () => {
      const testDate = new Date('08/31/2021');
      expect(isDateExpired(testDate)).toBeTruthy();
    });
    it('should return true for date string earlier than today', () => {
      const testDate = '08/31/2021';
      expect(isDateExpired(testDate)).toBeTruthy();
    });
    it('should return false for date object for todays date', () => {
      const testDate = new Date('09/01/2022');
      expect(isDateExpired(testDate)).toBeFalsy();
    });
    it('should return false for date string for todays date', () => {
      const testDate = '09/01/2022';
      expect(isDateExpired(testDate)).toBeFalsy();
    });
    it('should return false for date object for date in future', () => {
      const testDate = new Date('09/02/2021');
      expect(isDateExpired(testDate)).toBeFalsy();
    });
    it('should return false for date string for date in future', () => {
      const testDate = '09/02/2021';
      expect(isDateExpired(testDate)).toBeFalsy();
    });
  });
});
