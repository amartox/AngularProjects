import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', attackPower: 13, defensePower: 7, healthPower: 20, level: 1, image:'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/5/55/All_Might_Hero_Form_Full_Body.png/revision/latest?cb=20160116011411', levelGauge :0, specialAttackGauge:0 },
      { id: 12, name: 'Narco', attackPower: 10, defensePower: 10, healthPower: 20, level: 1, image:'https://vignette.wikia.nocookie.net/diablo/images/0/0e/Barbarian_heavy.jpg/revision/latest?cb=20080825214536', levelGauge :0, specialAttackGauge:0 },
      { id: 13, name: 'Bombasto', attackPower: 9, defensePower: 11, healthPower: 20, level: 1, image:'https://vignette.wikia.nocookie.net/vgcdatabase/images/e/e3/White_2.jpg/revision/latest?cb=20140422121018', levelGauge :0, specialAttackGauge:0 },
      { id: 14, name: 'Celeritas', attackPower: 15, defensePower: 5, healthPower: 20, level: 1, image:'https://static1.funidelia.com/57621-f4_big/fato-de-gladiadora-vitoriosa-para-mulher.jpg', levelGauge :0, specialAttackGauge:0 },
      { id: 15, name: 'Magneta', attackPower: 16, defensePower: 4, healthPower: 20, level: 1, image:'https://vignette.wikia.nocookie.net/marvelvscapcom/images/5/5e/Magneto.png/revision/latest?cb=20110720195237', levelGauge :0, specialAttackGauge:0 },
      { id: 16, name: 'RubberMan', attackPower: 11, defensePower: 9, healthPower: 20, level: 1, image:'https://images.halloweencostumes.com/products/42593/1-1/american-horror-story-rubber-man-classic-mens-costume.jpg', levelGauge :0, specialAttackGauge:0 },
      { id: 17, name: 'Dynama', attackPower: 12, defensePower: 8, healthPower: 20, level: 1, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqx4bSY4Q_Vl6gBGT_i-aRt2e-b0TdjnAzij64R15cOOctZXQq', levelGauge :0, specialAttackGauge:0 },
      { id: 18, name: 'Dr IQ', attackPower: 14, defensePower: 6, healthPower: 20, level: 1, image:'https://vignette.wikia.nocookie.net/saofanon/images/9/91/Ishida-uryu-ishida.jpg/revision/latest?cb=20130113234953', levelGauge :0, specialAttackGauge:0 },
      { id: 19, name: 'Magma', attackPower: 8, defensePower: 12, healthPower: 20, level: 1, image:'http://1.bp.blogspot.com/-3kcOLFqmjfg/VHavDweTvqI/AAAAAAAABJ0/TWUql7iB-1o/s1600/279.png', levelGauge :0, specialAttackGauge:0 },
      { id: 20, name: 'Tornado', attackPower: 7, defensePower: 13, healthPower: 20, level: 1, image:'http://www.desenhoswiki.com/Uploads/desenhoswiki.com/ImagensGrandes/diabo-tasmania-5-4.jpg', levelGauge :0, specialAttackGauge:0 },
      { id: 21, name: 'Kura', attackPower: 10, defensePower: 10, healthPower: 20, level: 1, image:'http://static.tumblr.com/89cf93c0836c2aa2cf51fc45216e05ec/lussarw/9WYn5v131/tumblr_static_5q76rajcj4kcwsoo4kgg0wkkw.png', levelGauge :0, specialAttackGauge:0 },
      { id: 22, name: 'Rage', attackPower: 11, defensePower: 9, healthPower: 20, level: 1, image:'https://vignette.wikia.nocookie.net/warriorsofmyth/images/d/d8/Pathfinder_rage_wight_by_willobrien-d9aygb9.jpg/revision/latest?cb=20151208195605', levelGauge :0, specialAttackGauge:0 }
    ];
    return {heroes};
  }
}