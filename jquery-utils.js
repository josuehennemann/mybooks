$.widget( "mybooks.menu", {
    options: {
    	items:{},
    	classIcon:"",
        classText:"",	
    },
    _create: function() {
        var items = this.options.items;
        var ul = $( "<ul></ul>" );

        for (idx in items) {
        	var item = items[idx];
        		var li = $( "<li></li>" );        	
        	if (item.title){    //desenha como se fosse apenas o titulo
        		        		var span = $( "<span></span>" );
        		span.text(item.content); 
                li.append(span)		   		
        	}else{
        		var divIcon = $( "<div></div>" ); //cria a div para o icone
        		divIcon.addClass(this.options.classIcon);
        		if (typeof(item.classIcon)!="undefined"){ //se veio classe para o icone utiliza
        			divIcon.addClass(item.classIcon);
        		}     
        		li.append(divIcon);  	//adicion o icone na li	
        		//inicia o bloco de texto do menu
        		var divText =$( "<div></div>" );
        		divText.addClass(this.options.classText)
        		if (typeof(item.classText)!="undefined"){
        			divText.addClass(item.classText);
        		}     
        		divText.html(item.content); 
        		li.append(divText);
        		//finaliza o bloco de texto
        		li.append($( "<div></div>" )); //apenda uma div para realizar o clear both
        	}
        	ul.append(li);
        }
        this.element.append(ul);
    }
});