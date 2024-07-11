import React from 'react';
import ContactCard from './ContactCard';

const ContactUs = () => {
    return (
        <div className="max-w-3xl mx-auto p-4">
           <div className="text-center mb-12">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight">VNC Public School</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight">Gajpur Bazaar Road, Kauriram</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight">Gorakhpur, Uttar Pradesh, 273413.</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight">Phone: +917054858403</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-tight">Email: vncpublicgajpur@gmail.com</p>
                </div>


            <div className="flex flex-col md:flex-row md:justify-center gap-4">
                <ContactCard 
                    officeName="Principal's Office" 
                    phone="+917054858403" 
                    whatsapp="917054858403" 
                />
                <ContactCard 
                    officeName="Fee Office" 
                    phone="+91234567891" 
                    whatsapp="0987654321" 
                />
            </div>
        </div>
    );
};

export default ContactUs;
