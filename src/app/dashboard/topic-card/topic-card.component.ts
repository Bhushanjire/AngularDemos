import { Component, OnInit } from '@angular/core';
import { TopicModel } from '../../core/models/topic.model'

@Component({
  selector: 'app-topic-card',
  templateUrl: './topic-card.component.html',
  styleUrls: ['./topic-card.component.scss']
})
export class TopicCardComponent implements OnInit {
  topicList: Array<TopicModel>;
  constructor() { }

  ngOnInit() {
    this.topicList = [
      {
        _id: '1',
        name: 'Topic 1',
        desc: 'desc',
        link: ''
      },
      {
        _id: '2',
        name: 'Topic 2',
        desc: 'desc',
        link: ''
      },
      {
        _id: '3',
        name: 'Topic 3',
        desc: 'desc',
        link: ''
      },
      {
        _id: '4',
        name: 'Topic 4',
        desc: 'desc',
        link: ''
      },
      {
        _id: '5',
        name: 'Topic 5',
        desc: 'desc',
        link: ''
      },
      {
        _id: '6',
        name: 'Topic 6',
        desc: 'desc',
        link: ''
      }
    ]
  }

}
