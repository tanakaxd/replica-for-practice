$(function(){
	var $win = $( window );
	var $header = $( '#header' );
	var $this = $( this );

	$win.on( 'scroll', function() {
	  if ( 400 > $this.scrollTop() ) {

			if($win.width()<=1200){
	  			$header.hide();
	  		}else{
	    		$header.slideUp(500);
	  		}

	  } else if( 4500 < $this.scrollTop() ){

	  		if($win.width()<=1200){
	  			$header.hide();
	  		}

	  } else {

			if($win.width()<=1200){
		  		$header.show();
		  	}else{
		    	$header.slideDown(500);
		  	}

	  }


	});



});

// if(hide-lxのdisplay:noneでないなら / 画面の幅が一定以上なら){
// 	$( '#header' ).removeClass( 'm_fixed' );
// }