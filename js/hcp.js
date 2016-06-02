$(function(){
//登录
     //侧边
    $('header .top .cb').click(function(){
       $('body .cebian .huanyeh').hide();
       tuih.remove()
        $('header .top .main').slideToggle();
    })
//注册登录换页
    $('header .huanye').each(function(i){
        $(this).click(function(){
            $('body .cebian .huanyeh').hide()
            $('body .cebian .huanyeh:eq('+i+')').slideDown()
            tuih.remove()
        })
    })
    //返回
    $('body .cebian .fh').each(function(i){
        $(this).click(function(){
        $('body .cebian .huanyeh:eq('+i+')').hide();
        $('header .top .main').slideDown()   
        })
    })

  
    //
    $('header .huanye0').each(function(i){
        $(this).click(function(){
            $('header .top .main').hide()
            $('body .cebian .huanyeh:eq('+i+')').slideDown()            
        })
    })
     //关闭
    $('body .cebian .x').each(function(i){
        $(this).click(function(){
      $('body .cebian .huanyeh:eq('+i+')').slideUp()
        })
    })
    //退出
    var tuih=$('<h1>谢谢使用!</h1>')
    $('body .cebian .tc button:first').click(function(){
        $('body .cebian .tc').hide();
        
        tuih.appendTo($('body'))
        tuih.css({
            width:'80%',
            height:'300px',
            backgroundColor:'rgba(0,0,0,0.5)',
            position:'fixed',
            top:'100px',
            zIndex:'200',
            color:'white',
            'margin-left':'10%',
            borderRadius:'5px',
            textAlign:'center',
            lineHeight:'300px',
            // 'padding':'20px',
         ' background-image':'url(../images/100612235879db6c3396c1fa4a.jpg)',


            
        })
        // .fadeIn()
    })
               
   
   
//换页
    $('.center li:eq(0)').show();
    $('.center li:gt(0)').hide();
    $('header nav li').each(function(i){
    	$(this).click(function(){
    		$('.center li').fadeOut();
    		$('.center li:eq('+i+')').fadeIn();
    	})
    })


//站站
	$('.zz_show button').click(function(){
        $('.center .result table:gt(0)').remove();
		var start=$('.zz_show input[placeholder="出发站"]').val()
        var end=$('.zz_show input[placeholder="目的站"]').val()
        var time=$('.zz_show input[placeholder="出发日期(2016-05-01)"]').val()
		$.ajax({
			url:'http://apis.baidu.com/qunar/qunar_train_service/s2ssearch',
			type:'GET',
			headers:{'apikey':'385e67a039740d135d508e05139097ff'},
		    data:{from:start,to:end,date:time},
			dataType:'json',
			success:function(data){
             $.each(data.data.trainList,function(i,v){
             	var table=$('<table></table>');
             	var tr1=$('<tr></tr>');
             	var tr1_td1=$('<td>'+v.trainNo+'</td>')
             	var tr1_td2=$('<td>'+v.startTime+'</td>')
             	var tr1_td3=$('<td>'+v.from+'</td>')
             	var tr1_td4=$('<td>￥'+v.seatInfos[0].seatPrice+'</td>')
               tr1.append(tr1_td1).append(tr1_td2).append(tr1_td3).append(tr1_td4)
             	var tr2=$('<tr></tr>');
             	var tr2_td1=$('<td>'+v.duration+'</td>');
             	var tr2_td2=$('<td>'+v.endTime+'</td>');
             	var tr2_td3=$('<td>'+v.to+'</td>');
             	var tr2_td4=$('<td><button>余票信息</button></td>');
               tr2.append(tr2_td1).append(tr2_td2).append(tr2_td3).append(tr2_td4)
             
             table.append(tr1).append(tr2);
             $('.center .zz_show .result').append(table);
             table.addClass('zz_table')

//余票信息
             
             // $('.center .zz_show .result button').each(function(x){
             //    $(this).click(function(){
             //        alert(v.seatInfos)
             //         $.each(v.seatInfos,function(i,n){
             //              // alert(n.seatPrice+' '+n.seat+' '+n.remainNum)
             //         })
             //    })
             // })
             
 $('.center .zz_show table').each(function(){
        $(this).delegate('button','click',function(){
        $('.center .zz_show .result').slideUp();
        $('.center .zz_show .result_yp').slideDown();
      })
    })
   
$('.center .zz_show .result_yp button').click(function(){
     $('.center .zz_show .result').slideDown();
        $('.center .zz_show .result_yp').slideUp();
})




             })
			}
		})
	})

//车次查询
$('.cc_show .cx').click(function(){
    var train=$('.cc_show .xx input[placeholder="车次"]').val();
    var time=$('.cc_show .xx input[placeholder="出发日期(2016-05-01)"]').val();
      $.ajax({
    
     url:'http://apis.baidu.com/qunar/qunar_train_service/traindetail',
     type:'GET',
     headers:{'apikey':'385e67a039740d135d508e05139097ff'},
     data:{train:train,date:time},
     // dataType:'json',
     success:function(data){
        // alert(data)

     $('.cc_show .result .base_table tr:eq(1)').remove();
     $('.cc_show .result table:gt(0)').remove();

     var totalMileage=data.data.extInfo.totalMileage;
     var totalTime=data.data.extInfo.totalTime;
     var tr=$('<tr></tr>')
     var td1=$('<td>'+totalMileage+'</td>');
     var td2=$('<td>'+totalTime+'</td>');
     tr.append(td1).append(td2);
     $('.cc_show .result .base_table').append(tr);
     //checixinxi
     var table0=$('<table></table>');
     var xinxi=data.data.info.head;
        var tr1=$('<tr><td>'+xinxi[0]+'</td><td>'+xinxi[3]+'</td><td>'+xinxi[6]+'</td><td>'+xinxi[9]+'</td></tr>')
        var tr2=$('<tr><td>'+xinxi[1]+'</td><td>'+xinxi[4]+'</td><td>'+xinxi[7]+'</td><td>'+xinxi[10]+'</td></tr>')
        var tr3=$('<tr><td>'+xinxi[2]+'</td><td>'+xinxi[5]+'</td><td>'+xinxi[8]+'</td><td>'+xinxi[11]+'</td></tr>')
      table0.appendTo('.cc_show .result');
      table0.addClass('zz_table')
      table0.append(tr1).append(tr2).append(tr3);
      
      $.each(data.data.info.value,function(i,v){
        var table1=$('<table></table>');
      table1.appendTo('.cc_show .result');
      table1.addClass('zz_table')
        var tr11=$('<tr><td>'+v[0]+'</td><td>'+v[3]+'</td><td>'+v[6]+'</td><td>'+v[9]+'</td></tr>')
        var tr22=$('<tr><td>'+v[1]+'</td><td>'+v[4]+'</td><td>'+v[7]+'</td><td>'+v[10]+'</td></tr>')
        var tr33=$('<tr><td>'+v[2]+'</td><td>'+v[5]+'</td><td>'+v[8]+'</td><td>'+v[11]+'</td></tr>')
       table1.append(tr11).append(tr22).append(tr33)
      })
     
     }
   })
})   
//余票
$('.yp_show .cx').click(function(){
     $('.center .result table:gt(0)').remove();
        var start=$('.zz_show input[placeholder="出发站"]').val()
        var end=$('.zz_show input[placeholder="目的站"]').val()
        var time=$('.zz_show input[placeholder="出发日期(2016-05-01)"]').val()
        $.ajax({
            url:'http://apis.baidu.com/qunar/qunar_train_service/s2ssearch',
            type:'GET',
            headers:{'apikey':'385e67a039740d135d508e05139097ff'},
            // data:{from:start,to:end,date:time},
                        data:{from:'烟台',to:'济南',date:'2016-05-01'},

            dataType:'json',
            success:function(data){

                
                $.each(data.data.trainList,function(i,v){
                       var checi=v.trainNo;
                    var table=$('<table></table>');
                    var tr1=$('<tr><td>车次</td></tr>')
                    var tr2=$('<tr><td>'+v.trainNo+'</td></tr>')
                    $.each(v.seatInfos,function(i,x){
                        var seat=x.seat;
                        //var seatPrice=x.seatPrice;
                        var number=x.remainNum;  
                var td1=$('<td>'+seat+'</td>');
                var td2=$('<td>'+number+'</td>');

                 tr1.append(td1);
                 tr2.append(td2)
                                 

                    })
                   table.appendTo($('.yp_show .result'));
                  table.append(tr1).append(tr2)  
                  // table.css({border:'1px solid','width':'80%','margin-left':'10%'})
 

                })
            }
        })
})
	
})