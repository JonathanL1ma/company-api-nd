import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  fakeMenu = [
    'Suscríbite',
    'Planes',
    'Preguntas frecuentes',
    'Servicio al cliente',
    'Crear cuenta',
    'Iniciar sesión',
    'Jonathan',
    'Lima',
    'Políticas de Privacidad',
    'EULA',
  ];

  findMany = () => this.fakeMenu;
}
