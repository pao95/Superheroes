import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {


resultadosArr: any []=[];

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) { 

      this.activatedRoute.params.subscribe( params =>{
        this.resultadosArr = this.heroesService.getBuscarHeroes(params['termino']);
        }
      )
      console.log(this.resultadosArr);
  }

  ngOnInit() {
  }

  public verMas(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }
  

}
