import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';
import * as path from 'path';


@Controller('upload')
export class UploadController {
  @Post('product-image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: 'C:/Users/sperez/Documents/Repositorio/Distrisalud-WEB/Public/assets/images/products',
        filename: (req, file, cb) => {
          const fileExtName = extname(file.originalname);
          const fileName = file.originalname
            .split('.')[0]
            .replace(/\s+/g, '_')
            .replace(/[^a-zA-Z0-9_-]/g, '');

          const finalName = `${fileName}_${uuidv4()}${fileExtName}`;
          cb(null, finalName);
        },
      }),
    })
  )
  async uploadProductImage(@UploadedFile() file: Express.Multer.File) {
    return {
      imageUrl: `/assets/images/products/${file.filename}`,
    };
  }
}

