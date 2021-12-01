import React from 'react';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
    return (
        <div>
             <h1 className="mt-5 text-primary">Contact Me</h1>
            <form style={{marginTop:'50px',paddingBottom:'10px'}} className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}} defaultValue="" placeholder="Name" {...register("user",{ required: true })} />
<br />
<input style={{width:'350px',marginTop:'10px',paddingBottom:'10px'}} defaultValue="" placeholder="Email" {...register("email", { required: true })} />
<br />
<input style={{width:'350px',marginTop:'10px',paddingBottom:'80px'}} {...register("comment")}
                placeholder="Message"
               
              />
              <br />
            
<input style={{width:'100px',marginTop:'10px',paddingBottom:'10px',paddingTop:'10px',backgroundColor:'orangeRed'}}  type="submit" 
/>

</form>
        </div>
    );
};

export default Contact;