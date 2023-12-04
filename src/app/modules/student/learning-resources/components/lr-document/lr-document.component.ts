import { Component, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lr-document',
  templateUrl: './lr-document.component.html',
  styleUrls: ['./lr-document.component.scss']
})
export class LrDocumentComponent {
  @Input() lrLink!: string;
  assetsPath = environment.imgAssetsPath;
  lrText = `إنه يمنحك رضاءً ذاتيًا كبيرًا عندما تنظر إلى عملك وتقول: "لقد صنعت هذا!". أحب هذا الشعور بعد أن أنتهي من العمل على شيء ما. عندما أتكئ على كرسيي، انظر إلى النتيجة النهائية بابتسامة، واستمتع بلحظة "إشعال الفرح". إنه أمر مُرضي بشكل خاص عندما أعلم أنني ربحت للتو 5000 دولار.

  أفعل! ولهذا السبب دخلت هذا المجال. ليس من أجل حب تصميم الويب، الذي أقوم به الآن. ولكن لأسلوب الحياة! هناك العديد من الطرق التي يمكن للمرء من خلالها تحقيق أسلوب الحياة هذا. هذه طريقتي. هذه هي الطريقة التي حققت بها أسلوب الحياة الذي كنت أتخيله لمدة خمس سنوات. وأنا ذاهب ليعلمك نفس الشيء. غالبًا ما يعتقد الناس أن تصميم الويب أمر معقد. أنه يحتاج إلى بعض المواهب الإبداعية أو موهبة أجهزة الكمبيوتر. من المؤكد أن الكثير من الناس يجعلون الأمر معقدًا للغاية. الناس يجعلون أبسط الأشياء معقدة. مثل معظم المواد التي تدرس في الجامعات. لكني لا أحب التعقيد. أنا أحب السهل. أنا أحب الخارقة الحياة. أحب أن أسلك أقصر وأبسط طريق للوصول إلى وجهتي. لم أذهب إلى مدرسة فنية ولم أحصل على شهادة في علوم الكمبيوتر. أنا غريب عن هذا المجال، وقد اخترقت نفسه فيه، وانتهى بي الأمر بطريقة ما إلى أن أصبح محترفًا مطلوبًا. هذه هي الطريقة التي سأعلمك بها تصميم الويب. لذلك لا تشعر بالإحباط في طريقك بسبب التعقيدات التي لا داعي لها. لذلك تستمتع بالعملية لأنها بسيطة وممتعة. حتى تتمكن من أن تصبح مصمم ويب مستقلاً في أي وقت من الأوقات.
  
  على سبيل المثال، هذه دورة تصميم ولكنني لا أعلمك برنامج Photoshop. لأن Photoshop معقد بلا داع لتصميم الويب. لكن الناس ما زالوا يعلمونها لمصممي الويب. أنا لا. أقوم بتدريس Figma – وهي أداة بسيطة تسيطر على عالم التصميم. ستقوم بتصميم موقع ويب كامل في غضون أسبوع بينما لا يزال الآخرون يتعلمون كيفية إنشاء تخطيطات أساسية في Photoshop.
  
  ثانياً، هذه دورة تطوير. لكنني لا أعلمك كيفية البرمجة. نظرًا لأن البرمجة في تصميم الويب معقدة بلا داعٍ وتستغرق وقتًا طويلاً للتعلم. بدلاً من ذلك، أقوم بتدريس Webflow – وهي الأداة التي تسيطر على عالم تصميم الويب. ستقوم بإنشاء مواقع ويب معقدة في غضون أسبوعين بينما لا يزال الآخرون يتعلمون أساسيات HTML وCSS. ثالثًا، هذه دورة تدريبية مستقلة. لكنني لا أعلمك فقط كيفية كتابة مقترحات رائعة. أقدم لك نموذج اقتراح فائز. عند الانتهاء من الدورة التدريبية، سيكون لديك موقع ويب مذهل للمحفظة يحتوي على أجزاء من المحفظة بالفعل. قم بشراء هذه الدورة التدريبية الآن وخذها في الوقت المناسب لك.`;
}
