console.log('index.js is available');
let you, enemy;
let you_class_key;
let enemy_class_key;
let player1, player2;
let myAudio;
window.onload = function(){

	you = prompt("choose a character for yourself (type in 'ken' or 'alex' all letters lowercase)");
	enemy = prompt("choose an enemy character (type in 'ken' or 'alex' all letters lowercase)");	
	window.onmouseover = function(e){
		console.log('test');
		console.log('x pos is: ' + e.clientX + ' and y pos is ' + e.clientY);
	};
/* NOTE LINES 17 THROUGH 22 (audio loop) are not mine and taken from stackoverflow:
http://stackoverflow.com/questions/3273552/html5-audio-looping */
		myAudio = new Audio('streetfighter.mp3'); 
		myAudio.addEventListener('ended', function() {
			console.log(myAudio.currentTime);
		    this.currentTime = 0;
		    this.play();
		}, false);
		myAudio.play();


	if(you === 'ken') you_class_key = 'ken';
	if(you === 'alex') you_class_key = 'alex';
	if(enemy === 'ken') enemy_class_key = 'ken';
	if(enemy === 'alex') enemy_class_key = 'alex';

	player1 = new Hero(you,you_class_key,500,550,0);
	player2 = new Hero('evil' + enemy,enemy_class_key,1400,550,1);
	

	player1.move(player1,'ArrowLeft','ArrowUp','ArrowRight','ArrowDown','KeyX');
	player1.attack(player1,'KeyX','KeyC','KeyV','KeyB','KeyZ');
	player2.me.style.transform = 'scaleX('+ (-1) + ')';
	breath(player1);
	breath(player2);
	setInterval(function(){
	},1200);
	check_stamina(player1);
	check_stamina(player2);

	ai(player2);

	setInterval(function(){
		restore_stamina(player1);
		restore_stamina(player2);
	},1000,player1,player2);

	setInterval(function(){
		if(player1.y > 550 || player2.y < 550){
			player1.y = 550;
			move_vertical(player1);
			player1.me.className = player1.classKey + '_breather_main';
		}
	},1200);

	setInterval(function(){
	//	gravity(player1);
	//	gravity(player2);
	},1400,player1,player2);
} //end of window.onload