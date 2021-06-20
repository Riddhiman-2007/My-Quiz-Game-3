class Security {

    constructor(){
        this.title = createElement('h1')
        

        this.access1 = createInput("Code1")
        this.access1.position(400,220);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(400,250);
        this.button1.style('background', 'lightgrey');    

        this.x = createElement('h2')
        this.x.style('color','blue')
        this.x.html( " Question : What is 2-4+1 !!")
        this.x.position(400,170)
        
        this.button2 = createButton('Check');
        this.button2.position(-400,-200);

        this.access3 = createInput("Code1")
        this.access3.position(-100,-400);
        this.button3 = createButton('Check');
        this.button3.position(-100,-430);
//add code for creating and positioning the third input box and button
        this.access4 = createInput("Code1")
        this.access4.position(-100,-400);
        this.button4 = createButton('Check');
        this.button4.position(-100,-430);
        
        this.access5 = createInput("Code1")
        this.access5.position(-100,-400);
        this.button5 = createButton('Check');
        this.button5.position(-100,-430);

        this.access6 = createInput("Code1")
        this.access6.position(-100,-400);
        this.button6 = createButton('Check');
        this.button6.position(-100,-430);

        this.access7 = createInput("Code1")
        this.access7.position(-100,-400);
        this.button7 = createButton('Check');
        this.button7.position(-100,-430);
    }

    display(){
        
        this.title.html(" Score :"+score)
        this.title.position(350, 50)
        this.title.style('color','red')
        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                background(bg3)
                this.title.style('color','red')
                this.button1.hide();
                this.access1.hide();
                this.x.hide();
                
                score = score+1;
        this.button2.position(400,200);
        this.button2.style('background', 'lightgrey');
        this.access2 = createInput("Code1")
        this.access2.position(400,170);
        this.access2.style('background', 'white'); 
        this.y = createElement('h2')
        this.y.style('color','yellow')
        this.y.html( " Question : What is the full form of RCB!! " )
        this.y.position(400,120)
        
        
       
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                background(bg4)
                
                this.button2.hide();
                this.access2.hide();
                this.y.hide();
                score = score+1;
               
        
        this.access3.position(400,170);
        this.access3.style('background', 'white');  

       
        this.button3.position(400,200);
        this.button3.style('background', 'lightgrey');
        this.z = createElement('h2')
        this.z.style('color','blue')
        this.z.html( " Type Anything  " )
        this.z.position(400,120)
        
        
            }
        });
//add code for what happens when the third button is pressed
        
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                background(bg5)
                this.button3.hide();
                this.access3.hide();
                this.z.hide();

                score = score+1;
     
                this.access4.position(400,170);
                this.access4.style('background', 'white');  
        
               
                this.button4.position(400,200);
                this.button4.style('background', 'lightgrey');

                this.a = createElement('h2')
                this.a.style('color','blue')
                this.a.html( " Question : What Is The Name of This Player " )
                this.a.position(400,120)
    }
});

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
        background(bg6)
        this.button4.hide();
        this.access4.hide();
        this.a.hide();

        score = score+1;

        this.access5.position(330,170);
        this.access5.style('background', 'white');  

       
        this.button5.position(330,200);
        this.button5.style('background', 'lightgrey');

        this.b = createElement('h2')
        this.b.style('color','yellow')
        this.b.html( " Question : What is the Highest Run Chase Done In Ipl Till Now " )
        this.b.position(330,120)
}
});

this.button5.mousePressed(() => {
    if(system.authenticate(accessCode5,this.access5.value())){
        this.button5.hide();
        this.access5.hide();
        this.b.hide();

        score = score+1;

        this.access6.position(330,170);
        this.access6.style('background', 'white');  

       
        this.button6.position(330,200);
        this.button6.style('background', 'lightgrey');

        this.c = createElement('h2')
        this.c.style('color','yellow')
        this.c.html( " Question : Which Team Has Won 5 Ipl Cups (full name of team) " )
        this.c.position(330,120)
}
});

this.button6.mousePressed(() => {
    if(system.authenticate(accessCode6,this.access6.value())){
        background(bg7)
        this.button6.hide();
        this.access6.hide();
        this.c.hide();

        score = score+1;

        this.access7.position(330,170);
        this.access7.style('background', 'white');  

       
        this.button7.position(330,200);
        this.button7.style('background', 'lightgrey');

        this.d = createElement('h2')
        this.d.style('color','yellow')
        this.d.html( " Question :  " )
        this.d.position(330,120)
}
});
    }
}