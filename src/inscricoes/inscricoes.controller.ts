import { Controller, Post, Body} from '@nestjs/common';
import { InscricoesService } from './inscricoes.service';
import { CreateInscricaoDto } from './dto/create-inscricao.dto';


@Controller('inscricoes')
export class InscricoesController {

  constructor(private readonly inscricoesService: InscricoesService) {}


  @Post()
  create(@Body() createInscricaoDto: CreateInscricaoDto)  {
    return this.inscricoesService.create(createInscricaoDto);
    
  }
 

}
