define(['pipAPI', 'https://cdn.jsdelivr.net/gh/VUW-MCrawford/ST-IAT@main/STscript.js'], function(APIConstructor, stiatExtension){
	
	var API = new APIConstructor();
		  return stiatExtension({
		  category : { 
		    name : 'Immigrant', //Will appear in the data.
		    title : {
		      media : {word : 'Immigrant'}, //Name of the category presented in the task.
		      css : {color:'#257de6','font-size':'2em'}, //Style of the category title.
		      height : 7 //Used to position the "Or" in the combined block.
		    }, 
		    media : [ //Stimuli
    		    	{word : 'Immigrant'}, 
    			{word : 'Migrant'}, 
    			{word : 'Refugee'},
			{word : 'Foreigner'},
    			{word : 'Expatriate'}
		    ], 
		    //Stimulus css (style)
		    css : {color:'#000000','font-size':'3em'}
		  },	

  		attribute1 : 
			{
			name : 'Negative', //Attribute label
			title : {
				media : {word : 'Negative'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Terrible'},
				{word: 'Abuse'},
				{word: 'Sadness'},
				{word: 'Agony'},
				{word: 'Failure'},
				{word: 'Awful'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'3em'}
			},
		attribute2 : 
			{
			name : 'Positive', //Attribute label
			title : {
				media : {word : 'Positive'}, //Name of the category presented in the task.
				css : {color:'#31b404','font-size':'2em'}, //Style of the category title.
				height : 7 //Used to position the "Or" in the combined block.
			}, 
			media : [ //Stimuli
				{word: 'Paradise'},
				{word: 'Pleasure'},
				{word: 'Cheer'},
				{word: 'Wonderful'},
				{word: 'Splendid'},
				{word: 'Love'}
			], 
			//Can change color and size of the targets here.
			css : {color:'#000000','font-size':'3em'}
			},

  base_url : {//Where are your images at?
    image : 'https://baranan.github.io/minno-tasks/images/'
  }}
  );
  });
