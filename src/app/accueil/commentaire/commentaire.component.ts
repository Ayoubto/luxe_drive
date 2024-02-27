import { Component } from '@angular/core';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent {
  feedbackList = [
    {
      text: "Wow, what an amazing experience! Yalla Bina truly brings the vibrant culture of Morocco to life. From cooking with locals to immersing myself in traditional activities, every moment felt like a celebration. Highly recommend for anyone looking to explore Morocco in a unique and authentic way",
      auteur: "Sarah Johnson",
      location: "Agence de Tanger Ville",
      image: "client1"
    },
    {
      text: "Quelle expérience incroyable! Yalla Bina nous plonge vraiment dans la culture vibrante du Maroc. Des repas cuisinés avec des locaux aux activités traditionnelles, chaque instant était une célébration. Je le recommande vivement à tous ceux qui souhaitent explorer le Maroc de manière authentique et unique!",
      auteur: "Antoine Dubois",
      location: "Agence de Casablanca Ville",
      image: "client2"
    },
    {
      text: "تجربة مذهلة حقًا! يالا بنا تعيد لنا حياة ثقافة المغرب النابضة بالحياة. من الطبخ مع السكان المحليين إلى المشاركة في الأنشطة التقليدية، كان كل لحظة تشبه الاحتفال. أوصي به بشدة لأي شخص يرغب في استكشاف المغرب بطريقة فريدة وأصيلة!",
      auteur: "Fatima Ahmed",
      location: "Agence de Tanger Ville",
      image: "client3"
    },
    {
      text: "Was für ein unvergessliches Erlebnis! Yalla Bina hat mich tief in die faszinierende Kultur Marokkos eingetaucht. Von gemeinsamen Kocherlebnissen mit Einheimischen bis hin zu traditionellen Aktivitäten – ich habe jede Minute genossen. Absolut empfehlenswert für alle, die Marokko auf eine einzigartige und authentische Weise erleben möchten!",
      auteur: "Charlotte Vezzani",
      location: "Agence de Tanger Aéroport",
      image: "client4"
    },
    {
      text: "¡Qué experiencia increíble! Yalla Bina realmente nos sumerge en la vibrante cultura de Marruecos. Desde cocinar con lugareños hasta participar en actividades tradicionales, cada momento se sintió como una celebración. ¡Lo recomiendo encarecidamente a cualquiera que quiera explorar Marruecos de una manera única y auténtica!",
      auteur: "Javier Lopez",
      location: "Agence de Tanger Aéroport",
      image: "client4"
    },
  ];

  currentFeedbackIndex = 0;

  showNextFeedback() {
    this.currentFeedbackIndex = (this.currentFeedbackIndex + 1) % this.feedbackList.length;
  }

  showPreviousFeedback() {
    this.currentFeedbackIndex = (this.currentFeedbackIndex - 1 + this.feedbackList.length) % this.feedbackList.length;
  }
}
