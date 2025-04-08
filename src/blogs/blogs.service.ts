import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogsService {
  blogPostsPaginated(): any {
    return 'Blog Posts From Service';
  }
}
