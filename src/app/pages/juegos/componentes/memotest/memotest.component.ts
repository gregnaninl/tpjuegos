import { Component, OnInit , Input, Output,EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { Jugadores } from 'src/app/clases/jugadores';
import { Tarjeta } from 'src/app/clases/tarjeta';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none',
      })),
      state('flipped', style({
        transform: 'perspective(600px) rotateY(180deg)'
      })),
      state('matched', style({
        visibility: 'false',
        transform: 'scale(0.05)',
        opacity: 0
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('400ms')
      ]),
      transition('* => matched', [
        animate('400ms')
      ])
    ])
  ]
})
export class MemotestComponent implements OnInit {


 
  @Input() data!: Tarjeta;

  @Output() cardClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }





}
