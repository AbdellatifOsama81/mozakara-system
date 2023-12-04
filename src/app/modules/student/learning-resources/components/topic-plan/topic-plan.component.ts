import { Component, Input } from '@angular/core';
import { LearningResource } from 'src/app/core/interfaces/learning-resources/learning-resource';
import { Topic } from 'src/app/core/interfaces/learning-resources/topic';

@Component({
  selector: 'app-topic-plan',
  templateUrl: './topic-plan.component.html',
  styleUrls: ['./topic-plan.component.scss']
})
export class TopicPlanComponent {
  @Input() topic!: Topic;
  expanded = false;

  learningResources: LearningResource[] = [
    {
      id: '1',
      name: 'مقدمة',
      tags: ['مستوى سهل', 'أقل من 10 دقائق'],
      resourceType: 'document',
      resourceGroup: 'المجموعة الأولى',
      description: 'في هذا الدرس مفاهيم مهمة تؤسس الطالب للمادة',
      defaultMinutes: 7.5,
      aggregatedRatings: 4.5,
      isOfficial: false,
      isApproved: true,
      topic: 'الدرس الأول',
      fileUrl: '',
    },
    {
      id: '2',
      name: 'الجزء الأول',
      tags: ['مستوى سهل', 'أقل من 10 دقائق'],
      resourceType: 'video',
      resourceGroup: 'المجموعة الأولى',
      description: 'في هذا الدرس مفاهيم مهمة تؤسس الطالب للمادة',
      defaultMinutes: 17.1,
      aggregatedRatings: 3.5,
      isOfficial: false,
      isApproved: true,
      topic: 'الدرس الأول',
      fileUrl: '',
    },
    {
      id: '3',
      name: 'أمثلة عملية',
      tags: ['مستوى سهل', 'أقل من 10 دقائق'],
      resourceType: 'links',
      resourceGroup: 'المجموعة الأولى',
      description: 'في هذا الدرس مفاهيم مهمة تؤسس الطالب للمادة',
      defaultMinutes: 5.2,
      aggregatedRatings: 4.0,
      isOfficial: false,
      isApproved: true,
      topic: 'الدرس الأول',
      fileUrl: '',
    }
  ];

  rotateButton() {
    this.expanded = !this.expanded;
  }
}
