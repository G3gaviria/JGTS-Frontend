import { CommonModule  } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-artistas-grilla',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './artistas-grilla.component.html',
  styleUrl: './artistas-grilla.component.css'
})
export class ArtistasGrillaComponent {


  @Input() imagenArtista!: string
  @Input() cantante!: string 
  @Input() artistaDataID!: string
}
