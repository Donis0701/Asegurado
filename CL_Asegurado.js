export default class CL_Asegurado {
    constructor(ced, estCiv, mont){
        this.ced = ced;
        this.estCiv = estCiv;
        this.mont = parseInt(mont);
    }

    setced(c){
        this._ced = c;
    }
    getced(){
       return this._ced;
    }

    setestCiv(e){
        this._estCiv = e;
    }
    getestCiv(){
       return this._estCiv;
    }

    setmont(m){
        this._mont = +m;
    }
    getmont(){
       return this._mont;
    }

     montoDePoliza(){
        if(this._estCiv == 1){
            return this.mont *0.07;
        }else if(this.estCiv == 2){
            return this.mont *0.09;
        }else if(this.estCiv == 3){
            return this.mont *0.05;
        }else if(this.estCiv == 4){
            return this.mont *0.04;
        
        }else if(this._estCiv == 5){
            return this._mont *0.08;
        }
    }
    

}