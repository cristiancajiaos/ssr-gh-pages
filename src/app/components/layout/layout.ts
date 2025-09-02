import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: false,
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class Layout implements OnInit {

  public message: string = '';

  ngOnInit(): void {
    this.message = $localize`:bajada|Bajada de la vista principal@@postTitle:Descripción de las fotos`;
  }

}
