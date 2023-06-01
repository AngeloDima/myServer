import { Component } from '@angular/core';
import { ScuolaService } from 'src/app/scuola.service';
import { Studente } from 'src/app/studente';


@Component({
  selector: 'app-add-studente',
  templateUrl: './add-studente.component.html',
  styleUrls: ['./add-studente.component.scss']
})
export class AddStudenteComponent {


  constructor(private scuServ: ScuolaService) {

  }

  idSTU: number;
  nomeSTU: string;

  addStudent() {
    const nuovoStudente = new Studente(this.idSTU, this.nomeSTU);
    this.scuServ.addStudente(nuovoStudente).subscribe();
  }
}
