var query="google";
    var url = 'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&srsearch=' + query;
    var obs$ =  Rx.Observable.ajax({
        url:url,
        crossDomain:true
    })

    obs$.subscribe(function(resp){
      console.log(resp);
    })
