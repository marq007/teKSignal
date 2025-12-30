export default function Contact() {
    return (
    <section className="p-10 max-w-3xl mx-auto">
    <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
    
    
    <form name="contact" method="POST" data-netlify="true" className="space-y-4">
    <input type="hidden" name="form-name" value="contact" />
    <input className="input" type="text" name="name" placeholder="Your Name" required />
    <input className="input" type="email" name="email" placeholder="Email" required />
    <input className="input" type="text" name="phone" placeholder="Phone" />
    <textarea className="input" name="message" rows="4" placeholder="Message"></textarea>
    <button className="btn" type="submit">Send Message</button>
    </form>
    </section>
    )
    }