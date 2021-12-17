import { Request, Response } from 'express';
import { HomepageService } from '../service/homepageService';
import { sendSuccessResponse, sendErrorResponse } from '../util/response';

export class HomepageController {
  private homepageService = new HomepageService();

  helloWorld = (req: Request, res: Response) => {
    try {
      res.send('hello world!!!');
    } catch (e) {
      res.send(e.message);
    }
  };

  getHomepageData = (req: Request, res: Response) => {
    try {
      const data = this.homepageService.getHomepageData();
      return sendSuccessResponse(res, data);
    } catch (e) {
      return sendErrorResponse(res, e.message);
    }
  };
}
