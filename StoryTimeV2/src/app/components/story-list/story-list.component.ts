import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/models/story.model';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-story-list',
  templateUrl: './story-list.component.html',
  styleUrls: ['./story-list.component.css']
})
export class StoryListComponent implements OnInit {

  stories?: Story[];
  currentStory: Story = {};
  current = -1;
  title = '';

  constructor(private storyService: StoryService) { }
  ngOnInit(): void {
    this.retrieveStories();
  }
  retrieveStories(): void {
    this.storyService.getAll()
      .subscribe({
        next: (data) => {
          this.stories = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  refreshList(): void {
    this.retrieveStories();
    this.currentStory = {};
    this.current = -1;
  }
  
  setActiveStory(story: Story, index: number): void {
    this.currentStory = story;
    this.current = index;
  }
  removeAllStories(): void {
    this.storyService.deleteAll()
      .subscribe({
        next: (res) => {
          console.log(res);
          this.refreshList();
        },
        error: (e) => console.error(e)
      });
  }

  searchStory(): void{
    this.currentStory = {};
    this.current = -1;
    this.storyService.findByTitle(this.title)
      .subscribe({
        next: (data) => {
          this.stories = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

}