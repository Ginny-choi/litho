;(function($){

    var litho = {   
        btn:0,     ///헤더 영역에서 모바일 버튼 클릭시 변경  (btn=1) 프로퍼티 == 멤버 
        init: function(){  //메서드 == 리터럴 함수 == 객체 함수 == 멤버함수
            this.scrollEventFn();  //여기에서 btn 멤버변수 가져다가 사용함 
            this.heaerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
        },

        scrollEventFn:function(){
         var scrollOld  = 0;
         var scrollNew  = 0;
         var $win = $(window);
         var result = null;  //스크롤하면 널이 사라진다 (값이 생긴다)
         var $header = $('#header');
         var that = this;
         var $logoImg     = $('#header #logo a img');

            function scrollEvent(){
              scrollNew = $win.scrollTop();
              var scr = function(){  //리터럴 함수(익명함수)
                result =  scrollOld-scrollNew > 0 ? 'UP' : 'DOWN' ;
                    // if( scrollOld-scrollNew > 0){
                    //     result = 'UP' ; 
                    // }
                    // else{
                    //   result = 'DOWN';
                    // }
              }
              scr();

              if( $win.scrollTop() == 0 ){
                $header.removeClass('addHide');
                $header.removeClass('addBlack');
                $header.removeClass('addWhite');
               
              }
              else{
                  //조건문
              if(result == 'UP'){

                if(that.btn == 1){
                  $header.removeClass('addHide');
                  $header.addClass('addBlack');
                  $header.addClass('addWhite');
                }
                else{
                  $header.removeClass('addWhite');
                  $header.removeClass('addHide');
                  $header.addClass('addBlack');
                  $logoImg.attr('src','./img/logo-yellow-ochre-alt.png');
                }
                

                  
              }
              if(result == 'DOWN'){
                //모바일 햄버거 버튼이 클릭된 상태의 이벤트
                if( that.btn == 1 ){
                  $header.removeClass('addBlack');
                  $header.removeClass('addHide'); 
                  $header.addClass('addWhite');
                }
                else{
                  $header.removeClass('addWhite');
                  $header.removeClass('addBlack');
                  $header.addClass('addHide');   
                }
              }
            }
              
            
              scrollOld = scrollNew;

            }

            $win.scroll(function(){
              scrollEvent();
            });
        },

        heaerFn:function(){
 

                //메인메뉴, 서브메뉴 객체와 배열
                var lithoNav = {
                    sub1:[
                      {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agency"]},
                      {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
                      {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
                      {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
                    ],
                    sub2:[
                      {sub:"About", subsub:["About me","About us","Our story","Who we are"]},
                      {sub:"Services", subsub:["Our services","What we offer","Our process"]},
                      {sub:"Contact", subsub:["Contact simple","Contact classic","Contact modern"]},
                      {sub:"Additional pages", subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}
                    ],
                    sub3:[
                      {sub:"Portfolio classic", subsub:["Classic 2 column","Classic 3 column","Classic 4 column","Classic masonry","Classic metro"]},
                      {sub:"Portfolio boxed", subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
                      {sub:"Portfolio colorful", subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
                      {sub:"Portfolio bordered", subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
                      {sub:"Portfolio overlay", subsub:["Overlay 2 column","Overlay 3 column","Overlay 4 column","Overlay masonry","Overlay metro"]},
                      {sub:"Portfolio switch image", subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
                      {sub:"Portfolio other", subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
                      {sub:"Single project page", subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]}
                    ],
                    sub4:[
                      {sub:["General","Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
                      {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
                      {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
                      {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]}
                    ],
                    sub5:[
                      {
                        sub:"Header and menu",
                        subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"],
                        subsubsub:{
                          subsubsub1:["Hamburger menu","Hamburger menu modern","Hamburger menu hal"],
                          subsubsub2:["Left menu classic","Left menu modern"],
                          subsubsub3:["Always fixed","Disable fixed","Reverse scroll","Responsive sticky"],
                          subsubsub4:["Classic","Modern","Full screen"]
                        }               
                      },
                      {
                        sub:"Footer", 
                        subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]
                      },
                      {
                        sub:"Page title", 
                        subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]
                      },
                      {
                        sub:"Modal popup", 
                        subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]
                      },
                      {
                        sub:"Icon packs", 
                        subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line"]
                      },
                      {
                        sub:"Animations"
                      }
                    ], 
                    sub6:[
                      {sub:"Blog grid"},                      
                      {sub:"Blog masonry"},                      
                      {sub:"Blog classic"},                      
                      {sub:"Blog simple"},                      
                      {sub:"Blog side image"},                      
                      {sub:"Blog metro"},                      
                      {sub:"Blog overlay image"},                      
                      {sub:"Blog modern"},                      
                      {sub:"Blog clean"},                      
                      {sub:"Blog widget"},                      
                      {sub:"Blog standard"},                      
                      {sub:"Post layout", subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},                      
                      {sub:"Post types", subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width pos"]},                      
                    ],
                    sub7:[
                      {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product","Utility pages","Shopping cart","Checkout","Login / Register"]},
                      {sub:["menu-banner-01.jpg"]},
                      {sub:["menu-banner-02.jpg"]}
                    ]
                }  //litho 객체 배열 메뉴

                function subObjectArrayFn(){

                //litho 객체 배열 서브 메뉴를 
                //콤포넌트 요소에 넣기
                //서브1 코딩
                var $col = $('#nav .col');
                var txt = '';

                    //sub1 :  4열
                    //서브1 그룹 : 1~4열 반복
                    for(var i in lithoNav.sub1){
                      for(var j in lithoNav.sub1[i].sub){
                        if(j==0){
                          txt =  "<dt>" + lithoNav.sub1[i].sub[j] + "</dt>"; //서브메뉴 타이틀
                        }
                        else{
                          txt += "<dd><a href='#'>" + lithoNav.sub1[i].sub[j] + "</a></dd>"; //서브메뉴 목록                  
                        }
                      }
                      $col.eq(i).html( txt );
                      txt ='';
                    }



                    //sub2 :  4행
                    //subsub 

                    var $subBtn = $('.sub2 .sub-btn'); //서브메뉴버튼 텍스트만
                    var $subsubUl = $('.sub2 .subsub'); //li a 서브서브메뉴 텍스트

                    //서브메뉴
                    for(var i in lithoNav.sub2){ // 0 ~ 3 (4행 반복)
                      txt = lithoNav.sub2[i].sub;
                      $subBtn.eq(i).html(txt);
                      txt = '';
                    }


                    //서브서브메뉴
                    //서브2 : sub2[0] > subsub[0 ~ 3]
                    for(var i in lithoNav.sub2){
                      for(var j in lithoNav.sub2[i].subsub){
                        txt += "<li><a href='#'>" + lithoNav.sub2[i].subsub[j] + "</a></li>"
                      }
                      $subsubUl.eq(i).html(txt); //<ul></ul> 태그 사이에 추가(Append)
                      txt = "";  
                    }



                    //서브3 
                    var $sub3Btn =  $('.sub3 .sub-btn');
                    var $sub3Sub =  $('.sub3 .subsub'); //ul
                    var imsi = '';

                        //서브3 > 서브메뉴
                        for(var i in lithoNav.sub3){
                          txt = lithoNav.sub3[i].sub; //서브3 > 서브메뉴
                          imsi = $sub3Btn.eq(i).html(); //버튼 내용이 임시에 저장
                          txt += imsi;  //우측에 화살모양 아이콘 추가 i태그
                          $sub3Btn.eq(i).html( txt );
                          txt = '';  
                        }

                        //서브3 > 서브서브메뉴 8개
                        for(var i in lithoNav.sub3){ //행 0 ~ 7
                          for(var j in lithoNav.sub3[i].subsub){ //열
                            txt += "<li><a href='#'>"+lithoNav.sub3[i].subsub[j]+"</a></li>";
                          }
                          $sub3Sub.eq(i).html(txt);
                          txt = '';
                        }
                        



                    //서브4
                    var $sub4Menu = $('.sub4 .sub-menu');

                        for(var i in lithoNav.sub4){
                          for(var j in lithoNav.sub4[i].sub){
                            if(j==0){
                              txt += "<dt>" + lithoNav.sub4[i].sub[j] + "</dt>";
                            }
                            else{
                              txt += "<dd><a href='#'>" + lithoNav.sub4[i].sub[j] + "</a></dd>";
                            }
                          }
                         $sub4Menu.eq(i).html( txt );
                          txt ='';
                        }


                    //sub5
                    var $sub5Btn = $('.sub5 .sub-btn');    
                    var $sub5Menu = $('.sub5 .sub-menu');    

                        
                        for(idx in lithoNav.sub5){ //0~5
                          txt = lithoNav.sub5[idx].sub; //서브메뉴 가져오기
                          imsi = $sub5Btn.eq(idx).html(); //아이콘 가져오기
                          txt += imsi;
                          $sub5Btn.eq(idx).html(txt);
                          txt = '';

                          if(idx==0){  //0 서브서브서브

                            for(i in lithoNav.sub5[idx].subsub){
                              if(i < 9){ //0 ~ 8
                                txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"</a></li>"; //서브서브 가져오기
                              }
                              else{ //9 ~ 12
                                txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"<i class='fas fa-angle-right'></i></a></li>"; //서브서브 가져오기
                              }
                              
                            }                   
                            $sub5Menu.eq(idx).html(txt);
                            txt = '';
    
    
    
                            //4Depth
                            //서브서브서브 메뉴 10번째
                            txt += $('.sub5-sub1>div>ul>li').eq(9).html(); //10번째 내용 가져오기                       
                            txt += "<div class='sub-sub-sub  sub5-sub1-sub10'>";
                            txt += "  <div class='sub-sub-sub-gap'>";
                            txt += "      <ul>";
                            txt += "          <li><a href='#'>Hamburger menu</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu half</a></li>";
                            txt += "      </ul>";
                            txt += "  </div>";
                            txt += "</div>";
                            $('.sub5-sub1>div>ul>li').eq(9).html( txt );
                            txt = '';                        
    
    
                            //서브서브서브 메뉴 11번째
                            txt += $('.sub5-sub1>div>ul>li').eq(10).html(); //11번째 내용 가져오기                       
                            txt += "<div class='sub-sub-sub  sub5-sub1-sub11'>";
                            txt += "  <div class='sub-sub-sub-gap'>";
                            txt += "      <ul>";
                            txt += "          <li><a href='#'>Hamburger menu</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
                            txt += "      </ul>";
                            txt += "  </div>";
                            txt += "</div>";
                            $('.sub5-sub1>div>ul>li').eq(10).html( txt );
                            txt = '';
    
    
    
                            //서브서브서브 메뉴 12번째
                            txt += $('.sub5-sub1>div>ul>li').eq(11).html(); //12번째 내용 가져오기                       
                            txt += "<div class='sub-sub-sub  sub5-sub1-sub12'>";
                            txt += "  <div class='sub-sub-sub-gap'>";
                            txt += "      <ul>";
                            txt += "          <li><a href='#'>Hamburger menu</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu half</a></li>";
                            txt += "      </ul>";
                            txt += "  </div>";
                            txt += "</div>";
                            $('.sub5-sub1>div>ul>li').eq(11).html( txt );
                            txt = '';
    
    
                            //서브서브서브 메뉴 13번째
                            txt += $('.sub5-sub1>div>ul>li').eq(12).html(); //13번째 내용 가져오기                       
                            txt += "<div class='sub-sub-sub  sub5-sub1-sub13'>";
                            txt += "  <div class='sub-sub-sub-gap'>";
                            txt += "      <ul>";
                            txt += "          <li><a href='#'>Hamburger menu</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu modern</a></li>";
                            txt += "          <li><a href='#'>Hamburger menu half</a></li>";
                            txt += "      </ul>";
                            txt += "  </div>";
                            txt += "</div>";
                            $('.sub5-sub1>div>ul>li').eq(12).html( txt );
                            txt = '';
                            //서브서브서브 메뉴 13번째 끝
                            //sub5-sub1 끝
    
    
                          }
                          else if(idx>0 && idx<5){  //1 ~ 4
                            for(i in lithoNav.sub5[idx].subsub){
                              txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[idx].subsub[i] +"</a></li>"; //서브서브 가져오기
                            }
                            $sub5Menu.eq(idx).html(txt);
                            txt = '';    
                          }

                        }

                      //서브6
                      var $sub6Btn = $('.sub6 .sub-btn'); //서브메뉴버튼 텍스트만
                      var $ul12 = $('.sub6 .sub6-sub12 ul');    //li a 서브서브메뉴 텍스트
                      var $ul13 = $('.sub6 .sub6-sub13 ul');    //li a 서브서브메뉴 텍스트

                          //서브
                          for(i in lithoNav.sub6){ //0 ~ 12
                              if(i<11){ //0 ~ 10
                                $sub6Btn.eq(i).html( lithoNav.sub6[i].sub );
                              }
                              else{
                                $sub6Btn.eq(i).html( lithoNav.sub6[i].sub + "<i class='fas fa-angle-right'></i>" );      
                              }
                          }                          

                          //서브서브 12
                          for(i in lithoNav.sub6[11].subsub){
                            txt += "<li><a href='#'>" + lithoNav.sub6[11].subsub[i] + "</a></li>";   
                          }                         
                          $ul12.html( txt );
                          txt = '';

                          //서브서브 13
                          for(i in lithoNav.sub6[12].subsub){
                            txt += "<li><a href='#'>" + lithoNav.sub6[12].subsub[i] + "</a></li>";   
                          }                         
                          $ul13.html( txt );
                          txt = '';

                          //sub7
                          var $sub7Dl1 = $('.sub7 dl').eq(0);
                          var $sub7Img = $('.sub7 dl img');    //이미지 2개
                          

                              for(i in lithoNav.sub7[0].sub){ //0 ~ 9
                                if( i==0 || i==6 ){ // || or 0 또는 6
                                  txt += "<dt>" + lithoNav.sub7[0].sub[i] + "</dt>";
                                }
                                else{ //나머지  1 2 3 4 5 7 8 9
                                  txt += "<dd><a href='#'>" + lithoNav.sub7[0].sub[i] + "</a></dd>";
                                }
                              }
                              $sub7Dl1.html( txt );
                              txt = '';



                              //이미지  
                              for(var i=0; i<$sub7Img.length; i++){
                                txt = $sub7Img.eq(i).attr('src'); //./img/
                                txt += lithoNav.sub7[i+1].sub[0];   //menu-banner-01.jpg  
                                $sub7Img.eq(i).attr('src', txt ); //./img/menu-banner-01.jpg 
                                txt = '';
                              }

                } //객체 배열 함수 끝

                subObjectArrayFn();


              //네비게이션
              
              var $window      =  $(window);
              var $mainBtn     =  $('#header .main-btn');
              var $subBtn      =  $('#header .sub-btn');              
              var $subSubBtn   =  $('#header .sub-sub-btn');  

              var $sub         =  $('#header .sub');
              var $subSub      =  $('#header .sub-sub');          
              var $subSubSub   =  $('#header .sub-sub-sub');  
              var $navUlLi     =  $('#header #nav>ul>li');

              var $mobileBtn   = $('#header .mobile-btn');
              var $bar         = $('#header .bar');
              var $nav         = $('#nav');
              var pc           = 0;
              var mobile       = 0;
              var $logoImg     = $('#header #logo a img');
              var that = this;  //litho 객체  

              //980px 초과에서만 클릭 이벤트 
              function pcEventFn(){
                
                $nav.stop().show();
                $sub.stop().hide();
                $subSub.stop().hide();
                $subSubSub.stop().hide();
                $nav.css({display:'inline-block'});
                $logoImg.attr('src','./img/logo-white.png');
               
            
                  //1Depth 이벤트
                  $mainBtn.on({
                    mouseenter:function(e){
                      e.preventDefault();
                      $(this).next().stop().show(); 
                    }
                  });

                  
                  $navUlLi.on({
                    mouseleave:function(e){
                      e.preventDefault();
                      $sub.stop().hide();  
                    }
                  });  
  
                  //2Depth 이벤트
                 
                  $subBtn.on({
                    mouseenter:function(e){
                      e.preventDefault();
                      $subSub.stop().hide();
                      $(this).next().stop().show(); 
                    }
                  });

                  $navUlLi.on({
                    mouseleave:function(e){
                      e.preventDefault();
                      $subSub.stop().hide(); 
                    }
                  });

                //3Depth 이벤트
               
                    $subSubBtn.on({
                      mouseenter:function(e){
                        e.preventDefault();
                        $subSubSub.stop().hide();      
                        $(this).next().stop().show(); 
                      }
                    });

                    $subSub.on({
                      mouseleave:function(e){
                        e.preventDefault();
                        $subSubSub.stop().hide();      
                      }
                    });

                  }//pc 이벤트 끝

                  //980px 이하에서만 클릭 이벤트 
                    ///모바일메뉴 
                  function mobileEventFn(){
                    $sub.stop().hide();
                    $subSub.stop().show();
                    $subSubSub.stop().show();
                  

                    $bar.removeClass('addMobile');
                    $nav.stop().slideUp(0);

                    $logoImg.attr('src','./img/logo-yellow-ochre-alt.png');

                    ///이벤트 삭제하기 
                    $mainBtn.off('mouseenter');
                    $navUlLi.off('mouseleave');        
                    $subBtn.off('mouseenter');
                    $navUlLi.off('mouseleave');
                    $subSubBtn.off('mouseenter');
                    $subSub.off('mouseleave');

                    
                 
                        

                      }//모바일 이벤트 끝

                     

                      function pcMobileFn(){
                        if( $window.innerWidth() > 980){
                          pc=1;
                          mobile=0;
                          pcEventFn();
                          that.btn = 0;  //pc 데스크탑에서 초기화 
                       }
                        else {
                          pc=0;
                          mobile=1;
                          mobileEventFn();  
                        }
                       }
                
                      setTimeout(pcMobileFn,100) //로딩시

                      //pc /mobile
                      $window.resize(function(){
                        pcMobileFn();
                      });

                      mobileEventFn(); 

                       //메인 메뉴 버튼 
                       $mainBtn.on({
                        click:function(e){
                          e.preventDefault();                  
                          if(mobile == 1){
                            $sub.stop().slideUp(300);
                            $(this).next().stop().slideToggle(300); //서브메뉴 펼치기 
                            }                       
                        }
                      });


                      //모바일에서만 동작함 그래서 반응형에서 빼주고 따로 실행/아닐시 버블링 발생
                       //3선메뉴 (햄버거메뉴)
                       $mobileBtn.on({
                        click: function(e){
                          e.preventDefault();
                          $bar.toggleClass('addMobile');  //add+remove 
                          $nav.stop().slideToggle(300);

                          that.btn == 0 ? that.btn = 1 : that.btn = 0;  //전역변수 (전역멤버 변수 )
                          // if( that.btn == 0){
                          //   that.btn = 1
                          // }
                          // else{
                          //   that.btn = 0
                          // }
                        },
                      });

                    

        },
        section1Fn:function(){

          var $slide     = $('#section1 .slide');
          var $window    = $(window);
          var $winW      = $(window).width();
          var $winH      = $(window).height();
          var $nextBtn   = $('#section1 .next-btn');
          var $prevBtn   = $('#section1 .prev-btn');
          var $pageBtn   = $('#section1 .page-btn');
          var $slideWrap = $('#section1 .slide-wrap');
          var $slideView = $('#section1 .slide-view'); //터치 선택자(Touch Selector)
          var $section1  = $('#section1');
          var cnt        = 0;
          var n          = $('#section1 .slide').length; //3
          var setId      = null;
          var setId2     = null;    //전체에 타이머가 돌아가기 때문에 전역변수로 사용하자.



              function resizeFn(){
                $winW    = $(window).width();
                $slide.css({width:$winW});
                $winH = $(window).height();

                if( window.orientation == 0 || window.orientation == 180  ){ //Portrait
                  $winH = $winH;
                }
                else if(window.orientation == 90  || window.orientation == -90 ){ //Landscape
                  if($winW > 980){
                    $winH = $winH;
                  }
                  else{
                    $winH = 600;
                  }
                 
                }
            
                $section1.css({width:$winW, height:$winH});
               
              }

              resizeFn();
              setTimeout( resizeFn, 100);  
              

              $window.resize(function(){ 
                setTimeout(resizeFn,100);     ///틈이 생기는걸 방지한다. 
              });

              window.addEventListener('orientationchange',function(){
                setTimeout(resizeFn,100); 
              });
              

              //메인슬라이드
              //1-1. 메인슬라이드함수 - 다음 슬라이드 함수 
              function mainNextSlideFn(){
                $slide.css({ zIndex:1 });
                //현재 첫번째 슬라이드(0) 이면 이전 슬라이드는 마지막 슬라이드(2)
                $slide.eq(cnt==0?2:cnt-1).css({ zIndex:2 }); // 이전 슬라이드 번호 cnt-1
                $slide.eq(cnt).css({ zIndex:3 }).stop().animate({opacity:0},0).animate({opacity:1},1000); // 현재 슬라이드 번호  cnt
                pageBtnColorEventFn();
              }

              //1-2. 메인슬라이드함수 - 이전 슬라이드 함수 
              function mainPrevSlideFn(){
                $slide.css({ zIndex:1 }).animate({opacity:1},0); // 초기화
                $slide.eq(cnt).css({ zIndex:2});
                
                $slide.eq(cnt==2?0:cnt+1).css({ zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1000);
                pageBtnColorEventFn();
              }

              //2-1. 다음 슬라이드 카운트 함수
              function nextSlidCountFn(){
                  cnt++;
                  if(cnt>2){
                    cnt=0;
                  }
                 
                  mainNextSlideFn(); //메인 다음 슬라이드 함수 호출
              }
              
              //2-2. 이전 슬라이드 카운트 함수
              function prevSlidCountFn(){
                  cnt--;
                  if(cnt<0){
                    cnt=2;
                  }
                  mainPrevSlideFn(); //메인 이전 슬라이드 함수 호출
              }
              
              //3-1. 다음 화살 버튼 클릭 이벤트
              $nextBtn.on({
                click:  function(){
                  puaseTimerFn();
                  if( !$slide.is(':animated')){
                    nextSlidCountFn(); //다음 슬라이드 카운트 함수 호출
                  }                  
                }
              });

              //3-2. 이전 화살 버튼 클릭 이벤트
              $prevBtn.on({
                click:  function(){
                  puaseTimerFn();
                  if( !$slide.is(':animated')){
                    prevSlidCountFn(); //이전 슬라이드 카운트 함수 호출
                  }
                }
              });


              //4-1 페이지 버튼 이벤트 : 해당 슬라이드에 버튼에 색상 변경
              //페이지 버튼 색상변경 이벤트 함수
              function pageBtnColorEventFn(){
                // var z = cnt;
                // if(z>n-1){z=0;}
                $pageBtn.removeClass('addPage');
                $pageBtn.eq(cnt>n-1?0:cnt).addClass('addPage'); //0 1 2 0 1 2
              }
              pageBtnColorEventFn(); //로딩시 페이지함수 실행

             //4-2 페이지 버튼 클릭 이벤트
              $pageBtn.each(function(idx){                  
                $(this).on({  //첫번째 슬라이드 호출
                  click:  function(){
                    puaseTimerFn();

                    if(cnt < idx){
                      cnt = idx;
                      mainNextSlideFn();
                    }
                    if( cnt > idx){
                      cnt = idx;
                      mainPrevSlideFn();
                    }
                  }
                });
              });


              //5 사용자 터치 스와이프
              var touchStart = 0;
              var touchEnd = 0;

              $slideView.on({
                mousedown: function(e){ //마우스가 내려갔을 때 스타트값
                  e.preventDefault();

                  puaseTimerFn();
                  touchStart = e.pageX; //e.clientX
                  
                },
                mouseup: function(e){
                  e.preventDefault();

                  puaseTimerFn();
                  touchEnd = e.pageX;
                 
                  touchSwipeFn();
                }
              });

              function touchSwipeFn(){

                console.log('start',touchStart);
                console.log('end',touchEnd)
                console.log('star-end', touchStart-touchEnd)
                  
                if( touchStart-touchEnd >0 ){
                  if( !$slide.is(':animated')){
                   nextSlidCountFn();
                    }
                }
                if(touchStart-touchEnd <0){
                  if( !$slide.is(':animated')){
                   prevSlidCountFn();
                    }
                }
              }

              //6. 자동 타이머 실행 4초 간격으로 타이머 반복 실행 
              function autoTimerFn(){
                setId = setInterval(nextSlidCountFn, 4000);
              }

              autoTimerFn();

              //7. 슬라이드에서 이벤트(터치, 클릭 이벤트) 발생 시 자동 타이머 일시 중지
              function puaseTimerFn(){
                var t = 0;
               
                clearInterval(setId);
                clearInterval(setId2); //초기화 중간에 5가 안됬을때 중지.
                //5초동안 아무 이벤트 없으면 다시 자동 타이머 실행
                setId2 = setInterval(function(){
                  t++;
                 
                  if(t >=5){
                    clearInterval(setId2);
                    clearInterval(setId);  //있어도 그만 없어도 그만 
                    nextSlidCountFn();
                    autoTimerFn();
                  }
                },1000);

              }

              //마우스 휠 이벤트
              // var delta = 0;

              // $slideWrap.on('mousewheel DOMMouseScroll' , function(e){
              //   e.preventDefault();

              //   if( e.originalEvent.wheelDelta){
              //     delta = e.originalEvent.wheelDelta;
              //   }
              //   else {
              //     delta = e.detail*-40;
              //   }
              //   if( delta < 0){
              //     puaseTimerFn();
              //     if(!$slide.is(':animated') ){
              //       nextSlidCountFn();
              //       if(cnt>n-1){
              //         $('html,body').stop().animate({scrollTop: $('#section2').offset().top},600);
              //       }
                   
              //     }
              //   }
              //   else{
              //     puaseTimerFn();
              //     if(!$slide.is(':animated')){
              //       prevSlidCountFn();
              //       if(cnt < 0){
              //         $('html,body').stop().animate({scrollTop: $('#section2').offset().top},600);
              //       }
                   
              //     }
              //   }
              // });


        },
        section2Fn:function(){
            
        },
        section3Fn:function(){
          var $prevBtn    = $('#section3 .prev-btn');
          var $nextBtn    = $('#section3 .next-btn');
          var $slideWrap  = $('#section3 .slide-wrap');
          var $slideView  = $('#section3 .slide-view');
          var cnt         = 0; //카운트 변수는 반드시 숫자로 지정
          var setId       = null; 
          var setId2      = null;
          var n           = $('#section3 .slide').length-(4+4)-1; //4개(0,1,2,3)
          var $slideW     = $('#section3 .slide').innerWidth();
          var $window     = $(window);

              //1.
              function responseFn(){
                $slideW  = $('#section3 .slide').innerWidth();
                mainSlideFn();
              }
              
              setTimeout(responseFn, 100);

              //2.
              $window.resize(function(){
                responseFn();
              });



              //1
              function mainSlideFn(){                
                $slideWrap.stop().animate({left:-$slideW*cnt},600,'easeInOutSine', function(){
                  if(cnt>n){cnt=0}
                  if(cnt<0){cnt=n}
                  $slideWrap.stop().animate({left:-$slideW*cnt},0);
                });
              }

              //2 
              function nextCountFn(){
                cnt++;
                mainSlideFn();
              }
              //2 
              function prevCountFn(){
                cnt--;
                mainSlideFn();
              }

              //3 
              $nextBtn.on({
                click:function(){   
                  timerFn();
                  if(!$slideWrap.is(':animated')){
                    nextCountFn();
                  }                  
                }
              });

              //3 
              $prevBtn.on({
                click:function(){  
                  timerFn();                              
                  if(!$slideWrap.is(':animated')){
                    prevCountFn();
                  }                  
                }
              });

              //4
              var start = 0;
              var end = 0;

              $slideView.on({
                mousedown:function(e){
                  e.preventDefault();
                  timerFn();

                  start = e.pageX;
                  console.log('s',start);

                },
                mouseup:function(e){
                  e.preventDefault();
                  timerFn();

                  end = e.pageX;
                  console.log('e',end);
                  touchSwipeFn();
                }
              });

              function touchSwipeFn(){

                console.log('s-e',start-end);
                if(start-end >0){
                  if(!$slideWrap.is(':animated')){
                           nextCountFn();
                    }   
                }
                if(start-end < 0){
                  if(!$slideWrap.is(':animated')){
                          prevCountFn();
                        }  
                }                
              }

             
              //5
              function autoPlay(){
                setId = setInterval(nextCountFn, 4000); 
              }
              autoPlay(); //로딩시 4초후에 4초간격으로 재생

           
         

            function timerFn(){
              var t = 0;    //지역변수. 지정한 곳에서만 사용가능 
              t = 0;
              clearInterval(setId);
              clearInterval(setId2);
              setId2 = setInterval(function(){
                t++;
                if( t>=1 ){
                  t = 0;
                  clearInterval(setId);
                  clearInterval(setId2);
                  nextCountFn();
                  autoPlay();
                }
              }, 4000);
            }
              
        },
        section4Fn:function(){
          var $section4 = $('#section4');   //객체변수 
          var $smallImg = $('.small-img');   //객체변수 
          var $largeImg= $('.large-img');   //객체변수 
          var x = 0;   //일반 변수 
          var y = 0;

          //마우스 무브(mousemove) 이벤트 
          //작은 이미지($smallImg)를 마우스 움직임에 의해서 
          //상하(마우스의 수직이동) : Y(대문자사용)좌표
          //좌우(마우스의 수평이동)  : X(대문자사용)좌표 
          //이벤트를 확인(좌표 clientX clinetY, pageX or pageY,screenY or screenX)
          // 좌표이동을 이용한 애니메이션 효과 

              //1. 선택자($smallImg) 마우스 무브(mousemove) 이벤트 
              //2. 타겟의 좌표를 가져와서 거기에서 움직임을 준다 
              $section4.on({
                mousemove:function(event){
                  x = event.clientX*0.03;
                  y = event.clientY*0.03;
                  // x = event.screenX*0.03;
                  // y = event.screenY*0.03;
                  // x = ($smallImg.offset().left-event.pageX)*.02;   //원래 이동하는 좌표가 굉장히 커서 뒤에 .02를 곱해줌
                  // y = ($smallImg.offset().top-event.pageY)*.02; //현재위치 좌표 
                  
                  // console.log('x:' , x);
                  // console.log('offset().left :' , $smallImg.offset().left);

                  // console.log('수평좌표 X : ' + event.clientX*0.01);  //이벤트를 확인(좌표 clientX clinetY, pageX or pageY,screenY or screenX)
                  // console.log('수직좌표 Y : ' + event.clientY*.01);

                  $smallImg.css({bottom: y+70 +'px',left: x + 'px'});  //제이쿼리는 px단위를 배경일때만 사용/js는 다 사용.
                  $largeImg.css({top: -y*1.2 +'px',left: -x*1.2 + 'px'});  //좌표값이-음수는 마우스 대는곳 반대방향 이동/양수면 같은 방향으로 이동.
                  // $smallImg.stop().animate({bottom:bottom,left:left},600);
                  // $smallImg.css({marginLeft: x , marginTop: y});
                }
              });



        },
        section5Fn:function(){
          ///자동 타이머 
          var $slideWrap  = $('#section5 .slide-wrap');
          var $slideW     = $('#section5 .slide').innerWidth();
          var $slideView = $('#section5 .slide-view');
          var cnt         = 0;
          var n           = $('#section5 .slide').length-8-1;
          var a           = 0;
          var setId       = null;
          var setId2      = null;

          
          //1.메인 슬라이드 함수 
         
          function mainSlideFn(){

            cnt>=2 ? a=-235 : a=0; 
         
            $slideWrap.stop().animate({left:-($slideW*cnt)+a},600,function(){
              if(cnt>n){
                cnt = 0
                a = 0; //마지막 슬라이드에서 초기화 0으로 안해주면 남아있음
                }  //앞으로만 가는것에 대한 조건//

                if(cnt<0) {
                  cnt=n
                  a=-235;   //4 3 2 //뒤로 가는 것 
              } 
              $slideWrap.stop().animate({left:(-$slideW*cnt)+a},0);
            });
          }
          //2. 카운트 증가 함수 
          function nextCountFn(){
            cnt++;
            mainSlideFn();
          }

          //2-2. 카운트 감소 함수 
          function prevCountFn(){
            cnt--;
            mainSlideFn();

          }
          //3.자동 슬라이드 함수 
          function autoPlay(){
            setId =setInterval(nextCountFn,4000);
          }
          // autoPlay();

          //4. 터치 슬라이드 함수 

          var s = 0;
          var end = 0;
          $slideView.on({
            mousedown:function(e){
              e.preventDefault();
              timerFn();
              s = e.pageX;

            },
            mouseup:function(e){
              e.preventDefault();
              timerFn();
              end = e.pageX;
              
              swipeFn();

            }
          });
          function swipeFn(){
            console.log('s',s);
            console.log('e',end);
            console.log('s-e',s-end);
        
            if( s-end > 0){
              if( !$slideWrap.is(':animated')){
                     
                     nextCountFn();
            }
          }
           else if( s-end < 0){
              if( !$slideWrap.is(':animated')){              
                prevCountFn();
            }
          }
        }
          //5. 정지상태인 슬라이드 다시 실행하는 타이머 함수 
          function timerFn(){
            var tcnt = 0;
            clearInterval(setId);
            clearInterval(setId2);
            setId = setInterval(function(){
              tcnt++;
              if(tcnt>=4){
                clearInterval(setId);
                clearInterval(setId);
                nextCountFn();  //다음 슬라이드 즉시 
                autoPlay(); //계속 진행 4초간격 
              }
            },1000);
          }

          
            
        },
        section6Fn:function(){
          var $ul = $(' #section6 .container > ul > li ul');
          var column0 = $(' #section6 .container > ul > li').eq(0);
          var column1 = $(' #section6 .container > ul > li').eq(1);
          var column2 = $(' #section6 .container > ul > li').eq(2);
          var column3 = $(' #section6 .container > ul > li').eq(3);

          var cnt1 = [0,0,0,0];
          var cnt2 = [0,0,0,0];
          var cnt3 = [0,0,0,0];
          var cnt4 = [0,0,0,0];   //누적을 위해 초기값 0
          var setId1 = [null,null,null,null];
          var setId2 = [null,null,null,null];
          var setId3 = [null,null,null,null];
          var setId4 = [null,null,null,null];;
          var timer = 5;
          var num1 = [];
          var num2 = [];
          var num3 = [];
          var num4 = [];  //배열 초기화
          var t = 0;


          //객체 요소 내에 data 속성을 가져오기
          // column0.find('.col').eq(0).data('number')
          // column0.find('.col').eq(1).data('number')
          // column0.find('.col').eq(2).data('number')
          // column0.find('.col').eq(3).data('number')
          
          column0.find('.col').each(function(idx){
            num1[idx] = $(this).data('number');
           
          });
          column1.find('.col').each(function(idx){
            num2[idx] = $(this).data('number');
            
          });
          column2.find('.col').each(function(idx){
            num3[idx] = $(this).data('number');
           
          });
          column3.find('.col').each(function(idx){
            num4[idx] = $(this).data('number');
            
          });
        

            //find는 자식요소 또는 자손요소만 검색가능/자기자신은 못찾는다
              // console.log(column0.find('ul').eq(0));
              // column0.find('ul').eq(0).animate({top:-65*0},100);                          
              // column1.find('ul').eq(0).stop().animate({top:-65*0},);


           ///페럴럭스
           $(window).scroll(function(){

            if($(window).scrollTop() >= $('#section5').offset().top+200  ){
              if(t==0){
                t=1;  //변수를 수정해서 다음에 조건 만족 못하게 변경.
               
                $('#section6 .container > ul').addClass('addCounter'); 

                setTimeout(function(){
                  formatFn();
                  setTimeout(countFn,500);
                },100);
                
              }         
            } 
            if($(window).scrollTop() === 0 ){
              t=0;
              cnt1 = [0,0,0,0];
              cnt2 = [0,0,0,0];
              cnt3 = [0,0,0,0];
              cnt4 = [0,0,0,0];
              setTimeout(formatFn,100); 
              $('#section6 .container > ul').removeClass('addCounter'); 
            }
           });
           

          //초기화 함수 
          function formatFn(){
            $ul.css({top:0});
          }
          
           setTimeout(formatFn,500);
              

          setTimeout(countFn,3000);
             
          
          function countFn(){
          ///1열의 4열 2530
          setId1.forEach(function(el,idx){
            setId1[idx] = setInterval(function(){
              cnt1[idx]++;
              if( cnt1[idx] > 65*num1[idx] ){
                clearInterval(setId1[idx]);
              }
              else{
                column0.find('ul').eq(idx).css({top:-cnt1[idx] }); 
              }    
            },timer);
          });
    
          //2열

          setId2.forEach(function(el,idx){
            setId2[idx] = setInterval(function(){
              cnt2[idx]++;
              if( cnt2[idx] > 65*num2[idx] ){
                clearInterval(setId2[idx]);
              }
              else{
                column1.find('ul').eq(idx).css({top:-cnt2[idx] }); 
              }    
            },timer);
          });
        
         

          //3열
          setId3.forEach(function(el,idx){
            setId3[idx] = setInterval(function(){
              cnt3[idx]++;
              if( cnt3[idx] > 65*num3[idx] ){
                clearInterval(setId3[idx]);
              }
              else{
                column2.find('ul').eq(idx).css({top:-cnt3[idx] }); 
              }    
            },timer);
          });
         

          ///4열

          setId4.forEach(function(el,idx){
            setId4[idx] = setInterval(function(){
              cnt4[idx]++;
              if( cnt4[idx] > 65*num4[idx] ){
                clearInterval(setId4[idx]);
              }
              else{
                column3.find('ul').eq(idx).css({top:-cnt4[idx] }); 
              }    
            },timer);
          });
        }
          
       
          // setId2 = setInterval(function(){
          //   cnt2+=2;
          //   if( cnt2 > 65*5 ){
          //     clearInterval(setId2);
          //   }
          //   else{
          //     column0.find('ul').eq(1).css({top:-cnt2}); 
          //   }    
          // },5);

          // setId3 = setInterval(function(){
          //   cnt3++;
          //   if( cnt3 > 65*3 ){
          //     clearInterval(setId3);
          //   }
          //   else{
          //     column0.find('ul').eq(2).css({top:-cnt3}); 
          //   }    
          // },5);

          // setId4 = setInterval(function(){
          //   cnt4++;
          //   if( cnt4 > 65*0 ){
          //     clearInterval(setId4);
          //   }
          //   else{
          //     column0.find('ul').eq(3).css({top:-cnt4}); 
          //   }    
          // },5);

           

            
        },
        section7Fn:function(){
          var $bg = $('#section7 .bg');
          var $Ll = $('#section7 li');
         
          $bg.stop().animate({opacity:0},600);
          $bg.eq(0).stop().animate({opacity:1},600);

          $Ll.each(function(idx){
            $(this).on({
              mouseenter:function(){
                $bg.stop().animate({opacity:0},600);
                $bg.eq(idx).stop().animate({opacity:1},500);
              },
              mouseleave:function(){
                $bg.stop().animate({opacity:0},500);
                $bg.eq(0).stop().animate({opacity:1},500);
              }
            })
          })

        },
        section8Fn:function(){

        },
        section9Fn:function(){

        },
        section10Fn:function(){

        },
        footerFn:function(){

        }
    } //객체 끝


    litho.init();

})(jQuery);