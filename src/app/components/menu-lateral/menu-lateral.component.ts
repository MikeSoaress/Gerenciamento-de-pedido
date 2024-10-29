import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public alternaSubMenu(id : string): void  {
    var elemento = document.getElementById(id);
    var menu = elemento?.querySelector('[name="menu"]');
    var submenus = elemento?.querySelector('[name="submenu"]');
    var icone_seta = elemento?.querySelector('[name="icone_menu"]');

    var acao = submenus?.classList.contains('sub-menu-on') ? 'desativar' : 'ativar';
  
    if(acao == "ativar"){
      submenus?.classList.add('sub-menu-on');
      menu?.classList.add('item-menu-colapse-on');
      icone_seta?.classList.add('icone-menu-aberto');
    }
  
    else{
      submenus?.classList.remove('sub-menu-on');
      menu?.classList.remove('item-menu-colapse-on');
      icone_seta?.classList.remove('icone-menu-aberto');
    }
  }
}


