import React ,{useState} from 'react'

export default function About() {
     
    // const initialstyle={
    //     color: 'white',
    //     backgroundColor: 'black'
    // }
    const[button_type,Setbutton_type]=useState('dark');

    const[mystyle,Setstyle]=useState({
                            color: 'black',
                            backgroundColor:'white'
                            });
    const[text,Settext]=useState('Enable dark mode')

    const handlelight=()=>{
          if(mystyle.color=='black'){
                         Setstyle({
                            color: 'white',
                            backgroundColor:'black',
                            border: '2px solid white'
                           })
                        Settext('Enable Light mode');
                        Setbutton_type('light');
            }else{
                        Setstyle({
                            color: 'black',
                            backgroundColor:'white'
                           })
                        Settext('Enable dark mode');
                         Setbutton_type('dark');
                        

            }
    }
    return (
   
    <div className="container" style={mystyle}>
        <h2 className="my-3">About us</h2>
      <div className="accordion " id="accordionExample">
      <div className="accordion-item ">
      <h2 className="accordion-header">
      <button className="accordion-button"style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
      </div>
      </div>
      <div className="accordion-item">
      <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
       </div>
       </div>
       </div>
       <div className="accordion-item">
       <h2 className="accordion-header">
       <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
       </button>
       </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
      </div>
      </div>
</div>
     <div className="container my-3">
         <button type="button" className={`btn btn-${button_type} md-3`} onClick={handlelight} >{text}</button>
     </div>
</div>
  )
}
