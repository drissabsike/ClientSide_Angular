import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoRightClick]'
})
export class NoRightClickDirective{

  /* Désactiver la fonction de clic droit en angulaire appelée depuis n'importe quel composant
  * évènement est généralement déclenché par un clic-droit (mouse)
  * en ajoutant "appNoRightClick" dans les balises HTML, desactiovation du click droit
   */
  @HostListener('contextmenu', ['$event'])
  onRightClick(event: any) {
    //Par défaut
    event.preventDefault();
  }

  constructor() { }

}
