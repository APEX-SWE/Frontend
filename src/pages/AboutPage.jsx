import React from "react";
import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <>
    <Navbar fontColor={"black"} hoverColor={"#DAE5FD2E"} padding={"px-5"} />

    <div className= "container">
      <div className= "content">

        <h3>Our mission</h3>

        <p> To empower young people in technology and entrepreneurship </p>


         <h3>About</h3>

         <p>Welcome to the About page of Young Tech Nexus! </p>

         <p> 

          Here at Young Tech Nexus, we're more than just a tech company; we're a community of innovators, dreamers, and creators. Our journey began with a simple belief: 
          that technology has the power to transform lives and shape the future.
          What sets us apart is our unwavering commitment to empowering the next generation of tech leaders. We're not just building products; we're nurturing talent, fostering creativity
          , and sparking the curiosity that drives innovation.
          In our nexus, you'll find a diverse blend of minds from all corners of the globe, united by a passion for pushing boundaries and solving challenges. Whether you're a seasoned coder,
          a budding entrepreneur, or simply curious about the possibilities of technology, you'll find a place here to learn, grow, and thrive.
          Join us as we embark on this exciting journey to redefine what's possible. Together, let's build a future where technology knows no limits, and where every idea has the power to change the world.
          Welcome to Young Tech Nexus where innovation meets inspiration, and the future is ours to create. </p>


      </div>



      <div className="content">

        <h3> Get To Know Us</h3>
        <p>What sparks your interest: the curiosity driving you to know more, or the sheer fascination of what you're exploring?</p>

        {/* <img src="" alt="">
          <img src="" alt=""></img> */}

          <h3>Our Organization</h3>

          <p>Our mission is simple yet profound: to turn the fascination for technology into tangible outcomes that shape our reality.
              our impact extends far beyond the digital realm. It's about empowering individuals, revolutionizing industries, and leaving a lasting imprint on society.
              Join us as we delve into the depths of curiosity, where every click, every line of code, and every spark of inspiration propels us
               forward on our quest for innovation.
               Welcome to the Young Tech Nexus - where ideas become impact and the future is ours to create.
               </p>

      </div>

      <div className="contentleadership">

        <h3>Leadership</h3>

        <div className="cards">
          <div className="card1">

            {/* <img src="" alt=""> */}
              <h3>val kraidy</h3>
              <p>qwe sdf df sdfg</p>
            
          </div>

          <div className="card2">

            {/* <img src="" alt=""> */}
              <h3>kraidy val</h3>
              <p>css wfwf f</p>
            
          </div>

          <div className="card3">

            {/* <img src="" alt=""> */}
              <h3>val k kraidy</h3>
              <p>effveee efef effef eve</p>
            
          </div>
        </div>

      </div>


      {/* <footer>
        
      </footer> */}

    </div>
    



    </>
  );
}
