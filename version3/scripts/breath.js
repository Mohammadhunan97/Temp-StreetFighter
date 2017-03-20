console.log('breath.js is available');

function breath(hero_object){
		hero_object.me.className = hero_object.classKey + '_breather_main';
	setTimeout(function(){
		hero_object.me.className += ' ' + hero_object.classKey + '_breather_first';
		setTimeout(function(){
			hero_object.me.className += ' ' + hero_object.classKey + '_breather_second';
		},333);
	},333);

}