$(document).ready(function() {
   
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})

function firstQuestion(){
   
    $('.content').hide();
    Swal.fire({
        title: 'He luu cậu!',
        text: 'Tớ có điều này muốn hỏi cậu nhớ phải trả lời thật lòng nhaaa.',
        imageUrl: '../img/cr7.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("https://github.com/Aslicr7/ro3/blob/master/img/iput-bg.jpg")',
        imageAlt: 'Custom image',
        backdrop: 
        
        `
              rgba(0,0,123,0.4)
             
              center
              no-repeat
              
            `,
      }).then(function(){
        $('.content').show(200);
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('https://github.com/Aslicr7/ro3/blob/master/sound/nope.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio('https://github.com/Aslicr7/ro3/blob/master/sound/Swish1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 300;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n%10==0){
        switchButton();}
    else{
        moveButton();}
    n++;
});
$('#no').click(() => {
    //if (screen.width>=900)
        switchButton();
}

)

// generate text in input
function textGenerate() {
    var n = "";
    var text = " Vì a Rô đẹp trai vl :<<<<<<<";
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('https://github.com/Aslicr7/ro3/blob/master/sound/siuu1.mp3');
    
    
var audio1=new Audio('https://github.com/Aslicr7/ro3/blob/master/sound/siuu.mp3');
   
    setTimeout(() => {
        audio1.play();
      }, 2000)
    //audio.play();
   
   
   
    Swal.fire({
        title: 'Hãy nói lí do cậu chọn a Rô đi :vvvv',
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Whyyy'>",
        background: '#fff url("https://github.com/Aslicr7/ro3/blob/master/img/iput-bg.jpg")',
        
        // backdrop: 
        
        // `
        //       rgba(0,0,123,0.4)
        //       url("../img/ro2.gif")
        //       center
        //       no-repeat
              
        //     `,


        
       // showCancelButton: true,
        
        confirmButtonColor: '#3085d6',
       // cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
       // cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Gửi <3'
        
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
        showCancelButton: true,
        cancelButtonColor: '#d33',
        cancelButtonColor: '#f6cd61',

                confirmButtonText: 'Okiiiii lun <3',
                cancelButtonText: "Thôi ngại lém :<<",
                background: '#fff url("../img/iput-bg.jpg")',
                title: 'Tớ biết mà ^^ Yêu cậu 300.000',
                text: "Tối nay tớ qua đón cậu đi chơi nhaaaaaaaaa :v Còn giờ thì chờ gì nữa mà ko inbox cho tớ đi nàoooooo",
                confirmButtonColor: '#83d0c9',
                //onClose: () => {
                      }).then((result) => {
                        if (result.value) {
                    window.location = 'http://messenger.com';
                  }})
        
        }
    })
    // $(".swal2-modal").css('background-color', '#000');//Optional changes the color of the sweetalert 
    //     $(".swal2-container swal2-center swal2-backdrop-show").css('background-size', 'cover');
})
