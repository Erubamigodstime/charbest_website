
const Contact = () => {
  return (
    <div className='contact'>
        <form action="">
            <section className="contact_section">
                <div className="form_input">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Jane Smith"/>
                </div>
                <div className="form_input">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Jane@gerudenis.com"/>
                </div>
            </section>
            <section className="form_input">
                <label htmlFor="textArea"> Message</label>
                <textarea id="textArea" name="textArea" cols="30" rows="7" placeholder="Your Message..."></textarea>
                
            </section>
            <button> Submit</button>      

        </form>
      
    </div>
  )
}

export default Contact
