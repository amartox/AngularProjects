import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
 
import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
import { Enemy }         from '../Enemy';

import { trigger, state, style, transition, animate,keyframes } from '@angular/animations';


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css'],
  animations: [
    trigger('myanimationHero',[
      state('smaller',style({
          transform : 'translateX(0px)'
      })),
      state('larger',style({
          transform : 'translateX(0px)'
      })),
      //transition('smaller <=> larger',animate('500ms 1000ms ease-in')),
      //transition('larger <=> smaller',animate('500ms 1000ms ease-out')),
      transition('smaller <=> larger',animate(200, keyframes([
        style({transform :'translateX(50px)' }),
        style({transform :'translateX(0px)' }),
        style({transform :'translateX(50px)' }),
        style({transform :'translateX(0px)' }),
      ]))),
      transition('larger <=> smaller',animate(200, keyframes([
        style({transform :'translateX(50px)' }),
        style({transform :'translateX(0px)' }),
        style({transform :'translateX(50px)' }),
        style({transform :'translateX(0px)' }),
      ]))),

    ]),
    trigger('myanimationEnemy1',[
      state('smaller',style({
          transform : 'translateX(0px)'
      })),
      state('larger',style({
          transform : 'translateX(0px)'
      })),
      //transition('smaller <=> larger',animate('500ms 1000ms ease-in')),
      //transition('larger <=> smaller',animate('500ms 1000ms ease-out'))
      transition('smaller <=> larger',animate(200, keyframes([
        style({transform :'translateX(50px)' }),
        style({transform :'translateX(0px)' }),
        style({transform :'translateX(50px)' }),
        style({transform :'translateX(0px)' }),
      ]))),
      transition('larger <=> smaller',animate(200, keyframes([
        style({transform :'translateX(50px)' }),
        style({transform :'translateX(0px)' }),
        style({transform :'translateX(50px)' }),
        style({transform :'translateX(0px)' }),
      ]))),
    ]),
    trigger('myanimationEnemy2',[
      state('smaller',style({
          transform : 'translateX(0px)'
      })),
      state('larger',style({
          transform : 'translateX(0px)'
      })),
      //transition('smaller <=> larger',animate('500ms 1000ms ease-in')),
      //transition('larger <=> smaller',animate('500ms 1000ms ease-out'))
      transition('smaller <=> larger',animate(200, keyframes([
        style({transform :'translateX(50px)' }),
        style({transform :'translateX(0px)' }),
        style({transform :'translateX(50px)' }),
        style({transform :'translateX(0px)' }),
      ]))),
      transition('larger <=> smaller',animate(200, keyframes([
        style({transform :'translateX(0px)' }),
        style({transform :'translateX(50px)' }),
        style({transform :'translateX(0px)' }),
        style({transform :'translateX(50px)' }),
      ]))),
    ]),
  ]
})

export class BattleComponent implements OnInit {
  @Input() hero: Hero;
  stateHero: string = "larger";
  stateEnemy1: string = "larger";
  stateEnemy2: string = "larger";
  enemies : Enemy[] =[
    { 
      id: 1,
      name: 'Skeleton',
      attackPower: 10,
      defensePower: 5,
      healthPower: 30,
      level:2,
      totalXp: 5,
      image:'https://vignette.wikia.nocookie.net/uncyclopedia/images/b/b1/Skeleton_Warrior.jpg/revision/latest/scale-to-width-down/220?cb=20110813013830',
      class: 'enemy-selected',
      specialAttackGauge:0
    },
    { 
      id: 2,
      name: 'Spider',
      attackPower: 8,
      defensePower: 6,
      healthPower: 20,
      level:1,
      totalXp: 1,
      image:'https://thumbs.dreamstime.com/b/halloween-spider-spooky-cartoon-character-funny-trying-to-be-scary-ugly-98752221.jpg',
      class: '',
      specialAttackGauge:0
    }];
  selectedEnemy : Enemy = this.enemies[0];
  message : string = '';
  heroHealth : number = 0;
  totalEnemyAttack : number =0;

