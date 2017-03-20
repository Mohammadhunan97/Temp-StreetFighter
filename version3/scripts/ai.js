console.log('scripts/ai.js is available');
function ai(hero_object){
	setInterval(function(){
				console.log(attk1_pressed + 'attk1 wutt');
		let temp2 = getRand(100,1);
		let temp3 = getRand(10,1);
		let temp4 = getRand(10,1);
		let temp6 = getRand(10,1);
	/*move left or right*/
		if(hero_object.x < player1.x){
			hero_object.x += temp2;
			move_horizontal(hero_object);
		}else{
			hero_object.x -= temp2;
			move_horizontal(hero_object);
		}
		if(attk1_pressed === true || attk2_pressed === true || attk3_pressed === true || attk4_pressed === true || attk5_pressed === true){
			console.log('HE IS ATTACKING');
			if(temp6 > 5){
				jump(hero_object);
				setTimeout(function(){
					hero_object.y = 700;
					move_vertical(hero_object);
					hero_object.me.className = hero_object.classKey +'_breather_main';
				},300)	
				
			}
		}
	let temp = list_of_heros[returnOthers(list_of_heros,hero_object.heros_index)];
	let temp5 = getRand(5,1);
	if(hero_object.x >= temp.x -200 && hero_object.x <= temp.x +20){
		console.log('test');
		if(hero_object.stamina_points > 100){
		if(temp5 === 1) punch_one(hero_object);
		if(temp5 === 2) punch_two(hero_object);
		if(temp5 === 3)	kick_one(hero_object);
		if(temp5 === 4)	kick_two(hero_object);
		hero_object.me.className += ' topdog';
		}else{
			hero_object.x += 100;
			move_horizontal(hero_object);
		}
	}
	},500);
}