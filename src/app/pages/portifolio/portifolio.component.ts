import { Component } from '@angular/core';
import { SobreMimComponent } from '../../components/sobre-mim/sobre-mim.component';
import { HabilidadesComponent } from '../../components/habilidades/habilidades.component';
import { GraduacoesComponent } from '../../components/graduacoes/graduacoes.component';
import { ProjetosComponent } from '../../components/projetos/projetos.component';
import { OndeTrabalheiComponent } from '../../components/onde-trabalhei/onde-trabalhei.component';
import { VoluntariadoComponent } from '../../components/voluntariado/voluntariado.component';

@Component({
  selector: 'app-portifolio',
  standalone: true,
  imports: [
    SobreMimComponent,
    HabilidadesComponent,
    GraduacoesComponent,
    ProjetosComponent,
    OndeTrabalheiComponent,
    VoluntariadoComponent
  ],
  templateUrl: './portifolio.component.html',
  styleUrl: './portifolio.component.scss'
})
export class PortifolioComponent {

}
