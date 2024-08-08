 import React from "react";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (

    //MISSION
    <>
    <Navbar fontColor={"black"} hoverColor={"#DAE5FD2E"} padding={"px-5"} />

    <div style={{paddingLeft:50,paddingRight:50,display:'flex'}}>
      <div style={{backgroundColor:'#F5F6FA',
      
      }}>

      <div style={{justifyContent:'center',textAlign:'center'}}>

        <h3 style={{fontSize:35,fontWeight:500,alignItems:'center',color:'#454545',margin:20}}>Our mission</h3>

        <p style={{fontSize:15,  marginBottom:20}}> To empower young people in technology and entrepreneurship </p>


         <h3 style={{
          fontSize:35,
          fontWeight:500,
          alignItems:'center',
          marginBottom:20,
          color:'#454545'

          }}>About</h3>

         <p style={{  color:'#454545'}}>Welcome to the About page of Young Tech Nexus! </p>

         <p style={{color:'#454545',textAlign:'left',paddingLeft:150,paddingRight:150,fontWeight:600}}> 

          Here at Young Tech Nexus, we're more than just a tech company; we're a community of innovators, dreamers, and creators. Our journey began with a simple belief: 
          that technology has the power to transform lives and shape the future. 

          <br/>
          

          What sets us apart is our unwavering commitment to empowering the next generation of tech leaders. We're not just building products; we're nurturing talent, fostering creativity
          , and sparking the curiosity that drives innovation.
           <br/>
             
          In our nexus, you'll find a diverse blend of minds from all corners of the globe, united by a passion for pushing boundaries and solving challenges. Whether you're a seasoned coder,
          a budding entrepreneur, or simply curious about the possibilities of technology, you'll find a place here to learn, grow, and thrive.
           <br/>
               <br/>
          Join us as we embark on this exciting journey to redefine what's possible. Together, let's build a future where technology knows no limits, and where every idea has the power to change the world.
           <br/>
               <br/>
          Welcome to Young Tech Nexus where innovation meets inspiration, and the future is ours to create. </p>


      </div>

      </div>


    </div>
{/* 
GET TO KNOW US */}


    <div style={{padding:50,display:'flex'}}>
        {/* <div style={{backgroundColor:'#F5F6FA',height:600}} >
          

        <h3 style={{textAlign:'center',fontSize:20,padding:30}}> Get To Know Us</h3>
        <p style={{textAlign:'center',padding:10}}>What sparks your interest: the curiosity driving you to know more, or the sheer fascination of what you're exploring?</p>

         <div style={{flexDirection:'row'}}>
      
            <div style={{position:'absolute',
             paddingLeft:600,paddingRight:300
            }}>

              <h3 style={{textAlign:'center',fontSize:20,padding:10}}>Our Organization</h3>

              <p style={{color:'#454545',justifyContent:'center',fontWeight:500}}
              
              
              >Our mission is simple yet profound: to turn the fascination for technology into tangible outcomes that shape our reality.
                  our impact extends far beyond the digital realm. It's about empowering individuals, revolutionizing industries, and leaving a lasting imprint on society.
                  Join us as we delve into the depths of curiosity, where every click, every line of code, and every spark of inspiration propels us
                  forward on our quest for innovation.
                  Welcome to the Young Tech Nexus - where ideas become impact and the future is ours to create.
              </p>
            
            </div>

             <div style={{justifyContent:'center',paddingLeft:100}}>
                <img
                  src="src/aboutphotos/image 21.png"
                  style={{height:140,margin:10}}
                  alt=""
                />

                <img
                  src="src/aboutphotos/image 22.png"
                  style={{height:200,padding:15}}
                  alt=""
                />

            </div>
          </div>
        </div> */}

        <h1>  Hi</h1>

      </div>

  

     {/* LEADERSHIP */}
   
       < div style={{paddingLeft:50,paddingRight:50}}>
        <div style={{
           flex:1,
           height:500,
         backgroundColor:'#F5F6FA'}}>
          <h2 style={{fontSize:30,textAlign:'center',fontWeight:'500',Bottom:50,top:30}}>Leadership</h2>

          <div style={{justifyContent:'center',flexDirection:'row',gap:60,
           display:'flex',
          margin:30}}>

            <div>
             <img src="src/aboutphotos/image1.png" alt=""/>

              <h3  style={{fontSize:30,fontWeight:'500',textAlign:'center'}}>John Doe</h3>

              <p style={{textAlign:'center'}}>Lorem ipsum dolor <br/>sit amet consectetur.</p>
            </div>


             <div>
             <img
             style={{justifyContent:'center'}}
             src="src/aboutphotos/image2.png" alt=""/>

               <h3  style={{fontSize:30,fontWeight:'500',textAlign:'center'}}>John Doe</h3>

              <p style={{textAlign:'center'}}>Lorem ipsum dolor <br/> sit amet consectetur.</p>
            </div>

             <div>
             <img src="src/aboutphotos/image3.png" alt=""/>

                <h3  style={{fontSize:30,fontWeight:'500',textAlign:'center'}}>John Doe</h3>

              <p style={{textAlign:'center'}}>Lorem ipsum dolor <br/> sit amet consectetur.</p>
            </div>


          </div>

        </div>

        </div>






    
    



    </>
  );
}
