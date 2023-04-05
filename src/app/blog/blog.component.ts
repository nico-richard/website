import { Component, OnInit } from '@angular/core'
import { Post } from './post/post.model'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass'],
})
export class BlogComponent implements OnInit {
  posts: Post[]

  ngOnInit(): void {
    this.posts = [
      {
        title: 'Post 1',
        imageName: 'nature 1',
        imageSrc:
          'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg',
        description: 'post 1 description',
        date: new Date('01/05/2022'),
      },
      {
        title: 'Post 2',
        imageName: 'nature 2',
        imageSrc:
          'https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539__340.jpg',
        description: 'post 2 description',
        date: new Date('12/07/2023'),
      },
      {
        title: 'Post 3',
        imageName: 'nature 3',
        imageSrc:
          'https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149__340.jpg',
        description: 'post 3 description',
        date: new Date('02/01/2023'),
      },
    ]
  }
}
