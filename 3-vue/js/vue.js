const app = new Vue({
  el: '#j-app',
  data: {
    dCnt:0,//исходное количество товаров в корзине
    dCartHasProducts:false,
  },

  methods: {
    toCart: function(isMinus=false){
      let cnt = this.dCnt;
      if(!isMinus)
        cnt++;
      else{
        if(cnt > 0){
          cnt--;
        }
        else
          return false;
      }
      this.cartUpdate(cnt);
    },
    cartUpdate: function(cnt){
      localStorage.setItem('cartCnt', cnt);
      this.dCnt = cnt;
      this.dCartHasProducts = true;
    },
    //получить кол-во товаров из хранилища
    cartGet: function(){
    	myStorage = window.localStorage;
    	let cnt = localStorage.getItem('cartCnt');
    	return cnt;
    },
    
  },

  computed: {
    cCnt: {//количество товаров в корзине из хранилища
	    get: function () {
	    	let cnt = this.cartGet();
	    	this.dCnt = cnt;
	      	return this.dCnt;
	    },
	    set: function () {
	    }
    },
    сCartHasProducts:{
      get:function(){
        let res = (this.dCnt>0) ? true : false;
        this.dCartHasProducts = res;
        return res;

      },
      set:function(){

      },
    },

  }

});