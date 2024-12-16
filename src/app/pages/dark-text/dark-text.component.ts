import {Component} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';


@Component({
  selector: 'app-dark-text',
  standalone: true,
  imports: [],
  templateUrl: './dark-text.component.html',
  styleUrl: './dark-text.component.css'
})
export class DarkTextComponent {
  private rawHtml = "Oblivion Forge is a passionate game development studio dedicated to crafting immersive, story-rich experiences.\n" +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." + "Oblivion Forge is a passionate game development studio dedicated to crafting immersive, story-rich experiences.\n" +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play." +
    "        Our first project, <strong>Inner Convergence</strong>, blends psychological intrigue, strategic gameplay, and a\n" +
    "        deep narrative that stays with you long after you play."

  public New: SafeHtml;


  constructor(private sanitizer: DomSanitizer) {
    this.New = this.sanitizer.bypassSecurityTrustHtml(this.rawHtml);
  }
}