  constructor(private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  updateHero(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => 'saved');
  }
  goBack(): void {
    
    this.location.back();
  }

  attack(special:boolean = false):void{
    this.animateEnemy(this.selectedEnemy.id);
    if(this.heroHealth ==0){
      this.heroHealth = this.hero.healthPower;
    }
    
    if(special){
      this.selectedEnemy.healthPower -= parseInt((this.hero.attackPower*1.5 - this.selectedEnemy.defensePower).toFixed(0));
      this.hero.specialAttackGauge = 0;
    }
    else{
      if(this.hero.specialAttackGauge < 20)
        this.hero.specialAttackGauge += 5;
      this.selectedEnemy.healthPower -= (this.hero.attackPower - this.selectedEnemy.defensePower);
    }
    
    if(this.selectedEnemy.healthPower <=0)
    {
      this.hero.levelGauge += 5;
      this.levelCalc();
      if(this.enemies[0].healthPower > 0 ){
        this.selectedEnemy = this.enemies[0];
      }
      if(this.enemies[1].healthPower > 0){
        this.selectedEnemy = this.enemies[1];
      }
      this.setSelectedEnemy(this.selectedEnemy);
    }

    if(this.enemies[0].healthPower <= 0 && this.enemies[1].healthPower <= 0){
      //this.hero.healthPower = this.heroHealth;
      this.hero.specialAttackGauge = 0;
      this.levelCalc();
      //this.goBack();
      this.updateHero();
      this.message ='You Win';
      return;
    }
    //this.animateHero();
    this.enemyAttack();
  }

  enemyAttack():void{
    setTimeout(a=>{this.animateHero();
      if(this.selectedEnemy.specialAttackGauge < 20)
      {
        this.totalEnemyAttack = (this.selectedEnemy.attackPower - this.hero.defensePower);
        this.selectedEnemy.specialAttackGauge += 5;
      }else{
        this.totalEnemyAttack = parseInt((this.selectedEnemy.attackPower*1.5 - this.hero.defensePower).toFixed(0));
        this.selectedEnemy.specialAttackGauge =0;
      }

      if(this.totalEnemyAttack <0)
        this.hero.healthPower -= 0;
      else
        this.hero.healthPower -=  this.totalEnemyAttack;

      if(this.hero.healthPower <= 0){
        this.message = 'You Lose';
        this.hero.healthPower = this.heroHealth;
        this.levelCalc();
        this.updateHero();
        this.hero.healthPower =0;
      }
    },1000);
  }

  selectEnemy(event:any,selEnemy:Enemy):void{
    //alert(selEnemy.name);
    this.setSelectedEnemy(selEnemy);
    this.selectedEnemy = selEnemy;
  }

  setSelectedEnemy(selEnemy:Enemy){
    if(selEnemy.id == 1){
      this.enemies[0].class = 'enemy-selected'
      this.enemies[1].class = 'enemy-unselected'
    }
    if(selEnemy.id == 2){
      this.enemies[1].class = 'enemy-selected'
      this.enemies[0].class = 'enemy-unselected'
    }
  }

  levelCalc(){
    if(this.hero.levelGauge >= 10*this.hero.level){
      this.hero.levelGauge = this.hero.levelGauge - 10*this.hero.level;
      this.hero.level +=1;
      this.hero.attackPower += this.hero.level*0.2*10;
      this.hero.defensePower += this.hero.level*0.2*10;
      this.hero.healthPower = this.heroHealth + this.hero.level*0.2*20; 
    }
  }
  animateHero() {
    this.stateHero= this.stateHero == 'larger' ? 'smaller' : 'larger';
  }

  animateEnemy(enemyId:number) {
    if(enemyId ===1){
      this.stateEnemy1= this.stateEnemy1 == 'larger' ? 'smaller' : 'larger';
    }else{
      this.stateEnemy2= this.stateEnemy2 == 'larger' ? 'smaller' : 'larger';
    }
  }

}
