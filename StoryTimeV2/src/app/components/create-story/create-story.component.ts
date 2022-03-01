import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story.model';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {

  story: Story = {
    title: '',
    description: '',
    publish: false
  };

  added = false;

  constructor(private storyService: StoryService) { }

  ngOnInit(): void {
  }

  saveStory(): void{
    const data = {
      title: this.story.title,
      description: this.story.description
    };
    this.storyService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.added = true;
        },
        error: (e) => console.error(e)
      });
  }

  newStory(): void {
    this.added = false;
    this.story = {
      title: '',
      description: '',
      publish: false
    };
  }

}
