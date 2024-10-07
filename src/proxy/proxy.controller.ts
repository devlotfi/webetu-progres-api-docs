import { All, Controller, Param, Req, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import axios from 'axios';
import { Request, Response } from 'express';

@Controller('proxy')
@ApiTags('Proxy')
export class ProxyController {
  @All('/:url(*)')
  public async proxy(
    @Param() urlData: any,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { url } = urlData;

    const { method, headers, body } = req;

    try {
      console.log({
        url,
        method,
        headers: {
          authorization: headers.authorization,
        },
        data: body,
      });

      const response = await axios({
        url,
        method,
        headers: {
          authorization: headers.authorization,
        },
        data: body,
      });

      // Send back the response data from the target URL
      res.status(response.status).send(response.data);
    } catch (error) {
      //console.log(error);

      // Handle errors such as network issues or target server errors
      res.status(error.response ? error.response.status : 500).json({
        message: error.message,
      });
    }

    return url;
  }
}
