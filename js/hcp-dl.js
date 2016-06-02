        var Extend=function(des,src){
            for(var p in src){
            	des[p]=src[p]
            }
            return des;
		}
		Object.prototype.extend=function(obj){
         return Extend.apply(this,[this,obj]);
		}


        var Class={
			create:function(){
				return function(){
					this.initialize.apply(this,arguments);
				}
			}
		}


		var Information=Class.create();
		Information.prototype={
			initialize:function(account,password,name,sex,document_type,document_number,mobile_number,person_type){
            this.account=account;
            this.password=password;
            this.name=name;
            this.sex=sex;
            this.document_type=document_type;
            this.document_number=document_number;
            this.mobile_number=mobile_number;
            this.person_type=person_type;			
              },
		}
            
		var person=new Information('123','qwe');
		console.log(person0.password)
